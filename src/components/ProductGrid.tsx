"use client";

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

export default function ProductGrid({ products }: ProductGridProps) {

    return (
        <section className="w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-16">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
