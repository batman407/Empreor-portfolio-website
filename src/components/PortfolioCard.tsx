"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

interface PortfolioCardProps {
    title: string;
    description: string;
    technologies: string[];
    results: string;
    imageUrl: string;
    delay?: number;
}

export default function PortfolioCard({ title, description, technologies, results, imageUrl, delay = 0 }: PortfolioCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay }}
            className="glass overflow-hidden rounded-2xl group flex flex-col h-full border border-[var(--color-gold)]/10 hover:border-[var(--color-gold)]/50 transition-colors"
        >
            <div className="relative w-full h-64 overflow-hidden bg-gray-900 border-b border-[var(--color-gold)]/20">
                <Image
                    src={imageUrl}
                    alt={`Screenshot of ${title} project`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 ease-in-out"></div>
            </div>

            <div className="p-8 flex-grow flex flex-col relative">
                <div className="absolute -top-10 right-6 bg-[var(--color-secondary-black)] p-4 rounded-full border border-[var(--color-gold)] opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] z-10">
                    <FaExternalLinkAlt className="text-[var(--color-gold)] text-xl" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--color-gold)] transition-colors">
                    {title}
                </h3>
                <p className="text-gray-400 mb-6 flex-grow">
                    {description}
                </p>

                <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[var(--color-gold)]/20">
                    <p className="text-[var(--color-gold)] font-medium text-sm flex items-center">
                        <span className="bg-[var(--color-gold)]/20 p-1 rounded mr-2">🎯</span> {results}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
