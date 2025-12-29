"use client";

import { motion } from "framer-motion";

export default function ScrollingMarquee() {
    const items = [
        "FREE SHIPPING ON ALL ORDERS",
        "NEW DROP: AUTUMN COLLECTION",
        "AUTHENTIC DESIGN",
        "SUSTAINABLE MATERIALS",
    ];

    return (
        <div className="bg-white/50 py-4 overflow-hidden border-y border-white/30 ">
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex gap-20 items-center px-10"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {Array(10).fill(0).map((_, i) => (
                        <div key={i} className="flex gap-20 items-center">
                            {items.map((item, index) => (
                                <span key={index} className="text-black text-xs font-bold tracking-[0.2em] uppercase">
                                    {item}
                                </span>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
