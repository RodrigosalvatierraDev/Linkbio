import React, { useState } from 'react';
import Header from './components/Header';
import CourseCard from './components/CourseCard';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import { courses } from './data/courses';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [showMore, setShowMore] = useState(false);

  // Mostrar todos o solo los primeros 4
  const visibleCourses = showMore ? courses : courses.slice(0, 4);
  const hasMore = courses.length > 4;

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Fondo neón con partículas */}
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1),transparent_70%),radial-gradient(ellipse_at_bottom,rgba(245,158,66,0.1),transparent_70%)]"></div>
      <div className="fixed inset-0 -z-10 opacity-10">
        <div className="absolute w-2 h-2 bg-white rounded-full top-10 left-10 animate-ping"></div>
        <div className="absolute w-2 h-2 bg-brand-accent rounded-full top-1/3 right-10 animate-ping delay-500"></div>
        <div className="absolute w-2 h-2 bg-white rounded-full bottom-20 left-1/2 animate-ping delay-1000"></div>
      </div>

      <Header />

      <main className="flex-1 max-w-md mx-auto px-4 py-6 w-full" id="cursos">
        <h2 className="text-3xl font-bold text-center mb-8 text-white animate-fade-in">
          <span className="text-brand-accent">🔥Mas Buscados🔥</span>
        </h2>

        <div className="grid gap-6">
          {visibleCourses.map((course, index) => (
            <div
              key={course.id}
              className="animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        {/* Botón "Ver más cursos" (solo si hay más de 4) */}
        {hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-gradient-to-r from-brand-primary to-brand-accent text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:shadow-[0_0_20px_rgba(245,158,66,0.5)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
            >
              {showMore ? (
                <>
                  <span>🔼</span> Ocultar cursos
                </>
              ) : (
                <>
                  <span>👇</span> Ver más cursos
                </>
              )}
            </button>
          </div>
        )}

        <SocialLinks />
      </main>
      <Footer />
        <WhatsAppButton />
    </div>
  );
}

export default App;