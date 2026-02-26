import { Metadata } from "next";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
    title: "Portfolio | Favour B - AI & MVP Agency",
    description: "Explore our recent success stories. From AI Customer Support chatbots to complex Bubble.io SaaS MVP platforms, see how we build scalable digital products.",
};

const portfolioProjects = [
    {
        title: "AI Customer Support Chatbot",
        description: "A customized AI conversational agent integrated with existing CRM software, reducing response times by 80% and managing up to 10,000 queries daily without human intervention.",
        technologies: ["OpenAI API", "Node.js", "React", "Tailwind CSS"],
        results: "80% reduction in support ticket volume",
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
        delay: 0.1
    },
    {
        title: "Bubble.io SaaS MVP Platform",
        description: "Architected a full-fledged robust B2B SaaS platform for a FinTech startup. The MVP allowed early users to run financial models efficiently with zero custom backend code.",
        technologies: ["Bubble.io", "Stripe", "SendGrid", "Figma"],
        results: "Launched within 4 weeks, secured seed funding",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        delay: 0.2
    },
    {
        title: "AI Automation Dashboard",
        description: "Developed an internal dashboard for an e-commerce giant automating inventory predictions, automated email marketing segmentation, and dynamic pricing models.",
        technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL"],
        results: "35% increase in cross-platform sales",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        delay: 0.3
    },
    {
        title: "No-Code Marketplace App",
        description: "A specialized peer-to-peer equipment rental marketplace engineered completely using No-code stacks, featuring complex geolocations, real-time messaging, and split payments.",
        technologies: ["Glide", "Make.com", "Airtable", "Stripe Connect"],
        results: "Acquired 5,000+ active users in month 1",
        imageUrl: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=800&q=80",
        delay: 0.4
    }
];

export default function PortfolioPage() {
    return (
        <div className="flex flex-col min-h-screen pt-12">
            <section className="py-20 relative bg-[var(--color-primary-black)]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-gold)] opacity-5 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-sm font-semibold text-[var(--color-gold)] uppercase tracking-[0.2em] mb-4">Our Work</h1>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                        Featured <span className="gold-gradient-text">Projects</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        We turn ambitious visions into breathtaking digital realities. Explore how we’ve helped businesses scale rapidly.
                    </p>
                </div>
            </section>

            <section className="py-16 relative bg-[var(--color-secondary-black)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {portfolioProjects.map((project, index) => (
                            <PortfolioCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
