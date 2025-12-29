"use client";

import Link from "next/link";
import { useShop } from "@/context/ShopContext";
import { Product } from "@/data/products";
import { Heart, Plus } from "lucide-react";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
    const { addToCart, toggleWishlist, wishlist } = useShop();
    const isLiked = wishlist.includes(product.id);

    return (
        <div className="group relative font-sans">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-sm bg-neutral-100 relative">
                <Link href={`/product/${product.id}`} className="block w-full h-full relative">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                    />
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />
                </Link>

                {product.badge && (
                    <span className="absolute top-4 left-4 bg-black text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest z-10">
                        {product.badge}
                    </span>
                )}

                <button
                    onClick={(e) => {
                        e.preventDefault();
                        toggleWishlist(product.id);
                    }}
                    className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 z-20 ${isLiked
                        ? "bg-black text-white"
                        : "bg-white/80 backdrop-blur-sm text-black hover:bg-black hover:text-white"
                        }`}
                >
                    <Heart size={16} fill={isLiked ? "currentColor" : "none"} strokeWidth={2} />
                </button>

                {/* Quick Add Button Overlay */}
                <div className="absolute inset-x-0 bottom-6 px-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 flex justify-center pointer-events-none group-hover:pointer-events-auto">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                        }}
                        className="bg-black text-white text-[10px] font-bold uppercase py-3 px-8 shadow-2xl hover:bg-neutral-800 transition-all w-full flex items-center justify-center gap-2 tracking-[0.2em]"
                    >
                        <Plus size={14} /> Add to Bag
                    </button>
                </div>
            </div>

            <div className="mt-6 flex flex-col items-start px-1">
                <div className="flex justify-between items-start w-full">
                    <Link href={`/product/${product.id}`} className="group-hover:opacity-60 transition-opacity">
                        <h3 className="text-sm font-bold tracking-tight text-black">
                            {product.name}
                        </h3>
                    </Link>
                    <p className="text-sm text-black font-bold">{product.price}</p>
                </div>
                <p className="mt-1 text-xs text-neutral-500 font-medium tracking-wide uppercase">Essential Wear</p>
            </div>
        </div>
    );
}
