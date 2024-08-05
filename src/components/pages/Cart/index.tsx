"use client";
import React from "react";
import YourCart from "./YourCart";
import OrderSummary from "./OrderSummary";
import { useQuery } from "@tanstack/react-query";
import queens from "@/config/queens";
import { apiRoutes, routes } from "@/config/routes";
import { CartType } from "@/types";
import EmptyCart from "./EmptyCart";
import { Skeleton } from "@/components/ui/skeleton";

export default function Cart() {
  const { cart } = apiRoutes;
  const { data, error, isError, isFetching, isLoading, refetch } = useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const { data } = await queens.get(cart.get);
      return data.cart_content as CartType[];
    },
  });

  // if (isFetching || isLoading) {
  //   return (
  //     <main className="p-3 lg:px-14 md:px-10 mt-2 mb-10 w-full">
  //       <div className="h-screen w-full flex md:flex-row flex-col items-start gap-3 ">
  //         <div className=" w-full p-2 border md:w-1/2 space-y-2">
  //           <Skeleton className="w-full   h-[10rem]" />
  //           <Skeleton className="w-full   h-[10rem]" />
  //           <Skeleton className="w-full   h-[10rem]" />
  //         </div>
  //         <div className=" w-full p-2 border md:w-1/2 space-y-2">
  //           <Skeleton className="w-full   h-[10rem]" />
  //           <Skeleton className="w-full   h-[10rem]" />
  //           <Skeleton className="w-full   h-[10rem]" />
  //         </div>
  //       </div>
  //     </main>
  //   );
  // }

  if (error || isError) {
    return (
      <main className="p-3 lg:px-14 md:px-10">
        <header className="flex justify-between items-center mb-10">
          <div>
            <p className="font-bold md:text-3xl text-xl">Your Cart</p>
            <p className="md:text-sm text-xs text-gray-600">
              Your Cart / Contact Information
            </p>
          </div>
          <p className="text-sm text-gray-600">{data?.length ?? 0} items</p>
        </header>
        <EmptyCart />;
      </main>
    );
  }

  return (
    <main className="p-3 lg:px-14 md:px-10">
      <header className="flex justify-between items-center mb-10">
        <div>
          <p className="font-bold md:text-3xl text-xl">Your Cart</p>
          <p className="md:text-sm text-xs text-gray-600">
            Your Cart / Contact Information
          </p>
        </div>
        <p className="text-sm text-gray-600">{data?.length ?? 0} items</p>
      </header>
      {data && data?.length ? (
        <div className="flex md:flex-row flex-col lg:gap-8  gap-2">
          <section className="md:w-1/2 w-full">
            <div className="flex flex-col gap-2">
              {data.map((data, i) => {
                return (
                  <div key={i}>
                    <YourCart cart={data} />
                  </div>
                );
              })}
            </div>
          </section>
          <section className="md:w-1/2 w-full">
            <OrderSummary cart={data} check={false} />
          </section>
        </div>
      ) : (
        <EmptyCart />
      )}
    </main>
  );
}
