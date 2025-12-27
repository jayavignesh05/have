"use client";

import { useShop } from "@/context/ShopContext";
import { motion, AnimatePresence } from "framer-motion";

export default function CartDrawer() {
    const { cart, isCartOpen, toggleCart, removeFromCart } = useShop();

    // Calculate subtotal
    const subtotal = cart.reduce((acc, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
        return acc + price;
    }, 0);

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
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
                            <h2 className="text-xl font-serif font-bold text-purple-950 dark:text-white">Shopping Bag ({cart.length})</h2>
                            <button onClick={toggleCart} className="p-2 hover:bg-purple-50 dark:hover:bg-purple-800 rounded-full transition-colors text-purple-900 dark:text-purple-200">
                                <span className="material-icons">close</span>
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-purple-400 space-y-4">
                                    <span className="material-icons text-6xl opacity-20">shopping_bag</span>
                                    <p>Your bag is empty.</p>
                                    <button onClick={toggleCart} className="text-purple-900 dark:text-white underline underline-offset-4">Continue Shopping</button>
                                </div>
                            ) : (
                                cart.map((item, index) => (
                                    <motion.div
                                        layout
                                        key={`${item.id}-${index}`}
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
                                                <h3 className="font-medium text-sm text-purple-950 dark:text-white line-clamp-2">{item.name}</h3>
                                                <p className="text-sm text-purple-500 dark:text-purple-300 mt-1">{item.price}</p>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-xs text-red-500 hover:text-red-400 self-start underline underline-offset-2"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {cart.length > 0 && (
                            <div className="p-6 border-t border-purple-100 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-900/20">
                                <div className="flex justify-between items-center mb-4 text-purple-900 dark:text-purple-100">
                                    <span className="text-sm">Subtotal</span>
                                    <span className="text-lg font-bold">${subtotal.toFixed(2)} USD</span>
                                </div>
                                <button className="w-full bg-purple-900 dark:bg-purple-100 text-white dark:text-purple-950 py-4 font-bold uppercase tracking-wide text-sm hover:opacity-90 transition-opacity rounded-sm shadow-lg">
                                    Checkout
                                </button>
                                <p className="text-center text-xs text-purple-400 mt-4">Shipping & taxes calculated at checkout</p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
