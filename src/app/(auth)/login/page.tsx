import Login from "@/components/Authentication/Login";
import { Metadata } from "next";
import React from "react";

const login = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export const metadata: Metadata = {
  title: "Login",
};

export default login;