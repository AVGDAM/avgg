import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import SiteFooter from '@/components/SiteFooter';
import { ArrowUpRight } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Proyectos | AVGG - Portfolio de Diseño Web en Santander',
  description: 'Descubre los proyectos web que hemos diseñado y desarrollado para empresas en Santander, Cantabria y toda España. Portfolio real de páginas web profesionales: Mundoctor, Consultas Rualasal, CCR Psicología y más.',
  keywords: ['portfolio diseño web', 'proyectos web santander', 'ejemplos páginas web', 'casos de éxito web', 'diseño web profesional'],
  openGraph: {
    title: 'Proyectos | AVGG - Portfolio de Diseño Web',
    description: 'Portfolio real de proyectos web para empresas en Santander y España. Páginas profesionales, tiendas online y plataformas digitales.',
    type: 'website',
    url: 'https://avgg.es/proyectos',
  },
  alternates: {
    canonical: 'https://avgg.es/proyectos',
  },
};

const projects = [
  {
    name: 'Mundoctor',
    url: 'https://mundoctor.com',
    description: 'Mundoctor es la plataforma para profesionales sanitarios donde gestionar citas, ganar visibilidad online y ofrecer un servicio más accesible a sus pacientes.',
    color: 'bg-teal-50',
    tag: 'Plataforma · Salud',
  },
  {
    name: 'Consultas Rualasal',
    url: 'https://consultasrualasal.com',
    description: 'Alquiler de consultas médicas para profesionales sanitarios. Ofrecemos flexibilidad, licencia sanitaria, consultas equipadas, recepción y sala de espera. Centro de consultas ubicado en el centro de Santander con instalaciones atractivas y despachos completamente equipados para actividades sanitarias.',
    color: 'bg-blue-50',
    tag: 'Web Corporativa · Salud',
  },
  {
    name: 'CCR Psicología',
    url: 'https://ccrpsicologia.com',
    description: 'Centro sanitario especializado en ofrecer servicios de psicología orientados a mejorar la calidad de vida de los pacientes. Equipo de psicólogos cualificados con enfoque profesional, humano y personalizado.',
    color: 'bg-violet-50',
    tag: 'Web Profesional · Psicología',
  },
  {
    name: 'Vitofitnutricion',
    url: 'https://vitofitnutricion.com',
    description: 'Nutricionista en Santander especializado en planes de alimentación personalizados. Mejora tu salud, pierde peso o alcanza tus objetivos nutricionales con asesoramiento profesional.',
    color: 'bg-green-50',
    tag: 'Web Profesional · Nutrición',
  },
  {
    name: 'PrensaPro',
    url: 'https://prensapro.es',
    description: 'Impulsa tu negocio online y mejora el SEO de tu web apareciendo en periódicos digitales. Servicio para ganar visibilidad, autoridad y atraer más clientes con publicaciones en medios reconocidos.',
    color: 'bg-amber-50',
    tag: 'Plataforma · Marketing',
  },
  {
    name: 'Carda Estudio',
    url: 'https://cardaestudio.com',
    description: 'Architecture and design. Portfolio web creativo y minimalista para estudio de arquitectura y diseño.',
    color: 'bg-rose-50',
    tag: 'Portfolio · Arquitectura',
  },
  {
    name: 'Natalia Chiva',
    url: 'https://nataliachiva.com',
    description: 'Psicóloga Sanitaria en Santander. Terapia individual y de pareja, apoyo y acompañamiento psicológico para adultos y adolescentes. Mejora tu bienestar.',
    color: 'bg-orange-50',
    tag: 'Web Profesional · Psicología',
  },
  {
    name: 'Dr. Juan Solana',
    url: 'https://juansolanapsiquiatra.com',
    description: 'Reconocido psiquiatra con más de 20 años de experiencia en la atención a problemas de salud mental.',
    color: 'bg-cyan-50',
    tag: 'Web Profesional · Psiquiatría',
  },
];

export default function ProyectosPage() {
  const breadcrumbItems = [
    { name: 'Inicio', url: 'https://avgg.es' },
    { name: 'Proyectos', url: 'https://avgg.es/proyectos' },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Nav />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <span className="text-sm text-gray-400 uppercase tracking-wider">Portfolio</span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mt-3 leading-tight">
              Nuestros<br />
              <span className="text-gray-400">proyectos</span>
            </h1>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl">
              Descubre alguno de los proyectos en los que hemos trabajado y hazte una idea de nuestra filosofía y metodología a la hora de trabajar.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className={`${project.color} rounded-2xl p-8 md:p-10 transition-all duration-300 hover:shadow-lg h-[340px] flex flex-col justify-between`}>
                  <div className="flex items-start justify-between">
                    <span className="text-sm text-gray-500">{project.tag}</span>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-all flex-shrink-0">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                  <div className="mt-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </h2>
                    <p className="text-gray-600 leading-relaxed line-clamp-3">{project.description}</p>
                    <p className="text-sm text-gray-400 mt-4 font-medium">{project.url.replace('https://', '')}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
