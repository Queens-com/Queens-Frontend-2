"use client";
import React from "react";
import queensLogo from "../../../../public/Q.png";
import Image from "next/image";

const userEmail = "tobymacqueen@gmail.com";

const ResetPasswordSuccess = () => {
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
            <h1 className="font-bold text-3xl mb-1">Your password is set</h1>
            <p className="text-center text-xl font-medium text-[#8D8D8D]">
              You would be redirected shortly
            </p>
          </div>
          <button
            
          
            className="bg-[#1E1E1E] text-white pt-2 pb-2 ps-4 pe-4 font-semibold rounded-full mt-8"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordSuccess;
