"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 sm:px-8 py-4">
      <div className="flex items-center gap-2">
        <Image src="/coins/polkadot.svg" alt="hardware-wallet" width={24} height={24} />
        <span className="font-semibold">Hardwar-tWallet</span>
      </div>
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-gray-400 hover:text-white">Home</a>
          <a href="#" className="text-gray-400 hover:text-white">Products</a>
          <a href="#" className="text-gray-400 hover:text-white">Support</a>
        </nav>
        <Button variant="outline" className="border-[#1f2937] hover:bg-[#1f2937]">
          Cart (0)
        </Button>
      </div>
    </header>
  );
}