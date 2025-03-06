"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-4 sm:px-8 py-6 border-t border-[#1f2937] max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Image src="/icons/icon6.svg" alt="wwallet" width={24} height={24} />
          <span className="font-semibold">HardwareWallet</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-white text-sm">Terms</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">Contact</a>
        </div>
      </div>
    </footer>
  );
}