"use client";
import React from "react";
import queensLogo from "../../../../public/Q.png";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { routes } from "@/config/routes";
import * as yup from "yup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import FormError from "@/components/Errors/FormError";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

const registerSchema: yup.ObjectSchema<FieldValues> = yup.object({
  email: yup
    .string()
    .email()
    .required()
    .label("Email Address")
    .trim()
    .nullable(),
});

const ResetPasswordEmail = () => {
  const router = useRouter();
  const back = () => {
    router.back();
  };
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (payload) => {
    try {
      console.log(payload);
      router.push(`${routes.resetOtp}?email=${payload.email}`);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const otpInput = `bg-gray-100 border-label border rounded-lg h-14 w-full rounded-10 text-2xl text-center leading-tight flex items-center justify-center maxLength-1`;

  return (
    <div className="grid items-center justify-center min-h-screen px-4">
      <div className="mt-2 cursor-pointer mb-4 md:hidden" onClick={back}>
        <IoIosArrowBack />
      </div>
      <div className="grid items-center justify-center sm:max-w-sm w-full">
        <div className="grid">
          <div className="mb-6">
            <div className="p-1 flex justify-center">
              <Image src={queensLogo} alt="backImg" />
            </div>
          </div>
          <div
            className="mt-8 cursor-pointer mb-4 hidden md:block"
            onClick={back}
          >
            <IoIosArrowBack />
          </div>
          <div className="md:text-left">
            <h1 className="font-bold md:text-3xl text-xl mb-1 text-active_text">
              Reset Password
            </h1>
            <p className="text-label md:text-base font-medium text-xs  text-[#525252]">
              Insert your registered email
            </p>
          </div>

          <form
            className="grid gap-4 mt-8 sm:min-w-[20rem]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid gap-2">
              <label htmlFor="email" className="font-medium text-sm text-left">
                Email
              </label>
              <input
                {...register("email")}
                name="email"
                type="email"
                placeholder="Enter your email "
                className="bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm"
              />
              {errors.email ? (
                <FormError message={errors.email.message} />
              ) : null}
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
