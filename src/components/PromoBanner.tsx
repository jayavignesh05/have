"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PromoBanner() {
    return (
        <section className="max-w-7xl mx-auto px-6 pb-20">
            <div className="bg-[#111] dark:bg-black rounded-3xl overflow-hidden relative grid grid-cols-1 md:grid-cols-2 min-h-[400px]">

                {/* Text Content */}
                <div className="p-12 flex flex-col justify-center relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-white text-4xl md:text-5xl font-serif font-bold leading-tight mb-6"
                    >
                        The New <br />
                        <span className="text-purple-400">Midnight Collection</span>
                    </motion.h2>
                    <p className="text-gray-400 mb-8 max-w-sm">
                        Experience privacy and luxury like never before. Our newest collection brings dark tones and premium comfort to your wardrobe.
                    </p>
                    <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wide w-max hover:bg-purple-100 transition-colors">
                        Explore Collection
                    </button>
                </div>

                {/* Hero Image / Product Visualization */}
                <div className="relative h-[300px] md:h-full bg-gradient-to-br from-purple-900/20 to-black">
                    {/* Using a placeholder image that fits the dark aesthetic */}
                    <Image
                        src="https://images.unsplash.com/photo-1492446845049-9c50cc313f00?q=80&w=2000&auto=format&fit=crop"
                        alt="Midnight Collection"
                        fill
                        className="object-cover opacity-80 mix-blend-screen"
                    />
                </div>
            </div>
        </section>
    );
}
