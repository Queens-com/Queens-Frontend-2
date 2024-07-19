import Profile from "@/components/pages/Profile";
import { Metadata } from "next";
import React from "react";

export default function page() {
  return (
    <main>
      <Profile />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Profile",
};
