"use client";
import React, { useState } from "react";
import OrderSummary from "../OrderSummary";
import Link from "next/link";
import { routes } from "@/config/routes";
import ContactForm from "./ContactForm";
import AddressForm from "./Address";
import PaymentForm from "./PaymentForm";

export default function CustomerInfo() {
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
      <div className="flex md:flex-row flex-col gap-8">
        <section className="md:w-1/2 w-full space-y-4">
          <ContactForm contact={info.contact} setInfo={setInfo} />
          <AddressForm address={info.address} setInfo={setInfo} />
          <PaymentForm payment={info.payment} setInfo={setInfo} />
        </section>
        <section className="md:w-1/2 w-full">
          <OrderSummary check={true} />
        </section>
      </div>
    </main>
  );
}
