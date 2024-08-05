const serviceRoot = {
  auth: "/account",
  user: "/account",
  products: "/products",
  cart: "/cart",
};

export const apiRoutes = {
  auth: {
    signup: `${serviceRoot.auth}/signup`,
    login: `${serviceRoot.auth}/login`,
    sendOtp: `${serviceRoot.auth}/send_otp`,
    verifyOtp: `${serviceRoot.auth}/verify_otp`,
    changePassword: `${serviceRoot.auth}/change_password`,
  },
  user: {
    activate: `${serviceRoot.auth}/activate`,
    profile: `${serviceRoot.auth}/user_profile`,
  },
  products: {
    discover: `${serviceRoot.products}/discover`,
    search: `${serviceRoot.products}/search`,
    dior: {
      earrings: `${serviceRoot.products}/dior/earrings`,
      necklaces: `${serviceRoot.products}/dior/necklaces`,
      bracelets: `${serviceRoot.products}/dior/bracelets`,
    },
    gucci: {
      fine_earrings: `${serviceRoot.products}/gucci/fine-earrings`,
      fashion_earrings: `${serviceRoot.products}/gucci/fashion-earrings`,
      silver_earrings: `${serviceRoot.products}/gucci/silver-earrings`,
      fine_bracelets: `${serviceRoot.products}/gucci/fine-bracelets`,
      fashion_bracelets: `${serviceRoot.products}/gucci/fashion-bracelets`,
      silver_bracelets: `${serviceRoot.products}/gucci/silver-bracelets`,
      fine_necklaces: `${serviceRoot.products}/gucci/fine-necklaces`,
      fashion_necklaces: `${serviceRoot.products}/gucci/fashion-necklaces`,
      silver_necklaces: `${serviceRoot.products}/gucci/silver-necklaces`,
    },
    lv: {
      earrings: `${serviceRoot.products}/louis-vuitton/earrings`,
      necklaces: `${serviceRoot.products}/louis-vuitton/necklaces`,
      bracelets: `${serviceRoot.products}/louis-vuitton/bracelets`,
    },
  },
  cart: {
    add: `${serviceRoot.cart}/add_product`,
    get: `${serviceRoot.cart}/cart_content`,
    clear: `${serviceRoot.cart}/clear_cart`,
    update: `${serviceRoot.cart}/update_product_quantity`,
  },
  upload: "/upload-profile-photo",
};

const ROUTE_PREFIX = {
  stores: "/stores",
  cart: "/cart",
};
export const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  otp: "/otp",
  profile: "/profile",
  cart: {
    index: ROUTE_PREFIX.cart,
    customer: `${ROUTE_PREFIX.cart}/customer`,
  },
  registerSuccess: "/registerSuccess",
  resetOtp: "/resetOtp",
  resetPassword: "/resetPassword",
  resetPasswordEmail: "/resetPasswordEmail",
  resetSuccess: "/resetSuccess",
  stores: {
    index: ROUTE_PREFIX.stores,
    dior: `${ROUTE_PREFIX.stores}/dior`,
    gucci: `${ROUTE_PREFIX.stores}/gucci`,
    louis_vitton: `${ROUTE_PREFIX.stores}/louis_vuitton`,
    versace: `${ROUTE_PREFIX.stores}/versace`,
    cartier: `${ROUTE_PREFIX.stores}/cartier`,
    hermes: `${ROUTE_PREFIX.stores}/hermes`,
  },
};

export const protectedPages: string[] = [
  routes.cart.index,
  routes.profile,
  routes.stores.index,
];

export const unprotectedPages = [routes.login, routes.register];
