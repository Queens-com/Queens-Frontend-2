"use client";
import React from "react";
import queensLogo from "../../../../public/Q.png";
import Image from "next/image";
const userEmail = "tobymacqueen@gmail.com";

const ResetPasswordEmail = () => {
  const otpInput = `bg-gray-100 border-label border rounded-lg h-14 w-full rounded-10 text-2xl text-center leading-tight flex items-center justify-center maxLength-1`;
  return (
    <div className="grid items-center justify-center min-h-screen px-4">
      <div className="grid items-center justify-center sm:max-w-sm w-full">
        <div className="grid">
          <div className="mb-6">
            <div className="p-1 flex justify-center">
              <Image src={queensLogo} alt="backImg" />
            </div>
          </div>
          <div>
            <h1 className="font-bold text-3xl mb-1 text-active_text">
              Reset Password
            </h1>
            <p className="text-label text-base font-medium text-[#525252]">
              Insert your registered email or phone number
            </p>
          </div>

          <form className="grid gap-3 mt-8">
            <div className="grid gap-1.5">
              <label htmlFor="email" className="font-medium text-sm text-left">
                Email or Phone Number
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email or phone number"
                className="bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm"
                required
              />
            </div>

            <button
              type="submit"
              className=" hover:bg-[#1E1E1E] text-[#1E1E1E] bg-[#F5F5F5] hover:text-white pt-2 pb-2 ps-4 pe-4 placeholder:font-normal text-base placeholder:text-sm rounded-full"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordEmail;
