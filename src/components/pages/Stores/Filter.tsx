"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { constants } from "@/config/constants";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const { STORE_FILTERS } = constants;

interface FilterProp {
  cat: string;
  store: string;
  store_filter?: {
    name: string;
    options: { name: string; onPress: () => void }[];
    disabled: boolean;
  }[];
}

export default function Filter({ cat, store, store_filter }: FilterProp) {
  return (
    <main className="w-full sticky top-0">
      <header className="sm:flex hidden gap-1 items-center capitalize text-sm ">
        <p>Stores /</p>
        <p>{store} /</p>
        <p>{cat}</p>
      </header>
      <div className="flex justify-between items-center pt-8 pb-4">
        <p className="text-3xl font-bold">Filters</p>
        <button className="text-sm text-gray-500 font-semibold">Reset</button>
      </div>
      <div>
        <Accordion type="single" collapsible className="">
          {store_filter
            ? store_filter?.map((store, map) => {
                return (
                  <AccordionItem value={store.name} key={store.name}>
                    <AccordionTrigger className="capitalize font-semibold">
                      {store.name}
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3">
                      <RadioGroup>
                        {store.options.map((opt) => (
                          <div
                            key={opt.name}
                            className="flex items-center space-x-2 capitalize"
                          >
                            <RadioGroupItem
                              key={opt.name}
                              value={opt.name}
                              id={opt.name}
                            />
                            <p>{opt.name}</p>
                          </div>
                        ))}
                      </RadioGroup>
                    </AccordionContent>
                  </AccordionItem>
                );
              })
            : null}
        </Accordion>
      </div>
    </main>
  );
}
