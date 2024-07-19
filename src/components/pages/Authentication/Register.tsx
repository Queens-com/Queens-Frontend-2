"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../Errors/FormError";
import { snackbar } from "@/components/Toaster";
import queens from "@/config/queens";
import { apiRoutes, routes } from "@/config/routes";
import { useRouter } from "@/lib/useRouter";
import { CountryInput } from "../../Inputs/CountryInput";
import { constants } from "@/config/constants";

const registerSchema: yup.ObjectSchema<FieldValues> = yup.object({
  email: yup
    .string()
    .email()
    .required()
    .label("Email Address")
    .trim()
    .nullable(),

  firstName: yup.string().required().label("First Name").trim().nullable(),
  country: yup.string().required().label("Country").trim().nullable(),
  lastName: yup.string().required().label("Last Name").trim().nullable(),
  password: yup.string().required().label("Password").trim(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required()
    .label("Confirm Password")
    .trim(),
});

function Register() {
  const { COUNTRY_LIST } = constants;

  const router = useRouter();
  const { auth } = apiRoutes;
  const [showModal, setShowModal] = useState(false);

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
      const body = {
        email: payload.email,
        password: payload.password,
        phone: "",
        country_code: "",
        first_name: payload.firstName,
        last_name: payload.lastName,
        middle_name: "",
        profile_photo: "",
        country: payload.country,
      };
      console.log(body);

      await queens.post(auth.signup, body);
      snackbar({
        description:
          "Congratulations! You've completed the sign-up process. The next step is to verify your email",
        message: "Registration Successful",
      });
      router.push(`${routes.otp}?email=${payload.email}`);
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
              Let’s get you started!
            </h1>
            <div className="flex items-center justify-between gap-2 ms-4 me-4">
              <div className="w-1/3 h-[1px] bg-black"></div>
              <p className="font-semibold text-gray-600 text-xs md:text-md text-center">
                Sign up with
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

          <form className="grid gap-4 mt-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-1.5">
              <label htmlFor="email" className="font-medium text-sm text-left">
                First Name
              </label>
              <input
                {...register("firstName")}
                type="text"
                placeholder="e.g John"
                className="bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm"
              />
              {errors.firstName ? (
                <FormError message={errors.firstName.message} />
              ) : null}
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="email" className="font-medium text-sm text-left">
                Last Name
              </label>
              <input
                {...register("lastName")}
                type="text"
                placeholder="e.g Doe"
                className="bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm"
              />
              {errors.lastName ? (
                <FormError message={errors.lastName.message} />
              ) : null}
            </div>

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
              <label htmlFor="email" className="font-medium text-sm text-left">
                Country
              </label>
              <CountryInput
                items={COUNTRY_LIST.sort((a, b) => {
                  return a.name.localeCompare(b.name, undefined, {
                    sensitivity: "base",
                  });
                })}
                base={
                  "bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm w-full h-10"
                }
                // field={...register("email")}
                control={control}
                name="country"
                loading={false}
                isDisabled={false}
                disableKeys={[""]}
                showSearch={true}
              />
              {/* <input
                {...register("email")}
                type="email"
                placeholder="yourname@email.com"
                className="bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm"
              /> */}
              {errors.country ? (
                <FormError message={errors.country.message} />
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
                htmlFor="confirmPassword"
                className="font-medium text-sm text-left"
              >
                Confirm Password
              </label>
              <input
                {...register("confirmPassword")}
                type="password"
                placeholder="Enter password"
                className="bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm"
              />
              {errors.confirmPassword ? (
                <FormError message={errors.confirmPassword.message} />
              ) : null}
            </div>
            <div className="grid gap-1.5">
              <p className="font-medium text-xs">
                By clicking, you agree to Queen’s{" "}
                <span className="text-[#3D8DFF] underline">Privacy Policy</span>{" "}
                and{" "}
                <span className="text-[#3D8DFF] underline">
                  terms of service
                </span>
              </p>
              <span className="switch" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className=" hover:bg-[#1E1E1E] text-[#1E1E1E] bg-[#F5F5F5] hover:text-white pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm rounded-full"
            >
              {isSubmitting ? "Signing up..." : "Sign up"}
            </button>
          </form>

          <div className="grid gap-3 mt-4">
            <Link
              href="/login"
              className="text-sm text-[#3D8DFF] font-medium underline"
            >
              Login
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

export default Register;
