"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
    {
        id: 1,
        title: "New Arrivals",
        subtitle: "Latest Minimalist Trends.",
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80",
        href: "/shop?category=new",
        className: "md:col-span-2 md:row-span-2",
        span: "01"
    },
    {
        id: 2,
        title: "Accessories",
        subtitle: "Watches & More.",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80",
        href: "/shop?category=accessories",
        className: "md:col-span-1 md:row-span-1",
        span: "02"
    },
    {
        id: 3,
        title: "Tops",
        subtitle: "Jackets & Coats.",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80",
        href: "/shop?category=Tops",
        className: "md:col-span-1 md:row-span-1",
        span: "03"
    },
    {
        id: 4,
        title: "Bottoms",
        subtitle: "Boots & Sneakers.",
        image: "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?auto=format&fit=crop&w=600&q=80",
        href: "/shop?category=Bottoms",
        className: "md:col-span-2 md:row-span-1",
        span: "04"
    },
];

export default function BentoGrid() {
    return (
        <section className="max-w-screen-2xl mx-auto px-4 py-12 md:px-6 md:py-24">
            <div className="flex justify-between items-end mb-8 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Shop by Category</h2>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">Curated Collections</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[240px]">
                {categories.map((item, index) => (
                    <Link
                        key={item.id}
                        href={item.href}
                        className={`relative group overflow-hidden bg-neutral-100 rounded-xl ${item.className}`}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="w-full h-full relative"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                            <div className="absolute inset-0 p-8 flex flex-col justify-between ">
                                <span className="text-white text-[10px] font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">{item.span}</span>
                                <div>
                                    <h3 className="text-white text-2xl font-bold tracking-tight mb-2">{item.title}</h3>
                                    <p className="text-white/70 text-xs font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
