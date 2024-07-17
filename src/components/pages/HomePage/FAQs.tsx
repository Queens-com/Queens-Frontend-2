import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { constants } from "@/config/constants";
import React from "react";
const { FAQ } = constants;

const FAQs = () => {
  return (
    <div className="md:px-24 p-2 mb-20">
      <h2 className="text-3xl font-semibold text-center">
        Frequently asked Questions
      </h2>
      <section className="md:px-32 sm:px-14">
        <Accordion type="single" collapsible className="">
          {FAQ.map((f, i) => {
            return (
              <AccordionItem value={f.question} key={f.question}>
                <AccordionTrigger className="capitalize font-semibold">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  <p>{f.answer}</p>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </section>
    </div>
  );
};

export default FAQs;
