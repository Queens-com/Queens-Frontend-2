import SinglePage from "@/components/pages/Stores/Gucci/SinglePage";
import { Metadata } from "next";
import React from "react";

export default function page() {
  return (
    <main>
      <SinglePage />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Gucci",
};
