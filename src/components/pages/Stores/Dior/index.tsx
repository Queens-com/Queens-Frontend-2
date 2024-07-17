"use client";
import React, { useState } from "react";
import Filter from "../Filter";
import { constants } from "@/config/constants";
import { apiRoutes, routes } from "@/config/routes";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import queens from "@/config/queens";
import { Skeleton } from "@/components/ui/skeleton";
import { AxiosError } from "axios";
import { ErrorResponse, ProductArrival } from "@/types";

import { CiShoppingCart } from "react-icons/ci";
import Image from "next/image";
import Product from "../Product";
import { formatUrl } from "@/lib/utils";

const { products } = apiRoutes;

const { STORE_FILTERS } = constants;
const category = [
  {
    name: "earrings",
    link: products.dior.earrings,
  },
  {
    name: "necklaces",
    link: products.dior.necklace,
  },
  {
    name: "braceletes",
    link: products.dior.bracelets,
  },
];

export const Products = [
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
];

export default function Dior() {
  const queryClient = useQueryClient();
  const [active, setActive] = useState(category[0]);
  const { data, error, isError, isFetching, isLoading, refetch } = useQuery({
    queryKey: ["arrivals", active.link],
    queryFn: async () => {
      const { data } = await queens.get(active.link);
      return data as ProductArrival[];
    },
  });
  const axiosError = error as AxiosError<ErrorResponse>;

  console.log(data, error);

  const handleChange = (cat: { name: string; link: string }) => {
    setActive(cat);
  };

  return (
    <main>
      <header className="bg-[#F5F5F5] flex items-center justify-center gap-16 py-2">
        <p className="text-5xl font-bold">Dior</p>
        <div className=" gap-8 hidden sm:flex text-sm">
          {category.map((cat, i) => {
            return (
              <p
                key={cat.name}
                onClick={() => handleChange(cat)}
                className={`capitalize hover:border-b-4 hover:opacity-50 hover:border-b-black pb-2 cursor-pointer ${
                  active.name === cat.name && "border-b-black border-b-4"
                }`}
              >
                {cat.name}
              </p>
            );
          })}
        </div>
      </header>
      <div className="flex gap-6 justify-around p-3 lg:px-14 md:px-10">
        <section
          className={`md:w-1/4 lg:w-1/5 xl:w-1/6 w-full  ${
            true ? "hidden md:block " : "block"
          }`}
        >
          <Filter cat={active.name} store="dior" />
        </section>
        <section className="md:w-2/3 md:mt-10 lg:w-4/5 grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 w-full">
          {isLoading || isFetching ? (
            Array.from({ length: 12 }).map((_, i) => {
              return (
                <Skeleton key={i} className="w-full max-w-[20rem] h-[12rem]" />
              );
            })
          ) : data && data?.length ? (
            data.map((product) => {
              const formatLink = formatUrl(product.reference, product.category);
              return (
                <Product
                  key={product.reference}
                  link={formatLink}
                  product={product}
                />
              );
            })
          ) : (
            <div className="text-center text-red-400 h-[10rem]">
              <p>
                {axiosError && axiosError?.response?.data?.detail
                  ? axiosError?.response?.data?.detail
                  : "Network error"}
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
