"use client";
import React, { useState } from "react";
import Filter from "../Filter";
import { constants } from "@/config/constants";
import { apiRoutes, routes } from "@/config/routes";
import { useQuery } from "@tanstack/react-query";
import queens from "@/config/queens";
import { Skeleton } from "@/components/ui/skeleton";
import { AxiosError } from "axios";
import { ErrorResponse, ProductArrival } from "@/types";
import Product from "../Product";
import { formatUrl } from "@/lib/utils";
import Errors from "../../Errors/ProductsError";

// const STORE_FILTERS = [
//   {
//     name: "price",
//     options: [],
//     disabled: false,
//   },
//   {
//     name: "collections",
//     options: [{ name: "", onPress: () => "" }],
//     disabled: false,
//   },
//   {
//     name: "insert ",
//     options: [],
//     disabled: false,
//   },
//   {
//     name: "insert color",
//     options: [],
//     disabled: false,
//   },
//   {
//     name: "metal",
//     options: [],
//     disabled: false,
//   },
//   {
//     name: "metal color",
//     options: [],
//     disabled: false,
//   },
//   {
//     name: "category",
//     options: [],
//     disabled: false,
//   },
//   {
//     name: "size",
//     options: [],
//     disabled: false,
//   },
// ];

const { products } = apiRoutes;

const category = [
  {
    name: "earrings",
    link: products.gucci.fine_earrings,
  },
  {
    name: "necklaces",
    link: products.gucci.fine_necklaces,
  },
  {
    name: "braceletes",
    link: products.gucci.fine_bracelets,
  },
];

export default function Gucci() {
  const [active, setActive] = useState(category[0]);
  const { data, error, isError, isFetching, isLoading, refetch } = useQuery({
    queryKey: ["gucciProducts", active.link],
    queryFn: async () => {
      const { data } = await queens.get(active.link);
      return data as ProductArrival[];
    },
  });

  const axiosError = error as AxiosError<ErrorResponse>;

  const STORE_FILTERS = [
    {
      name: "price",
      options: [],
      disabled: false,
    },
    {
      name: "collections",
      options: [],
      disabled: false,
    },
    {
      name: "insert ",
      options: [],
      disabled: false,
    },
    {
      name: "insert color",
      options: [],
      disabled: false,
    },
    {
      name: "metal",
      options: [],
      disabled: false,
    },
    {
      name: "metal color",
      options: [],
      disabled: false,
    },
    {
      name: "category",
      options: [
        { name: `fine ${active.name}`, onPress: () => "" },
        { name: `silver ${active.name}`, onPress: () => "" },
        { name: `fashion ${active.name}`, onPress: () => "" },
      ],
      disabled: false,
    },
    {
      name: "size",
      options: [],
      disabled: false,
    },
  ];

  const handleChange = (cat: { name: string; link: string }) => {
    setActive(cat);
  };

  return (
    <main>
      <header className="bg-[#F5F5F5] flex items-center justify-center gap-16 py-2">
        <p className="text-5xl font-bold">Gucci</p>
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
          <Filter
            cat={active.name}
            store="Gucci"
            store_filter={STORE_FILTERS}
          />
        </section>
        <section className="md:w-2/3 md:mt-10 lg:w-4/5 grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 w-full relative">
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
            <div className="absolute top-4 left-[30%] translate-x-1/2">
              <Errors
                message={
                  axiosError && axiosError?.response?.data?.detail
                    ? axiosError?.response?.data?.detail
                    : "Network error"
                }
              />
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
