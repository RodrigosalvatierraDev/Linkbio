import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';

const Header = () => {
  const bannerImage = "https://images.hdqwalls.com/wallpapers/girl-swinging-on-top-of-world-ku.jpg"; // 👈 Tu imagen

  return (
    <header className="text-center relative pt-24 pb-16 px-4 overflow-hidden">
      {/* Banner con imagen y efecto neón */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.8) contrast(1.3) saturate(1.2)',
        }}
      >
        {/* Overlay sutil (no oscuro, para que la imagen se vea) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/ via-black/30 to-black/70"></div>
        
        {/* Efecto neón alrededor del banner */}
        <div className="absolute inset-0 border-t-4 border-b-4 border-brand-accent/50 pointer-events-none"></div>
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent"></div>

        {/* Partículas brillantes */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-1 h-1 bg-white rounded-full top-10 left-10 animate-ping"></div>
          <div className="absolute w-1 h-1 bg-brand-accent rounded-full top-20 right-20 animate-ping delay-700"></div>
          <div className="absolute w-1 h-1 bg-white rounded-full top-40 left-1/2 animate-ping delay-1000"></div>
        </div>
      </div>

      {/* Foto de perfil con efecto 3D y borde animado */}
      <div className="relative inline-block mb-6 transform hover:scale-105 transition-transform duration-300">
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary rounded-full blur-sm animate-spin-slow"></div>
        <div className="absolute -inset-2 bg-brand-accent/20 rounded-full blur-md"></div>
        <img
          src="https://i.ibb.co/DHSj0rH2/image.png"
          alt="Tu foto"
          className="relative w-36 h-36 mx-auto rounded-full border-4 border-white shadow-[0_0_25px_rgba(245,158,66,0.6)] object-cover transform hover:rotate-3 transition-transform duration-300"
        />
      </div>

      {/* Texto con efecto neón (sobre la imagen) */}
      <h1 className="text-4xl font-extrabold text-white mb-3 animate-fade-in drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]">
            Rodrigo Salvatierra
      <span className="inline-flex items-center gap-1 ml-2 text-brand-accent text-2xl">
        <span className="drop-shadow-[0_0_8px_rgba(245,158,66,0.8)]">
          Creador Digital
        </span>
        <FaRegCheckCircle className="inline-block w-6 h-6 ml-1 text-blue-500 drop-shadow-[0_0_10px_rgba(59, 130, 246, 0.8)] animate-pulse" />
      </span>
      </h1>
      <p className="text-gray-200 max-w-sm mx-auto text-lg font-medium animate-fade-in delay-200 drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]">
        Cursos que <span className="text-white font-bold">trans</span> TU VIDA. <br />
        <span className="text-brand-accent animate-pulse drop-shadow-[0_0_5px_rgba(245,158,66,0.6)]">
         100% ONLINE Y CON CERTIFICACION
        </span>
      </p>

      
    </header>
  );
};

export default Header;