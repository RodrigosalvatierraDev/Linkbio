import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp, FaTiktok } from 'react-icons/fa';

const SocialLinks = () => {
  const links = [
    
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCxed8JJfAuesCJWcPvCe0pA',
      icon: <FaYoutube className="w-6 h-6" />,
      color: 'hover:text-red-600'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@rodrigocursosonline?_t=ZM-90WnKntlmf6&_r=1',
      icon: <FaTiktok className="w-6 h-6" />,
      color: 'hover:text-pink-500'
    },
    
    
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            bg-white/10 backdrop-blur-lg p-3 rounded-full shadow-lg 
            hover:bg-white/20 transition-all duration-300 transform 
            hover:scale-110 hover:rotate-3 
            hover:shadow-[0_0_15px_rgba(245,158,66,0.5)]
            ${link.color}
          `}
          title={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;