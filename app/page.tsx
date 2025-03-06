"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureBanner from "@/components/FeatureBanner";
import ProductGrid from "@/components/ProductGrid";
import SecurityFeature from "@/components/SecurityFeature";
import SupportedCoins from "@/components/SupportedCoins";
import AppFeatures from "@/components/AppFeatures";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <FeatureBanner />
      <ProductGrid />
      <SecurityFeature />
      <SupportedCoins />
      <AppFeatures />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
}