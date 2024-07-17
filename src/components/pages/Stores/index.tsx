import { STORES } from "@/config/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Stores() {
  return (
    <main className="p-3 lg:px-14 md:px-10">
      <header className="md:w-3/5">
        <p className="font-bold text-xl">Choose a Store</p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>
      </header>
      <section className="grid sm:grid-cols-3 grid-cols-2 md:gap-10 sm:gap-6 gap-4 mt-10">
        {STORES.map((store) => {
          return (
            <Link
              href={store.link}
              key={store.name}
              className={`${
                store.disabled
                  ? "hidden"
                  : " shadow-md w-full max-w-[21rem] h-[10rem] flex justify-center items-center border-[0.1px] rounded-md hover:border hover:border-black"
              }`}
            >
              <Image
                src={`${store.image}`}
                width={100}
                height={100}
                alt="store"
                className=""
              />
            </Link>
          );
        })}
      </section>
    </main>
  );
}
