"use client";
import React from "react";
import YourCart from "./YourCart";
import OrderSummary from "./OrderSummary";

export default function Cart() {
  return (
    <main className="p-3 lg:px-14 md:px-10">
      <header className="flex justify-between items-center mb-10">
        <div>
          <p className="font-bold md:text-3xl text-xl">Your Cart</p>
          <p className="md:text-sm text-xs text-gray-600">
            Your Cart / Contact Information
          </p>
        </div>
        <p className="text-sm text-gray-600">2 items</p>
      </header>
      <div className="flex md:flex-row flex-col gap-8">
        <section className="md:w-1/2 w-full">
          <div className="flex flex-col gap-2">
            {[1, 2].map((_, i) => {
              return (
                <div key={i}>
                  <YourCart />
                </div>
              );
            })}
          </div>
        </section>
        <section className="md:w-1/2 w-full">
          <OrderSummary check={false} />
        </section>
      </div>
    </main>
  );
}
