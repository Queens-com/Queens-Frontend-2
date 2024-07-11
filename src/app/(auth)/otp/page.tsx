import OTP from "@/components/pages/Authentication/Otp";
import { Metadata } from "next";
import React from "react";

const otp = () => {
  return (
    <div>
      <OTP />
    </div>
  );
};

export const metadata: Metadata = {
  title: "Otp",
};

export default otp;
