import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { HttpStatusCode } from "@/types";
import { snackbar } from "@/components/Toaster";
import { routes } from "@/config/routes";
import { constants } from "../constants";

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
  (config) => {
    const token = Cookies.get("q_tok");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
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
    const x = error as AxiosError<{
      detail: string;
    }>;

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
          description: data.detail,
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
          description: data.detail || "No permission to perform this action",
          message: "You do not have permission to perform this action",
        });
        return Promise.reject(error);
      }
    }

    snackbar.error({
      description: x.response?.data.detail || CONFIG_TEXTS.somethingWentWrong,
      message: CONFIG_TEXTS.error,
    });

    return Promise.reject(error);
  }
);

export default queens;
