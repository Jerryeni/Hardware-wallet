"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SecurityFeature() {
  return (
    <section className="px-4 sm:px-8 py-16 lg:max-w-7xl lg:mx-auto flex flex-col sm:flex-row items-center justify-between gap-12 mb-24">
      <div className="max-w-xl">
        <h2 className="text-3xl lg:text-5xl sm:text-4xl font-medium mb-6 leading-tight">
          Secure your transactions<br />
          <span className="text-[#BF9944]">physically</span> with our<br />
          hardware wallets
        </h2>
        
      </div>
      <Image
        src="/hardwarewallet1.png"
        alt="Secure Wallet"
        width={500}
        height={400}
        className="w-full sm:w-auto"
      />
    </section>
  );
}