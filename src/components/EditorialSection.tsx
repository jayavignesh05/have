import Image from "next/image";

export default function EditorialSection() {
    return (
        <section className="w-full bg-white">
            {/* Section 1: Blurry Motion - Full Width or Split */}
            <div className="grid min-h-screen md:min-h-0 md:h-[80vh] w-full grid-cols-1 md:grid-cols-12">
                <div className="relative h-[50vh] md:h-auto bg-gray-200 md:col-span-8">
                    <Image
                        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop"
                        alt="Motion Blur Editorial"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col justify-center bg-zinc-900 p-6 md:p-12 text-white md:col-span-4">
                    <h2 className="mb-6 text-4xl font-bold leading-none md:text-6xl">
                        MOVE <br /> DIFFERENT.
                    </h2>
                    <p className="max-w-xs font-light text-gray-400">
                        Designed for the fast-paced life. Textures that breathe and move with
                        you.
                    </p>
                </div>
            </div>

            {/* Section 2: Side Profile - Full Width */}
            <div className="relative h-[60vh] w-full bg-gray-800 md:h-[80vh]">
                <Image
                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1920&auto=format&fit=crop"
                    alt="Moody Side Profile"
                    fill
                    className="object-cover opacity-70"
                />

                <div className="absolute bottom-12 left-6 md:bottom-24 md:left-24">
                    <h2 className="text-3xl font-bold text-white md:text-5xl">
                        SILHOUETTE
                    </h2>
                    <p className="mt-2 text-gray-300">
                        Defining the new shape of streetwear.
                    </p>
                </div>
            </div>
        </section>
    );
}
