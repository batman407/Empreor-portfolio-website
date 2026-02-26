import HeroSlider from "@/components/HeroSlider";
import StatsBanner from "@/components/StatsBanner";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { FaRobot, FaLaptopCode, FaCubes, FaMobileAlt } from "react-icons/fa";

export default function Home() {
  const services = [
    {
      title: "AI Automation & Chatbot Development",
      description: "Intelligent systems designed to automate workflows and elevate customer support experiences.",
      icon: <FaRobot />,
      delay: 0.1
    },
    {
      title: "Bubble.io MVP Development",
      description: "Fast-tracked MVP creation using advanced Bubble.io architecture for quick market validation.",
      icon: <FaCubes />,
      delay: 0.2
    },
    {
      title: "No-Code Startup Systems",
      description: "Scalable no-code infrastructure tailored for startups looking to iterate rapidly without technical debt.",
      icon: <FaLaptopCode />,
      delay: 0.3
    },
    {
      title: "Full Stack & Mobile Development",
      description: "End-to-end custom web and mobile applications built with robust performance and premium aesthetics.",
      icon: <FaMobileAlt />,
      delay: 0.4
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSlider />
      <StatsBanner />

      {/* Services Overview Section */}
      <section className="py-24 relative bg-[var(--color-secondary-black)]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-gold)] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-[var(--color-gold)] uppercase tracking-[0.2em] mb-3">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white">
              Premium Digital <span className="gold-gradient-text">Solutions</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-20 bg-[var(--color-primary-black)] border-y border-[var(--color-gold)]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-gray-500 font-medium mb-10 text-lg">Trusted by innovative startups and founders globally</h4>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for partner logos */}
            <div className="text-2xl font-bold text-white tracking-widest uppercase">TechFlow</div>
            <div className="text-2xl font-bold text-white tracking-widest uppercase">Nexus<span className="text-[var(--color-gold)]">AI</span></div>
            <div className="text-2xl font-bold text-white tracking-widest uppercase">Vanguard.</div>
            <div className="text-2xl font-bold text-white tracking-widest uppercase">Aura<span className="font-light">Systems</span></div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
