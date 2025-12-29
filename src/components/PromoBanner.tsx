"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PromoBanner() {
    return (
        <section className="px-6 py-20 pb-32">
            <div className="max-w-screen-2xl mx-auto">
                <div className="bg-black overflow-hidden relative grid grid-cols-1 md:grid-cols-2 min-h-[500px]">

                    {/* Text Content */}
                    <div className="p-12 md:p-20 flex flex-col justify-center relative z-10">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500 mb-8 block"
                        >
                            Limited Edition
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-white text-4xl md:text-6xl font-bold leading-tight mb-8 tracking-tight"
                        >
                            The New <br />
                            Midnight Series.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-neutral-400 mb-12 max-w-sm leading-relaxed"
                        >
                            Experience privacy and luxury like never before. Our newest collection brings dark tones and premium comfort to your wardrobe.
                        </motion.p>
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="group relative overflow-hidden bg-white text-black px-10 py-5 w-max text-xs font-bold uppercase tracking-widest transition-all"
                        >
                            <span className="relative z-10 transition-colors group-hover:text-white">Explore Collection</span>
                            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </motion.button>
                    </div>

                    {/* Hero Image */}
                    <div className="relative h-[400px] md:h-full overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1492446845049-9c50cc313f00?q=80&w=2000&auto=format&fit=crop"
                            alt="Midnight Collection"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
