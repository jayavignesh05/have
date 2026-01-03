"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Save, DollarSign, Layers, Tag, Image as ImageIcon, Upload, Link as LinkIcon, Hash } from "lucide-react";
import Link from "next/link";

export default function AddProductPage() {
    const [loading, setLoading] = useState(false);
    const [imageType, setImageType] = useState<"url" | "upload">("url");
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        category: "",
        badge: "",
        image: "",
        description: "",
        quantity: "",
        sizes: [] as string[],
    });

    const AVAILABLE_SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSizeToggle = (size: string) => {
        setFormData(prev => {
            const currentSizes = prev.sizes;
            if (currentSizes.includes(size)) {
                return { ...prev, sizes: currentSizes.filter(s => s !== size) };
            } else {
                return { ...prev, sizes: [...currentSizes, size] };
            }
        });
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({ ...prev, image: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call or interaction
        try {
            const res = await fetch("/api/admin/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                alert("Product successfully added!");
                setFormData({
                    name: "",
                    price: "",
                    category: "",
                    badge: "",
                    image: "",
                    description: "",
                    quantity: "",
                    sizes: [],
                });
            } else {
                const errorData = await res.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error adding product:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#F8F8F8] text-black font-sans selection:bg-black selection:text-white">
            {/* Navbar / Header Area */}
            <div className="w-full bg-white border-b border-neutral-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
                <div className="flex items-center gap-4">
                    <Link
                        href="/admin"
                        className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                        title="Back to Dashboard"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <h1 className="text-lg font-bold tracking-tight uppercase">
                        Start New Product
                    </h1>
                </div>
                <div className="text-xs font-mono text-neutral-400">
                    ADMIN MODE
                </div>
            </div>

            <div className="max-w-7xl mx-auto p-6 lg:p-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12"
                >
                    {/* LEFT COLUMN: Header & Context */}
                    <div className="lg:col-span-4 space-y-6">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                                Create a<br />New Drop.
                            </h2>
                            <p className="text-neutral-500 text-lg leading-relaxed">
                                Add the details for your new product. Ensure high-quality imagery and precise descriptions to maximize engagement.
                            </p>
                        </div>

                        <div className="p-6 bg-white border border-neutral-100 rounded-lg shadow-sm">
                            <h3 className="font-semibold mb-2 flex items-center gap-2">
                                <Tag className="w-4 h-4" /> Pro Tip
                            </h3>
                            <p className="text-sm text-neutral-500">
                                Products with detailed material descriptions ("100% Cotton GSM 240") reduce return rates by 15%.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: The Form */}
                    <div className="lg:col-span-8">
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_2px_40px_-12px_rgba(0,0,0,0.1)] border border-neutral-100 space-y-8"
                        >

                            {/* Product Name */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="e.g. Midnight Oversized Hoodie"
                                    className="w-full px-4 py-4 bg-neutral-50 border-b-2 border-neutral-200 focus:border-black focus:bg-white outline-none transition-all placeholder:text-neutral-300 text-lg font-medium"
                                />
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Enter product description..."
                                    rows={4}
                                    className="w-full px-4 py-4 bg-neutral-50 border-b-2 border-neutral-200 focus:border-black focus:bg-white outline-none transition-all placeholder:text-neutral-300 text-base resize-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Price */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                                        Price
                                    </label>
                                    <div className="relative">
                                        <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                                        <input
                                            type="text"
                                            name="price"
                                            required
                                            value={formData.price}
                                            onChange={handleChange}
                                            placeholder="120.00"
                                            className="w-full pl-10 pr-4 py-4 bg-neutral-50 border-b-2 border-neutral-200 focus:border-black focus:bg-white outline-none transition-all placeholder:text-neutral-300 font-mono"
                                        />
                                    </div>
                                </div>

                                {/* Category */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                                        Category
                                    </label>
                                    <div className="relative">
                                        <Layers className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                                        <select
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-4 bg-neutral-50 border-b-2 border-neutral-200 focus:border-black focus:bg-white outline-none transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="">Select...</option>
                                            <option value="Shirts">Shirts</option>
                                            <option value="T-Shirts">T-Shirts</option>
                                            <option value="Jeans">Jeans</option>
                                            <option value="Hoodies">Hoodies</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Quality & Sizes */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Quality */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                                        Quantity
                                    </label>
                                    <div className="relative">
                                        <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                                        <input
                                            type="number"
                                            name="quantity"
                                            value={formData.quantity}
                                            onChange={handleChange}
                                            placeholder="e.g. 50"
                                            className="w-full pl-10 pr-4 py-4 bg-neutral-50 border-b-2 border-neutral-200 focus:border-black focus:bg-white outline-none transition-all placeholder:text-neutral-300"
                                        />
                                    </div>
                                </div>

                                {/* Sizes */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                                        Available Sizes
                                    </label>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {AVAILABLE_SIZES.map(size => (
                                            <button
                                                key={size}
                                                type="button"
                                                onClick={() => handleSizeToggle(size)}
                                                className={`px-3 py-1.5 text-sm border rounded-full transition-all ${formData.sizes.includes(size)
                                                    ? "bg-black text-white border-black"
                                                    : "bg-white text-neutral-500 border-neutral-200 hover:border-black"
                                                    }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Badge */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                                    Badge (Optional)
                                </label>
                                <input
                                    type="text"
                                    name="badge"
                                    value={formData.badge}
                                    onChange={handleChange}
                                    placeholder="e.g. New In, Sold Out, Hot"
                                    className="w-full px-4 py-4 bg-neutral-50 border-b-2 border-neutral-200 focus:border-black focus:bg-white outline-none transition-all placeholder:text-neutral-300"
                                />
                            </div>

                            {/* Image Section */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                                        Product Image
                                    </label>
                                    <div className="flex bg-neutral-100 p-1 rounded-lg">
                                        <button
                                            type="button"
                                            onClick={() => setImageType("url")}
                                            className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${imageType === "url" ? "bg-white shadow-sm text-black" : "text-neutral-500 hover:text-black"}`}
                                        >
                                            Link
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setImageType("upload")}
                                            className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${imageType === "upload" ? "bg-white shadow-sm text-black" : "text-neutral-500 hover:text-black"}`}
                                        >
                                            Upload
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex-1 space-y-4">
                                        {imageType === "url" ? (
                                            <div className="relative">
                                                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                                                <input
                                                    type="text"
                                                    name="image"
                                                    value={formData.image}
                                                    onChange={handleChange}
                                                    placeholder="Image URL (https://...)"
                                                    className="w-full pl-10 pr-4 py-4 bg-neutral-50 border-b-2 border-neutral-200 focus:border-black focus:bg-white outline-none transition-all placeholder:text-neutral-300 font-mono text-sm"
                                                />
                                            </div>
                                        ) : (
                                            <div className="relative group">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleImageUpload}
                                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                                />
                                                <div className="w-full px-4 py-8 bg-neutral-50 border-2 border-dashed border-neutral-200 rounded-lg flex flex-col items-center justify-center gap-2 group-hover:border-black transition-colors">
                                                    <Upload className="w-6 h-6 text-neutral-400 group-hover:text-black" />
                                                    <span className="text-sm text-neutral-500 font-medium group-hover:text-black">Click to upload file</span>
                                                </div>
                                            </div>
                                        )}
                                        <p className="text-xs text-neutral-400">
                                            {imageType === "url"
                                                ? "Paste a direct link to a high-res image. Unsplash URLs work great."
                                                : "Supported formats: JPG, PNG, WEBP. Max size 5MB."}
                                        </p>
                                    </div>

                                    {/* Preview Box */}
                                    <div className="w-full md:w-32 aspect-square bg-[#F0F0F0] rounded-lg overflow-hidden flex items-center justify-center border border-neutral-200 relative">
                                        {formData.image ? (
                                            <img
                                                src={formData.image}
                                                alt="Preview"
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = "";
                                                    (e.target as HTMLImageElement).style.display = 'none';
                                                }}
                                            />
                                        ) : (
                                            <ImageIcon className="text-neutral-300" />
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="pt-6 flex items-center justify-end gap-4">
                                <button
                                    type="button"
                                    className="px-6 py-3 text-sm font-bold uppercase tracking-widest hover:text-neutral-600 transition-colors"
                                >
                                    Clear
                                </button>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all text-sm flex items-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
                                >
                                    {loading ? "Adding..." : (
                                        <>
                                            <Save className="w-4 h-4" />
                                            Publish
                                        </>
                                    )}
                                </button>
                            </div>

                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
