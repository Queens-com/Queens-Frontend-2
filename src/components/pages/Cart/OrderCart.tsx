"use client";
import { CartType } from "@/types";
import React, { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

interface OrderProp {
  cart: CartType;
}
export default function OrderCart({ cart }: OrderProp) {
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
    <div className="flex gap-2 justify-between sm:items-center items-start p-2 border text-sm">
      <div className="max-w-[6rem] w-full border h-[6rem]"></div>
      <div className="flex flex-col  justify-between h-[4rem] w-3/5">
        <p className=" text-gray-500 text-xs">{cart.product_reference}</p>
        <p className="uppercase">{cart.product_name}</p>
        <p>
          {cart.currency}
          {cart.price}
        </p>
      </div>
      <div className="flex flex-col justify-between h-[4rem]">
        <p className="text-gray-400 text-xs">{cart.quantity}x</p>
        <RiDeleteBinLine className="text-red-500" />
      </div>
    </div>
  );
}
