"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function NewsletterModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-4xl bg-white overflow-hidden flex flex-col md:flex-row shadow-2xl"
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 z-20 text-black hover:opacity-50 transition-opacity"
                    >
                        <X size={24} />
                    </button>

                    {/* Left: Image */}
                    <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=2070&auto=format&fit=crop"
                            alt="Newsletter"
                            fill
                            className="object-cover grayscale"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-1/2 p-12 flex flex-col justify-center text-center md:text-left">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 mb-4 block">Newsletter</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight tracking-tight">
                            Join the <br /> Veon Club.
                        </h2>
                        <p className="text-neutral-500 text-sm mb-8 leading-relaxed">
                            Be the first to know about new arrivals, exclusive events and special offers.
                        </p>

                        <form className="relative group">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full border-b border-neutral-200 py-4 pr-12 text-sm outline-none focus:border-black transition-colors placeholder:text-neutral-300"
                                required
                            />
                            <button className="absolute right-0 bottom-4 text-black group-hover:translate-x-1 transition-transform">
                                <ArrowRight size={20} />
                            </button>
                        </form>

                        <p className="mt-8 text-[10px] text-neutral-400 uppercase tracking-widest font-bold">
                            Unsubscribe anytime.
                        </p>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
