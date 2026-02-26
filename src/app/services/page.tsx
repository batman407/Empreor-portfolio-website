import { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { FaRobot, FaLaptopCode, FaCubes, FaMobileAlt, FaCloudUploadAlt, FaShoppingCart } from "react-icons/fa";

export const metadata: Metadata = {
    title: "AI & Full Stack Services | Favour B",
    description: "Explore our premium digital agency services including AI Automation, Bubble.io MVP Development, No-Code Startups, and Full Stack solutions.",
};

const allServices = [
    {
        title: "AI Automation & Chatbot Development",
        description: "Build robust AI conversational agents that provide 24/7 customer support, lead generation, and workflow automation. Empower your team with intelligent integrations that reduce manual effort and scale your operations.",
        icon: <FaRobot />,
        delay: 0.1
    },
    {
        title: "Bubble.io MVP Development",
        description: "Launch your visionary startup idea in weeks using advanced Bubble.io no-code architecture. We design robust schemas, complex API integrations, and scalable infrastructure to get you market-ready faster.",
        icon: <FaCubes />,
        delay: 0.2
    },
    {
        title: "No-Code Startup Systems",
        description: "Comprehensive end-to-end setups tailored for non-technical founders. From CRM setups to automated marketing flows, we build the digital foundation your startup needs to thrive in an competitive ecosystem.",
        icon: <FaLaptopCode />,
        delay: 0.3
    },
    {
        title: "Full Stack Web Development",
        description: "Custom web applications built from the ground up using modern frameworks like React, Next.js, and Node.js. High-performance, SEO-optimized, and enterprise-grade code structures tailored for growth.",
        icon: <FaCloudUploadAlt />,
        delay: 0.4
    },
    {
        title: "Mobile App Development",
        description: "Cross-platform mobile applications (iOS and Android) engineered for exceptional user experience, high retention, and seamless integration with web backends.",
        icon: <FaMobileAlt />,
        delay: 0.5
    },
    {
        title: "E-Commerce Integrations",
        description: "AI-enhanced e-commerce platforms designed to maximize conversions, automate inventory updates, and deliver personalized shopping experiences.",
        icon: <FaShoppingCart />,
        delay: 0.6
    }
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen pt-12">

            <section className="py-20 relative bg-[var(--color-primary-black)]">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-gold)] opacity-5 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-sm font-semibold text-[var(--color-gold)] uppercase tracking-[0.2em] mb-4">Our Services</h1>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                        Engineering <span className="gold-gradient-text">Excellence</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        We build scalable digital products, AI automation pipelines, and high-converting MVPs that help startups conquer their markets.
                    </p>
                </div>
            </section>

            <section className="py-16 relative bg-[var(--color-secondary-black)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allServices.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
