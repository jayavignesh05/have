"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

export default function FeaturedSplit() {
    return (
        <section className="bg-neutral-50 px-6 py-24 md:py-32 overflow-hidden">
            <div className="max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">

                    {/* Left: Content */}
                    <div className="order-2 md:order-1">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 mb-6 block"
                        >
                            Our Philosophy
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold mb-8 text-black leading-tight tracking-tight"
                        >
                            Premium Design <br />
                            and Quality
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-neutral-600 mb-10 text-lg leading-relaxed max-w-xl"
                        >
                            Every stitch tells a story. We believe in sustainable fashion that doesn&apos;t compromise on style. Our materials are sourced ethically and crafted by master artisans.
                        </motion.p>

                        <motion.ul
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="space-y-6 mb-12"
                        >
                            {['Ethically Sourced Materials', 'Premium Grade Fabric', 'Masterfully Crafted Details'].map((item) => (
                                <li key={item} className="flex items-center text-black font-bold text-sm tracking-tight">
                                    <div className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center mr-4 shrink-0">
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </motion.ul>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="group relative overflow-hidden bg-black text-white px-10 py-5 text-xs font-bold uppercase tracking-widest transition-all"
                        >
                            <span className="relative z-10 transition-colors group-hover:text-black">Read Our Story</span>
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </motion.button>
                    </div>

                    {/* Right: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="order-1 md:order-2 relative aspect-[4/5] overflow-hidden"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=2000&auto=format&fit=crop"
                            alt="Premium Quality"
                            fill
                            className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
