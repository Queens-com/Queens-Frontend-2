import { X } from "lucide-react";
import React from "react";
import OrderCart from "./OrderCart";
import Link from "next/link";
import { routes } from "@/config/routes";

export default function OrderSummary({ check }: { check: boolean }) {
  return (
    <main className="p-2 border text-sm">
      <section className=" py-3 space-y-4">
        <header className="flex justify-between items-center">
          <p className="text-xl font-bold">Order Summary</p>
          <X size={15} />
        </header>
        <div>
          {[1, 2].map((_, i) => {
            return (
              <div key={i}>
                <OrderCart />
              </div>
            );
          })}
        </div>
        <footer className="flex justify-between gap-4 items-center">
          <input
            type="text"
            placeholder="Coupon code"
            className="rounded-xl border p-1 text-xs"
          />
          <button className="bg-[#C6C6C6] p-1 px-2 rounded-2xl text-xs text-white">
            Add Code
          </button>
        </footer>
      </section>
      <section className="space-y-2 border-t py-2">
        <div className="flex justify-between items-center gap-4">
          <p>Subtotal</p>
          <p>$101.97</p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p>Shipping</p>
          <p className="text-green-300 uppercase">Free</p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p>discount</p>
          <p>-</p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p>Tax</p>
          <p>-</p>
        </div>
        <div className="flex justify-between items-center gap-4 border-t pt-3 mt-3">
          <p>Total</p>
          <p>$101.97</p>
        </div>
        <div className={`${check && "hidden"}  pt-4 w-full`}>
          <button className="text-white bg-black rounded-xl w-full p-1">
            <Link href={routes.cart.customer}>Checkout</Link>
          </button>
        </div>
      </section>
    </main>
  );
}
