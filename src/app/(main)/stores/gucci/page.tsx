import Gucci from "@/components/pages/Stores/Gucci";
import { Metadata } from "next";
import React from "react";

export default function page() {
  return (
    <main>
      <Gucci/>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Gucci",
};
