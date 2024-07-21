import CustomerInfo from "@/components/pages/Cart/CustomerInfo";
import { Metadata } from "next";
import React from "react";

export default function page() {
  return (
    <main>
      <CustomerInfo />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Customer Information",
};
