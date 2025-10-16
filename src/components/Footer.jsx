import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-6 text-gray-400 text-sm">
      <p>
        © {new Date().getFullYear()} <span className="text-brand-accent font-bold">Rodrigo Salvatierra</span>
      </p>
      <p className="mt-1 text-xs opacity-70">
        Cursos Digitales · <span className="text-brand-accent animate-pulse">100% online</span>
      </p>
      <p className="mt-2 text-xs opacity-50">2025</p>
    </footer>
  );
};

export default Footer;