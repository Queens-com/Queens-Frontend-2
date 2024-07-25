import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getSession, signIn, signOut } from "next-auth/react";
import { apiRoutes, routes } from "@/config/routes";
import { Session } from "next-auth";

import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { constants } from "@/config/constants";
import { snackbar } from "@/components/Toaster";
import { User } from "@/types";

const {
  API: { baseURL },
  CONFIG_TEXTS,
} = constants;
export const cn = (...args: ClassValue[]) => twMerge(clsx(args));

export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
};

export const logoutUser = async (url?: string) => {
  try {
    const session = await getSession();
    const accessToken = session?.accessToken;
    const c: AxiosRequestConfig = accessToken
      ? {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      : {};
    const handleSignOut = async () => {
      // await axios.post(`${baseURL}${apiRoutes.auth.logout}`, {}, c);
      await signOut({ callbackUrl: routes.login, redirect: false });
      return window.open(url || routes.login, "_self");
    };
    window.sessionStorage.clear();

    if (navigator?.locks) {
      await navigator.locks.request("logout_resource", async () => {
        await handleSignOut();
      });
    } else {
      await handleSignOut();
    }
  } catch (error) {
    const x = error as AxiosError<{
      message: string;
      error: { message: string }[];
    }>;
    snackbar.error({
      description: x.response?.data.message || CONFIG_TEXTS.somethingWentWrong,
      message: CONFIG_TEXTS.error,
    });
  }
};

export function formatUrl(ref: string, url?: string) {
  if (url) {
    const [brand, category] = url.split("/");
    return `${brand}/${ref}?cat=${category}`;
  }
}

export const getInitials = (user: User): string => {
  const { first_name, last_name } = user;
  const firstInitial = first_name.charAt(0).toUpperCase();
  const lastInitial = last_name.charAt(0).toUpperCase();
  return `${firstInitial}${lastInitial}`;
};
