"use client";

import { useShop } from "@/context/ShopContext";
import { products } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function WishlistDrawer() {
    const { wishlist, isWishlistOpen, toggleWishlistDrawer, removeFromCart, addToCart, toggleWishlist } = useShop();

    // Get product details for wishlist items
    const wishlistItems = products.filter(p => wishlist.includes(p.id));

    return (
        <AnimatePresence>
            {isWishlistOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleWishlistDrawer}
                        className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white dark:bg-[#2E1065] z-[70] shadow-2xl flex flex-col border-l border-purple-100 dark:border-purple-900"
                    >
                        {/* Header */}
                        <div className="p-6 flex items-center justify-between border-b border-purple-100 dark:border-purple-800">
                            <h2 className="text-xl font-serif font-bold text-purple-950 dark:text-white">Favorites ({wishlist.length})</h2>
                            <button onClick={toggleWishlistDrawer} className="p-2 hover:bg-purple-50 dark:hover:bg-purple-800 rounded-full transition-colors text-purple-900 dark:text-purple-200">
                                <span className="material-icons">close</span>
                            </button>
                        </div>

                        {/* Wishlist Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {wishlistItems.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-purple-400 space-y-4">
                                    <span className="material-icons text-6xl opacity-20">favorite_border</span>
                                    <p>Your wishlist is empty.</p>
                                    <button onClick={toggleWishlistDrawer} className="text-purple-900 dark:text-white underline underline-offset-4">Browse Collection</button>
                                </div>
                            ) : (
                                wishlistItems.map((item, index) => (
                                    <motion.div
                                        layout
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="flex gap-4"
                                    >
                                        <div className="w-20 h-24 bg-purple-50 dark:bg-purple-900/50 rounded-sm overflow-hidden flex-shrink-0 relative">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <Link href={`/product/${item.id}`} onClick={toggleWishlistDrawer}>
                                                    <h3 className="font-medium text-sm text-purple-950 dark:text-white line-clamp-2 hover:underline decoration-purple-400 underline-offset-4">{item.name}</h3>
                                                </Link>
                                                <p className="text-sm text-purple-500 dark:text-purple-300 mt-1">{item.price}</p>
                                            </div>
                                            <div className="flex gap-4 items-center mt-2">
                                                <button
                                                    onClick={() => {
                                                        addToCart(item);
                                                        toggleWishlist(item.id); // Optional: remove from wishlist after adding to cart
                                                    }}
                                                    className="text-xs font-bold uppercase tracking-wide text-purple-900 dark:text-purple-200 hover:text-purple-600 dark:hover:text-white transition-colors"
                                                >
                                                    Add to Bag
                                                </button>
                                                <button
                                                    onClick={() => toggleWishlist(item.id)}
                                                    className="text-xs text-red-500 hover:text-red-400 underline underline-offset-2"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
