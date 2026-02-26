import { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
    title: "About | Favour B - AI & MVP Agency",
    description: "Learn more about Favour B, Founder & AI Automation Architect, and our expertise in Bubble.io and Full Stack Development.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen pt-12">
            <section className="py-20 relative bg-[var(--color-primary-black)]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-gold)] opacity-5 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-sm font-semibold text-[var(--color-gold)] uppercase tracking-[0.2em] mb-4">About The Agency</h1>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                        Visionary <span className="gold-gradient-text">Leadership</span>
                    </h2>
                </div>
            </section>

            <section className="py-16 relative bg-[var(--color-secondary-black)]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass rounded-3xl p-8 md:p-16 border border-[var(--color-gold)]/20 shadow-[0_0_30px_rgba(212,175,55,0.05)]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-[var(--color-gold)]/20">
                                <Image
                                    src="/profile-picture.jpg"
                                    alt="Favour B - Founder & AI Automation Architect"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-black)] via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <h3 className="text-2xl font-bold text-white">Favour B.</h3>
                                    <p className="text-[var(--color-gold)] font-medium">Founder & AI Automation Architect</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-3xl font-bold text-white mb-4">Pioneering Digital Solutions for <span className="text-[var(--color-gold)]">Modern Startups.</span></h3>

                                <p className="text-gray-400 leading-relaxed text-lg">
                                    As an AI Automation Expert and Bubble.io MVP Developer, I specialize in transforming complex business bottlenecks into streamlined, automated workflows. My mission is to empower startups and enterprises to operate at their highest potential without being restrained by technical barriers.
                                </p>

                                <div className="pt-6 border-t border-[var(--color-gold)]/20">
                                    <h4 className="text-xl font-semibold text-white mb-4">Core Expertise</h4>
                                    <ul className="space-y-3">
                                        {['AI System Architecture & Integration', 'Rapid Bubble.io MVP Development', 'No-Code Tool Optimization', 'Full Stack Next.js / Node.js Development', 'Process Automation & Scale'].map((skill, index) => (
                                            <li key={index} className="flex items-center text-gray-400">
                                                <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] mr-3"></span>
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Agency Team Style Description */}
                    <div className="mt-24 text-center">
                        <h3 className="text-3xl font-bold text-white mb-6">Our Agency <span className="text-[var(--color-gold)]">Philosophy</span></h3>
                        <p className="text-gray-400 max-w-4xl mx-auto text-lg leading-relaxed mb-12">
                            We don't just write code; we architect digital infrastructure. We understand that in today's fast-paced environment, speed-to-market and operational efficiency are everything. That's why we leverage cutting-edge AI and robust no-code/full-stack ecosystems to deliver enterprise-grade products at unparalleled speeds.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            <div className="glass p-8 rounded-2xl border border-[var(--color-gold)]/10">
                                <h4 className="text-xl font-bold text-[var(--color-gold)] mb-3">Innovation First</h4>
                                <p className="text-gray-400">Integrating the latest LLMs and AI frameworks to ensure your product stays ahead of the curve.</p>
                            </div>
                            <div className="glass p-8 rounded-2xl border border-[var(--color-gold)]/10">
                                <h4 className="text-xl font-bold text-[var(--color-gold)] mb-3">Rapid Iteration</h4>
                                <p className="text-gray-400">Launch faster with MVP roadmaps designed to validate business models without burning capital.</p>
                            </div>
                            <div className="glass p-8 rounded-2xl border border-[var(--color-gold)]/10">
                                <h4 className="text-xl font-bold text-[var(--color-gold)] mb-3">Scalable Architecture</h4>
                                <p className="text-gray-400">Systems built to handle growth. From 10 to 100,000 users, your infrastructure won't break.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
