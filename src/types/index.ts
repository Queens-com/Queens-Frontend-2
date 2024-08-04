import { AxiosResponse } from "axios";

export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
}

type SimpleErrorDetail = {
  detail: string;
};

type NestedErrorDetail = {
  detail: {
    err: string;
  };
};

export type ErrorResponse = SimpleErrorDetail | NestedErrorDetail;


export type Price = {
  currency: string;
  original_price: string;
  new_price: string;
};

export type ProductType = {
  id: number;
  name: string;
  details: string;
  reference: string;
  description: string;
  price: Price;
  images: string[];
  category: string;
};

export interface ProductArrival {
  currency?: string;
  image: string;
  name: string;
  price?: string;
  reference: string;
  store?: string;
  category?: string;
}

export interface CartType {
  amount: string;
  currency: string;
  price: string;
  product_category: string;
  product_name: string;
  product_reference: string;
  quantity: number;
  image: string;
}
export interface GeneratedUrl {
  url?: string;
}

export interface User {
  email: string;
  phone: string | null;
  country_code: string | null;
  first_name: string;
  last_name: string;
  middle_name: string | null;
  country: string | null;
  profile_photo: string | null;
}
