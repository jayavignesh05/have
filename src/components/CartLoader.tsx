"use client";

import { useShop } from "@/context/ShopContext";
import Lottie from "lottie-react";
import loadingAnimation from "@/animations/loading.json";

export default function CartLoader() {
    const { isAddingToCart } = useShop();

    if (!isAddingToCart) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300">
            <div className="w-[300px] h-[300px]  flex items-center justify-center">
                <Lottie animationData={loadingAnimation} loop={true} />
            </div>
        </div>
    );
}
