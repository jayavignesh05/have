"use client";


import Footer from "@/components/Footer";
import { useShop } from "@/context/ShopContext";
import ProductCard from "@/components/ProductCard";

export default function FavoritesPage() {
    return (
        <main className="min-h-screen bg-white">

            <div className="pt-40 pb-20 px-6 max-w-screen-2xl mx-auto">
                <h1 className="text-6xl font-bold mb-12 uppercase tracking-tighter">Your Favorites</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <p className="col-span-full text-gray-500 italic">No favorites yet.</p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
