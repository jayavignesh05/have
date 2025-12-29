export default function FeaturesSection() {
    return (
        <section className="py-16 bg-white dark:bg-card-dark border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-2xl font-serif font-bold mb-2">Why Shop with Véon</h2>
                <p className="text-gray-500 text-sm mb-12">Enjoy exclusive benefits designed for a seamless shopping experience.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6 bg-secondary-light dark:bg-secondary-dark rounded-lg">
                        <span className="material-icons text-4xl text-gray-700 dark:text-gray-300 mb-4">local_shipping</span>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">Free Shipping</h3>
                        <p className="text-xs text-gray-500">Get your sunglasses in 4-7 business days.</p>
                    </div>
                    <div className="p-6 bg-secondary-light dark:bg-secondary-dark rounded-lg">
                        <span className="material-icons text-4xl text-gray-700 dark:text-gray-300 mb-4">headset_mic</span>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">Here to help</h3>
                        <p className="text-xs text-gray-500">Customer service is available Monday through Friday.</p>
                    </div>
                    <div className="p-6 bg-secondary-light dark:bg-secondary-dark rounded-lg">
                        <span className="material-icons text-4xl text-gray-700 dark:text-gray-300 mb-4">credit_card</span>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">Secure Payment</h3>
                        <p className="text-xs text-gray-500">We keep your payment information safe.</p>
                    </div>
                    <div className="p-6 bg-secondary-light dark:bg-secondary-dark rounded-lg">
                        <span className="material-icons text-4xl text-gray-700 dark:text-gray-300 mb-4">sync</span>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">10-Days Return Policy</h3>
                        <p className="text-xs text-gray-500">We think you&apos;ll love it. If you don&apos;t, let us know!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
