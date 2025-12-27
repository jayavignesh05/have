"use client";

import Link from "next/link";
import { useShop } from "@/context/ShopContext";
import ProductCard from "./ProductCard";

interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    badge?: string;
}

interface ProductGridProps {
    title: string;
    products: Product[];
    viewAllLink?: string;
    isNewIn?: boolean;
}

export default function ProductGrid({ title, products, viewAllLink = "#", isNewIn = false }: ProductGridProps) {
    const { addToCart, toggleWishlist, wishlist } = useShop();

    return (
        <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
                <h2 className="text-lg font-semibold uppercase tracking-wider text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 px-4 py-1 rounded-sm">{title}</h2>
                <Link href={viewAllLink} className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 underline underline-offset-4">View All</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
