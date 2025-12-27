"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0.5]);

    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=2070&auto=format&fit=crop",
            thumbnail: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=150&auto=format&fit=crop&q=60",
            headline: "Bold Layers,<br />Confident Looks.",
            description: "Upgrade your wardrobe with crisp, versatile Shirts.",
            number: "01"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=2070&auto=format&fit=crop",
            thumbnail: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=150&auto=format&fit=crop&q=60",
            headline: "Urban Edge,<br />Modern Vibe.",
            description: "Streetwear essentials designed for the modern movement.",
            number: "02"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1492446845049-9c50cc313f00?q=80&w=2000&auto=format&fit=crop",
            thumbnail: "https://images.unsplash.com/photo-1492446845049-9c50cc313f00?w=150&auto=format&fit=crop&q=60",
            headline: "Classic Fits,<br />Timeless Style.",
            description: "Elegance that never goes out of fashion.",
            number: "03"
        }
    ];

    return (
        <section className="sticky top-0 h-screen w-full overflow-hidden z-0">
            {/* Background Image Transition */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ scale, opacity }}
                    className="absolute inset-0"
                >
                    <Image
                        src={slides[activeIndex].image}
                        alt="Hero Background"
                        fill
                        className="object-cover object-center brightness-[0.85]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            {/* Content */}
            <div className="relative h-full flex flex-col justify-end pb-12 px-8 sm:px-14 max-w-screen-2xl mx-auto text-white">

                {/* 1. Headline - Positioned above the bottom bar */}
                <div className="mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-sans font-bold leading-tight tracking-tight mb-6"
                    >
                        Bold Layers,<br />
                        Confident Looks.
                    </motion.h1>
                </div>

                {/* 2. Bottom Control Bar */}
                <div className="flex flex-col md:flex-row justify-between items-end w-full gap-8">

                    {/* Left: Number + Thumbnails */}
                    <div className="flex items-center gap-8">
                        {/* Number */}
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-2xl font-bold tracking-widest block"
                        >
                            03
                        </motion.span>

                        {/* Thumbnails */}
                        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide z-20">
                            {slides.map((slide, index) => (
                                <motion.div
                                    key={slide.id}
                                    onClick={() => setActiveIndex(index)}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    className={`w-32 h-20 relative rounded-lg overflow-hidden border cursor-pointer transition-all duration-300 flex-shrink-0 ${activeIndex === index ? "border-white scale-105 shadow-lg" : "border-white/20 hover:border-white/50"
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Image
                                        src={slide.thumbnail}
                                        alt="Thumbnail"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Description + Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col items-start md:items-end gap-6 max-w-xs text-left md:text-right"
                    >
                        <p className="text-sm text-gray-200 leading-relaxed">
                            Upgrade your wardrobe with<br className="hidden md:block" />
                            crisp, versatile Shirts.
                        </p>
                        <button className="bg-white/20 hover:bg-white hover:text-black backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded-sm text-sm font-medium transition-all duration-300">
                            Browse Collection
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
