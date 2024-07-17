import Dior from "@/components/pages/Stores/Dior";
import LV from "@/components/pages/Stores/LV";
import { Metadata } from "next";
import React from "react";

export default function page() {
  return (
    <main>
      <LV />
    </main>
  );
}

export const metadata: Metadata = {
  title: "LV",
};
