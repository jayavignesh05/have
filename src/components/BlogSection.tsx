import Link from "next/link";

export default function BlogSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12 md:py-20 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-2">The Véon Edit Fashion Style</h2>
                <p className="text-sm text-gray-500 mb-6">Your go-to destination for trends, tips, and timeless style inspiration.</p>
                <Link href="#" className="inline-block px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-xs uppercase tracking-wide text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">View all Blogs</Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="lg:col-span-2 flex flex-col md:flex-row bg-secondary-light dark:bg-secondary-dark rounded-xl overflow-hidden">
                    <div className="md:w-3/5 h-96 md:h-auto">
                        <img alt="Main blog post" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVAXyZ9_c924PVDaudQiyBrIYtP_tO9GM3k9pbFdQC5HFfWDMMs7G-qCl-V65_LESCWmL_78dKKxmjc946XOlOh440xEmUJxuW2KBZzl_IimgWQjUfm5twQZcHFCoHM_0jTcHpmee0h5U8i4U2zZUReDw9xkl0EbtxwGO11NmBFnRue4E1Z09TiCTZ53s2TY2egOp-HBzs13vL8cmS_mi_I1rDFjH5XuY979fWJ94nb7xeEYQYX8x9dCvzV0q4Bpw_l7TS-2p1-_kH" />
                    </div>
                    <div className="md:w-2/5 p-6 md:p-10 flex flex-col justify-center">
                        <span className="text-xs text-gray-500 uppercase mb-2">Fashion Tips</span>
                        <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">Dressing for Your Body Type: Find the Perfect Fit with Véon</h3>
                        <div className="mt-auto flex items-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1 bg-white dark:bg-gray-800 px-3 py-1 rounded-md border border-gray-200 dark:border-gray-700"><span className="material-icons text-[14px]">calendar_today</span> 2/20/25</span>
                            <span className="flex items-center gap-1 bg-white dark:bg-gray-800 px-3 py-1 rounded-md border border-gray-200 dark:border-gray-700"><span className="material-icons text-[14px]">schedule</span> 7min</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group cursor-pointer">
                    <div className="h-64 rounded-xl overflow-hidden mb-4 bg-gray-200">
                        <img alt="Style Guide" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPz3ZAFdozYr81z7n3O3vVRgPEi7qN-PAOwv0nYKZdC8-lvd9ypaVYuQpgulyPy-N0UgfZe100RGwVlnRWkV66Q-ipuK8JnoPyrOSPkcO3mIvKVhpNhOW0BdYY3_By82L7GbQkHcLPF2GDX4Bpni32hLBX0L_tcKqpjdyzJaLJE3xcVI6G0v_H30cW6hLM4Br7reWQWE0fRiazQE7FUQMNWUZ7BW2iq84Ec5tnGfSQWr9Leg7NoAAas5K4Swe6ETzwB2sVd6iV-72K" />
                    </div>
                    <div>
                        <span className="text-xs text-gray-500 uppercase mb-1 block">Style Guide</span>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">How to Master the Art of Multi-Seasonal Dressing</h3>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1 bg-secondary-light dark:bg-secondary-dark px-2 py-1 rounded"><span className="material-icons text-[12px]">calendar_today</span> 5/26/25</span>
                            <span className="flex items-center gap-1 bg-secondary-light dark:bg-secondary-dark px-2 py-1 rounded"><span className="material-icons text-[12px]">schedule</span> 7min</span>
                        </div>
                    </div>
                </div>

                <div className="group cursor-pointer">
                    <div className="h-64 rounded-xl overflow-hidden mb-4 bg-gray-200">
                        <img alt="Human Touch" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR--JbVQ5tJeLx93ZD23FvT53s_RkRd3uafZWdkI4oon_qnOte0YWIt3PPpeh2twyL3hfRJYqty8osnXmLEntyDVTV9Y4KJeHriYZuphP5MW7CI7ftymnl1I1C8-82zcdxRWq4ndhZ7mqTXZL3nweSvBcSPcSClkxrrhldXFK2fF2pCirz44FkdYrfkSk9VTbEd53N8rbsRecVHOGj_4t3xdL7nC2uWaByfifjjYWAeGhWn1GzuS65qjpXr-smYGU7PVy_UWOtGO5Z" />
                    </div>
                    <div>
                        <span className="text-xs text-gray-500 uppercase mb-1 block">Brand Stories</span>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">The Human Touch Behind Every Véon Piece</h3>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1 bg-secondary-light dark:bg-secondary-dark px-2 py-1 rounded"><span className="material-icons text-[12px]">calendar_today</span> 3/20/25</span>
                            <span className="flex items-center gap-1 bg-secondary-light dark:bg-secondary-dark px-2 py-1 rounded"><span className="material-icons text-[12px]">schedule</span> 6min</span>
                        </div>
                    </div>
                </div>

                <div className="group cursor-pointer">
                    <div className="h-64 rounded-xl overflow-hidden mb-4 bg-gray-200">
                        <img alt="Why We Chose" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj0ijQ8tHz4y0CM7MuB4aBxpJXvPeKje9ly0dq22WIl2hIkerFYqBs1cqIVJkNO6S_QKiT8qQ9Igj1Kyzt1HPPveQ-Yft9xZ7rRIdE7TGTycTO6LIC570ejFFmmmuSWYsf4p_x6RlFFrz5ovlZPMZQqspHjGC2KkQaJwruRJ8brOLEn0s_uC4pmPc0PnWu9506vLzzHNaD6e1V0sEdahM-6w7HBem8K_aHK-5QMvgMXI4JDAJvkvZ0dIvpCx5UXl5sY7xGia75MqZo" />
                    </div>
                    <div>
                        <span className="text-xs text-gray-500 uppercase mb-1 block">Brand Stories</span>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Why We Chose the Name Véon: Story Behind Brand</h3>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1 bg-secondary-light dark:bg-secondary-dark px-2 py-1 rounded"><span className="material-icons text-[12px]">calendar_today</span> 2/22/25</span>
                            <span className="flex items-center gap-1 bg-secondary-light dark:bg-secondary-dark px-2 py-1 rounded"><span className="material-icons text-[12px]">schedule</span> 5min</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
