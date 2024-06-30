import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import NewTag from "./NewTag";
import Image from "next/image";
import newStock from '../../../public/stock.png'

const NewCard = () => {
  return (
    <div
      className={`relative h-auto w-full rounded-md overflow-hidden`}
    >
      <NewTag />
      <Image src={newStock} alt="item" className="" />
      <div className="flex justify-between items-center mt-5 mx-1">
        <div className="flex flex-col">
          <p className="font-medium">Diamond earrings</p>
          <p className="text-sm font-normal">$1000</p>
        </div>
        <LuShoppingCart className="text-2xl" />
      </div>
    </div>
  );
};

export default NewCard;
