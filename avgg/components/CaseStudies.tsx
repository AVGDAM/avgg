'use client';

import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    client: 'Mundoctor',
    type: 'Plataforma · Salud',
    description: 'Mundoctor es la plataforma para profesionales sanitarios donde gestionar citas, ganar visibilidad online y ofrecer un servicio más accesible a sus pacientes.',
    url: 'https://mundoctor.com',
    color: 'bg-teal-50',
  },
  {
    client: 'Natalia Chiva',
    type: 'Web Profesional · Psicología',
    description: 'Web completa con sistema de reservas, blog, tests interactivos y estrategia SEO local posicionada en primera página de Google.',
    url: 'https://nataliachiva.com',
    color: 'bg-amber-50',
  },
  {
    client: 'Carda Estudio',
    type: 'Portfolio · Diseño',
    description: 'Portfolio creativo y minimalista para estudio de diseño gráfico. Enfocado en mostrar el trabajo de forma impactante.',
    url: 'https://cardaestudio.com',
    color: 'bg-green-50',
  },
];

export default function CaseStudies() {
  return (
    <section id="trabajos" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <span className="text-sm text-gray-400 uppercase tracking-wider">Proyectos</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Trabajos recientes</h2>
          </div>
        </div>

        {/* Cases */}
        <div className="space-y-6">
          {cases.map((c, i) => (
            <a
              key={i}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className={`${c.color} rounded-2xl p-8 md:p-12 transition-all duration-300 hover:shadow-lg`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-2">{c.type}</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {c.client}
                    </h3>
                    <p className="text-gray-600 max-w-xl">{c.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-all">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
