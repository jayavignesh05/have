import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import BentoGrid from "@/components/BentoGrid";
import PromoBanner from "@/components/PromoBanner";
import FeaturedSplit from "@/components/FeaturedSplit";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

import { bestSellers, newIn } from "@/data/products";

import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-purple-50 dark:bg-[#121212]">
      <Navbar />
      <HeroSection />

      <div className="relative z-10 bg-[var(--background)] rounded-t-[2.5rem] -mt-4 min-h-screen">
        {/* 1. Bento Grid Categories */}
        <Reveal>
          <BentoGrid />
        </Reveal>

        {/* 2. Promo Banner */}
        <Reveal delay={0.1}>
          <PromoBanner />
        </Reveal>

        {/* 3. New In / Best Sellers (Reusing ProductGrid as 'Revived Gear' equivalent) */}
        <Reveal delay={0.1}>
          <div className="max-w-7xl mx-auto px-6 pt-10">
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-3xl font-serif font-bold text-white">Trend Alerts</h2>
              <a href="/shop" className="text-sm font-medium underline decoration-purple-400 underline-offset-4 hover:text-purple-300 transition-colors">View all</a>
            </div>
            <ProductGrid title="" products={newIn.slice(0, 4)} isNewIn />
          </div>
        </Reveal>

        {/* 4. Feature Split */}
        <Reveal delay={0.1}>
          <FeaturedSplit />
        </Reveal>

        {/* 5. Best Sellers */}
        <Reveal delay={0.1}>
          <ProductGrid title="Best Sellers" products={bestSellers.slice(0, 4)} />
        </Reveal>

        {/* 6. Instagram / Social Proof */}
        <Reveal delay={0.1}>
          <div className="py-20">
            <InstagramFeed />
          </div>
        </Reveal>

        <Footer />
      </div>
    </main>
  );
}
