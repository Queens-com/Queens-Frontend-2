import { ProductArrival } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

interface ProductProp {
  product: ProductArrival;
  key: string;
  isNew?: boolean;
  link?: string;
}

export default function Product(props: ProductProp) {
  const { isNew = false, product, key, link } = props;
  const router = useRouter();
  const onPress = () => {
    console.log("yes", link);
    if (link) router.push(`/stores/${link}`);
  };
  return (
    <main
      key={key}
      className="space-y-2  md:max-w-[22rem] w-full shadow-md  rounded-sm
    "
    >
      <div className="relative w-full cursor-pointer">
        <Image
          src={product.image}
          onClick={onPress}
          width={300}
          height={300}
          alt="stock"
          className="hover:brightness-75 w-full lg:min-h-[17rem] max-h-[17rem]  md:min-h-[17rem] sm:min-h-[13rem] xsm:min-h-[20rem] min-h-[13rem] object-cover"
        />
        {isNew ? (
          <p className="text-[#1DA272] bg-[#c5f1e1] w-max px-1 absolute top-3 left-2 text-xs rounded-md">
            New
          </p>
        ) : null}
      </div>
      <div className="flex md:flex-row  items-start gap-1 md:justify-between md:items-center p-2">
        <div className="space-y-0 sm:text-sm text-xs">
          <p className="capitalize font-semibold">{product.name}</p>
          <p className="text-[#8D8D8D]">Ref ID: {product.reference}</p>
        </div>
        <CiShoppingCart className="sm:text-2xl sm:block hidden w-[2rem] cursor-pointer" />
      </div>
    </main>
  );
}
