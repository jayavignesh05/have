"use client";

import { motion } from "framer-motion";
import { Truck, Headset, ShieldCheck, RotateCcw } from "lucide-react";

const props = [
    {
        icon: <Truck size={32} strokeWidth={1.5} />,
        title: "Free Shipping",
        description: "Get your sunglasses in 4-7 business days.",
    },
    {
        icon: <Headset size={32} strokeWidth={1.5} />,
        title: "Here to help",
        description: "Customer service is available Monday through Friday.",
    },
    {
        icon: <ShieldCheck size={32} strokeWidth={1.5} />,
        title: "Secure Payment",
        description: "We keep your payment information safe.",
    },
    {
        icon: <RotateCcw size={32} strokeWidth={1.5} />,
        title: "10-Days Return Policy",
        description: "We think you'll love it. If you don't, let us know!",
    },
];

export default function ValueProps() {
    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-screen-2xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight mb-4">Why Shop with Veon</h2>
                    <p className="text-neutral-500 text-sm font-medium tracking-wide uppercase">Enjoy exclusive benefits designed for a seamless shopping experience</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {props.map((prop, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-neutral-50 p-12 flex flex-col items-center text-center rounded-sm"
                        >
                            <div className="text-black mb-8">{prop.icon}</div>
                            <h3 className="text-xl font-bold mb-4">{prop.title}</h3>
                            <p className="text-neutral-500 text-sm max-w-xs">{prop.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
