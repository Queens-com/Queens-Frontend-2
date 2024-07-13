"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import queens from "@/config/queens";
import { apiRoutes, routes } from "@/config/routes";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { snackbar } from "@/components/Toaster";
import FormError from "../Errors/FormError";

const loginSchema: yup.ObjectSchema<FieldValues> = yup.object({
  email: yup
    .string()
    .email()
    .required()
    .label("Email Address")
    .trim()
    .nullable(),
  password: yup.string().required().label("Password").trim(),
});

function Login() {
  const callbackUrl = useSearchParams().get("callbackUrl");
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const { auth } = apiRoutes;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (payload) => {
    try {
      const { data } = await queens.post(auth.login, payload);
      console.log(data.token);
      snackbar({
        description: "Logging in",
        message: "Login Successful",
      });
      await signIn("update-jwt", {
        accessToken: data?.token,
        callbackUrl: callbackUrl || routes.home,
        redirect: false,
      });

      snackbar({
        description: "Welcome back to Queens. Enjoy the exciting features",
        message: "Sucessfully Logged In",
      });
      router.push(callbackUrl || routes.home);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return (
    <div className="grid justify-center">
      <div className="grid items-center justify-center p-6 sm:max-w-sm w-full">
        <div className="text-black max-w-screen-sm m-auto text-center">
          <Image
            src={"/Q.png"}
            width={200}
            height={200}
            alt="logo"
            className="w-20 md:w-100 m-auto mb-8"
          />
          <div>
            <h1 className="bricolage font-bold text-xl md:text-3xl mb-3">
              Welcome Back!
            </h1>
            <div className="flex items-center justify-between gap-2 ms-4 me-4">
              <div className="w-1/3 h-[1px] bg-black"></div>
              <p className="font-semibold text-gray-600 text-xs md:text-md text-center">
                Continue with
              </p>
              <div className="w-1/3 h-[1px] bg-black"></div>
            </div>
          </div>

          <div className="flex gap-4 items-center justify-between mt-4">
            <div className="flex gap-2 items-center py-2 px-4 border border-gray-400 rounded-full">
              <Image
                width={200}
                height={200}
                src={"/google.png"}
                alt="google"
              />
              <h1 className="text-gray-700 text-xs md:text-base pr-5">
                Google
              </h1>
            </div>
            <div className="flex gap-2 items-center py-2 px-4 border border-gray-400 rounded-full">
              <Image width={200} height={200} src={"/apple.png"} alt="apple" />
              <h1 className="text-gray-700 text-xs md:text-base pr-4">Apple</h1>
            </div>
            <div className="flex gap-2 items-center py-2 px-2 border border-gray-400 rounded-full">
              <Image
                width={200}
                height={200}
                src={"/facebook.png"}
                alt="facebook"
                className="w-max"
              />
              <h1 className="text-gray-700 text-xs md:text-base pr-7">
                Facebook
              </h1>
            </div>
          </div>

          {showModal && (
            <div>
              <div className="flex items-center gap-3 p-3 bg-red-100 mt-4 rounded">
                <i className="fa-solid fa-triangle-exclamation text-red-500"></i>
                <p className="text-xs">Email or password incorrect.</p>
              </div>
            </div>
          )}

          <form className="grid gap-4 mt-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-1.5">
              <label htmlFor="email" className="font-medium text-sm text-left">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="yourname@email.com"
                className="bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm"
              />
              {errors.email ? (
                <FormError message={errors.email.message} />
              ) : null}
            </div>
            <div className="grid gap-1.5">
              <label
                htmlFor="password"
                className="font-medium text-sm text-left"
              >
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="Enter password"
                className="bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm"
              />
              {errors.password ? (
                <FormError message={errors.password.message} />
              ) : null}
            </div>
            <div className="grid gap-1.5">
              <label
                htmlFor="toggleSwitch"
                className="font-normal text-sm text-left"
              >
                Remember Info
              </label>
              {/* toggle here */}
              <span className="switch" />
            </div>
            <button
              type="submit"
              className=" hover:bg-[#1E1E1E] text-[#1E1E1E] bg-[#F5F5F5] hover:text-white pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm rounded-full"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="grid gap-3 mt-4">
            <Link
              href={routes.resetPasswordEmail}
              className="text-[15px] font-medium text-[#525252]"
            >
              Forgotten Password?
            </Link>
            <Link
              href={routes.register}
              className="text-sm text-[#3D8DFF] font-medium underline"
            >
              Create an account!
            </Link>
            <p className="text-[#8D8D8D] text-xs font-normal">
              Copyright © 2024 Queens. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
