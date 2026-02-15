'use client';

import { ArrowDownRight } from 'lucide-react';

export default function HeroSplit() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 px-6 relative overflow-hidden">
      {/* Floating elements - decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top right large circle */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/60 to-violet-300/50 rounded-full blur-3xl animate-float" />
        
        {/* Top left square with border */}
        <div className="absolute top-32 left-[5%] w-32 h-32 border-4 border-blue-400/40 rounded-2xl rotate-12 animate-float-slow" />
        
        {/* Top center small squares grid */}
        <div className="absolute top-40 left-1/2 -translate-x-1/2">
          <div className="w-20 h-20 bg-gradient-to-br from-violet-300/50 to-purple-400/50 rounded-lg rotate-45 animate-float-reverse" />
        </div>
        
        {/* Middle right circles */}
        <div className="absolute top-1/3 right-[12%] w-28 h-28 bg-gradient-to-br from-violet-300/60 to-purple-300/60 rounded-full blur-2xl animate-float-reverse" />
        <div className="absolute top-1/3 right-[10%] w-16 h-16 border-3 border-violet-400/50 rounded-full animate-float" />
        
        {/* Bottom left large blob */}
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-cyan-200/50 to-teal-300/60 rounded-full blur-3xl animate-float" />
        
        {/* Middle left accent */}
        <div className="absolute top-1/2 left-[15%] w-24 h-24 bg-gradient-to-br from-amber-300/50 to-orange-300/50 rounded-lg rotate-45 animate-float-slow" />
        
        {/* Small dots scattered */}
        <div className="absolute top-[25%] right-[30%] w-12 h-12 bg-gradient-to-br from-rose-300/60 to-pink-300/60 rounded-full animate-pulse" />
        
        <div className="absolute top-[60%] right-[20%] w-10 h-10 bg-gradient-to-br from-emerald-300/60 to-green-300/60 rounded-full blur-sm animate-float-reverse" />
        
        {/* Bottom right accent square */}
        <div className="absolute bottom-32 right-[8%] w-28 h-28 border-4 border-cyan-400/40 rounded-2xl -rotate-12 animate-float-slow" />
        
        {/* Top left small circle */}
        <div className="absolute top-[20%] left-[25%] w-14 h-14 bg-gradient-to-br from-indigo-300/60 to-blue-400/60 rounded-full blur-xl animate-float" />
        
        {/* Center accent line/bar */}
        <div className="absolute top-1/2 right-[5%] w-2 h-32 bg-gradient-to-b from-violet-400/40 to-purple-500/40 rounded-full animate-float-reverse" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Top label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-gray-500 uppercase tracking-wider">Disponibles para nuevos proyectos</span>
        </div>

        {/* Oversized headline */}
        <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[0.95] tracking-tight text-gray-900 mb-8">
          Creamos webs<br />
          <span className="text-gray-400">que convierten</span>
        </h1>

        {/* Two-column bottom */}
        <div className="grid md:grid-cols-2 gap-12 mt-12 items-end">
          {/* Left - description */}
          <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
            Agencia de diseño y desarrollo web en Santander. Páginas web, tiendas online y estrategia digital para empresas en Cantabria y toda España.
          </p>

          {/* Right - CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <a href="#contacto" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-medium">
              Empezar un proyecto
              <ArrowDownRight size={18} />
            </a>
            <a href="#trabajos" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 text-gray-900 rounded-full hover:bg-gray-200 transition-colors font-medium">
              Ver trabajos
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-x-16 gap-y-4 mt-20 pt-10 border-t border-gray-200">
          {[
            { value: '+25', label: 'Proyectos entregados' },
            { value: '100%', label: 'Clientes satisfechos' },
            { value: '2019', label: 'Desde' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
