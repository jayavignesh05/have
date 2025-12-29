"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag } from "lucide-react";

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=2070&auto=format&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=150&auto=format&fit=crop&q=60",
        headline: "Bold Layers,\nConfident Looks.",
        description: "Layer up with confidence. Explore our new minimalist collection.",
        number: "01"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=2070&auto=format&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=150&auto=format&fit=crop&q=60",
        headline: "Urban Edge,\nModern Vibe.",
        description: "Streetwear essentials designed for the modern movement.",
        number: "02"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1492446845049-9c50cc313f00?q=80&w=2000&auto=format&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1492446845049-9c50cc313f00?w=150&auto=format&fit=crop&q=60",
        headline: "Classic Fits,\nTimeless Style.",
        description: "Elegance that never goes out of fashion. Discover more.",
        number: "03"
    }
];

export default function ModernFashionHeroSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black font-sans">
            {/* 1. Transparent Navbar Overlay */}
            <header className="absolute top-0 left-0 w-full z-50">
                {/* Free Shipping Banner */}
                <div className="w-full bg-white/10 backdrop-blur-sm py-2 text-center text-white text-[10px] uppercase tracking-[0.2em]">
                    Free Shipping on all orders
                </div>

                <nav className="flex items-center justify-between px-6 py-6 md:px-12">
                    {/* Logo in Center (Actually tricky to center with space-between, using flex-1) */}
                    <div className="flex-1 hidden md:block">
                        {/* Menu Links could go here but user said Logo in center */}
                    </div>

                    <div className="flex-1 flex justify-center">
                        <h1 className="text-white text-2xl font-bold tracking-[0.3em] uppercase">VEON</h1>
                    </div>

                    <div className="flex-1 flex justify-end items-center gap-6">
                        <button className="text-white hover:opacity-70 transition-opacity">
                            <Search size={20} />
                        </button>
                        <button className="text-white hover:opacity-70 transition-opacity relative">
                            <ShoppingBag size={20} />
                            <span className="absolute -top-1 -right-1 bg-white text-black text-[8px] rounded-full w-3 h-3 flex items-center justify-center font-bold">0</span>
                        </button>
                    </div>
                </nav>
            </header>

            {/* 2. Slider Logic - Background Layer */}
            <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={slides[activeIndex].image}
                            alt="Hero Background"
                            fill
                            className="object-cover brightness-75 scale-100" // User requested Zoom In (Scale 1 to 1.05) on active
                            priority
                        />
                        {/* Gradient Overlay for Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* 3. Foreground Content */}
            <div className="relative h-full flex flex-col justify-end pb-12 px-6 md:px-12 max-w-screen-2xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between gap-12">

                    {/* Typography (Bottom Left) */}
                    <div className="flex-1">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <h2 className="text-5xl md:text-8xl font-bold text-white leading-[0.9] tracking-tight whitespace-pre-line">
                                    {slides[activeIndex].headline}
                                </h2>

                                {/* 4. Thumbnail Navigation (Bottom Left) */}
                                <div className="mt-12 flex items-center gap-6">
                                    {slides.map((slide, index) => (
                                        <div key={slide.id} className="flex flex-col gap-2">
                                            <span className={`text-[10px] font-mono transition-colors ${activeIndex === index ? "text-white" : "text-white/40"}`}>
                                                {slide.number}
                                            </span>
                                            <button
                                                onClick={() => setActiveIndex(index)}
                                                className={`relative w-24 h-14 md:w-32 md:h-20 overflow-hidden rounded-sm border-2 transition-all duration-300 ${activeIndex === index ? "border-white scale-105" : "border-transparent opacity-60 hover:opacity-100"
                                                    }`}
                                            >
                                                <Image
                                                    src={slide.thumbnail}
                                                    alt={`Thumbnail ${slide.number}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Floating Card (Bottom Right/Center) */}
                    <div className="w-full md:w-auto md:max-w-xs mb-4 md:mb-12">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-sm text-white"
                        >
                            <p className="text-sm md:text-base text-white/80 leading-relaxed mb-8">
                                {slides[activeIndex].description}
                            </p>
                            <button className="group relative overflow-hidden bg-white text-black px-8 py-4 w-full text-xs font-bold uppercase tracking-widest transition-all">
                                <span className="relative z-10">Browse Collection</span>
                                <motion.div
                                    className="absolute inset-0 bg-black"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.span
                                    className="absolute inset-0 flex items-center justify-center text-white font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 z-20"
                                    transition={{ duration: 0.3 }}
                                >
                                    Browse Collection
                                </motion.span>
                            </button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
