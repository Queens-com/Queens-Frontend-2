"use client";
import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import queens from "@/config/queens";
import { apiRoutes, routes } from "@/config/routes";
import FormError from "../pages/Errors/FormError";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { X } from "lucide-react";
import { ErrorResponse, ProductArrival } from "@/types";
import Errors from "../pages/Errors/ProductsError";
import Product from "../pages/Stores/Product";
import { formatUrl } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

const searchSchema: yup.ObjectSchema<FieldValues> = yup.object({
  search: yup.string().required().label("").trim().nullable(),
});

const { products } = apiRoutes;
export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [empty, setEmpty] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(searchSchema),
  });

  const {
    mutate: searchQuery,
    isPending,
    error,
    data,
  } = useMutation({
    mutationFn: async (search) => {
      const body = {
        search: search,
      };
      const { data } = await queens.post(products.search, body);
      console.log(data.data);
      return data.data as ProductArrival[];
    },
    onError: (err) => {
      return err;
    },
    onSuccess: () => {},
  });
  const axiosError = error as AxiosError<ErrorResponse>;

  const onSubmit: SubmitHandler<FieldValues> = async (payload) => {
    searchQuery(payload.search);
    setEmpty(false);
  };

  const changeModal = () => {
    setIsOpen(!isOpen);
    reset();
    setEmpty(true);
  };

  return (
    <main className="">
      <Dialog onOpenChange={() => changeModal()} open={isOpen}>
        <DialogTrigger asChild>
          <div className="relative">
            <input
              readOnly
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 font-semibold text-xs sm:text-sm rounded-3xl text-[#161616] bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 hidden sm:block"
            />
            <button
              type="submit"
              className="absolute z-30 sm:bg-gray-100  right-2 top-1/2 transform -translate-y-1/2"
            >
              <RiSearch2Line className="sm:text-2xl text-lg cursor-pointer" />
            </button>
          </div>
        </DialogTrigger>
        <DialogContent className="w-full   pt-16 bg-white translate-y-0 top-0 ">
          <main className="2xl:max-w-[1440px]   mx-auto w-full">
            <section className="max-w-[50rem] mb-2 sticky flex items-center justify-between gap-4 mx-auto">
              <form
                className="relative w-full max-w-[30rem] mx-auto"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  {...register("search")}
                  type="text"
                  placeholder="Search"
                  className="w-full px-4 py-2 font-semibold text-xs sm:text-sm rounded-3xl text-[#161616] bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  "
                />
                <button
                  type="submit"
                  className="absolute z-30  bg-gray-100  right-2 top-1/2 transform -translate-y-1/2"
                >
                  <RiSearch2Line className="sm:text-2xl text-lg cursor-pointer" />
                </button>
              </form>
              <DialogClose>
                <X className="h-4 w-4" />
              </DialogClose>
            </section>
            <div className="2xl:h-[30rem] lg-h-[25rem] sm:h-[20rem] h-[15rem] overflow-auto">
              <section className="md:w-2/3 md:mt-10 lg:w-4/5 grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 w-full relative mx-auto">
                {isSubmitting || isPending ? (
                  Array.from({ length: 12 }).map((_, i) => {
                    return (
                      <Skeleton
                        key={i}
                        className="w-full max-w-[20rem] h-[12rem]"
                      />
                    );
                  })
                ) : !empty && data && data?.length ? (
                  data.map((product) => {
                    const formatLink = formatUrl(
                      product.reference,
                      product.store
                    );
                    return (
                      <Product
                        key={product.reference}
                        link={formatLink}
                        product={product}
                        handleChange={changeModal}
                      />
                    );
                  })
                ) : error ? (
                  <div className="absolute transform -translate-x-1/2 left-1/2">
                    <Errors
                      message={
                        axiosError &&
                        typeof axiosError?.response?.data?.detail === "string"
                          ? axiosError?.response?.data?.detail
                          : typeof axiosError?.response?.data?.detail ===
                            "object"
                          ? axiosError?.response?.data?.detail.err
                          : "Network error"
                      }
                    />
                  </div>
                ) : (
                  <div className=" absolute transform -translate-x-1/2 left-1/2">
                    <p className="text-center mx-auto mt-10 font-bold w-full">
                      Search for anything
                    </p>
                  </div>
                )}
              </section>
            </div>
          </main>
        </DialogContent>
      </Dialog>
    </main>
  );
}
