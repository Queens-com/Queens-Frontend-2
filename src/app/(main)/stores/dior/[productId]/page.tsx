import SinglePage from "@/components/pages/Stores/Dior/SinglePage";
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
  title: "Dior",
};
