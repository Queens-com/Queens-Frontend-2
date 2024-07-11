import Register from "@/components/pages/Authentication/Register";
import { Metadata } from "next";
import React from "react";

const register = () => {
  return (
    <div>
      <Register />
    </div>
  );
};

export const metadata: Metadata = {
  title: "Register",
};

export default register;
