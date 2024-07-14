import Image from "next/image";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

interface ProductProp {
  product: any;
  key: string;
}

export default function Product({ product, key }: ProductProp) {
  return (
    <main key={key} className="space-y-2 max-w-[20rem] w-full shadow-sm">
      <div className="relative">
        <Image
          src={product.image}
          width={200}
          height={200}
          alt="stock"
          className="hover:brightness-90 w-full object-cover"
        />
        <p className="text-[#1DA272] bg-[#c5f1e1] w-max px-1 absolute top-3 left-2 text-xs rounded-md">
          New
        </p>
      </div>
      <div className="flex justify-between items-center p-2">
        <div className="space-y-0 text-sm">
          <p className="capitalize font-semibold">{product.name}</p>
          <p className="text-[#8D8D8D]">Ref ID: {product.ref}</p>
        </div>
        <CiShoppingCart className="text-2xl" />
      </div>
    </main>
  );
}
