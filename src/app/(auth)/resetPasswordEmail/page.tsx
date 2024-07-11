import ResetPasswordEmail from "@/components/pages/Authentication/PasswordReset/ResetPasswordEmail";
import { Metadata } from "next";
import React from "react";

const resetPassword = () => {
  return (
    <div>
      <ResetPasswordEmail />
    </div>
  );
};

export const metadata: Metadata = {
  title: "Reset",
};

export default resetPassword;
