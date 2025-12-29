"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        quote: "The T-shirts are next-level comfort! They are incredibly soft, breathable, and hold their shape even after multiple washes.",
        author: "Lily Thompson",
        role: "Verified Buyer",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    },
    {
        quote: "My wardrobe has completely transformed. I can confidently say these are the best basics I've ever worn.",
        author: "Daniel Wong",
        role: "Verified Buyer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    },
    {
        quote: "I love how they fit perfectly without feeling too tight or too loose. It's rare to find such a great balance of style and comfort.",
        author: "Emma Lewis",
        role: "Verified Buyer",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    },
    {
        quote: "I'm obsessed with the cargo pants! The fit is spot-on, and the quality is unmatched. I've already ordered a second pair.",
        author: "Noah Richardson",
        role: "Verified Buyer",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-neutral-50 py-24 px-6 overflow-hidden">
            <div className="max-w-screen-2xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 mb-4 block">Feedback</span>
                    <h2 className="text-4xl font-bold tracking-tight text-black">Trusted by Many</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-12 flex flex-col items-center text-center rounded-sm border border-neutral-100"
                        >
                            <div className="relative w-16 h-16 rounded-full overflow-hidden mb-8 grayscale">
                                <Image src={t.avatar} alt={t.author} fill className="object-cover" />
                            </div>
                            <p className="text-xl md:text-2xl font-medium text-black leading-relaxed">&quot;{t.quote}&quot;</p>
                            <div>
                                <h4 className="font-bold text-sm tracking-tight">{t.author}</h4>
                                <p className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
