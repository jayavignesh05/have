import Link from "next/link";

export default function CollectionSplit() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-24">
            <div className="flex flex-col md:flex-row items-center bg-secondary-light dark:bg-secondary-dark rounded-xl overflow-hidden">
                <div className="w-full md:w-1/2 p-12 lg:p-24 flex flex-col justify-center items-center text-center">
                    <span className="text-xs uppercase tracking-widest text-gray-500 mb-4">New In Dresses</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">Elevate Your Style</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-sm">Discover sophisticated silhouettes and luxurious fabrics, designed for timeless style.</p>
                    <Link href="#" className="px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">Discover Collection</Link>
                </div>
                <div className="w-full md:w-1/2 h-[500px]">
                    <img alt="Elevate Your Style" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMlnWwTdXPJBIhXN2WbCVCmGarfssxlqkaT3R-35WTv12krS7kmgbF6YiL-NywUGoDh-8fdQaUE1vYSFK4jId5yB9b_0YrRau8s5ooWcKvO-bs_eiK2Vmuw8ZYIMC7Y-BRoTMSP6jl8ta9l2zsWgdrgLZ5C7zPC812VPHLt0eSG5e6hVu0gg5Nctknnfc8j2yndxrvoWq4ao4752LBzVca_wmxwbpJVX-rOIFWVzdpmD0A87EUbZF9L7zIUmfdNM-g-SmoTGaw8tVg" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center bg-secondary-light dark:bg-secondary-dark rounded-xl overflow-hidden">
                <div className="w-full md:w-1/2 p-12 lg:p-24 flex flex-col justify-center items-center text-center">
                    <span className="text-xs uppercase tracking-widest text-gray-500 mb-4">New In Shirts</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">Redefine Casual Comfort</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-sm">Experience premium fabrics and modern fits, designed for effortless everyday style.</p>
                    <Link href="#" className="px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">Discover Collection</Link>
                </div>
                <div className="w-full md:w-1/2 h-[500px]">
                    <img alt="Redefine Casual Comfort" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4GZITE1zVp5m7ptegnCyQx4ZDoAMQL0WixVAXZOuIDjtxZnE1xIDYM2QTFDbm71XU9DXe4yEJM_nF2I3G4Wnm-5dcKeUEvpK-8oL1mjsoByD3ZuS8c5vJbjVuC7gkaxE6rgxsiy6Tf_FnkSVqRXo4OroHDVNSScF56urR2VB_ZJGVylikhfdol4n5kEsSSj8s6bpdKfIPuxSyiBi3yFpiBOARtKF1pwqLZGoCxyHD1ufyAdc_Yl5OLuMiHSMTs7FwoNtT1r-MFdO0" />
                </div>
            </div>
        </section>
    );
}
