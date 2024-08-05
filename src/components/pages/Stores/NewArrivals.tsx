"use client";
import React from "react";
import Link from "next/link";
import { apiRoutes, routes } from "@/config/routes";
import Product from "../Stores/Product";
import { useQuery } from "@tanstack/react-query";
import queens from "@/config/queens";
import { Skeleton } from "@/components/ui/skeleton";
import { AxiosError } from "axios";
import { ErrorResponse, ProductArrival } from "@/types";
import { formatUrl } from "@/lib/utils";
import Errors from "../Errors/ProductsError";

const { products } = apiRoutes;
const NewArrivals: React.FC = () => {
  const { data, error, isError, isFetching, isLoading } = useQuery({
    queryKey: ["arrivals"],
    queryFn: async () => {
      const { data } = await queens.get(products.discover);
      return data?.data as ProductArrival[];
    },
  });

  // const products =

  if (isLoading || isFetching) {
    return (
      <main className="md:px-24 space-y-8 p-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold md:text-3xl text-xl">New Arrivals</h2>
          <Link
            href={routes.stores.index}
            className="font-semibold underline md:text-base text-xs"
          >
            See more
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 w-full">
          <Skeleton className="w-full max-w-[20rem] h-[12rem]" />
          <Skeleton className="w-full max-w-[20rem] h-[12rem]" />
          <Skeleton className="w-full max-w-[20rem] h-[12rem]" />
          <Skeleton className="w-full max-w-[20rem] h-[12rem]" />
        </div>
      </main>
    );
  }

  if ((error as AxiosError) || isError) {
    const axiosError = error as AxiosError<ErrorResponse>;
    return (
      <main className="md:px-24 space-y-8 p-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold md:text-3xl text-xl">New Arrivals</h2>
          <Link
            href={routes.stores.index}
            className="font-semibold underline md:text-base text-xs"
          >
            See more
          </Link>
        </div>
        <div className="text-center text-red-400 h-[10rem]">
          <Errors
            message={
              axiosError &&
              typeof axiosError?.response?.data?.detail === "string"
                ? axiosError?.response?.data?.detail
                : typeof axiosError?.response?.data?.detail === "object"
                ? axiosError?.response?.data?.detail.err
                : "Network error"
            }
          />
        </div>
      </main>
    );
  }

  return (
    <div className="md:px-24 space-y-8 p-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold md:text-3xl text-xl">New Arrivals</h2>
        <Link
          href={routes.stores.index}
          className="font-semibold underline md:text-base text-xs"
        >
          See more
        </Link>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-3  justify-between 2xl:grid-cols-4 gap-5 w-full ">
        {data && data?.length
          ? data.slice(0, 4).map((product) => {
              const formatLink = formatUrl(product.reference, product.store);
              return (
                <Product
                  key={product.reference}
                  product={product}
                  link={formatLink}
                  isNew={true}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default NewArrivals;
