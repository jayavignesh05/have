"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

import ProductGrid from "@/components/ProductGrid";
import BentoGrid from "@/components/BentoGrid";
import FeaturedSplit from "@/components/FeaturedSplit";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import ScrollingMarquee from "@/components/ScrollingMarquee";
import ModernFashionHeroSlider from "@/components/ModernFashionHeroSlider";

import ValueProps from "@/components/ValueProps";
import Testimonials from "@/components/Testimonials";
import EditorialSection from "@/components/EditorialSection";
import BlogSection from "@/components/BlogSection";
import StorySection from "@/components/StorySection";
import CollectionSplit from "@/components/CollectionSplit";
import Navbar from "@/components/Navbar";

import { useState, useEffect } from "react";
import { Product } from "@/data/products";

// import { bestSellers, newIn } from "@/data/products"; // Removing static data imports

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products');
        if (res.ok) {
          const data = await res.json();
          setProducts(data);
        }
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    }
    fetchProducts();
  }, []);

  const bestSellers = products.length > 0 ? products.slice(0, 4) : [];
  const newIn = products.length > 0 ? products.slice(4, 8) : [];

  // 1. Scroll Tracking logic
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // 2. Parallax Animations (Magic happens here!)
  // y: Background moves down slightly (0% -> 20%) creates depth
  // scale: Background shrinks slightly (1 -> 0.95)
  // opacity: Background fades out slightly (1 -> 0.5) to focus on content
  const y = useTransform(scrollYProgress, [0, 1], ["-0%", "-90%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <main ref={containerRef} className="min-h-screen bg-white text-black font-sans relative">

      {/* Navbar - Fixed at top */}
      <Navbar />

      {/* -------------------------------------------------- */}
      {/* 1. STICKY PARALLAX HERO (Z-0) */}
      {/* -------------------------------------------------- */}
      <div className="sticky top-0 z-0 h-screen w-full overflow-hidden bg-black">
        <motion.div
          style={{ y, scale, opacity }}
          className="w-full h-full flex flex-col origin-top"
        >
          <ScrollingMarquee />
          <div className="flex-1 relative">
            <ModernFashionHeroSlider />
          </div>
        </motion.div>
      </div>

      {/* -------------------------------------------------- */}
      {/* 2. SCROLLABLE CONTENT (Z-10) */}
      {/* -------------------------------------------------- */}
      <div className="relative z-10 bg-white shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.25)] rounded-t-[2.5rem] mt-[-2vh]">

        {/* Bento Grid */}
        <Reveal delay={0.1}>
          <BentoGrid />
        </Reveal>

        {/* Products & Other Sections */}
        <div className="bg-white">

          <Reveal delay={0.1}>
            <div className="max-w-screen-2xl mx-auto px-6 py-24">
              <div className="flex justify-between items-end mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Best Sellers</h2>
                <a href="/shop" className="text-xs font-bold uppercase tracking-[0.3em] border-b border-black pb-1 hover:opacity-60 transition-opacity">View all</a>
              </div>
              <ProductGrid title="" products={bestSellers.slice(0, 4)} />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <EditorialSection />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="max-w-screen-2xl mx-auto px-6 py-24 bg-neutral-50/50">
              <div className="flex justify-between items-end mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">New In</h2>
                <a href="/shop" className="text-xs font-bold uppercase tracking-[0.3em] border-b border-black pb-1 hover:opacity-60 transition-opacity">View all</a>
              </div>
              <ProductGrid title="" products={newIn.slice(0, 4)} isNewIn />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <CollectionSplit />
          </Reveal>

          <Reveal delay={0.1}>
            <FeaturedSplit />
          </Reveal>

          <Reveal delay={0.1}>
            <Testimonials />
          </Reveal>

          <Reveal delay={0.1}>
            <StorySection />
          </Reveal>

          <Reveal delay={0.1}>
            <ValueProps />
          </Reveal>

          <Reveal delay={0.1}>
            <BlogSection />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="py-24">
              <InstagramFeed />
            </div>
          </Reveal>

          <Footer />
        </div>
      </div>


    </main>
  );
}