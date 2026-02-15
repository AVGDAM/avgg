'use client';

import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya aceptó las cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      // Mostrar el banner después de 1 segundo
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookiesAccepted', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Cookie className="text-blue-600" size={24} />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              🍪 Utilizamos cookies
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación, 
              analizar el tráfico del sitio y personalizar el contenido. Al hacer clic en "Aceptar", 
              consientes el uso de todas las cookies. Puedes obtener más información en nuestra{' '}
              <a href="/politica-privacidad" className="text-blue-600 hover:text-blue-700 underline">
                Política de Privacidad
              </a>.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={rejectCookies}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors font-medium text-sm whitespace-nowrap"
            >
              Rechazar
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium text-sm whitespace-nowrap"
            >
              Aceptar todas
            </button>
          </div>

          {/* Close button */}
          <button
            onClick={rejectCookies}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors md:relative md:top-0 md:right-0"
            aria-label="Cerrar"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
