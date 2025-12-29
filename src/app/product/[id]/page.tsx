"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useShop } from "@/context/ShopContext";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    // Unwrap params using React.use()
    const { id } = use(params);
    const productId = parseInt(id);
    const product = products.find((p) => p.id === productId);
    const { addToCart, toggleWishlist, wishlist } = useShop();
    const [selectedSize, setSelectedSize] = useState("M");

    if (!product) {
        return notFound();
    }

    const isLiked = wishlist.includes(product.id);

    return (
        <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <Navbar />

            <div className="pt-40 pb-12 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <div className="aspect-[3/4] relative bg-purple-100 dark:bg-purple-900/50 rounded-sm overflow-hidden">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />
                            {product.badge && (
                                <div className="absolute top-4 left-4 bg-purple-900 text-purple-50 text-[10px] uppercase font-bold px-2 py-1 tracking-widest">
                                    {product.badge}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col justify-center sticky top-24 self-start">
                        <nav className="text-xs text-[var(--foreground)] opacity-60 mb-8 uppercase tracking-wider">
                            <Link href="/" className="hover:opacity-100 transition-opacity">Home</Link>
                            <span className="mx-2">/</span>
                            <Link href={`/shop?category=${product.category}`} className="hover:opacity-100 transition-opacity">
                                {product.category || "Shop"}
                            </Link>
                            <span className="mx-2">/</span>
                            <span className="opacity-100">{product.name}</span>
                        </nav>

                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[var(--foreground)]">{product.name}</h1>
                        <p className="text-2xl text-[var(--foreground)] opacity-90 mb-10">{product.price}</p>

                        <div className="mb-10">
                            <p className="text-sm font-bold uppercase tracking-wide mb-4 text-[var(--foreground)] opacity-80">Size</p>
                            <div className="flex gap-3">
                                {["XS", "S", "M", "L", "XL"].map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`w-12 h-12 flex items-center justify-center border text-sm font-medium transition-all ${selectedSize === size
                                            ? "border-purple-200 bg-purple-200 text-purple-950"
                                            : "border-gray-700 text-[var(--foreground)] hover:border-gray-500"
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4 mb-12">
                            <button
                                onClick={() => addToCart(product)}
                                className="flex-1 bg-white text-black py-4 font-bold uppercase tracking-wide text-sm hover:bg-gray-200 transition-colors rounded-sm shadow-xl"
                            >
                                Add to Bag
                            </button>
                            <button
                                onClick={() => toggleWishlist(product.id)}
                                className={`w-14 items-center justify-center flex border rounded-sm transition-colors ${isLiked
                                    ? "border-red-500 text-red-500 bg-red-500/10"
                                    : "border-gray-700 hover:border-gray-500 text-[var(--foreground)]"
                                    }`}
                            >
                                <span className="material-icons">{isLiked ? "favorite" : "favorite_border"}</span>
                            </button>
                        </div>

                        <div className="space-y-6 pt-10 border-t border-gray-800">
                            <div>
                                <h3 className="font-bold text-sm uppercase mb-3 text-[var(--foreground)] opacity-90">Description</h3>
                                <p className="text-sm text-[var(--foreground)] opacity-70 leading-relaxed">
                                    Crafted with precision and designed for the modern individual. This piece combines timeless aesthetics with contemporary comfort, ensuring you look effortless in every setting.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-bold text-xs uppercase mb-2 text-[var(--foreground)] opacity-90">Material</h4>
                                    <p className="text-sm text-[var(--foreground)] opacity-70">100% Cotton</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xs uppercase mb-2 text-[var(--foreground)] opacity-90">Care</h4>
                                    <p className="text-sm text-[var(--foreground)] opacity-70">Machine Wash Cold</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
