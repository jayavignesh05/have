"use client";

import Link from "next/link";
import { Plus, Package, Users, BarChart } from "lucide-react";

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-[#F8F8F8] text-black font-sans">
            <div className="max-w-7xl mx-auto p-6 md:p-12">
                <div className="mb-12 flex items-end justify-between">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight mb-2">Dashboard</h1>
                        <p className="text-neutral-500">Welcome back, Admin.</p>
                    </div>
                    <div className="text-sm text-neutral-400 font-mono">
                        v1.0.0
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Add Product Card */}
                    <Link
                        href="/admin/add-product"
                        className="group p-8 bg-white border border-neutral-200 rounded-xl shadow-sm hover:shadow-md hover:border-black transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Plus className="w-6 h-6" />
                            </div>
                            <h2 className="text-xl font-bold mb-2">Add Product</h2>
                            <p className="text-neutral-500 text-sm leading-relaxed">
                                Create a new product listing, upload images, and set prices for your store.
                            </p>
                        </div>
                    </Link>

                    {/* Placeholder: Inventory */}
                    <div className="p-8 bg-white/50 border border-neutral-200 rounded-xl opacity-60">
                        <div className="w-12 h-12 bg-neutral-100 text-neutral-400 rounded-full flex items-center justify-center mb-6">
                            <Package className="w-6 h-6" />
                        </div>
                        <h2 className="text-xl font-bold mb-2 text-neutral-400">Inventory</h2>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Manage stock levels and view product performance (Coming Soon).
                        </p>
                    </div>

                    {/* Placeholder: Users */}
                    <div className="p-8 bg-white/50 border border-neutral-200 rounded-xl opacity-60">
                        <div className="w-12 h-12 bg-neutral-100 text-neutral-400 rounded-full flex items-center justify-center mb-6">
                            <Users className="w-6 h-6" />
                        </div>
                        <h2 className="text-xl font-bold mb-2 text-neutral-400">Customers</h2>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            View customer details and order history (Coming Soon).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
