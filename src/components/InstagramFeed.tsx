import Image from "next/image";

export default function InstagramFeed() {
    const images = [
        "https://images.unsplash.com/photo-1550246140-29f40b909e5a?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=800&auto=format&fit=crop"
    ];

    return (
        <section className="relative overflow-hidden bg-white">
            <div className="max-w-screen-2xl mx-auto px-6 pb-10 text-center flex flex-col items-center">
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-black mb-4 block">Follow Us</span>
                <div className="flex items-center justify-center mb-2">
                    <Image
                        src="/images/logo/havelogoblack.png"
                        alt="HAVE"
                        width={280}
                        height={90}
                        className="h-12 md:h-16 w-auto object-contain"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 h-64 md:h-96">
                {images.map((img, i) => (
                    <div key={i} className="relative group overflow-hidden">
                        <Image
                            alt={`Instagram ${i + 1}`}
                            fill
                            sizes="(max-width: 768px) 50vw, 20vw"
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                            src={img}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                    </div>
                ))}
            </div>
        </section>
    );
}
