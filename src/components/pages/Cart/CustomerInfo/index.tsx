"use client";
import React, { useState } from "react";
import OrderSummary from "../OrderSummary";
import Link from "next/link";
import ContactForm from "./ContactForm";
import AddressForm from "./Address";
import PaymentForm from "./PaymentForm";
import { useQuery } from "@tanstack/react-query";
import queens from "@/config/queens";
import { apiRoutes, routes } from "@/config/routes";
import { CartType } from "@/types";
import EmptyCart from "../EmptyCart";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetCart } from "@/config/cart/useCart";

export default function CustomerInfo() {
  const { cart } = apiRoutes;
  const { data, error, isError, isFetching, isLoading, refetch } = useGetCart();
  const [info, setInfo] = useState({
    contact: true,
    address: false,
    payment: false,
  });
  return (
    <main className="p-3 lg:px-14 md:px-10">
      <header className="flex justify-between items-center mb-10">
        <div>
          <p className="font-bold md:text-3xl text-xl">Your Cart</p>
          <div className="md:text-sm text-xs">
            <Link href={routes.cart.index}>Order Summary / </Link>
            <Link href={routes.cart.customer}>Contact Information</Link>
          </div>
        </div>
        <p className="text-sm text-gray-600">2 items</p>
      </header>
      {data && data.length ? (
        <div className="flex md:flex-row flex-col gap-8">
          <section className="md:w-1/2 w-full space-y-4">
            <ContactForm contact={info.contact} setInfo={setInfo} />
            <AddressForm address={info.address} setInfo={setInfo} />
            <PaymentForm payment={info.payment} setInfo={setInfo} />
          </section>
          <section className="md:w-1/2 w-full">
            <OrderSummary cart={data} check={true} />
          </section>
        </div>
      ) : (
        <EmptyCart />
      )}
    </main>
  );
}
