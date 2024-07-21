"use client";
import React, { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

export default function OrderCart() {
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
    <div className="flex gap-2 justify-between items-center p-2 border text-sm">
      <div className="max-w-[6rem] w-full border h-[6rem]"></div>
      <div className="flex flex-col justify-between h-[4rem]">
        <p className=" text-gray-500 text-xs">2345</p>
        <p>DIAMOND EARRINGS</p>
        <p>$67.98</p>
      </div>
      <div className="flex flex-col justify-between h-[4rem]">
        <p className="text-gray-400 text-xs">2x</p>
        <RiDeleteBinLine className="text-red-500" />
      </div>
    </div>
  );
}
