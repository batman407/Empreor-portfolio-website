"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate form submission
        setTimeout(() => {
            setLoading(false);
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        }, 1500);
    };

    return (
        <section className="py-24 relative bg-[var(--color-primary-black)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Let's <span className="text-[var(--color-gold)]">Talk</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Ready to scale your business with custom AI solutions and MVP development? Get in touch today.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="glass p-8 rounded-2xl border border-[var(--color-gold)]/20 shadow-[0_0_20px_rgba(212,175,55,0.05)]">
                            <div className="flex items-center space-x-6">
                                <div className="w-16 h-16 rounded-full bg-[var(--color-secondary-black)] flex items-center justify-center border border-[var(--color-gold)]/30 text-[var(--color-gold)] text-2xl shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                                    <FaWhatsapp />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-1">WhatsApp</h3>
                                    <a href="https://wa.me/2348082441128" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors">
                                        +234 808 244 1128
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="glass p-8 rounded-2xl border border-[var(--color-gold)]/20 shadow-[0_0_20px_rgba(212,175,55,0.05)]">
                            <div className="flex items-center space-x-6">
                                <div className="w-16 h-16 rounded-full bg-[var(--color-secondary-black)] flex items-center justify-center border border-[var(--color-gold)]/30 text-[var(--color-gold)] text-2xl shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-1">Email</h3>
                                    <a href="mailto:favourdarasimi1883@gmail.com" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors">
                                        favourdarasimi1883@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="glass p-8 rounded-2xl border border-[var(--color-gold)]/20 shadow-[0_0_20px_rgba(212,175,55,0.05)]">
                            <div className="flex items-center space-x-6">
                                <div className="w-16 h-16 rounded-full bg-[var(--color-secondary-black)] flex items-center justify-center border border-[var(--color-gold)]/30 text-[var(--color-gold)] text-2xl shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-1">Global/Remote</h3>
                                    <p className="text-gray-400">Available for worldwide partnerships</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass p-10 rounded-2xl border border-[var(--color-gold)]/20 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-gold)] opacity-5 blur-[50px]"></div>

                        <h3 className="text-3xl font-bold text-white mb-8">Send a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-[var(--color-secondary-black)] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-[var(--color-secondary-black)] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message Description</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-[var(--color-secondary-black)] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition-all resize-none"
                                    placeholder="Tell us about your project requirements..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-light-gold)] text-[var(--color-primary-black)] font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <span className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[var(--color-primary-black)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : "Send Message"}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
