"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaRocket } from "react-icons/fa";

export default function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden bg-black/50 overflow-x-hidden">
            {/* Background glowing effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-gold)] opacity-5 blur-[150px] rounded-full pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="glass rounded-3xl p-12 md:p-20 text-center border-2 border-[var(--color-gold)]/20 shadow-[0_0_50px_rgba(212,175,55,0.1)] relative overflow-hidden"
                >
                    {/* Internal corner decoration */}
                    <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[var(--color-gold)] rounded-tl-3xl opacity-30"></div>
                    <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[var(--color-gold)] rounded-br-3xl opacity-30"></div>

                    <div className="mb-6 flex justify-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-light-gold)] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.5)]">
                            <FaRocket className="text-3xl text-[var(--color-primary-black)]" />
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">
                        Ready to build something <span className="gold-gradient-text">powerful?</span>
                    </h2>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Let's start your project today. Partner with Favour B to transform your visionary ideas into scalable, high-performance digital realities.
                    </p>

                    <Link href="/contact" className="inline-block">
                        <button className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-lg text-[var(--color-primary-black)] bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-light-gold)] rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]">
                            <span className="relative z-10 flex items-center gap-3">
                                Get Started Now <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </span>
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
