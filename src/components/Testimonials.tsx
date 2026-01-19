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
    // Duplicate testimonials for seamless looping (4 sets to ensure 50% move is seamless and covers wide screens)
    const displayTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

    return (
        <section className="bg-neutral-50 py-12 md:py-24 overflow-hidden relative">
            <div className="max-w-full">
                <div className="text-center mb-16 px-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 mb-4 block">Feedback</span>
                    <h2 className="text-4xl font-bold tracking-tight text-black">Trusted by Many</h2>
                </div>

                <div
                    className="relative w-full overflow-hidden"
                    style={{
                        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
                    }}
                >
                    <motion.div
                        className="flex gap-6 w-max"
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30, // Adjusted duration for smooth speed
                                ease: "linear",
                            },
                        }}
                    >
                        {displayTestimonials.map((t, index) => (
                            <div
                                key={index}
                                className="w-[350px] md:w-[450px] flex-shrink-0 bg-white p-8 md:p-10 flex flex-col justify-between rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="mb-6">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                        ))}
                                    </div>
                                    <p className="text-lg md:text-xl font-medium text-black leading-relaxed">&quot;{t.quote}&quot;</p>
                                </div>
                                <div className="flex items-center gap-4 pt-6 border-t border-neutral-50">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden grayscale opacity-80">
                                        <Image src={t.avatar} alt={t.author} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm tracking-tight text-black">{t.author}</h4>
                                        <p className="text-[10px] text-neutral-400 uppercase tracking-widest">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
