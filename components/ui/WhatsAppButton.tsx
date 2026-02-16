'use client';

import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
    const [isHovered, setIsHovered] = useState(false);

    // WhatsApp business number - Update this with your actual number
    // Format: country code + number (no spaces, dashes, or special characters)
    const phoneNumber = '447123456789'; // Replace with your WhatsApp business number

    // Pre-filled message
    const message = encodeURIComponent("Hi, I'm interested in SSG's services");

    // WhatsApp URL - opens WhatsApp Web on desktop, app on mobile
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    const handleClick = () => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            {/* Floating WhatsApp Button */}
            <button
                onClick={handleClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="fixed bottom-6 right-6 md:bottom-6 md:right-6 bottom-4 right-4 z-50 group"
                aria-label="Chat with us on WhatsApp"
            >
                {/* Tooltip */}
                <div
                    className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap
            bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium
            shadow-lg transition-all duration-300 pointer-events-none
            ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}
                >
                    Chat with us on WhatsApp
                    {/* Arrow */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full
            w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent
            border-l-8 border-l-gray-900"
                    />
                </div>

                {/* Button Circle */}
                <div className="relative">
                    {/* Pulse Animation Ring */}
                    <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />

                    {/* Main Button */}
                    <div
                        className={`relative w-16 h-16 md:w-16 md:h-16 w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600
              shadow-lg flex items-center justify-center transition-all duration-300
              hover:shadow-2xl hover:scale-110 active:scale-95
              ${isHovered ? 'shadow-green-500/50' : ''}`}
                    >
                        <MessageCircle
                            className="w-8 h-8 md:w-8 md:h-8 w-7 h-7 text-white transition-transform duration-300"
                            style={{ transform: isHovered ? 'rotate(12deg)' : 'rotate(0deg)' }}
                        />
                    </div>
                </div>
            </button>

        </>
    );
}
