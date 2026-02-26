import { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
    title: "Contact | Favour B - AI & MVP Agency",
    description: "Get in touch with Favour B to discuss your AI Automation, Bubble.io MVP, or Full Stack Development project requirements.",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen pt-12">
            <section className="py-20 relative bg-[var(--color-primary-black)] pb-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-gold)] opacity-5 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-sm font-semibold text-[var(--color-gold)] uppercase tracking-[0.2em] mb-4">Start A Project</h1>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                        Let's Build The <span className="gold-gradient-text">Future</span>
                    </h2>
                </div>
            </section>

            <ContactSection />
        </div>
    );
}
