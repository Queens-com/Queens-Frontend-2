"use client";
import { useDeleteItem, useUpdateCart } from "@/config/cart/useCart";
import { CartType } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

interface OrderProp {
  cart: CartType;
}

export default function YourCart({ cart }: OrderProp) {
  const queryClient = useQueryClient();
  const [quantity, setQuantity] = useState(cart.quantity);

  const handleIncrease = async () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    try {
      const add = quantity + 1;
      await useUpdateCart(cart.product_reference, add);
    } catch (err) {
      return err;
    } finally {
      queryClient.invalidateQueries({ queryKey: ["carts"] });
    }
  };

  const handleDecrease = async () => {
    try {
      if (quantity > 1) {
        setQuantity((prevQuantity) => prevQuantity - 1);
        const add = quantity - 1;
        await useUpdateCart(cart.product_reference, add);
      }
    } catch (err) {
      return err;
    } finally {
      queryClient.invalidateQueries({ queryKey: ["carts"] });
    }
  };
  const handleDelete = async () => {
    try {
      await useDeleteItem(cart.product_reference);
    } catch (err) {
      return err;
    } finally {
      queryClient.invalidateQueries({ queryKey: ["carts"] });
    }
  };

  return (
    <div className="flex gap-2  items-center justify-between sm:items-center p-2 border sm:text-sm text-xs">
      <div className="max-w-[6rem] w-full border h-[6rem]">
        <Image
          src={cart.image}
          alt="item"
          width={400}
          height={400}
          className="shrink w-full h-full object-cover border hover:brightness-90"
        />
      </div>
      <div className="flex flex-col sm:w-2/5 w-3/5  md:-mt-3">
        <p className="uppercase">{cart.product_name}</p>
        <p className="text-sm text-gray-500">{cart.product_reference}</p>
        <div className="flex flex-col  md:hidden items-start gap-1">
          <p className="">
            {cart.currency}
            {cart.amount}
          </p>
          <div className="   rounded-sm">
            <div className="flex justify-start  gap-1 items-center text-xl">
              <CiCirclePlus
                className="cursor-pointer"
                onClick={handleIncrease}
              />
              <p className="text-sm w-5 text-center">{quantity}</p>
              <CiCircleMinus
                className="cursor-pointer"
                onClick={handleDecrease}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex flex-col  hidden items-start gap-2">
        <p className="">
          {cart.currency}
          {cart.amount}
        </p>
        <div className=" bg-gray-200 p-1 rounded-sm">
          <div className="flex sm:gap-2 gap-1 items-center text-xl">
            <CiCirclePlus className="cursor-pointer" onClick={handleIncrease} />
            <p className="text-sm w-5 text-center">{quantity}</p>
            <CiCircleMinus
              className="cursor-pointer"
              onClick={handleDecrease}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button onClick={handleDelete}>
          <RiDeleteBinLine className="text-red-500" />
        </button>
      </div>
    </div>
  );
}
