"use client";

import { Product } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";



import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useState, useEffect } from "react";

function ShopContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const category = searchParams.get("category");
    const sort = searchParams.get("sort");

    const [products, setProducts] = useState<Product[]>([]);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch('/api/products');
                if (res.ok) {
                    const data = await res.json();
                    setProducts(data);
                }
            } catch (error) {
                console.error("Failed to fetch products", error);
            }
        }
        fetchProducts();
    }, []);

    // Get unique categories for filter
    const categories = Array.from(new Set(products.map(p => p.category).filter(Boolean)));

    // internal filtering
    const TOPS = ["T-Shirts", "Shirts", "Hoodies", "Sweatshirts", "Jackets", "Outerwear"];
    const BOTTOMS = ["Jeans", "Trousers", "Cargo Pants", "Joggers", "Shorts"];

    const productList = category
        ? products.filter((p) => {
            const cat = (p.category || "").trim().toLowerCase();
            const filterCat = category.trim().toLowerCase();

            // 1. Direct match (e.g. "Tops" == "Tops", or "T-Shirts" == "T-Shirts")
            if (cat === filterCat) return true;

            // 2. Parent Category Logic (e.g. "T-Shirts" belongs to "Tops")
            if (filterCat === "tops") return TOPS.some(t => t.toLowerCase() === cat);
            if (filterCat === "bottoms") return BOTTOMS.some(b => b.toLowerCase() === cat);

            return false;
        })
        : [...products];

    // internal sorting
    if (sort === "price-asc") {
        productList.sort((a, b) => {
            const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ""));
            const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ""));
            return priceA - priceB;
        });
    } else if (sort === "price-desc") {
        productList.sort((a, b) => {
            const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ""));
            const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ""));
            return priceB - priceA;
        });
    } else if (sort === "newest") {
        productList.sort((a, b) => b.id - a.id); // Assuming higher ID is newer
    }

    const updateParams = (key: string, value: string | null) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }
        router.push(`/shop?${params.toString()}`);
        setIsSortOpen(false);
        setIsFilterOpen(false);
    };

    return (
        <div onClick={() => { setIsSortOpen(false); setIsFilterOpen(false); }}>
            {/* Header */}
            <div className="pt-32 pb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[var(--foreground)] capitalize">
                    {category || "Shop All"}
                </h1>
                <p className="text-[var(--foreground)] opacity-70 max-w-md mx-auto">
                    {category
                        ? `Explore our collection of ${category.toLowerCase()}.`
                        : "Explore our complete collection of timeless essentials, designed for the modern wardrobe."}
                </p>

            </div>

            {/* Toolbar */}
            <div className="sticky top-[72px] z-30 bg-[var(--background)]/90 backdrop-blur-md border-b border-gray-800">
                <div className="max-w-screen-2xl mx-auto px-6 py-4 flex justify-between items-center text-sm text-[var(--foreground)] opacity-90 relative">
                    <span className="opacity-70">{productList.length} Products</span>

                    <div className="flex gap-6 relative">
                        {/* Filter Dropdown */}
                        <div className="relative">
                            <button
                                onClick={(e) => { e.stopPropagation(); setIsFilterOpen(!isFilterOpen); setIsSortOpen(false); }}
                                className={`flex items-center gap-1 hover:opacity-100 transition-opacity ${isFilterOpen ? "opacity-100" : "opacity-70"}`}
                            >
                                Filter <span className="material-icons text-[16px]">tune</span>
                            </button>
                            {isFilterOpen && (
                                <div className="absolute top-full right-0 mt-2 w-48 bg-[#18181b] border border-gray-800 rounded-sm shadow-xl z-50 py-2">
                                    <button
                                        onClick={() => updateParams("category", null)}
                                        className={`w-full text-left px-4 py-2 hover:bg-gray-800 transition-colors ${!category ? "text-purple-400 font-bold" : "text-gray-400"}`}
                                    >
                                        All Styles
                                    </button>
                                    {categories.map(cat => (
                                        <button
                                            key={cat}
                                            onClick={() => updateParams("category", cat ?? null)}
                                            className={`w-full text-left px-4 py-2 hover:bg-gray-800 transition-colors ${category === cat ? "text-purple-400 font-bold" : "text-gray-400"}`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Sort Dropdown */}
                        <div className="relative">
                            <button
                                onClick={(e) => { e.stopPropagation(); setIsSortOpen(!isSortOpen); setIsFilterOpen(false); }}
                                className={`flex items-center gap-1 hover:opacity-100 transition-opacity ${isSortOpen ? "opacity-100" : "opacity-70"}`}
                            >
                                Sort <span className="material-icons text-[16px]">keyboard_arrow_down</span>
                            </button>
                            {isSortOpen && (
                                <div className="absolute top-full right-0 mt-2 w-48 bg-[#18181b] border border-gray-800 rounded-sm shadow-xl z-50 py-2">
                                    <button onClick={() => updateParams("sort", "newest")} className={`w-full text-left px-4 py-2 hover:bg-gray-800 transition-colors ${sort === "newest" ? "text-purple-400" : "text-gray-400"}`}>Newest</button>
                                    <button onClick={() => updateParams("sort", "price-asc")} className={`w-full text-left px-4 py-2 hover:bg-gray-800 transition-colors ${sort === "price-asc" ? "text-purple-400" : "text-gray-400"}`}>Price: Low to High</button>
                                    <button onClick={() => updateParams("sort", "price-desc")} className={`w-full text-left px-4 py-2 hover:bg-gray-800 transition-colors ${sort === "price-desc" ? "text-purple-400" : "text-gray-400"}`}>Price: High to Low</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-screen-2xl mx-auto px-6 py-12">
                {productList.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-12">
                        {productList.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 opacity-60">
                        <p>No products found in this category.</p>
                        <button onClick={() => updateParams("category", null)} className="underline mt-4">Clear Filters</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function ShopPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <Navbar />
            <Suspense fallback={<div className="pt-40 text-center">Loading...</div>}>
                <ShopContent />
            </Suspense>
            <Footer />
        </main>
    );
}
