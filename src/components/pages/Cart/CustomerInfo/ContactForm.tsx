import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import queens from "@/config/queens";
import { apiRoutes, routes } from "@/config/routes";
import FormError from "../../Errors/FormError";
import { ChevronRight } from "lucide-react";

interface ContactProp {
  contact: boolean;
  setInfo: React.Dispatch<
    React.SetStateAction<{
      contact: boolean;
      address: boolean;
      payment: boolean;
    }>
  >;
}

const contactSchema: yup.ObjectSchema<FieldValues> = yup.object({
  email: yup
    .string()
    .email()
    .required()
    .label("Email Address")
    .trim()
    .nullable(),
});

export default function ContactForm({ contact, setInfo }: ContactProp) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const handleClick = (status: boolean) => {
    setInfo({ contact: status, address: false, payment: false });
  };
  const onSubmit: SubmitHandler<FieldValues> = async (payload) => {
    setInfo({ contact: false, address: true, payment: false });
    // console.log(payload);
  };

  return (
    <main className="border p-4">
      <header className="flex justify-between items-center">
        <p className="text-sm font-semibold">1. Contact Information</p>
        {!contact && (
          <div
            className="flex items-center text-sm text-red-500 cursor-pointer"
            onClick={() => handleClick(true)}
          >
            <p>Change </p>
            <ChevronRight size={14} />
          </div>
        )}
      </header>
      {contact && (
        <form className="my-6 transition-all" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-1.5">
            <label htmlFor="email" className="font-medium text-sm text-left">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="Email address"
              className="bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm"
            />
            {errors.email ? <FormError message={errors.email.message} /> : null}
          </div>
          <div className="flex justify-end mt-4 ">
            <button
              type="submit"
              className={` pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm rounded-full ${
                Object.keys(errors).length < 1
                  ? "bg-[#1E1E1E] text-white"
                  : "text-[#1E1E1E] bg-[#F5F5F5]"
              }`}
            >
              Continue
            </button>
          </div>
        </form>
      )}
    </main>
  );
}
