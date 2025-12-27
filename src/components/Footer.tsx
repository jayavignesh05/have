"use client";

import { useShop } from "@/context/ShopContext";

export default function Footer() {
    const { showToast } = useShop();


    return (
        <footer className="bg-[#2E1065] text-white pt-16 pb-8 border-t border-purple-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-2xl font-serif font-bold mb-4 text-purple-100">VÉON</h2>
                        <p className="text-purple-200 text-sm mb-6">Sign up to receive the latest news from Véon.</p>
                        <form
                            className="flex"
                            onSubmit={(e) => {
                                e.preventDefault();
                                showToast("Subscribed to newsletter!");
                            }}
                        >
                            <input className="bg-purple-900/40 border border-purple-700/50 text-white px-4 py-2 text-sm w-full focus:ring-1 focus:ring-purple-400 rounded-l-md placeholder:text-purple-400 outline-none" placeholder="Your email address" type="email" required />
                            <button type="submit" className="bg-purple-100 text-purple-900 px-4 py-2 text-sm font-medium rounded-r-md hover:bg-white transition-colors">Subscribe</button>
                        </form>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-purple-300">Shop</h4>
                        <ul className="space-y-2 text-sm text-purple-200/80">
                            <li><a className="hover:text-white transition-colors" href="#">All Products</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Best Sellers</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Sale</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-purple-300">About</h4>
                        <ul className="space-y-2 text-sm text-purple-200/80">
                            <li><a className="hover:text-white transition-colors" href="#">Our Story</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Sustainability</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Press</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-purple-300">Support</h4>
                        <ul className="space-y-2 text-sm text-purple-200/80">
                            <li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Returns & Refunds</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Shipping & Delivery</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-purple-900/50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-purple-400">
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <a className="hover:text-white transition-colors" href="#">Instagram</a>
                        <a className="hover:text-white transition-colors" href="#">Twitter (X)</a>
                        <a className="hover:text-white transition-colors" href="#">LinkedIn</a>
                    </div>
                    <div>
                        © 2025 Véon. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
