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
        <div className="group relative">
            <div className="aspect-[3/4] w-full overflow-hidden bg-neutral-100 relative mb-4">
                <Link href={`/product/${product.id}`} className="block w-full h-full">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                </Link>

                {/* Badges */}
                {product.badge && (
                    <span className="absolute top-2 left-2 text-[10px] uppercase font-medium tracking-wider bg-white/90 backdrop-blur-sm px-2 py-1">
                        {product.badge}
                    </span>
                )}

                {/* Wishlist - Visible on hover on desktop */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        toggleWishlist(product.id);
                    }}
                    className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-300 z-10 ${isLiked ? "opacity-100 text-red-500" : "opacity-0 group-hover:opacity-100 text-black hover:bg-white/50"
                        } max-md:opacity-100`}
                >
                    <Heart size={18} fill={isLiked ? "currentColor" : "none"} strokeWidth={1.5} />
                </button>

                {/* Add to Cart - Slide up */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex justify-center hidden md:flex">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                        }}
                        className="w-full bg-white/90 backdrop-blur-md text-black text-xs font-medium uppercase tracking-wider py-3 hover:bg-black hover:text-white transition-colors border border-black/5"
                    >
                        Add to Bag
                    </button>
                </div>
                {/* Mobile Add to Cart - Floating Icon */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                    }}
                    className="md:hidden absolute bottom-3 right-3 bg-white/90 text-black p-2.5 rounded-full shadow-sm z-20 active:scale-95 transition-all flex items-center justify-center opacity-90"
                    aria-label="Add to cart"
                >
                    <Plus size={16} strokeWidth={1.5} />
                </button>
            </div>

            {/* Content */}
            <div className="flex justify-between items-start gap-4">
                <div className="flex flex-col gap-1">
                    <Link href={`/product/${product.id}`}>
                        <h3 className="text-sm font-medium text-neutral-900 group-hover:text-black transition-colors">
                            {product.name}
                        </h3>
                    </Link>
                    <p className="text-[10px] text-neutral-500 uppercase tracking-wider">
                        Essential
                    </p>
                </div>
                <span className="text-sm font-medium text-neutral-900">{product.price}</span>
            </div>
        </div>
    );
}
