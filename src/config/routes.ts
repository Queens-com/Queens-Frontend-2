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
  user: {
    activate: `${serviceRoot.auth}/activate`,
    profile: `${serviceRoot.auth}/user_profile`,
  },
};

const ROUTE_PREFIX = {
  stores: "/stores",
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
  stores: {
    index: ROUTE_PREFIX.stores,
    dior: `${ROUTE_PREFIX.stores}/dior`,
    gucci: `${ROUTE_PREFIX.stores}/gucci`,
    louis_vitton: `${ROUTE_PREFIX.stores}/louis_vitton`,
    versace: `${ROUTE_PREFIX.stores}/versace`,
    cartier: `${ROUTE_PREFIX.stores}/cartier`,
    hermes: `${ROUTE_PREFIX.stores}/hermes`,
  },
};
