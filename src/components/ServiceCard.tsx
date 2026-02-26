"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    delay?: number;
}

export default function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="glass rounded-2xl p-8 relative overflow-hidden group border border-[var(--color-gold)]/10 hover:border-[var(--color-gold)]/50 transition-colors"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-gold)] opacity-5 blur-[50px] group-hover:opacity-20 transition-opacity"></div>

            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--color-secondary-black)] to-black border border-[var(--color-gold)]/20 shadow-[0_0_15px_rgba(212,175,55,0.15)] text-[var(--color-gold)] text-3xl">
                {icon}
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                {title}
            </h3>

            <p className="text-gray-400 leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
}
