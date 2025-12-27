export default function Testimonials() {
    return (
        <section className="bg-card-light dark:bg-card-dark py-20 border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-2">What Our Customers Say</h2>
                <p className="text-sm text-gray-500 mb-16">Real experiences, Authentic style. See why everyone loves HAVE.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-secondary-light dark:bg-secondary-dark p-8 rounded-lg relative">
                        <p className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed mb-6">"The quality and fit are absolutely perfect! From the moment I put it on, I could feel the attention to detail. The fabric is soft yet durable, making it perfect for everyday wear. Definitely my new go-to brand!"</p>
                        <div className="flex flex-col items-center">
                            <img alt="James Carter" className="w-12 h-12 rounded-full object-cover mb-2 border-2 border-white dark:border-gray-700" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" />
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">— James Carter</span>
                        </div>
                    </div>
                    <div className="bg-secondary-light dark:bg-secondary-dark p-8 rounded-lg relative">
                        <p className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed mb-6">"HAVE's designs are effortlessly chic and modern. I recently purchased a polo and a pair of cargo pants, and both exceeded my expectations. The fit is flattering, and the materials feel premium. I get compliments every time I wear them!"</p>
                        <div className="flex flex-col items-center">
                            <img alt="Michael Chen" className="w-12 h-12 rounded-full object-cover mb-2 border-2 border-white dark:border-gray-700" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=150&auto=format&fit=crop" />
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">— Michael Chen</span>
                        </div>
                    </div>
                    <div className="bg-secondary-light dark:bg-secondary-dark p-8 rounded-lg relative">
                        <p className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed mb-6">"From the fabric to the fit, every piece feels premium. You can tell that HAVE puts a lot of effort into making sure their designs are both fashionable and functional. I love the sophisticated yet relaxed aesthetic—it's exactly what I've been looking for in a brand!"</p>
                        <div className="flex flex-col items-center">
                            <img alt="David Wright" className="w-12 h-12 rounded-full object-cover mb-2 border-2 border-white dark:border-gray-700" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" />
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">— David Wright</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
