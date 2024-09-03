import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import queens from "@/config/queens";
import { apiRoutes, routes } from "@/config/routes";
import FormError from "../../Errors/FormError";
import { ChevronRight } from "lucide-react";

interface ContactProp {
  address: boolean;
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
  firstName: yup.string().required().label("First Name").trim().nullable(),
  country: yup.string().required().label("Country").trim().nullable(),
  lastName: yup.string().required().label("Last Name").trim().nullable(),
  address: yup.string().required().label("Address").trim().nullable(),
  phone: yup
    .string()
    .required()
    .label("Phone")
    .trim()
    .matches(
      /^(\+\d{1,3}[- ]?)?\d{10}$/,
      "Phone number must be a valid 10-digit number or in the format +1234567890"
    )
    .nullable(),
  city: yup.string().required().label("city").trim().nullable(),
  state: yup.string().required().label("State").trim().nullable(),
});

export default function AddressForm({ address, setInfo }: ContactProp) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (payload) => {
    setInfo({ contact: false, address: false, payment: true });
  };
  const handleClick = (status: boolean) => {
    setInfo({ contact: false, address: status, payment: false });
  };

  return (
    <main className="border p-4">
      <header className="flex justify-between items-center">
        <p className="text-sm font-semibold">2. Shipping Address</p>
        {!address && (
          <div
            className="flex items-center text-sm text-red-500 cursor-pointer"
            onClick={() => handleClick(true)}
          >
            <p>Change </p>
            <ChevronRight size={14} />
          </div>
        )}
      </header>
      {address && (
        <form className="my-6 transition-all" onSubmit={handleSubmit(onSubmit)}>
          <section className="xl:grid grid-cols-2 gap-5 space-y-4">
            <div className="grid gap-1.5">
              <label htmlFor="email" className="font-medium text-sm text-left">
                First Name
              </label>
              <input
                {...register("firstName")}
                type="text"
                placeholder="first name"
                className="bg-gray-100 rounded-full xl:py-0 py-2 ps-4  placeholder:font-normal placeholder:text-sm"
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
                placeholder="last name"
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
                placeholder="Email address"
                className="bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm"
              />
              {errors.email ? (
                <FormError message={errors.email.message} />
              ) : null}
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="email" className="font-medium text-sm text-left">
                Phone Number
              </label>
              <input
                {...register("phone")}
                type="text"
                placeholder="0907 XXX XXXX"
                className="bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm"
              />
              {errors.phone ? (
                <FormError message={errors.phone.message} />
              ) : null}
            </div>
          </section>
          <section className="space-y-5 pt-4">
            <div className="grid gap-1.5">
              <label htmlFor="email" className="font-medium text-sm text-left">
                Country
              </label>
              <input
                {...register("country")}
                type="text"
                placeholder="Nigeria"
                className="bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm"
              />
              {errors.country ? (
                <FormError message={errors.country.message} />
              ) : null}
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="email" className="font-medium text-sm text-left">
                Address
              </label>
              <input
                {...register("address")}
                type="text"
                placeholder="enter delivery address"
                className="bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm"
              />
              {errors.address ? (
                <FormError message={errors.address.message} />
              ) : null}
            </div>
            <p className="font-semibold text-sm">+ Add Line 2</p>
            <div className="grid gap-1.5">
              <label htmlFor="email" className="font-medium text-sm text-left">
                City
              </label>
              <input
                {...register("city")}
                type="text"
                placeholder="lagos"
                className="bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm"
              />
              {errors.city ? <FormError message={errors.city.message} /> : null}
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="email" className="font-medium text-sm text-left">
                State
              </label>
              <input
                {...register("State")}
                type="text"
                placeholder="Lagos"
                className="bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm"
              />
              {errors.state ? (
                <FormError message={errors.state.message} />
              ) : null}
            </div>
            <div className="flex sm:items-center items-start gap-3">
              <input type="checkbox" className="sm:mt-0 mt-1" />
              <p className="sm:text-sm text-xs">
                Save this information for a future fast checkout
              </p>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="" />
              <p className="sm:text-sm text-xs">Receive SMS Notifications</p>
            </div>
          </section>
          <div className="flex justify-center items-center px-16 mt-4 ">
            <button
              type="submit"
              className="rounded-xl w-full p-1 text-white bg-black"
            >
              save
            </button>
          </div>
        </form>
      )}
    </main>
  );
}
