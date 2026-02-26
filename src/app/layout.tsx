import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Favour B | AI Automation & MVP Development Agency",
  description: "Favour B is a premium agency specializing in AI Automation, Bubble.io MVP Development, No-Code Startups, and Full Stack Web & Mobile App Development.",
  keywords: ["AI Automation Expert", "Bubble.io Developer", "No-Code MVP Developer", "Chatbot Development Services", "Startup App Development", "Full Stack Developer", "React Developer", "Mobile App Developer", "AI Chatbot Developer", "MVP Development Agency"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-[var(--color-primary-black)] text-white antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
