"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
    {
        id: 1,
        title: "New Arrivals",
        subtitle: "Latest Men's Trends.",
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80",
        href: "/shop?category=new",
        className: "md:col-span-2 md:row-span-2",
    },
    {
        id: 2,
        title: "Accessories",
        subtitle: "Watches & More.",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80",
        href: "/shop?category=accessories",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        id: 3,
        title: "Outerwear",
        subtitle: "Jackets & Coats.",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80",
        href: "/shop?category=outerwear",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        id: 4,
        title: "Footwear",
        subtitle: "Boots & Sneakers.",
        image: "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?auto=format&fit=crop&w=600&q=80",
        href: "/shop?category=footwear",
        className: "md:col-span-2 md:row-span-1",
    },
];

export default function BentoGrid() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
                {categories.map((item, index) => (
                    <Link
                        key={item.id}
                        href={item.href}
                        className={`relative group overflow-hidden rounded-sm bg-purple-100 dark:bg-purple-900/20 ${item.className}`}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="w-full h-full relative"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
                                <h3 className="text-white text-xl font-serif font-bold">{item.title}</h3>
                                <p className="text-purple-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    {item.subtitle}
                                </p>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
