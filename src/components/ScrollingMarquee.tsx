"use client";

import { motion } from "framer-motion";
import { useShop } from "@/context/ShopContext";

export default function ScrollingMarquee() {
    const { hasHomeLoaded } = useShop();
    const items = [
        "FREE SHIPPING ON ALL ORDERS",
        "NEW DROP: AUTUMN COLLECTION",
        "AUTHENTIC DESIGN",
        "SUSTAINABLE MATERIALS",
    ];

    return (
        <motion.div
            initial={!hasHomeLoaded ? { opacity: 0, filter: "blur(10px)" } : { opacity: 1, filter: "blur(0px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={!hasHomeLoaded ? { duration: 1, delay: 0.2 } : { duration: 0 }}
            className="bg-white/50 py-4 overflow-hidden border-y border-white/30 "
        >
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
        </motion.div>
    );
}
