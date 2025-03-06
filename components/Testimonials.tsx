"use client";

import { Star } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = Array(4).fill({
    name: "Marco Reus",
    handle: "@marcoreus",
    text: "Best hardware wallet I've ever used. Simple, secure, and reliable.",
    rating: 5
  });

  return (
    <section className="px-4 sm:px-8 mb-24 mx-auto max-w-7xl">
      <h2 className="text-2xl sm:text-3xl font-bold mb-12 lg:text-5xl text-center">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="bg-[#0a0a0a] border border-white/20 rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#1f2937]  rounded-full overflow-hidden">
                <Image
                  src="/image.png"
                  alt={testimonial.name}
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.handle}</p>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {Array(testimonial.rating).fill(null).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#eab308] text-[#eab308]" />
              ))}
            </div>
            <p className="text-sm text-gray-400">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}