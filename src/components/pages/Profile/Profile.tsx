"use client";
import React, { useEffect } from "react";
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
import { useSession } from "next-auth/react";
import UserLogin from "./UserLogin";

const profileSchema: yup.ObjectSchema<FieldValues> = yup.object({
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
});

export default function SingleProfile() {
  const { data } = useSession();

  const { COUNTRY_LIST } = constants;
  const {
    control,
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(profileSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (payload) => {};

  useEffect(() => {
    reset({
      firstName: data?.user?.first_name,
      lastName: data?.user?.last_name,
      email: data?.user?.email,
      country: data?.user?.country,
    });
  }, [reset]);

  return (
    <main className="p-3 lg:px-14 md:px-10 space-y-10">
      <header className="px-2"></header>
      <div className="flex md:flex-row flex-col  gap-10 justify-between">
        <section className="w-full md:w-1/2 md:px-10 px-2">
          <form className="grid gap-4 mt-6" onSubmit={handleSubmit(onSubmit)}>
            <p className="md:text-2xl text-xl font-bold">My Profile</p>
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
                control={control}
                name="country"
                loading={false}
                isDisabled={false}
                disableKeys={[""]}
                showSearch={true}
              />
              {errors.country ? (
                <FormError message={errors.country.message} />
              ) : null}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className=" hover:bg-[#1E1E1E] text-[#1E1E1E] bg-[#F5F5F5] hover:text-white pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm rounded-full"
            >
              {isSubmitting ? "Saving..." : "Save Changes"}
            </button>
          </form>
        </section>
        <section className="w-full md:w-1/2 md:px-10 px-2">
          <UserLogin />
        </section>
      </div>
    </main>
  );
}
