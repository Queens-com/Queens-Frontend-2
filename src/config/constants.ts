const API = {
  baseURL: "",
  timeout: 60000,
};

const CONFIG_TEXTS = {
  aborted: "ECONNABORTED",
  embarassing: "Oops!. This is embarassing.",
  error: "An error occurred",
  networkError: "Network Error",
  noNetwork: "Please check your internet connection and try again",
  refreshError: "Error refreshing access token",
  requestTimeout: "Request timed out",
  somethingWentWrong:
    "Something went wrong from our end. You can report this error to us or try again later.",
  validationError: "Validation error",
};
const ENVIRONMENT = {
  development: process.env.NEXT_PUBLIC_ENVIRONMENT === "development",
  production: process.env.NEXT_PUBLIC_ENVIRONMENT === "production",
  staging: process.env.NEXT_PUBLIC_ENVIRONMENT === "staging",
};

export const constants = {
  API,
  ENVIRONMENT,
  CONFIG_TEXTS,
};
