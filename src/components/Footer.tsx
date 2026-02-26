import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[var(--color-primary-black)] border-t border-[var(--color-gold)]/20 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-normal">
                            FAVOUR <span className="text-[var(--color-gold)]">B</span>
                        </Link>
                        <p className="mt-4 text-gray-400 max-w-sm">
                            Premium AI Automation, Bubble.io MVP Development, and Full Stack solutions helping startups scale efficiently with intelligent systems.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/services" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors">Services</Link></li>
                            <li><Link href="/portfolio" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors">Portfolio</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors">About</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors">
                                <FaGithub size={24} />
                            </a>
                            <a href="mailto:favourdarasimi1883@gmail.com" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors">
                                <FaEnvelope size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Favour B. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
