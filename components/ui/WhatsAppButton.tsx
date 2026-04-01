'use client';

import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
    const [isHovered, setIsHovered] = useState(false);

    // WhatsApp business number - Update this with your actual number
    // Format: country code + number (no spaces, dashes, or special characters)
    const phoneNumber = '442085910330';

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
                className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group"
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
                        className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600
              shadow-lg flex items-center justify-center transition-all duration-300
              hover:shadow-2xl hover:scale-110 active:scale-95
              ${isHovered ? 'shadow-green-500/50' : ''}`}
                    >
                        <MessageCircle
                            className="w-6 h-6 sm:w-8 sm:h-8 text-white transition-transform duration-300"
                            style={{ transform: isHovered ? 'rotate(12deg)' : 'rotate(0deg)' }}
                        />
                    </div>
                </div>
            </button>

        </>
    );
}
