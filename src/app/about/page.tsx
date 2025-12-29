import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-40 pb-20 px-6 max-w-screen-xl mx-auto">
                <h1 className="text-6xl font-bold mb-8">About Véon</h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                    We believe in bold layers and confident looks. Our mission is to provide timeless fashion essentials for the modern wardrobe.
                </p>
            </div>
            <Footer />
        </main>
    );
}
