"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SupportedCoins() {
  const coins = [
     "litecoin", "ripple", "neo",
    "polkadot", "cardano", "solana", "dogecoin", "binance", "chainlink"
  ];

  // Duplicate the coins array to create a seamless loop
  const marqueeCoins = [...coins, ...coins];

  return (
    <section className="px-4 sm:px-8 mb-24 text-center  mx-auto">
      <h2 className="text-2xl lg:text-5xl sm:text-3xl font-bold mb-4 lg:max-w-7xl">
        Supports a wide range of coins and tokens
      </h2>
      <p className="text-gray-400 mb-12 max-w-3xl mx-auto">
        From Bitcoin to emerging altcoins, our wallet supports a high range of cryptocurrencies,
        ensuring your assets are always protected and accessible.
      </p>
      <div className="marquee mb-12">
        <div className="marquee-content">
          {marqueeCoins.map((coin, i) => (
            <div 
              key={`${coin}-${i}`} 
              className="w-16 h-16 rounded-full bg-[#1f2937] flex items-center justify-center mx-4"
            >
              <Image
                src={`/coins/${coin}.svg`}
                alt={coin}
                width={32}
                height={32}
              />
            </div>
          ))}
        </div>
      </div>
      <Button variant="default" className="bg-[#278DDB] rounded-full hover:bg-[#1f2937]">
        See All Supported Cryptos
      </Button>
    </section>
  );
}