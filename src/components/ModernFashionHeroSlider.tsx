"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useShop } from "@/context/ShopContext";

const slides = [
    {
        id: 1,
        image: "/images/first.png",
        thumbnail: "/images/first.png",
        headline: "Bold Layers,\nConfident Looks.",
        description: "Layer up with confidence. Explore our new minimalist collection.",
        number: "01"
    },
    {
        id: 2,
        image: "/images/secound.png",
        thumbnail: "/images/secound.png",
        headline: "Urban Edge,\nModern Vibe.",
        description: "Streetwear essentials designed for the modern movement.",
        number: "02"
    },
    {
        id: 3,
        image: "/images/thired.avif",
        thumbnail: "/images/thired.avif",
        headline: "Classic Fits,\nTimeless Style.",
        description: "Elegance that never goes out of fashion. Discover more.",
        number: "03"
    }
];

export default function ModernFashionHeroSlider() {
    const { hasHomeLoaded } = useShop();
    const [activeIndex, setActiveIndex] = useState(0);
    const isMounting = useRef(true);

    useEffect(() => {
        isMounting.current = false;
    }, []);

    const getInitialProps = () => {
        // 1. First Page Load: Blur In
        if (!hasHomeLoaded) return { opacity: 0.8, scale: 1.1, filter: "blur(10px)" };

        // 2. Returning to Home (Re-mount): Static (No Animation)
        if (isMounting.current) return { opacity: 1, scale: 1, filter: "blur(0px)" };

        // 3. Slide Change: Standard Cross-fade
        return { opacity: 0, scale: 1.1, filter: "blur(0px)" };
    };

    const getTransitionProps = () => {
        if (!hasHomeLoaded) return { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const };
        if (isMounting.current && hasHomeLoaded) return { duration: 0 }; // Instant
        return { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const };
    };

    return (
        <section className="relative h-[100dvh] w-full overflow-hidden bg-black font-sans transition-all duration-500">


            {/* 2. Slider Logic - Background Layer */}
            <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={getInitialProps()}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, filter: "blur(5px)" }}
                        transition={getTransitionProps()}
                        className="absolute inset-0"
                    >
                        <Image
                            src={slides[activeIndex].image}
                            alt="Hero Background"
                            fill
                            className="object-cover object-top md:object-center brightness-100 transition-all duration-1000"
                            priority
                        />

                    </motion.div>
                </AnimatePresence>
            </div>

            {/* 3. Foreground Content */}
            <motion.div
                initial={!hasHomeLoaded ? { opacity: 0, filter: "blur(10px)" } : { opacity: 1, filter: "blur(0px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={!hasHomeLoaded ? { duration: 1, delay: 0.2 } : { duration: 0 }}
                className="relative h-full flex flex-col justify-end pb-2 md:pb-12 px-4 md:px-6 max-w-screen-2xl mx-auto z-10"
            >

                {/* Headlines (Large, Left Aligned) */}
                <div className="">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h2 className="text-3xl md:text-[5rem] font-medium text-white leading-[0.85] tracking-tighter whitespace-pre-line ">
                                {slides[activeIndex].headline}
                            </h2>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex flex-col-reverse md:flex-row items-end md:items-center justify-between gap-8 md:gap-12 w-full mb-10">
                    <div className="flex items-end gap-4 md:gap-6 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                onClick={() => setActiveIndex(index)}
                                className="group flex flex-col items-start gap-2 outline-none"
                            >
                                {/* 1. The Number (01, 02...) */}
                                <span
                                    className={`text-[10px] font-bold tracking-widest transition-all duration-300 ${activeIndex === index
                                        ? "text-white opacity-100 translate-y-0"
                                        : "text-white/50 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                                        }`}
                                >
                                    {slide.number}
                                </span>

                                {/* 2. The Thumbnail Image */}
                                <div
                                    className={`relative w-24 md:w-32 h-16 md:h-20 rounded-lg overflow-hidden transition-all duration-100 ease-out flex-shrink-0 ${activeIndex === index
                                        ? " opacity-100 scale-110"
                                        : "opacity-100 hover:opacity-100 hover:scale-105 grayscale hover:grayscale-0"
                                        }`}
                                >
                                    <img
                                        src={slide.image}
                                        alt={slide.headline}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Optional: Dark Overlay on inactive ones */}
                                    {activeIndex !== index && (
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* CTA Section (Bottom Center/Right Aligned Contextually but simplified) */}
                    <div className="w-full md:max-w-md">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="flex flex-col gap-8"
                            >
                                <p className="text-md md:text-lg text-white/80 leading-relaxed font-light max-w-sm">
                                    {slides[activeIndex].description}
                                </p>

                                <button className="group relative w-fit rounded-full flex items-center gap-4 bg-white text-black px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] transition-all ">
                                    <Link href="/shop">Discover Collection</Link>
                                </button>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}
