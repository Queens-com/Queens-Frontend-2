import RegisterSuccess from "@/components/Authentication/RegisterSucess";
import { Metadata } from "next";
import React from "react";

const success = () => {
  return (
    <div>
      <RegisterSuccess />
    </div>
  );
};

export const metadata: Metadata = {
  title: "Success",
};

export default success;
