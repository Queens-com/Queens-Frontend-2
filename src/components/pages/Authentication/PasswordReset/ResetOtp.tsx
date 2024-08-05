"use client";
import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useRouter } from "@/lib/useRouter";
import { formatTime } from "@/lib/utils";
import queens from "@/config/queens";
import { apiRoutes, routes } from "@/config/routes";
import { snackbar } from "../../../Toaster";
import { AxiosRequestConfig } from "axios";
import { IoIosArrowBack } from "react-icons/io";

const ResetOtp: React.FC = () => {
  const router = useRouter();
  const { auth, user } = apiRoutes;
  const searchParams = useSearchParams();
  const routeEmail = searchParams.get("email");
  const [countdown, setCountdown] = useState(60);

  const back = () => {
    router.back();
  };
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

  //handle send otp
  const {
    mutate: resend,
    isPending,
    error,
    data,
  } = useMutation({
    mutationFn: async () => {
      const payload = { email: routeEmail };
      return await queens.post(auth.sendOtp, payload);
    },
    onError: (err) => {
      return err;
    },
    onSuccess: (data) => {
      snackbar({
        description: "Check your email for your OTP",
        message: "OTP Sent!",
      });
      setCountdown(60);
    },
  });

  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const otpInputs: React.RefObject<HTMLInputElement>[] = Array.from(
    { length: 6 },
    () => useRef<HTMLInputElement>(null)
  );

  const handleOtpChange = (index: number, value: string, e: any) => {
    if (/[0-9]/.test(value) || value === "") {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);
    }

    if (index < 5 && value !== "") {
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

  const handleResend = () => {
    resend();
  };

  //handle verify otp
  const {
    mutate: submit,
    isPending: loading,
    data: response,
  } = useMutation({
    mutationFn: async () => {
      const payload = {
        user_id: data?.data?.user_id || "",
        otp: otpValues.join(""),
      };
      return await queens.post(auth.verifyOtp, payload);
    },
    onError: (err) => {
      return err;
    },
    onSuccess: async (data) => {
      const accessToken = data?.data?.token;
      if (accessToken) {
        snackbar({
          description:
            "OTP verification Successful, proceed to input your new password.",
          message: "Verification Successful",
        });
        router.push(`${routes.resetPassword}?code=${accessToken}`);
      } else {
        snackbar.error({
          description: "OTP verification failed, try again.",
          message: "Verification Failed",
        });
      }
      // try {
      //   const accessToken = data?.data?.token;
      //   // const accessToken = "";
      //   const config: AxiosRequestConfig = accessToken
      //     ? { headers: { Authorization: `Bearer ${accessToken}` } }
      //     : {};
      //   const response = await queens.get(user.activate, config);
      //   if (response) router.push(routes.registerSuccess);
      // } catch (err) {
      //   return err;
      // }
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    submit();
  };

  useEffect(() => {
    if (routeEmail) {
      handleResend();
    }
  }, []);

  const otpInput = `bg-gray-100 border-label border rounded-lg h-14 w-full rounded-10 text-2xl text-center leading-tight flex items-center justify-center maxLength-1`;

  return (
    <div className="grid items-center justify-center min-h-screen px-4">
      <div className="grid items-center justify-center sm:max-w-sm w-full">
        <div className="grid">
          <div
            className="mt-8 cursor-pointer mb-4 hidden md:block"
            onClick={back}
          >
            <IoIosArrowBack />
          </div>
          <div className="text-center md:text-left">
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
              <div className="relative grid grid-cols-6 sm:gap-2 gap-1 justify-center items-center mb-4">
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
              </div>
              {countdown > 0 ? (
                <button className="text-xs font-normal ">
                  Request a new code in <span>{formatTime(countdown)}</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleResend}
                  className="text-xs font-normal "
                >
                  {isPending ? "sending..." : "Resend"}
                </button>
              )}
              {(error || data) && countdown > 0 ? (
                <p
                  className={`whitespace-nowrap text-xs -mt-3 -mb-5  ${
                    data ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {/* yes wrong */}
                  {error?.message || "sent"}
                </p>
              ) : null}
            </label>
            <button
              type="submit"
              className=" hover:bg-[#1E1E1E] text-[#1E1E1E] bg-[#F5F5F5] hover:text-white pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm rounded-full w-full mt-8"
            >
              {loading ? "Verifying..." : "Verify"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetOtp;
