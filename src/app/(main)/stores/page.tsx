import Stores from "@/components/pages/Stores";
import { Metadata } from "next";
import React from "react";

export default function Store() {
  return (
    <div>
      <Stores />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Stores",
};
