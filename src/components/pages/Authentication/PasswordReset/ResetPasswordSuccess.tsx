"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "@/lib/useRouter";
import { routes } from "@/config/routes";

const ResetPasswordSuccess = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(routes.login);
    }, 3000);

    // Cleanup the timer if the component is unmounted before the timeout
    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div className="grid items-center justify-center min-h-screen px-4">
      <div className="grid items-center justify-center w-full">
        <div className="grid">
          <div className="mb-6">
            <div className="p-1 flex justify-center">
              <Image src={"/Q.png"} width={200} height={200} alt="backImg" />
            </div>
          </div>
          <div>
            <h1 className="font-bold md:text-3xl text-xl mb-1">
              Your password is set
            </h1>
            <p className="text-center md:text-xl text-sm font-medium text-[#8D8D8D]">
              You would be redirected shortly
            </p>
          </div>
          <button
            className="bg-[#1E1E1E] text-white pt-2 pb-2 ps-4 pe-4 font-semibold rounded-full mt-8"
            onClick={() => router.push(routes.login)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordSuccess;
