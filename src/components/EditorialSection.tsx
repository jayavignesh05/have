import Image from "next/image";

export default function EditorialSection() {
    return (
        <section className="w-full bg-white">
            {/* Section 1: Blurry Motion - Full Width or Split */}
            <div className="grid h-screen w-full grid-cols-1 md:grid-cols-12 md:h-[80vh]">
                <div className="relative bg-gray-200 md:col-span-8">
                    <Image
                        src="https://placehold.co/1200x1600/e5e7eb/9ca3af?text=Motion+Blur+Editorial"
                        alt="Motion Blur Editorial"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col justify-center bg-zinc-900 p-12 text-white md:col-span-4">
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
                    src="https://placehold.co/1920x1080/1f2937/4b5563?text=Moody+Side+Profile"
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
