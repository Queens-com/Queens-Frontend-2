import ResetPasswordSuccess from "@/components/pages/Authentication/PasswordReset/ResetPasswordSuccess";
import { Metadata } from "next";
import React from "react";

const page = () => {
  return (
    <div>
      <ResetPasswordSuccess />
    </div>
  );
};

export const metadata: Metadata = {
  title: "Success",
};

export default page;
