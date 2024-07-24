import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { ErrorResponse, HttpStatusCode } from "@/types";
import { snackbar } from "@/components/Toaster";
import { routes } from "@/config/routes";
import { constants } from "../constants";
import { getSession } from "next-auth/react";

const {
  API: { baseURL, timeout },
  CONFIG_TEXTS,
  ENVIRONMENT,
} = constants;

const queens = axios.create({
  baseURL,
  timeout,
  ...(ENVIRONMENT.production && { withCredentials: true }),
});

queens.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    // const token = Cookies.get("q_tok");

    if (session?.accessToken) {
      config.headers.Authorization = `Bearer ${session?.accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

queens.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const x = error as AxiosError<ErrorResponse>;

    if (
      x.code === CONFIG_TEXTS.aborted ||
      x.message === CONFIG_TEXTS.networkError
    ) {
      snackbar.error({
        description: CONFIG_TEXTS.noNetwork,
        message: CONFIG_TEXTS.requestTimeout,
      });
      return Promise.reject(error);
    }

    if (x.response) {
      const { status, data } = x.response;

      if (status === HttpStatusCode.BAD_REQUEST && data.detail) {
        snackbar.error({
          description:
            typeof data.detail === "string" ? data.detail : data.detail.err,
          message: "Bad Request",
        });

        return Promise.reject(error);
      }

      if (status === HttpStatusCode.PAYMENT_REQUIRED) {
        snackbar.error({
          description: "You have insufficient funds to perform this action",
          message: "Payment Required",
        });

        return Promise.reject(error);
      }

      if (status >= HttpStatusCode.INTERNAL_SERVER_ERROR) {
        snackbar.error({
          description: CONFIG_TEXTS.somethingWentWrong,
          message: "An error occurred",
        });
        return Promise.reject(error);
      }

      if (status === HttpStatusCode.UNAUTHORIZED) {
        snackbar({
          description: "You need to login to perform this action",
          message: "Session Expired",
        });

        if (typeof window !== "undefined") {
          try {
            window.location.href = `${routes.login}?callbackUrl=${window.location.href}`;
          } catch (e) {}
        }
        return Promise.reject(error);
      }

      if (status === HttpStatusCode.FORBIDDEN) {
        snackbar.error({
          description:
            typeof data.detail === "string"
              ? data.detail
              : data.detail.err || "No permission to perform this action",
          message: "You do not have permission to perform this action",
        });
        return Promise.reject(error);
      }
    }

    snackbar.error({
      description:
        typeof x.response?.data.detail === "string"
          ? x.response?.data.detail
          : x.response?.data.detail.err || CONFIG_TEXTS.somethingWentWrong,
      message: CONFIG_TEXTS.error,
    });

    return Promise.reject(error);
  }
);

export default queens;
