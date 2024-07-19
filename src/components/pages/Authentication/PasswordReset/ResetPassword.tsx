"use client";
import React from "react";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { useSearchParams } from "next/navigation";
import { useRouter } from "@/lib/useRouter";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { snackbar } from "@/components/Toaster";
import queens from "@/config/queens";
import { apiRoutes, routes } from "@/config/routes";
import { AxiosRequestConfig } from "axios";
import FormError from "../../Errors/FormError";

const registerSchema: yup.ObjectSchema<FieldValues> = yup.object({
  password: yup.string().required().label("Password").trim(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required()
    .label("Confirm Password")
    .trim(),
});

const ResetPassword = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const { auth } = apiRoutes;

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
        password: payload.password,
      };
      console.log(body);
      const config: AxiosRequestConfig = code
        ? { headers: { Authorization: `Bearer ${code}` } }
        : {};
      await queens.post(auth.changePassword, body, config);
      snackbar({
        description: "You can now use your new password to sign in.",
        message: "Password Change Successful",
      });
      router.push(routes.resetSuccess);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const back = () => {
    router.back();
  };
  const otpInput = `bg-gray-100 border-label border rounded-lg h-14 w-full rounded-10 text-2xl text-center leading-tight flex items-center justify-center maxLength-1`;
  return (
    <div className="grid items-center justify-center min-h-screen px-4 w-full">
      <div className="mt-1 cursor-pointer  md:hidden" onClick={back}>
        <IoIosArrowBack />
      </div>
      <div className="grid items-center  justify-center sm:max-w-xl w-full">
        <div className="grid">
          <div className="mb-6">
            <div className="p-1 flex justify-center">
              <Image src={"/Q.png"} width={200} height={200} alt="backImg" />
            </div>
          </div>
          <div
            className="mt-8 cursor-pointer mb-4 hidden md:block"
            onClick={back}
          >
            <IoIosArrowBack />
          </div>
          <div>
            <h1 className="font-bold text-3xl mb-1 text-active_text">
              Reset Password
            </h1>
          </div>

          <form
            className="grid gap-5 mt-8 w-full sm:min-w-[20rem]"
            onSubmit={handleSubmit(onSubmit)}
          >
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
                placeholder="Enter new password"
                className="bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm w-full"
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
                placeholder="Re-enter password"
                className="bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm"
              />
              {errors.confirmPassword ? (
                <FormError message={errors.confirmPassword.message} />
              ) : null}
            </div>

            <button
              type="submit"
              className=" hover:bg-[#1E1E1E] text-[#1E1E1E] bg-[#F5F5F5] hover:text-white pt-2 pb-2 ps-4 pe-4 placeholder:font-normal text-base placeholder:text-sm rounded-full"
            >
              {isSubmitting ? "Confirming..." : "Confirm"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
