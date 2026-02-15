'use client';

import { Globe, ShoppingCart, Search, LineChart, Code, MapPin, Layers } from 'lucide-react';

export default function BentoServices() {
  return (
    <section id="servicios" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <span className="text-sm text-gray-400 uppercase tracking-wider">Servicios</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Lo que hacemos</h2>
          </div>
          <p className="text-gray-600 max-w-md text-lg">
            Servicios digitales completos para empresas que buscan crecer online.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Large card */}
          <div className="md:col-span-2 bg-gray-900 text-white rounded-2xl p-10 flex flex-col justify-between min-h-[320px]">
            <Globe className="w-8 h-8 text-blue-400" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Páginas Web</h3>
              <p className="text-gray-400 max-w-lg">
                Diseño y desarrollo de páginas web corporativas, landing pages y plataformas digitales. Modernas, rápidas y optimizadas para convertir visitantes en clientes.
              </p>
            </div>
          </div>

          {/* Small card */}
          <div className="bg-blue-600 text-white rounded-2xl p-10 flex flex-col justify-between min-h-[320px]">
            <ShoppingCart className="w-8 h-8 text-blue-200" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Tiendas Online</h3>
              <p className="text-blue-100">
                E-commerce con pasarela de pago, gestión de pedidos y diseño enfocado a ventas.
              </p>
            </div>
          </div>

          {/* Second row */}
          <div className="bg-gray-50 rounded-2xl p-10 flex flex-col justify-between min-h-[280px] border border-gray-100">
            <Search className="w-8 h-8 text-gray-400" />
            <div>
              <h3 className="text-xl font-bold mb-2">SEO & Posicionamiento</h3>
              <p className="text-gray-600">
                Tu negocio en las primeras posiciones de Google con estrategias SEO probadas.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-10 flex flex-col justify-between min-h-[280px] border border-gray-100">
            <LineChart className="w-8 h-8 text-gray-400" />
            <div>
              <h3 className="text-xl font-bold mb-2">Marketing Digital</h3>
              <p className="text-gray-600">
                Campañas en Google Ads, Meta y LinkedIn. Medimos cada euro invertido.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-10 flex flex-col justify-between min-h-[280px] border border-gray-100">
            <Code className="w-8 h-8 text-gray-400" />
            <div>
              <h3 className="text-xl font-bold mb-2">Desarrollo a Medida</h3>
              <p className="text-gray-600">
                Aplicaciones web con React, Next.js, Node.js. Tecnología actual, resultados reales.
              </p>
            </div>
          </div>

          {/* Third row - Programmatic SEO & Geo SEO */}
          <div className="md:col-span-2 bg-gray-900 text-white rounded-2xl p-10 flex flex-col justify-between min-h-[280px]">
            <Layers className="w-8 h-8 text-violet-400" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Programmatic SEO</h3>
              <p className="text-gray-400 max-w-lg">
                Generación automática de cientos de páginas optimizadas para posicionar en búsquedas de larga cola. Escalamos tu visibilidad orgánica sin crear contenido manual página a página.
              </p>
            </div>
          </div>

          <div className="bg-emerald-600 text-white rounded-2xl p-10 flex flex-col justify-between min-h-[280px]">
            <MapPin className="w-8 h-8 text-emerald-200" />
            <div>
              <h3 className="text-2xl font-bold mb-2">GEO <span className="text-emerald-200 text-lg font-medium">(Generative Engine Optimization)</span></h3>
              <p className="text-emerald-100">
                Optimización para motores de búsqueda con IA como ChatGPT, Perplexity y Google AI Overviews. Posiciona tu marca donde la IA recomienda respuestas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
