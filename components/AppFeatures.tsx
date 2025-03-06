"use client";

import Image from "next/image";
import { Button } from "./ui/button";

export default function AppFeatures() {
  const features = [
    {
      title: "Buying, selling and swapping",
      description: "Trade crypto assets securely and easily",
      image: "/image4.png"
    },
    {
      title: "Portfolio tracking",
      description: "Monitor your investments in real-time",
      image: "/safepal.png"
    },
    {
      title: "Stay on top of your assets",
      description: "Track your portfolio in real-time, make informed decisions",
      image: "/image4.png"
    }
  ];

  return (
    <section className="px-4 sm:px-8 mb-24 md:max-w-7xl mx-auto">
      <div className="flex items-center max-w-5xl gap-3 mb-12 text-2xl lg:text-5xl sm:text-3xl">
        
        <p><span className="text-[#eab308]/80 mr-2">Lorem Ipsum</span>- The crypto companion app for your hardware crypto wallet</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <div key={i} className="bg-[#0a0a0a] rounded-3xl  border border-[#2a2a2a] flex flex-col  gap-4x">
            <Image
              src={feature.image}
              alt={feature.title}
              width={100}
              height={100}
              className=" px-6 pt-3  w-full"
            />
            <div className="flex flex-col backdrop-blur-2xl backdrop-brightness-50 rounded-3xl p-6 bg-gradient-to-b from-[#FFFFFF]/10 border-t border-t-white/20 to-transparent">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm mb-6">
                {feature.description}
              </p>
              <Button variant="link" className="text-left w-fit text-[#BF9944] hover:text-[#1d4ed8] p-0">

                View details →
              </Button>
            </div>


          </div>
        ))}
      </div>
    </section>
  );
}