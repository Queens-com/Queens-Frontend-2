"use client";
import React from "react";
import queensLogo from "../../../../public/Q.png";
import Image from "next/image";
const userEmail = "tobymacqueen@gmail.com";

const ResetOtp = () => {
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
            <h1 className="font-bold text-2xl mb-1 text-active_text">
              Verify Email
            </h1>
            <p className="text-label text-xs font-medium">
              Enter the OTP sent to XXXXX
            </p>
          </div>

          <form className="mt-4 mb-6 ">
            <label
              htmlFor="OTP"
              className="flex gap-3 flex-col text-xl text-center roboto font-bold text-active_text"
            >
              <div className="relative grid grid-cols-4 sm:gap-6 gap-3 justify-center items-center mb-4">
                <input type="numeric" className={otpInput} required />
                <input type="numeric" className={otpInput} required />
                <input type="numeric" className={otpInput} required />
                <input type="numeric" className={otpInput} required />
              </div>
              <button className="text-xs font-normal ">
                Request a new code in
              </button>
            </label>
            <button
              type="submit"
              className=" hover:bg-[#1E1E1E] text-[#1E1E1E] bg-[#F5F5F5] hover:text-white pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm rounded-full w-full mt-8"
            >
              Proceed
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetOtp;
