"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const slides = [
    {
        id: 1,
        pill: "NO-CODE STARTUP AGENCY",
        title1: "No-Code App &",
        title2: "Startup Development",
        title3: "Agency",
        description: "From idea validation to product launch, we develop powerful no-code applications using Bubble.io, Adalo, and AI automation systems.",
    },
    {
        id: 2,
        pill: "AI & AUTOMATION EXPERTS",
        title1: "AI Automation &",
        title2: "Chatbot Development",
        title3: "Experts",
        description: "Intelligent systems designed to automate workflows and elevate customer support experiences using advanced AI architectures.",
    },
    {
        id: 3,
        pill: "BUBBLE.IO EXPERTS",
        title1: "Rapid Bubble.io",
        title2: "MVP Development",
        title3: "For Startups",
        description: "Fast-tracked MVP creation using advanced Bubble.io architecture for quick market validation and scalable tech.",
    }
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full min-h-screen pt-24 overflow-hidden flex items-center justify-center bg-[var(--color-primary-black)]">
            {/* Background glowing effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-gold)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="relative min-h-[400px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex flex-col items-start text-left"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-gold)]/20 glass bg-[var(--color-primary-black)]/50 mb-8">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]"></div>
                                <span className="text-xs font-bold tracking-widest text-gray-300 uppercase">{slides[currentSlide].pill}</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-6 tracking-tight">
                                {slides[currentSlide].title1} <br />
                                <span className="text-[var(--color-gold)]">{slides[currentSlide].title2}</span> <br />
                                {slides[currentSlide].title3}
                            </h1>

                            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg font-light leading-relaxed">
                                {slides[currentSlide].description}
                            </p>

                            <div className="flex flex-wrap items-center gap-4">
                                <Link href="/contact">
                                    <button className="px-8 py-4 font-bold text-[var(--color-primary-black)] bg-[var(--color-gold)] rounded text-xs uppercase tracking-widest transition-all hover:bg-white shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                                        Launch Your Startup
                                    </button>
                                </Link>
                                <Link href="/about">
                                    <button className="px-8 py-4 font-bold text-[var(--color-gold)] rounded border border-[var(--color-gold)]/30 text-xs uppercase tracking-widest transition-all hover:bg-[var(--color-gold)]/10">
                                        About Us
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right Animation */}
                <div className="hidden lg:flex relative w-full h-[600px] items-center justify-center">

                    {/* Concentric rings */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[350px] h-[350px] rounded-full border border-[var(--color-gold)]/20 flex items-center justify-center"
                    >
                        {/* Orbiting dots */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-[var(--color-light-gold)] to-[var(--color-gold)] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)]"></div>
                    </motion.div>

                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[550px] h-[550px] rounded-full border border-[var(--color-gold)]/10 flex items-center justify-center"
                    >
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-gradient-to-r from-[var(--color-light-gold)] to-[var(--color-gold)] rounded-full shadow-[0_0_10px_rgba(212,175,55,0.8)]"></div>
                    </motion.div>

                    {/* Central Sphere */}
                    <div className="relative z-10 w-44 h-44 bg-gradient-to-br from-[#d4af37] to-[#8a7322] rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(212,175,55,0.5)]">
                        <span className="text-6xl font-serif text-[var(--color-primary-black)]">F</span>
                    </div>

                    {/* Floating Cards */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-20 right-0 z-20 glass bg-black/80 border border-[var(--color-gold)]/20 px-6 py-4 rounded-xl flex flex-col shadow-xl"
                    >
                        <span className="text-[var(--color-gold)] font-bold text-2xl">50+</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">Projects Shipped</span>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-20 left-10 z-20 glass bg-black/80 border border-[var(--color-gold)]/20 px-6 py-4 rounded-xl flex flex-col shadow-xl"
                    >
                        <span className="text-[var(--color-gold)] font-bold text-2xl">100%</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">Client Satisfaction</span>
                    </motion.div>
                </div>

            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center space-x-4 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-[var(--color-gold)]" : "w-1.5 bg-gray-600 hover:bg-gray-400"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
