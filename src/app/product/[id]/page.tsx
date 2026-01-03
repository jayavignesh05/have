"use client";

import { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useShop } from "@/context/ShopContext";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    // Unwrap params using React.use()
    const { id } = use(params);
    const productId = parseInt(id);
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const { addToCart, toggleWishlist, wishlist } = useShop();
    const [selectedSize, setSelectedSize] = useState("M");

    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await fetch(`/api/products/${productId}`);
                if (res.ok) {
                    const data = await res.json();
                    setProduct(data);
                } else {
                    // handle 404
                    setProduct(null);
                }
            } catch (error) {
                console.error("Failed to fetch product", error);
            } finally {
                setLoading(false);
            }
        }
        if (productId) fetchProduct();
    }, [productId]);

    useEffect(() => {
        if (product && product.variants) {
            // Find first available size
            const firstAvailable = product.variants.find(v => v.quantity > 0);
            if (firstAvailable) {
                setSelectedSize(firstAvailable.size);
            } else {
                setSelectedSize(""); // No size available
            }
        }
    }, [product]);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

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
                            <div className="flex justify-between items-end mb-4">
                                <p className="text-sm font-bold uppercase tracking-wide text-[var(--foreground)] opacity-80">Size</p>
                                {selectedSize && (
                                    <span className="text-xs text-neutral-500">
                                        {product.variants?.find(v => v.size === selectedSize)?.quantity ?? 0} items left
                                    </span>
                                )}
                            </div>
                            <div className="flex gap-3 flex-wrap">
                                {["XS", "S", "M", "L", "XL", "XXL", "28", "30", "32", "34", "36"].map((size) => {
                                    const variant = product.variants?.find(v => v.size === size);
                                    const isAvailable = variant ? variant.quantity > 0 : false;

                                    const hasNumberSizes = product.variants?.some(v => !isNaN(Number(v.size)));
                                    const isNumberSize = !isNaN(Number(size));

                                    if (product.variants && product.variants.length > 0) {
                                        if (hasNumberSizes && !isNumberSize) return null;
                                        if (!hasNumberSizes && isNumberSize) return null;
                                    }

                                    return (
                                        <button
                                            key={size}
                                            onClick={() => isAvailable && setSelectedSize(size)}
                                            disabled={!isAvailable}
                                            className={`w-12 h-12 flex items-center justify-center border text-sm font-medium transition-all ${selectedSize === size
                                                ? "border-purple-200 bg-purple-200 text-purple-950"
                                                : !isAvailable
                                                    ? "border-neutral-200 text-neutral-300 cursor-not-allowed decoration-slice line-through"
                                                    : "border-gray-700 text-[var(--foreground)] hover:border-gray-500"
                                                }`}
                                            title={!isAvailable ? "Out of Stock" : `${variant?.quantity} available`}
                                        >
                                            {size}
                                        </button>
                                    );
                                })}
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
