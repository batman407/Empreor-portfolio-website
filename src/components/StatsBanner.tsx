"use client";

import { motion } from "framer-motion";

export default function StatsBanner() {
    const marqueeItems = [
        { text: "PROCESS AUTOMATION", icon: "⚡" },
        { text: "AI AUTOMATION", icon: "⚡" },
        { text: "CHATBOT DEVELOPMENT", icon: "🤖" },
        { text: "BUBBLE.IO MVP", icon: "🚀" },
        { text: "NO-CODE SYSTEMS", icon: "🔷" },
        { text: "FULL STACK DEV", icon: "💻" },
        { text: "MOBILE APPS", icon: "📱" },
    ];

    // Double the items for seamless scrolling
    const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

    return (
        <div className="w-full bg-[var(--color-primary-black)] flex flex-col items-center border-b border-[var(--color-gold)]/5">
            {/* Marquee Banner */}
            <div className="w-full overflow-hidden border-b border-[var(--color-gold)]/10 py-5 bg-[#0a0a0a]">
                <div className="flex whitespace-nowrap animate-marquee w-max">
                    {duplicatedItems.map((item, idx) => (
                        <div key={idx} className="flex items-center mx-10 my-1">
                            <span className="text-gray-500 font-black text-xs uppercase tracking-[0.2em]">{item.text}</span>
                            <span className="ml-5 text-lg opacity-80">{item.icon}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats Block */}
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
                {/* Background glowing effects */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150px] bg-[var(--color-gold)] opacity-[0.02] blur-[80px] pointer-events-none"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-4 border border-[var(--color-gold)]/30 rounded-3xl overflow-hidden glass shadow-[0_0_40px_rgba(212,175,55,0.05)]"
                >
                    <div className="p-12 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-[var(--color-gold)]/20 relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h4 className="text-5xl md:text-6xl font-serif text-[var(--color-light-gold)] mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">50+</h4>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Projects Delivered</p>
                    </div>
                    <div className="p-12 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-[var(--color-gold)]/20 relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h4 className="text-5xl md:text-6xl font-serif text-[var(--color-light-gold)] mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">35+</h4>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Happy Clients</p>
                    </div>
                    <div className="p-12 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-[var(--color-gold)]/20 relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h4 className="text-5xl md:text-6xl font-serif text-[var(--color-light-gold)] mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">5+</h4>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Years Experience</p>
                    </div>
                    <div className="p-12 flex flex-col items-center justify-center text-center relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h4 className="text-5xl md:text-6xl font-serif text-[var(--color-light-gold)] mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">100%</h4>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Client Satisfaction</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
