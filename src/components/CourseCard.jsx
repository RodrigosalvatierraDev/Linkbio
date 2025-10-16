import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_20px_30px_rgba(245,158,66,0.3)]">
      {/* Contenido sin imagen o con imagen */}
      <div className="p-5">
        {/* Si no hay imagen, mostramos un fondo de glassmorphism + icono */}
        {!course.image && (
          <div className="mb-4 p-4 bg-white/10 rounded-xl border border-white/20 flex items-center gap-4">
            <div className="text-4xl">🎨</div>
            <div>
              <h3 className="text-xl font-bold text-white">{course.title}</h3>
              <span className="text-xs bg-brand-accent/30 text-brand-accent px-2 py-0.5 rounded-full">
                {course.badge}
              </span>
            </div>
          </div>
        )}

        {/* Si hay imagen, mostramos el título encima */}
        {course.image && (
          <>
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
              />
              {course.badge && (
                <span className="absolute top-3 right-3 bg-brand-accent text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg animate-pulse">
                  {course.badge}
                </span>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <h3 className="text-xl font-bold text-white mt-4">{course.title}</h3>
          </>
        )}

        {/* Descripción (siempre visible) */}
        <p className="text-gray-300 text-sm mt-2">{course.description}</p>

        {/* Precio y botón */}
        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-brand-accent drop-shadow-[0_0_8px_rgba(245,158,66,0.5)]">
            {course.price}
          </span>
          <a
            href={course.hotmartUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-brand-primary to-brand-accent text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300 transform hover:scale-105"
          >
            🔥 Comprar ahora
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;