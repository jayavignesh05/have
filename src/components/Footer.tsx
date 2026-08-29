"use client";

import { useShop } from "@/context/ShopContext";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
    const { showToast } = useShop();

    return (
        <footer className="bg-[#714A9C] text-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Main Footer Content */}
                <div className="py-16 border-b border-white/15">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Brand & Newsletter Section */}
                        <div className="lg:col-span-5">
                            <Link href="/" className="inline-block mb-4">
                                <Image
                                    src="/images/logo/havelogo.png"
                                    alt="HAVE Logo"
                                    width={160}
                                    height={50}
                                    className="h-8 md:h-10 w-auto object-contain"
                                />
                            </Link>
                            <p className="text-white/80 text-sm leading-relaxed mb-8 max-w-md">
                                Stay in the loop with exclusive updates, new arrivals, and special offers delivered straight to your inbox.
                            </p>

                            <form
                                className="flex flex-col sm:flex-row gap-3"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    showToast("Subscribed to newsletter!");
                                }}
                            >
                                <input
                                    className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-3 text-sm rounded-lg focus:ring-2 focus:ring-white/40 focus:border-white/40 placeholder:text-white/60 outline-none transition-all"
                                    placeholder="Enter your email"
                                    type="email"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-white text-[#714A9C] px-6 py-3 text-sm font-semibold rounded-lg hover:bg-white/90 hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>

                        {/* Links Grid */}
                        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
                            <div>
                                <h4 className="text-sm font-semibold uppercase tracking-widest mb-5 text-white">
                                    Shop
                                </h4>
                                <ul className="space-y-3 text-sm">
                                    <li><a className="text-white/70 hover:text-white transition-colors duration-200" href="#">All Products</a></li>
                                    <li><a className="text-white/70 hover:text-white transition-colors duration-200" href="#">New Arrivals</a></li>
                                    <li><a className="text-white/70 hover:text-white transition-colors duration-200" href="#">Best Sellers</a></li>
                                    {/* <li><a className="text-white/70 hover:text-white transition-colors duration-200" href="#">Sale</a></li> */}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold uppercase tracking-widest mb-5 text-white">
                                    About
                                </h4>
                                <ul className="space-y-3 text-sm">
                                    <li><a className="text-white/70 hover:text-white transition-colors duration-200" href="#">Our Story</a></li>
                                    <li><a className="text-white/70 hover:text-white transition-colors duration-200" href="#">Sustainability</a></li>
                                    {/* <li><a className="text-white/70 hover:text-white transition-colors duration-200" href="#">Careers</a></li> */}
                                    {/* <li><a className="text-white/70 hover:text-white transition-colors duration-200" href="#">Press</a></li> */}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold uppercase tracking-widest mb-5 text-white">
                                    Support
                                </h4>
                                <ul className="space-y-3 text-sm">
                                    <li><a className="text-white/70 hover:text-white transition-colors duration-200" href="#">FAQ</a></li>
                                    <li><a className="text-white/70 hover:text-white transition-colors duration-200" href="#">Returns & Refunds</a></li>
                                    <li><a className="text-white/70 hover:text-white transition-colors duration-200" href="#">Shipping</a></li>
                                    <li><a className="text-white/70 hover:text-white transition-colors duration-200" href="#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
                    <p className="text-white/60">
                        © 2026 HAVE. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <a
                            className="text-white/70 hover:text-white transition-all duration-200 hover:scale-110"
                            href="https://www.instagram.com/have.co.in?igsi=azFkdTF0Y3h6N2Jq"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <FaInstagram className="w-5 h-5" />
                        </a>
                        <a
                            className="text-white/70 hover:text-white transition-all duration-200 hover:scale-110"
                            href="https://wa.me/+919342429350"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
