"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="px-4 sm:px-8 py-16 border-t border-[#1f2937]  max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between gap-20">
        <div className="max-w-xl">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-medium mb-3">
            Join Our Newsletter for<br />
            Exclusive Updates
          </h2>
          <p className="text-gray-400 mb-6">
            Sign up to receive regular updates and insider news
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#0a0a0a] border-white/5 rounded-full  px-4 py-2 flex-1 border focus:outline-none focus:border-[#2563eb]/30"
            />
            <Button className="bg-[#BF9944] hover:bg-[#1d4ed8]/20 rounded-full px-8">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="max-w-xl mx-auto">
          <h3 className="text-2xl sm:text-3xl lg:text-5xl font-medium mb-6">Connect with us</h3>
          <div className="flex gap-4">
            {['icon', 'icon1', 'icon2', 'icon3', 'icon4', 'icon5', 'icon6', 'icon7'].map((social) => (
              <a
                key={social}
                href={`#${social}`}
                className="w-16 h-16 flex items-center justify-center hover:bg-[#2563eb] transition-colors"
              >
                <Image
                  src={`/icons/${social}.svg`}
                  alt={social}
                  width={40}
                  height={40}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}