"use client";
import React, { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import YourCart from "./YourCart";
import OrderSummary from "./OrderSummary";

export default function Cart() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
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
          <OrderSummary />
        </section>
      </div>
    </main>
  );
}
