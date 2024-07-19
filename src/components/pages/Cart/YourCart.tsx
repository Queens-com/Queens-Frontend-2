"use client";
import React, { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

export default function YourCart() {
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
    <div className="flex gap-2 justify-between items-center p-2 border">
      <div className="max-w-[6rem] w-full border h-[6rem]"></div>
      <div className="flex flex-col -mt-3">
        <p>DIAMOND EARRINGS</p>
        <p className="text-sm text-gray-500">2345</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p>$67.98</p>
        <div className=" bg-gray-200 p-1 rounded-sm">
          <div className="flex gap-2 items-center text-xl">
            <CiCirclePlus className="cursor-pointer" onClick={handleIncrease} />
            <p className="text-sm w-5 text-center">{quantity}</p>
            <CiCircleMinus
              className="cursor-pointer"
              onClick={handleDecrease}
            />
          </div>
        </div>
      </div>
      <div>
        <RiDeleteBinLine className="text-red-500" />
      </div>
    </div>
  );
}
