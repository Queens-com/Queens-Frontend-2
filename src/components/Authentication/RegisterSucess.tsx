"use client";
import React from "react";
import queensLogo from "../../../public/Q.png";
import Image from "next/image";
const userEmail = "tobymacqueen@gmail.com";

const RegisterSuccess = () => {
  
  return (
    <div className="grid items-center justify-center min-h-screen px-4">
      <div className="grid items-center justify-center w-full">
        <div className="grid">
          <div className="mb-6">
            <div className="p-1 flex justify-center">
              <Image src={queensLogo} alt="backImg" />
            </div>
          </div>
          <div>
            <h1 className="font-bold text-3xl mb-1">
              Congrats, your account is set
            </h1>
            <p className="text-center text-xl font-medium text-[#8D8D8D]">
              You would be redirected shortly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSuccess;
