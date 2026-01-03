"use client";

import { useState, useEffect, useRef } from "react";
import { useShop } from "@/context/ShopContext";
import { Product } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function SearchOverlay() {
    const { isSearchOpen, toggleSearch } = useShop();
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (isSearchOpen && products.length === 0) {
            fetch('/api/products')
                .then(res => res.json())
                .then(data => setProducts(data))
                .catch(err => console.error(err));
        }
    }, [isSearchOpen, products.length]);

    // Focus input when opened
    useEffect(() => {
        if (isSearchOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isSearchOpen]);

    // Handle ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") toggleSearch();
        };
        if (isSearchOpen) window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [isSearchOpen, toggleSearch]);

    const filteredProducts = query === ""
        ? []
        : products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));

    return (
        <AnimatePresence>
            {isSearchOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 sm:pt-40 px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleSearch}
                        className="absolute inset-0 bg-[#0d0d0d]/95 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative w-full max-w-4xl z-10 flex flex-col gap-8"
                    >
                        {/* Header / Input */}
                        <div className="relative border-b border-white/20 pb-4">
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full bg-transparent border-none p-0 text-4xl sm:text-6xl font-bold tracking-tight text-white placeholder:text-white/20 focus:ring-0"
                            />
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-4">
                                <span className="hidden sm:inline-block text-xs font-medium text-white/40 tracking-widest uppercase border border-white/10 px-2 py-1 rounded">ESC to close</span>
                                <button
                                    onClick={toggleSearch}
                                    className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-white"
                                >
                                    <span className="material-icons text-3xl">close</span>
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="min-h-[200px]">
                            {query === "" ? (
                                <div>
                                    <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-6">Trending Now</p>
                                    <div className="flex flex-wrap gap-3">
                                        {["Oversized Tee", "Cargo Pants", "Sweatshirt", "Essentials"].map((term) => (
                                            <button
                                                key={term}
                                                onClick={() => setQuery(term)}
                                                className="px-4 py-2 bg-white/5 border border-white/5 hover:border-white/20 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                                            >
                                                {term}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ) : filteredProducts.length > 0 ? (
                                <div>
                                    <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-6">
                                        {filteredProducts.length} Result{filteredProducts.length !== 1 && 's'}
                                    </p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {filteredProducts.slice(0, 6).map(product => (
                                            <li key={product.id}>
                                                <Link
                                                    href={`/product/${product.id}`}
                                                    onClick={toggleSearch}
                                                    className="flex items-center gap-5 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group"
                                                >
                                                    <div className="w-16 h-20 bg-gray-800 rounded-sm overflow-hidden flex-shrink-0">
                                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-lg text-white group-hover:text-purple-400 transition-colors line-clamp-1">{product.name}</h4>
                                                        <p className="text-sm text-gray-400 mt-1">{product.category}</p>
                                                        <p className="text-sm font-semibold text-white mt-1">{product.price}</p>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <p className="text-xl text-white/40">No results found for <span className="text-white">&quot;{query}&quot;</span></p>
                                    <p className="text-sm text-white/20 mt-2">Try checking for typos or using broader terms.</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
