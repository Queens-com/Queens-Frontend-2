"use client";
import React, { useState } from "react";
import Filter from "../Filter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { constants } from "@/config/constants";
const { STORE_FILTERS } = constants;
const category = [
  {
    name: "earrings",
  },
  {
    name: "necklaces",
  },
  {
    name: "braceletes",
  },
];

export default function Dior() {
  const [active, setActive] = useState("earrings");
  return (
    <main>
      <header className="bg-[#F5F5F5] flex items-center justify-center gap-16 py-2">
        <p className="text-5xl font-bold">Dior</p>
        <div className=" gap-8 hidden sm:flex text-sm">
          {category.map((cat, i) => {
            return (
              <p
                onClick={() => setActive(cat.name)}
                className={`capitalize hover:border-b-4 hover:opacity-50 hover:border-b-black pb-2 cursor-pointer ${
                  active === cat.name && "border-b-black border-b-4"
                }`}
              >
                {cat.name}
              </p>
            );
          })}
        </div>
      </header>
      <div className="flex p-3 px-20">
        <section className="md:w-1/4 lg:w-1/5">
          <Filter cat={active} store="dior" />
        </section>
        <section className="md:w-2/3"></section>
      </div>
    </main>
  );
}
