"use client";

import { motion } from "framer-motion";

export default function FeaturedSplit() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20 bg-gray-50 dark:bg-[#1A1A1A]/30 rounded-3xl my-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left: Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl skew-y-3 transform md:hover:skew-y-0 transition-transform duration-700"
                >
                    <img
                        src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=2000&auto=format&fit=crop"
                        alt="Premium Quality"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Right: Content */}
                <div className="px-4 md:pl-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif font-bold mb-6 text-purple-950 dark:text-white"
                    >
                        Premium Design <br />
                        and Quality
                    </motion.h2>
                    <p className="text-purple-800/70 dark:text-gray-400 mb-6 text-lg">
                        Every stitch tells a story. We believe in sustainable fashion that doesn't compromise on style. Our materials are sourced ethically and crafted by master artisans.
                    </p>
                    <ul className="space-y-4 mb-8">
                        {['Ethically Sourced', 'Premium Cotton', 'Master Craftsmanship'].map((item) => (
                            <li key={item} className="flex items-center text-purple-900 dark:text-purple-200">
                                <span className="material-icons text-purple-600 mr-3">check_circle</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <button className="bg-purple-900 dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm hover:shadow-lg hover:scale-105 transition-all">
                        Read Our Story
                    </button>
                </div>
            </div>
        </section>
    );
}
