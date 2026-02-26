import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
    const whatsappUrl = "https://wa.me/2348082441128?text=Hello%20Favour%20B,%20I%20found%20your%20website%20and%20I%E2%80%99m%20interested%20in%20building%20an%20AI%20automation%20system%20or%20MVP.%20I%20would%20like%20to%20discuss%20my%20project%20requirements%20and%20get%20started.";

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-transform duration-300 flex items-center justify-center animate-bounce"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className="text-3xl" />
        </a>
    );
}
