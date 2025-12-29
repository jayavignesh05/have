import ProductGrid from "@/components/ProductGrid";
import BentoGrid from "@/components/BentoGrid";
import FeaturedSplit from "@/components/FeaturedSplit";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import ScrollingMarquee from "@/components/ScrollingMarquee";
import ModernFashionHeroSlider from "@/components/ModernFashionHeroSlider";
import NewsletterModal from "@/components/NewsletterModal";
import ValueProps from "@/components/ValueProps";
import Testimonials from "@/components/Testimonials";
import EditorialSection from "@/components/EditorialSection";
import BlogSection from "@/components/BlogSection";
import StorySection from "@/components/StorySection";
import CollectionSplit from "@/components/CollectionSplit";

import { bestSellers, newIn } from "@/data/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <ScrollingMarquee />
      <ModernFashionHeroSlider />

      <div className="relative z-10 bg-white">
        {/* 1. Best Sellers */}
        <Reveal delay={0.1}>
          <div className="max-w-screen-2xl mx-auto px-6 py-24">
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Best Sellers</h2>
              <a href="/shop" className="text-xs font-bold uppercase tracking-[0.3em] border-b border-black pb-1 hover:opacity-60 transition-opacity">View all</a>
            </div>
            <ProductGrid title="" products={bestSellers.slice(0, 4)} />
          </div>
        </Reveal>

        {/* 2. Editorial Section */}
        <Reveal delay={0.1}>
          <EditorialSection />
        </Reveal>

        {/* 3. New In */}
        <Reveal delay={0.1}>
          <div className="max-w-screen-2xl mx-auto px-6 py-24 bg-neutral-50/50">
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">New In</h2>
              <a href="/shop" className="text-xs font-bold uppercase tracking-[0.3em] border-b border-black pb-1 hover:opacity-60 transition-opacity">View all</a>
            </div>
            <ProductGrid title="" products={newIn.slice(0, 4)} isNewIn />
          </div>
        </Reveal>

        {/* 4. Collection Split */}
        <Reveal delay={0.1}>
          <CollectionSplit />
        </Reveal>

        {/* 5. Elevate Your Style (Feature Split) */}
        <Reveal delay={0.1}>
          <FeaturedSplit />
        </Reveal>

        {/* 6. Testimonials */}
        <Reveal delay={0.1}>
          <Testimonials />
        </Reveal>

        {/* 7. Our Story Section */}
        <Reveal delay={0.1}>
          <StorySection />
        </Reveal>

        {/* 8. Value Propositions */}
        <Reveal delay={0.1}>
          <ValueProps />
        </Reveal>

        {/* 9. Blog Section */}
        <Reveal delay={0.1}>
          <BlogSection />
        </Reveal>

        {/* 10. Bento Categories */}
        <Reveal delay={0.1}>
          <BentoGrid />
        </Reveal>

        {/* 11. Instagram / Social Proof */}
        <Reveal delay={0.1}>
          <div className="py-24">
            <InstagramFeed />
          </div>
        </Reveal>

        <Footer />
      </div>
      <NewsletterModal />
    </main>
  );
}
