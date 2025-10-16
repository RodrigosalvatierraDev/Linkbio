import React from 'react';

const WhatsAppButton = () => {
    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
        ¿Tienes dudas? ¡Escríbeme!
    </div>
  return (
    
    <a
      href="https://wa.me/3816747461"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.7)] transition-all duration-300 transform hover:scale-110 animate-bounce"
      title="¿Tienes dudas? Escríbenos por WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="currentColor"
          d="M12 2C6.5 2 2 6.5 2 12c0 2.1.7 4 1.9 5.8L2 22l4.2-1.2C8.1 21.3 10 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm5.2 14.2c-.2.7-1.4 1.4-2 1.5-.5.1-1.2.1-1.9-.2-.5-.2-1-.5-1.6-.9-.3-.2-.7-.4-1.1-.7-1.9-1.5-3.2-3.5-3.4-3.7-.2-.2-1.4-1.8-1.4-3.5 0-1.8 1-2.7 1.2-2.9.2-.2 2.5-.4 3.6.4.4.2.6.4.8.7.2.2.4.6.2.7-.2.1-.4.3-.6.5-.2.2-.4.4-.5.6-.2.2-.3.4-.2.7.1.3.5 1.2 1.2 1.7.7.5 1.5.8 1.7 1.3.2.5.2.9.1 1.1-.1.2-.2.4-.4.6z"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;