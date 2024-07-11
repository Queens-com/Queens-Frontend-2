import Dior from "@/components/pages/Stores/Dior";
import { Metadata } from "next";
import React from "react";

export default function page() {
  return (
    <main>
      <Dior />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Dior",
};
