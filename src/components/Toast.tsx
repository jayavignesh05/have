"use client";

import { useShop } from "@/context/ShopContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Toast() {
    const { toastMessage } = useShop();

    return (
        <AnimatePresence>
            {toastMessage && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg z-[60]"
                >
                    {toastMessage}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
