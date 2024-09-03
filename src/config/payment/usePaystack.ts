"use client";
import { useMutation } from "@tanstack/react-query";
import { apiRoutes } from "../routes";
import queens from "../queens";
import { useRouter } from "next/navigation";

const { payment: Payment } = apiRoutes;

const usePaystack = () => {
  const router = useRouter();
  const {
    mutate: paystackPay,
    isPending: paystackLoading,
    error: paystackError,
    data,
  } = useMutation({
    mutationFn: async ({
      amount,
      redirect_url,
    }: {
      amount: string;
      redirect_url: string;
    }) => {
      const payload = {
        amount: amount,
        redirect_url: redirect_url,
      };
      console.log(payload);
      return await queens.post(Payment.paystack.index, payload);
    },
    onError: (err) => {
      return err;
    },
    onSuccess: (data) => {
      console.log(data?.data?.response?.data?.authorization_url);
      router.push(data?.data?.response?.data?.authorization_url);
      // snackbar({
      //   description: "Check your email for your OTP",
      //   message: "",
      // });
    },
  });

  return { paystackPay, paystackLoading, paystackError, data };
};

export default usePaystack;
