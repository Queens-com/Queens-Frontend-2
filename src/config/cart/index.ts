"use client";
import { snackbar } from "@/components/Toaster";
import queens from "@/config/queens";
import { apiRoutes, routes } from "@/config/routes";

const { cart } = apiRoutes;
export const addCart = async (ref: string, cat: string, quantity: number) => {
  try {
    const body = {
      product_reference: ref,
      product_category: cat,
      quantity: quantity,
    };
    await queens.post(cart.add, body);
    snackbar({
      description: "Product has been added to cart",
      message: "Added to cart",
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};
