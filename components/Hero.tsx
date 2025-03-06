"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-center px-4 py-16 max-w-4xl mx-auto">
      <p className="text-gray-400 max-w-2xl mx-auto">
      Trusted by 1,000+ users
      </p>
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
        Secure your crypto with the<br className="hidden sm:block" />
        most trusted hardware wallet
      </h1>
      <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
        Protect your crypto, anytime, anywhere - offline, foolproof, and built to defend
      </p>
      <Button className="bg-[#278DDB] hover:bg-[#1d4ed8] mr-4 rounded-full px-8 py-4 text-white">
        Discover Wallet
      </Button>
      <Button className="bg-transparent border border-[#278DDB] shadow-sm  hover:text-white hover:border-gray-500 mr-4 rounded-full hover:shadow-lg px-8 py-4 text-white">
        Compare Wallets
      </Button>
      <div className="mt-12">
        <Image
          src="/hardwarewallet1.png"
          alt="Hardware Wallet"
          width={500}
          height={300}
          className="mx-auto"
          priority
        />
      </div>
    </section>
  );
}