const serviceRoot = {
  auth: "/account",
  user: "/account",
  products: "/products",
};

export const apiRoutes = {
  auth: {
    signup: `${serviceRoot.auth}/signup`,
    login: `${serviceRoot.auth}/login`,
    sendOtp: `${serviceRoot.auth}/send_otp`,
    verifyOtp: `${serviceRoot.auth}/verify_otp`,
  },
};

export const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  otp: "/otp",
  registerSuccess: "/registerSuccess",
  resetOtp: "/resetOtp",
  resetPassword: "/resetPassword",
  resetPasswordEmail: "/resetPasswordEmail",
  resetSuccess: "/resetSuccess",
};
