"use client";
import React from "react";
import { snackbar } from "@/components/Toaster";
import queens from "@/config/queens";
import { apiRoutes, routes } from "@/config/routes";
import { CartType } from "@/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const { cart } = apiRoutes;

export const useAddCart = async (
  ref: string,
  cat: string,
  quantity: number
) => {
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

export const useGetCart = () => {
  const { data, error, isError, isFetching, isLoading, refetch } = useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const { data } = await queens.get(cart.get);
      return data.cart_content as CartType[];
    },
  });

  return { data, error, isError, isFetching, isLoading, refetch };
};
export const useDeleteCart = async () => {
  try {
    await queens.delete(cart.clear);
    snackbar({
      description: "Cart is empty",
      message: "Cart Cleared",
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const useUpdateCart = async (ref: string, quantity: number) => {
  try {
    const body = {
      product_reference: ref,
      quantity: quantity,
    };
    await queens.patch(cart.update, body);
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const useDeleteItem = async (ref: string) => {
  try {
    const body = {
      product_reference: ref,
      quantity: 0,
    };
    await queens.patch(cart.update, body);
    snackbar({
      description: "Item has been removed from cart",
      message: "Item Removed",
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};
