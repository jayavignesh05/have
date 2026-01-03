"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useShop } from "@/context/ShopContext";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const { cart, toggleCart, toggleSearch, toggleWishlistDrawer } = useShop();
    const [isShopHovered, setIsShopHovered] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const pathname = usePathname();

    if (pathname.startsWith("/admin")) return null;

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsShopHovered(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsShopHovered(false);
        }, 150);
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            {/* Top Bar */}
            <div className="bg-gray-400/40 backdrop-blur-sm text-[#1A1A1A] text-[10px] sm:text-[11px] font-semibold py-2 overflow-hidden border-b border-white/10">
                <div className="flex w-full whitespace-nowrap opacity-80">
                    <motion.div
                        className="flex shrink-0 gap-16 px-8 tracking-widest uppercase"
                        animate={{ x: "-100%" }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        {[1, 2, 3, 4].map((i) => (
                            <span key={i}>Free Shipping on all orders</span>
                        ))}
                    </motion.div>
                    <motion.div
                        className="flex shrink-0 gap-16 px-8 tracking-widest uppercase"
                        animate={{ x: "-100%" }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        {[1, 2, 3, 4].map((i) => (
                            <span key={i}>Free Shipping on all orders</span>
                        ))}
                    </motion.div>
                </div>
            </div>

            <motion.nav
                initial={{ opacity: 0, y: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/5 transition-all duration-300 relative mx-auto w-[95%] max-w-5xl rounded-2xl mt-2"
            >
                <div className="px-8 py-4 md:py-3 flex justify-between items-center relative z-20">

                    {/* Logo - Left Aligned */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="font-sans text-2xl font-bold tracking-[0.2em] uppercase text-gray-900 dark:text-gray-100">
                            HAVE
                        </Link>
                    </div>

                    {/* Combined Menu (Links + Actions) - Right Aligned */}
                    <div className="flex items-center gap-8 md:gap-12 text-sm font-medium tracking-wide text-gray-800 dark:text-gray-200">

                        {/* Navigation Links - Center-Right */}
                        <div className="hidden md:flex gap-10 items-center">
                            <div
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link
                                    href="/shop"
                                    className={`transition-colors  hover:text-black dark:hover:text-white uppercase tracking-widest text-[11px] font-bold ${isShopHovered ? "opacity-100" : "opacity-70"}`}
                                >
                                    Shop
                                </Link>
                            </div>
                            <Link href="/about" className="hover:text-black dark:hover:text-white transition-colors py-2 uppercase tracking-widest text-[11px] font-bold opacity-70 hover:opacity-100">About</Link>
                            <Link href="/blogs" className="hover:text-black dark:hover:text-white transition-colors py-2 uppercase tracking-widest text-[11px] font-bold opacity-70 hover:opacity-100">Blogs</Link>
                            <Link href="/contact" className="hover:text-black dark:hover:text-white transition-colors py-2 uppercase tracking-widest text-[11px] font-bold opacity-70 hover:opacity-100">Contact</Link>
                        </div>

                        {/* Actions - Far Right */}
                        <div className="flex items-center gap-6 md:gap-8">
                            <button onClick={toggleWishlistDrawer} className="hover:text-black dark:hover:text-white transition-colors uppercase tracking-widest text-[11px] font-bold opacity-70 hover:opacity-100">
                                Favorites
                            </button>

                            <button onClick={toggleSearch} className="hover:text-black dark:hover:text-white transition-colors uppercase tracking-widest text-[11px] font-bold opacity-70 hover:opacity-100">
                                Search
                            </button>

                            <button onClick={toggleCart} className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1 uppercase tracking-widest text-[11px] font-bold opacity-70 hover:opacity-100">
                                Bag <span className="opacity-50 font-normal">({cart.length})</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mega Menu Overlay */}
                <AnimatePresence>
                    {isShopHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className="absolute top-full left-0 w-full bg-[#18181b] border border-gray-800 shadow-2xl z-10 rounded-2xl mt-2 overflow-hidden"
                        >
                            <div className="max-w-screen-2xl mx-auto px-6 py-12 grid grid-cols-4 gap-12 text-sm">
                                {/* Column 1: Categories */}
                                <div className="space-y-6">
                                    <h3 className="font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">Shop By Category</h3>
                                    <ul className="space-y-3 text-gray-400">
                                        <li><Link href="/shop" onClick={() => setIsShopHovered(false)} className="hover:text-purple-400 transition-colors block">Shop All</Link></li>
                                        <li><Link href="/shop?category=Tops" onClick={() => setIsShopHovered(false)} className="hover:text-purple-400 transition-colors block">Tops</Link></li>
                                        <li><Link href="/shop?category=Bottoms" onClick={() => setIsShopHovered(false)} className="hover:text-purple-400 transition-colors block">Bottoms</Link></li>
                                        <li><Link href="/shop?category=Outerwear" onClick={() => setIsShopHovered(false)} className="hover:text-purple-400 transition-colors block">Outerwear</Link></li>
                                        <li><Link href="/shop?category=Accessories" onClick={() => setIsShopHovered(false)} className="hover:text-purple-400 transition-colors block">Accessories</Link></li>
                                    </ul>
                                </div>

                                {/* Column 2: Collections */}
                                <div className="space-y-6">
                                    <h3 className="font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">Collections</h3>
                                    <ul className="space-y-3 text-gray-400">
                                        <li><Link href="/shop?sort=newest" onClick={() => setIsShopHovered(false)} className="hover:text-purple-400 transition-colors block">New Arrivals</Link></li>
                                        <li><Link href="/shop?sort=price-asc" onClick={() => setIsShopHovered(false)} className="hover:text-purple-400 transition-colors block">Best Sellers</Link></li>
                                        <li><Link href="/shop" onClick={() => setIsShopHovered(false)} className="hover:text-purple-400 transition-colors block">Essentials</Link></li>
                                    </ul>
                                </div>

                                {/* Column 3 & 4: Featured Images */}
                                <div className="col-span-2 grid grid-cols-2 gap-4">
                                    <div className="relative aspect-[3/4] bg-gray-800 rounded-sm overflow-hidden group cursor-pointer">
                                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542272617-08f0863200ed?q=80&w=2000&auto=format&fit=crop')" }} />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                        <div className="absolute bottom-4 left-4">
                                            <span className="bg-white text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">New Drop</span>
                                        </div>
                                    </div>
                                    <div className="relative aspect-[3/4] bg-gray-800 rounded-sm overflow-hidden group cursor-pointer">
                                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=2000&auto=format&fit=crop')" }} />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                        <div className="absolute bottom-4 left-4">
                                            <span className="bg-white text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">Best Sellers</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
}
