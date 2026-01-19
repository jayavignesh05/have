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
                <div className="fixed inset-0 z-[100] flex items-start justify-center px-4 sm:px-6 py-8 sm:py-16">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={toggleSearch}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-2xl z-10 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Search Input */}
                        <div className="relative border-b border-gray-200/50 dark:border-gray-700/50">
                            <div className="flex items-center gap-3 px-6 py-4">
                                {/* Search Icon */}
                                <svg
                                    className="w-5 h-5 text-gray-400 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>

                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Search for products..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="flex-1 bg-transparent border-none outline-none text-lg text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                                />

                                {/* Close Button */}
                                <button
                                    onClick={toggleSearch}
                                    className="flex-shrink-0 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                    aria-label="Close search"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="max-h-[60vh] overflow-y-auto">
                            {query === "" ? (
                                <div className="px-6 py-8">
                                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                                        Popular Searches
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Oversized Tee", "Cargo Pants", "Sweatshirt", "Essentials"].map((term) => (
                                            <button
                                                key={term}
                                                onClick={() => setQuery(term)}
                                                className="px-4 py-2 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200/60 dark:border-gray-700/60 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-200 hover:scale-105 active:scale-95"
                                            >
                                                {term}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ) : filteredProducts.length > 0 ? (
                                <div className="py-2">
                                    <div className="px-6 py-3">
                                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            {filteredProducts.length} Result{filteredProducts.length !== 1 && 's'}
                                        </p>
                                    </div>
                                    <ul className="divide-y divide-gray-100 dark:divide-gray-800">
                                        {filteredProducts.slice(0, 6).map(product => (
                                            <li key={product.id}>
                                                <Link
                                                    href={`/product/${product.id}`}
                                                    onClick={toggleSearch}
                                                    className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
                                                >
                                                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors truncate">
                                                            {product.name}
                                                        </h4>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                                                            {product.category}
                                                        </p>
                                                    </div>
                                                    <p className="text-sm font-semibold text-gray-900 dark:text-white flex-shrink-0">
                                                        {product.price}
                                                    </p>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <div className="px-6 py-16 text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <p className="text-base font-medium text-gray-900 dark:text-white mb-1">
                                        No results found
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Try searching with different keywords
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Footer Hint */}
                        <div className="border-t border-gray-200/50 dark:border-gray-700/50 px-6 py-3 bg-gray-50/50 dark:bg-gray-800/30">
                            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                                <span>Press <kbd className="px-2 py-0.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded font-mono">ESC</kbd> to close</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
