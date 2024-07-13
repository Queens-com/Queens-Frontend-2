"use client";
import React, { useState } from "react";
import Filter from "../Filter";
import { constants } from "@/config/constants";
import { CiShoppingCart } from "react-icons/ci";
import Image from "next/image";

const { STORE_FILTERS } = constants;
const category = [
  {
    name: "earrings",
  },
  {
    name: "necklaces",
  },
  {
    name: "braceletes",
  },
];

const Products = [
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
  {
    name: "diamond earrings",
    image: "/stock.png",
    ref: "2345",
  },
];

export default function Dior() {
  const [active, setActive] = useState("earrings");
  return (
    <main>
      <header className="bg-[#F5F5F5] flex items-center justify-center gap-16 py-2">
        <p className="text-5xl font-bold">Dior</p>
        <div className=" gap-8 hidden sm:flex text-sm">
          {category.map((cat, i) => {
            return (
              <p
                onClick={() => setActive(cat.name)}
                className={`capitalize hover:border-b-4 hover:opacity-50 hover:border-b-black pb-2 cursor-pointer ${
                  active === cat.name && "border-b-black border-b-4"
                }`}
              >
                {cat.name}
              </p>
            );
          })}
        </div>
      </header>
      <div className="flex gap-4 justify-around p-3 lg:px-20 md:px-10">
        <section
          className={`md:w-1/4 lg:w-1/5 w-full ${
            true ? "hidden md:block " : "block"
          }`}
        >
          <Filter cat={active} store="dior" />
        </section>
        <section className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 w-full">
          {Products.map((product) => {
            return (
              <article className="space-y-2 max-w-[20rem] w-full shadow-sm">
                <div>
                  <Image
                    src={product.image}
                    width={200}
                    height={200}
                    alt="stock"
                    className="hover:brightness-90 w-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center p-2">
                  <div className="space-y-0 text-sm">
                    <p className="capitalize font-semibold">{product.name}</p>
                    <p className="text-[#8D8D8D]">Ref ID: {product.ref}</p>
                  </div>
                  <CiShoppingCart className="text-2xl" />
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
