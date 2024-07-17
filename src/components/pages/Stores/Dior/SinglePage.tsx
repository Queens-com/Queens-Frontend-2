"use client";
import React from "react";
import SinglePages from "../SinglePage";
import { Products } from ".";
import Link from "next/link";
import { routes } from "@/config/routes";

// const demoImage = ["/chain.png", "/chain-2.png", "/chain-3.png", "/brace.png"];
export const demoProduct = {
  name: "diamond earrings",
  images: ["/chain.png", "/chain-2.png", "/chain-3.png", "/brace.png"],
  price: "489",
  desc: "The is made of yellow gold with malachite and diamonds. The motto of this collection continues the internal slogan of REGINA: there is no wrong side.",
  id: 2345,
  category: "earrings",
  delivery: "free delivery",
  material: {
    title:
      "REGINA earrings is made with carefully selected materials. Please handle with care for longer product life.",
    care: "This piece has been produced using hypoallergenic materials in accordance with the current international regulations.",
  },
  reviews: 6,
};

export default function SinglePage() {
  const arrivals = Products.slice(0, 4);
  return (
    <main className="p-3 lg:px-14 md:px-10 mt-2 mb-10 ">
      <header className="sm:flex hidden gap-1 items-center capitalize text-sm mb-8">
        <Link href={routes.stores.index}>Stores /</Link>
        <Link href={routes.stores.dior}>Dior /</Link>
        <Link href={"#"}>{demoProduct.name}</Link>
      </header>
      <SinglePages product={demoProduct} arrivals={arrivals} />
    </main>
  );
}
