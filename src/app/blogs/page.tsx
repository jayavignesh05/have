import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-40 pb-20 px-6 max-w-screen-xl mx-auto">
                <h1 className="text-6xl font-bold mb-8">Journal</h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                    Coming soon.
                </p>
            </div>
            <Footer />
        </main>
    );
}
