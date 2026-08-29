
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">

            <div className="pt-40 pb-20 px-6 max-w-screen-xl mx-auto">
                <div className="flex items-center gap-4 mb-8 flex-wrap">
                    <h1 className="text-5xl md:text-6xl font-bold">About</h1>
                    <Image
                        src="/images/logo/havelogoblack.png"
                        alt="HAVE"
                        width={220}
                        height={72}
                        className="h-10 md:h-14 w-auto object-contain inline-block"
                        priority
                    />
                </div>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                    We believe in bold layers and confident looks. Our mission is to provide timeless fashion essentials for the modern wardrobe.
                </p>
            </div>
            <Footer />
        </main>
    );
}
