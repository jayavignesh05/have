"use client";

import React, { createContext, useContext, useState } from "react";
import { Product } from "@/data/products";

interface ShopContextType {
    cart: Product[];
    wishlist: number[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    toggleWishlist: (productId: number) => void;
    showToast: (message: string) => void;
    toastMessage: string | null;
    isCartOpen: boolean;
    toggleCart: () => void;
    isSearchOpen: boolean;
    toggleSearch: () => void;
    isWishlistOpen: boolean;
    toggleWishlistDrawer: () => void;
    hasHomeLoaded: boolean;
    setHasHomeLoaded: (loaded: boolean) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<Product[]>([]);
    const [wishlist, setWishlist] = useState<number[]>([]);
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isWishlistOpen, setIsWishlistOpen] = useState(false);
    const [hasHomeLoaded, setHasHomeLoaded] = useState(false);

    const toggleCart = () => setIsCartOpen((prev) => !prev);
    const toggleSearch = () => setIsSearchOpen((prev) => !prev);
    const toggleWishlistDrawer = () => setIsWishlistOpen((prev) => !prev);

    const addToCart = (product: Product) => {
        setCart((prev) => [...prev, product]);
        showToast(`Added ${product.name} to cart`);
        setIsCartOpen(true);
    };

    const removeFromCart = (productId: number) => {
        setCart((prev) => prev.filter((item) => item.id !== productId));
    };

    const toggleWishlist = (productId: number) => {
        setWishlist((prev) => {
            if (prev.includes(productId)) {
                showToast("Removed from wishlist");
                return prev.filter((id) => id !== productId);
            } else {
                showToast("Added to wishlist");
                return [...prev, productId];
            }
        });
    };

    const showToast = (message: string) => {
        setToastMessage(message);
        setTimeout(() => {
            setToastMessage(null);
        }, 3000);
    };

    return (
        <ShopContext.Provider
            value={{
                cart,
                wishlist,
                addToCart,
                removeFromCart,
                toggleWishlist,
                showToast,
                toastMessage,
                isCartOpen,
                toggleCart,
                isSearchOpen,
                toggleSearch,
                isWishlistOpen,
                toggleWishlistDrawer,
                hasHomeLoaded,
                setHasHomeLoaded,
            }}
        >
            {children}
        </ShopContext.Provider>
    );
};

export const useShop = () => {
    const context = useContext(ShopContext);
    if (context === undefined) {
        throw new Error("useShop must be used within a ShopProvider");
    }
    return context;
};
