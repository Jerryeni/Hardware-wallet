"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ProductGrid() {
  const products = [
    {
      name: "Hardware wallet 1",
      price: "From $79.99",
      image: "/hardwarewallet1.png",
      description: "A trusted way to store and secure your coins with advanced security features"
    },
    {
      name: "Hardware wallet 2",
      price: "From $149.99",
      image: "/image2.png",
      description: "A trusted way to store and secure your coins with advanced security features"
    },
    {
      name: "Hardware wallet 3",
      price: "From $199.99",
      image: "/hardwarewallet3.png",
      description: "A trusted way to store and secure your coins with advanced security features"
    }
  ];

  return (
    <section className="px-4 sm:px-8 mb-24 lg:max-w-7xl mx-auto">
      <h2 className="text-2xl lg:text-5xl sm:text-3xl font-bold mb-12 text-center">
        Find the right hardware wallet for you
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <div key={i} className="bg-[#0a0a0a] rounded-3xl  border border-[#2a2a2a] flex flex-col  gap-4">
            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              className="mb-6 p-3  w-fullx mx-auto w-40"
            />
            <div className="flex flex-col rounded-3xl p-6 bg-gradient-to-b from-[#FFFFFF]/10 border-t border-t-white/20 to-transparent">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-400 text-sm mb-6">
                {product.description}
              </p>
              <Button variant="link" className="text-left w-fit text-[#BF9944] hover:text-[#1d4ed8] p-0">

                View details →
              </Button>
            </div>


          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10 items-center">
      <Button className="bg-[#278DDB] hover:bg-[#1d4ed8]  mr-4 rounded-full px-8 py-4 text-white">
        Explore shop →
      </Button>
      </div>
      
    </section>
  );
}