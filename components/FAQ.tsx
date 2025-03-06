"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const questions = [
    "What is a hardware wallet, and how does it work?",
    "How do I set up my hardware wallet?",
    "Can I use this wallet without an internet connection?",
    "What happens if I lose my hardware wallet?",
    "How does the self-destruction feature work?",
    "How often should I update the firmware?",
    "How do I recover my wallet if it's lost or stolen?"
  ];

  return (
    <section className="px-4 sm:px-8 mb-24 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">Frequently asked questions</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {questions.map((question, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="border border-[#1f2937] rounded-lg px-6 py-4"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              voluptatibus quisquam id magnam.
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}