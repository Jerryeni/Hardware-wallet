"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function FeatureBanner() {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF]/20 to-transparent lg:max-w-7xl lg:mx-auto rounded-3xl mx-4 sm:mx-8 p-6 sm:p-8 flex flex-col border border-white/20 sm:flex-row items-center justify-between gap-8 mb-24">
      <div className="max-w-mdx">
        <h2 className="text-2xl lg:text-5xl sm:text-3xl font-medium mb-3">
          Shop the Ultimate Defense<br />
          for Your Digital Assets
        </h2>
        <p className="text-gray-400 font-light mb-6">
          4 brand new colors available now
        </p>
        <Button className="bg-[#278DDB] hover:bg-[#1d4ed8]  mr-4 rounded-full px-8 py-4 text-white">
          Explore shop →
        </Button>
      </div>
      <div className="relative w-full sm:w-auto">
        <Image
          src="/img1.png"
          alt="Wallet Stack"
          width={400}
          height={250}
          className="w-full sm:w-auto"
        />
      </div>
    </section>
  );
}