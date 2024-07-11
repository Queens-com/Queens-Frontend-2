import ResetOtp from "@/components/pages/Authentication/PasswordReset/ResetOtp";
import { Metadata } from "next";
import React from "react";

const otp = () => {
  return (
    <div>
      <ResetOtp />
    </div>
  );
};

export const metadata: Metadata = {
  title: "ResetOtp",
};

export default otp;
