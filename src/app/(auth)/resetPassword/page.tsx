import ResetPassword from "@/components/pages/Authentication/PasswordReset/ResetPassword";
import { Metadata } from "next";
import React from "react";

const resetPassword = () => {
  return (
    <div>
      <ResetPassword />
    </div>
  );
};

export const metadata: Metadata = {
  title: "Reset",
};

export default resetPassword;
