export default function StorySection() {
    return (
        <section className="relative w-full h-[600px] overflow-hidden">
            <img
                alt="Our story background model"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe9T3iKJg9ibfTmTSlRYfy-a-1jUE2YU6E7VOHsWHRPFDbu5JBPbWzIorwHpR6-vLhSgQJ9gxmPU-OTo_GTyZRZzkFfiuAZi0f7mF4MSMn79NTmRZePOVLAK9KCDMHTd_UHa1vqIIv-f0i1Mze0G4InRfNysbwdfclQZ7r5M5ThKFtQk4Nhgh-phDKyNQ-jczh7mGfOcp3iXWoa7fMCiZBv7wuC2SPW6H4EdotjYwVmezN5hdqTwRUvQs6KIBTQ4NeqKhXl4DaHHhR"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Story, Your Style</h2>
                <p className="text-white/90 max-w-lg mb-8 text-sm md:text-base font-light">
                    Creating timeless fashion with quality, innovation, and sustainability at the core.
                </p>
                <a
                    href="#"
                    className="inline-block bg-white/20 backdrop-blur-sm border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium"
                >
                    Explore About us
                </a>
            </div>
        </section>
    );
}
