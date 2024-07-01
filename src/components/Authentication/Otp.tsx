"use client";
import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import queensLogo from "../../../public/Q.png";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { formatTime } from "@/lib/utils";

const OTP = () => {
  const searchParams = useSearchParams();
  const routeEmail = searchParams.get("email");
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown((prevCountdown) => prevCountdown - 1);
      } else {
        // Countdown has reached 0, you can perform additional actions here if needed
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, [countdown]);

  const {
    mutate: resend,
    isPending,
    error,
    data,
  } = useMutation({
    mutationFn: async (code) => {
      const payload = { email: routeEmail };
      return { message: "" };
      // return await resendEmail(data);
    },
    onError: (err) => {
      console.log(err);
    },
    onSuccess: (data) => {
      setCountdown(120);
    },
  });

  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const otpInputs: React.RefObject<HTMLInputElement>[] = Array.from(
    { length: 4 },
    () => useRef<HTMLInputElement>(null)
  );

  const handleOtpChange = (index: number, value: string, e: any) => {
    if (/[0-9]/.test(value) || value === "") {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);
    }

    if (index < 3 && value !== "") {
      otpInputs[index + 1]?.current?.focus();
    } else if (
      (e.key === "Backspace" || e.key === "Delete") &&
      index > 0 &&
      value === ""
    ) {
      otpInputs[index - 1]?.current?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      (e.key === "Backspace" || e.key === "Delete") &&
      index > 0 &&
      otpValues[index] === ""
    ) {
      otpInputs[index - 1]?.current?.focus();
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const otpString = otpValues.join("");
    console.log("OTP Values:", otpString);
  };

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
          <div className="text-center">
            <h1 className="font-bold text-2xl mb-1 text-active_text ">
              Verify Email
            </h1>
            <p className="text-label text-xs font-medium">
              {routeEmail ? `Enter the OTP sent to ${routeEmail}` : "No Email"}
            </p>
          </div>

          <form className="mt-4 mb-6 " onSubmit={handleSubmit}>
            <label
              htmlFor="OTP"
              className="flex gap-3 flex-col text-xl text-center roboto font-bold text-active_text"
            >
              <div className="relative grid grid-cols-4 sm:gap-6 gap-3 justify-center items-center mb-4">
                {otpValues.map((value, index) => (
                  <input
                    key={index}
                    id={`otp${index + 1}`}
                    name={`otp${index + 1}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    pattern="[0-9]"
                    autoComplete={`otp${index + 1}`}
                    required
                    value={value}
                    onChange={(e) => handleOtpChange(index, e.target.value, e)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    ref={otpInputs[index]}
                    className={otpInput}
                  />
                ))}
                {/* <input type="numeric" className={otpInput} required />
                <input type="numeric" className={otpInput} required />
                <input type="numeric" className={otpInput} required />
                <input type="numeric" className={otpInput} required /> */}
              </div>
              {countdown > 0 ? (
                <button className="text-xs font-normal ">
                  Request a new code in <span>{formatTime(countdown)}</span>
                </button>
              ) : (
                <button className="text-xs font-normal ">Resend</button>
              )}
              {error || data ? (
                <p
                  className={`whitespace-nowrap text-xs -mt-3 -mb-5  ${
                    data ? "text-green-500" : "text-red-500"
                  }`}
                >
                  yes wrong
                  {/* {error?.message || data?.message} */}
                </p>
              ) : null}
            </label>
            <button
              type="submit"
              className=" hover:bg-[#1E1E1E] text-[#1E1E1E] bg-[#F5F5F5] hover:text-white pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm rounded-full w-full mt-8"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OTP;
