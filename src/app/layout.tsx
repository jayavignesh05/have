import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ShopProvider } from "@/context/ShopContext";
import Toast from "@/components/Toast";
import CartDrawer from "@/components/CartDrawer";
import SearchOverlay from "@/components/SearchOverlay";
import WishlistDrawer from "@/components/WishlistDrawer";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HAVE - Fashion E-commerce",
  description: "Creating timeless fashion with quality, innovation, and sustainability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${inter.variable} ${playfair.variable} antialiased bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-sans transition-colors duration-300`}
      >
        <ShopProvider>
          <Navbar />
          {children}
          <WishlistDrawer />
          <CartDrawer />
          <SearchOverlay />
          <Toast />
        </ShopProvider>
      </body>
    </html>
  );
}
