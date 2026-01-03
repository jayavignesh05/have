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
            <div className="max-w-screen-2xl mx-auto px-6 py-20 text-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 mb-6 block">Follow Us</span>
                <h2 className="text-4xl font-bold tracking-tight text-black">@HAVE_STUDIO</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 h-64 md:h-96">
                {images.map((img, i) => (
                    <div key={i} className="relative group overflow-hidden">
                        <Image
                            alt={`Instagram ${i + 1}`}
                            fill
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
