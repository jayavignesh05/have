"use client";

import { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { Skeleton } from "antd";

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
        return (
            <div className="min-h-screen bg-[var(--background)] pt-40 pb-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                        {/* Image Skeleton */}
                        <div className="aspect-[3/4] w-full rounded-sm overflow-hidden text-gray-200 dark:text-gray-800">
                            <Skeleton.Button active block shape="square" className="!w-full !h-full" />
                        </div>

                        {/* Details Skeleton */}
                        <div className="space-y-8 sticky top-24 self-start max-w-lg">
                            <div className="space-y-4">
                                <Skeleton active paragraph={{ rows: 0 }} title={{ width: 150 }} />
                                <Skeleton active paragraph={{ rows: 0 }} title={{ width: 300, style: { height: 40, marginTop: 10 } }} />
                                <Skeleton active paragraph={{ rows: 0 }} title={{ width: 100, style: { height: 32 } }} />
                            </div>

                            <div className="space-y-4">
                                <Skeleton active paragraph={{ rows: 0 }} title={{ width: 60 }} />
                                <div className="flex gap-3">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Skeleton.Button key={i} active size="large" shape="square" className="!w-12 !h-12" />
                                    ))}
                                </div>
                            </div>

                            <Skeleton.Button active block size="large" style={{ height: 56 }} />

                            <div className="space-y-2 pt-8">
                                <Skeleton active />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!product) {
        return notFound();
    }

    const isLiked = wishlist.includes(product.id);

    return (
        <main className="min-h-screen bg-white text-black">

            {/* Premium Product Page */}
            <div className="pt-32 md:pt-40 pb-20">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20">

                        {/* Image Gallery */}
                        <div className="space-y-6">
                            <div className="aspect-[3/4] relative bg-neutral-100 rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {product.badge && (
                                    <div className="absolute top-6 left-6 bg-black text-white text-[10px] uppercase font-bold px-4 py-2 tracking-[0.2em] shadow-lg">
                                        {product.badge}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="flex flex-col lg:sticky lg:top-32 lg:self-start space-y-8">
                            {/* Breadcrumbs */}
                            <nav className="text-xs text-neutral-500 uppercase tracking-[0.15em] font-medium">
                                <Link href="/" className="hover:text-black transition-colors">Home</Link>
                                <span className="mx-3">/</span>
                                <Link href={`/shop?category=${product.category}`} className="hover:text-black transition-colors">
                                    {product.category || "Shop"}
                                </Link>
                                <span className="mx-3">/</span>
                                <span className="text-black">{product.name}</span>
                            </nav>

                            {/* Product Title & Price */}
                            <div className="space-y-4 pb-8 border-b border-neutral-200">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                                    {product.name}
                                </h1>
                                <p className="text-3xl md:text-4xl font-light tracking-wide">
                                    {product.price}
                                </p>
                            </div>

                            {/* Size Selection */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-sm font-bold uppercase tracking-[0.2em]">Size</h3>
                                    {selectedSize && (
                                        <span className="text-xs text-neutral-500 font-medium">
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
                                                className={`min-w-[56px] h-14 px-4 flex items-center justify-center text-sm font-semibold tracking-wide transition-all duration-300 rounded-md ${selectedSize === size
                                                        ? "bg-black text-white shadow-lg scale-105"
                                                        : !isAvailable
                                                            ? "bg-neutral-100 text-neutral-300 cursor-not-allowed line-through"
                                                            : "bg-white border-2 border-neutral-200 text-black hover:border-black hover:shadow-md"
                                                    }`}
                                                title={!isAvailable ? "Out of Stock" : `${variant?.quantity} available`}
                                            >
                                                {size}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4 pt-4">
                                <button
                                    onClick={() => addToCart({ ...product, selectedSize })}
                                    disabled={!selectedSize}
                                    className="flex-1 bg-black text-white py-5 px-8 font-bold uppercase tracking-[0.2em] text-sm hover:bg-neutral-800 active:scale-[0.98] transition-all duration-300 rounded-md shadow-xl disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-black"
                                >
                                    Add to Bag
                                </button>
                                <button
                                    onClick={() => toggleWishlist(product.id)}
                                    className={`w-16 h-auto flex items-center justify-center border-2 rounded-md transition-all duration-300 ${isLiked
                                            ? "border-red-500 bg-red-50 text-red-500 hover:bg-red-100"
                                            : "border-neutral-200 text-neutral-600 hover:border-black hover:text-black"
                                        }`}
                                >
                                    <span className="material-icons text-2xl">{isLiked ? "favorite" : "favorite_border"}</span>
                                </button>
                            </div>

                            {/* Product Information */}
                            <div className="space-y-8 pt-8 border-t border-neutral-200">
                                {/* Description */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-bold uppercase tracking-[0.2em]">Description</h3>
                                    <p className="text-base text-neutral-600 leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>

                                {/* Material & Care */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-100">
                                        <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-3 text-neutral-500">Material</h4>
                                        <p className="text-sm font-medium text-black">{product.material || "100% Cotton"}</p>
                                    </div>
                                    <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-100">
                                        <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-3 text-neutral-500">Care</h4>
                                        <p className="text-sm font-medium text-black">Machine Wash Cold</p>
                                    </div>
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
