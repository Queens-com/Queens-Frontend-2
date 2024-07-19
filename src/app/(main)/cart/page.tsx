import Cart from "@/components/pages/Cart";
import { Metadata } from "next";
import React from "react";

export default function page() {
  return (
    <main>
      <Cart />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Cart",
};
