"use client";

import Link from "next/link";
import { useShop } from "@/context/ShopContext";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
    const { addToCart, toggleWishlist, wishlist } = useShop();
    const isLiked = wishlist.includes(product.id);

    return (
        <div className="group relative">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-sm bg-purple-50 dark:bg-purple-900/20 relative">
                <Link href={`/product/${product.id}`} className="block w-full h-full relative">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-transparent group-hover:bg-purple-900/10 transition-colors duration-500 pointer-events-none" />
                </Link>

                {product.badge && (
                    <span className="absolute top-2 left-2 bg-purple-900 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider z-10">
                        {product.badge}
                    </span>
                )}

                <button
                    onClick={(e) => {
                        e.preventDefault();
                        toggleWishlist(product.id);
                    }}
                    className={`absolute top-2 right-2 p-2 rounded-full transition-all hover:scale-110 z-20 ${isLiked
                        ? "bg-purple-100 text-purple-600"
                        : "bg-white/80 dark:bg-black/50 text-purple-900 dark:text-purple-100 hover:bg-white dark:hover:bg-purple-900"
                        }`}
                >
                    <span className="material-icons text-[18px]">
                        {isLiked ? "favorite" : "favorite_border"}
                    </span>
                </button>

                {/* Quick Add Button Overlay */}
                <div className="absolute inset-x-0 bottom-4 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center pointer-events-none group-hover:pointer-events-auto">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                        }}
                        className="bg-white dark:bg-purple-100 text-purple-950 dark:text-purple-950 text-xs font-bold uppercase py-2.5 px-6 shadow-lg hover:shadow-xl transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 w-full"
                    >
                        Add to Bag
                    </button>
                </div>
            </div>

            <div className="mt-4 flex flex-col items-start px-1">
                <Link href={`/product/${product.id}`} className="group-hover:underline decoration-1 underline-offset-4 decoration-[var(--foreground)] decoration-opacity-30">
                    <h3 className="text-sm font-medium text-[var(--foreground)]">
                        {product.name}
                    </h3>
                </Link>
                <p className="mt-1 text-sm text-[var(--foreground)] opacity-70 font-medium">{product.price}</p>
            </div>
        </div>
    );
}
