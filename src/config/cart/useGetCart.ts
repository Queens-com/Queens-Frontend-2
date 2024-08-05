"use client";
import queens from "@/config/queens";
import { CartType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { apiRoutes } from "../routes";
import { useSession } from "next-auth/react";

const { cart } = apiRoutes;

export const useGetCart = () => {
  const { data: user } = useSession();
  if (!user || user?.error) {
    const data = "";
    const error = "";
    const isError = true;
    return { data, error, isError };
  }

  const { data, error, isError, isFetching, isLoading, refetch } = useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const { data } = await queens.get(cart.get);
      return data.cart_content as CartType[];
    },
  });

  return { data, error, isError, isFetching, isLoading, refetch };
};
