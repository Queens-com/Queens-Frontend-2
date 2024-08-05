"use client";
import React, { useEffect } from "react";
import * as yup from "yup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import FormError from "@/components/pages/Errors/FormError";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { apiRoutes, routes } from "@/config/routes";
import { useMutation } from "@tanstack/react-query";
import queens from "@/config/queens";
import { snackbar } from "@/components/Toaster";
import { LogOut } from "lucide-react";
import { logoutUser } from "@/lib/utils";

const userInfoSchema: yup.ObjectSchema<FieldValues> = yup.object({
  email: yup
    .string()
    .email()
    .required()
    .label("Email Address")
    .trim()
    .nullable(),
});
export default function UserLogin() {
  const router = useRouter();
  const { user } = apiRoutes;

  const { data } = useSession();
  const {
    control,
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(userInfoSchema),
  });

  const { mutate: deleteAccount, isPending } = useMutation({
    mutationFn: async () => {
      return await queens.delete(user.profile);
    },
    onError: (err) => {
      return err;
    },
    onSuccess: (data) => {
      snackbar({
        description: "Account Deleted Successfully",
        message: "Account Deleted!",
      });
      logoutUser();
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (payload) => {
    try {
      router.push(`${routes.resetOtp}?email=${payload.email}`);
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    reset({
      email: data?.user?.email,
    });
  }, [reset]);
  return (
    <main>
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
          {errors.email ? <FormError message={errors.email.message} /> : null}
        </div>
        <button
          type="submit"
          className=" hover:bg-[#1E1E1E] text-[#1E1E1E] bg-[#F5F5F5] hover:text-white pt-2 pb-2 ps-4 pe-4 placeholder:font-normal text-base placeholder:text-sm rounded-full"
        >
          {isSubmitting ? "loading..." : "Change Password"}
        </button>
      </form>
      <button
        onClick={() => deleteAccount()}
        className=" hover:bg-[#DA1E28] text-[#DA1E28] border border-[#DA1E28] hover:text-white pt-2 pb-2 ps-4 pe-4 placeholder:font-normal text-base placeholder:text-sm rounded-full w-full mt-2"
      >
        {isPending ? "Deleting..." : "Delete"}
      </button>
    </main>
  );
}
