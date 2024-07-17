"use client";
import React from "react";
import SinglePages from "../SinglePage";
import Link from "next/link";
import { useSearchParams, useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import queens from "@/config/queens";
import { apiRoutes, routes } from "@/config/routes";
import { Skeleton } from "@/components/ui/skeleton";
import { AxiosError } from "axios";
import { ErrorResponse, ProductType } from "@/types";
import Errors from "../../Errors/ProductsError";

type Category = "earrings" | "necklaces" | "bracelets";
const { products } = apiRoutes;

export default function SinglePage() {
  const searchParams = useSearchParams();
  const params = useParams();
  const cat = searchParams.get("cat") as Category;
  const id = params?.productId;
  const { data, error, isError, isFetching, isLoading } = useQuery({
    queryKey: ["singleLV", id, cat],
    queryFn: async () => {
      const { data } = await queens.get(`${products.lv[`${cat}`]}/${id}`);
      return data as ProductType;
    },
  });

  console.log(data, error, cat);

  if (isLoading || isFetching) {
    return (
      <main className="p-3 lg:px-14 md:px-10 mt-2 mb-10 w-full">
        <div className="h-screen w-full flex md:flex-row flex-col items-start gap-3 ">
          <Skeleton className="w-full md:w-1/2 h-full" />
          <div className=" w-full md:w-1/2 space-y-2">
            <Skeleton className="w-full   h-[10rem]" />
            <Skeleton className="w-full   h-[10rem]" />
            <Skeleton className="w-full   h-[10rem]" />
          </div>
        </div>
      </main>
    );
  }

  if ((error as AxiosError) || isError) {
    const axiosError = error as AxiosError<ErrorResponse>;
    return (
      <main className="p-3 lg:px-14 md:px-10 mt-2 mb-10 md:h-[30rem] h-[20rem]">
        <Errors
          message={
            axiosError && axiosError?.response?.data?.detail
              ? axiosError?.response?.data?.detail
              : "Network error"
          }
        />
        {/* <div className="text-center text-red-400 h-[10rem]">
          <p>
            {axiosError && axiosError?.response?.data?.detail
              ? axiosError?.response?.data?.detail
              : "Network error"}
          </p>
        </div> */}
      </main>
    );
  }
  return (
    <main className="p-3 lg:px-14 md:px-10 mt-2 mb-10 ">
      <header className="sm:flex hidden gap-1 items-center capitalize text-sm mb-8">
        <Link href={routes.stores.index}>Stores /</Link>
        <Link href={routes.stores.louis_vitton}>louis-vuitton /</Link>
        <Link href={"#"}>{data?.name}</Link>
      </header>
      {data ? <SinglePages product={data} /> : null}
    </main>
  );
}
