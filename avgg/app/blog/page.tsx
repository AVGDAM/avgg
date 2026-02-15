import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import SiteFooter from '@/components/SiteFooter';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Blog | AVGG - Diseño Web, SEO y Marketing Digital en Santander',
  description: 'Consejos, guías y tendencias sobre diseño web, SEO, marketing digital y desarrollo web para empresas en Santander y toda España. Aprende a crear páginas web efectivas y posicionar tu negocio online.',
  keywords: ['blog diseño web', 'seo santander', 'marketing digital', 'guía páginas web', 'programmatic seo', 'geo seo'],
  openGraph: {
    title: 'Blog | AVGG - Diseño Web y SEO',
    description: 'Artículos sobre diseño web, SEO y marketing digital para empresas.',
    type: 'website',
    url: 'https://avgg.es/blog',
  },
  alternates: {
    canonical: 'https://avgg.es/blog',
  },
};

const articles = [
  {
    slug: 'cuanto-cuesta-crear-pagina-web-santander',
    title: '¿Cuánto cuesta crear una página web en Santander?',
    excerpt: 'Descubre los precios reales de diseño web en Santander, qué incluye cada paquete y cómo elegir la mejor opción para tu negocio sin sorpresas.',
    category: 'Diseño Web',
    date: '15 Feb 2026',
    readTime: '8 min',
    color: 'bg-blue-50',
    image: '/blog/blog-cuanto-cuesta-pagina-web.jpg',
  },
  {
    slug: 'que-es-programmatic-seo',
    title: '¿Qué es el Programmatic SEO y cómo puede multiplicar tu tráfico?',
    excerpt: 'Aprende cómo generar automáticamente cientos de páginas optimizadas para posicionarte en búsquedas de larga cola y captar más clientes sin crear contenido manual.',
    category: 'SEO',
    date: '12 Feb 2026',
    readTime: '10 min',
    color: 'bg-violet-50',
    image: '/blog/blog-programmatic-seo.jpg',
  },
  {
    slug: 'geo-optimization-inteligencia-artificial',
    title: 'GEO: Cómo posicionar tu web en ChatGPT y Perplexity',
    excerpt: 'La nueva forma de SEO está aquí. Descubre cómo optimizar tu contenido para que las IAs como ChatGPT recomienden tu negocio cuando los usuarios pregunten.',
    category: 'SEO',
    date: '10 Feb 2026',
    readTime: '7 min',
    color: 'bg-emerald-50',
    image: '/blog/blog-geo-ia.jpg',
  },
  {
    slug: 'necesito-pagina-web-para-mi-negocio',
    title: '¿Necesito realmente una página web para mi negocio?',
    excerpt: 'Si tu competencia aparece en Google y tú no, estás perdiendo clientes. Te explicamos por qué tener web ya no es opcional en 2026.',
    category: 'Diseño Web',
    date: '8 Feb 2026',
    readTime: '6 min',
    color: 'bg-amber-50',
    image: '/blog/blog-necesito-web.jpg',
  },
  {
    slug: 'errores-comunes-diseno-web',
    title: '7 errores que matan tu página web (y espantan clientes)',
    excerpt: 'Tu web puede estar ahuyentando clientes sin que lo sepas. Descubre los 7 errores más comunes en diseño web y cómo solucionarlos hoy mismo.',
    category: 'Diseño Web',
    date: '5 Feb 2026',
    readTime: '9 min',
    color: 'bg-rose-50',
    image: '/blog/blog-errores-web.jpg',
  },
  {
    slug: 'seo-local-santander-cantabria',
    title: 'SEO Local en Santander: Cómo aparecer en Google Maps',
    excerpt: 'Guía completa para posicionar tu negocio en Santander en Google Maps y búsquedas locales. Atrae clientes de tu zona que ya están buscando lo que ofreces.',
    category: 'SEO',
    date: '2 Feb 2026',
    readTime: '11 min',
    color: 'bg-cyan-50',
    image: '/blog/blog-seo-local.jpg',
  },
  {
    slug: 'tienda-online-vs-redes-sociales',
    title: 'Tienda online vs Instagram: ¿Dónde vender mejor en 2026?',
    excerpt: 'Vender por Instagram está bien, pero sin web propia dependes de algoritmos ajenos. Descubre por qué necesitas tu propia tienda online.',
    category: 'E-commerce',
    date: '30 Ene 2026',
    readTime: '8 min',
    color: 'bg-orange-50',
    image: '/blog/blog-tienda-vs-instagram.jpg',
  },
  {
    slug: 'como-elegir-agencia-web-santander',
    title: 'Cómo elegir una agencia de diseño web en Santander (sin morir en el intento)',
    excerpt: 'No todas las agencias web son iguales. Checklist definitivo para contratar diseñadores web en Cantabria y evitar problemas, retrasos y sobrecostes.',
    category: 'Diseño Web',
    date: '28 Ene 2026',
    readTime: '10 min',
    color: 'bg-teal-50',
    image: '/blog/blog-elegir-agencia.jpg',
  },
  {
    slug: 'tendencias-diseno-web-2026',
    title: 'Tendencias de diseño web en 2026: Lo que funciona (y lo que ya no)',
    excerpt: 'Diseños minimalistas, animaciones sutiles, tipografías grandes y velocidad extrema. Descubre qué buscan los usuarios en una web moderna en 2026.',
    category: 'Diseño Web',
    date: '25 Ene 2026',
    readTime: '12 min',
    color: 'bg-indigo-50',
    image: '/blog/blog-tendencias-2026.jpg',
  },
];

const ARTICLES_PER_PAGE = 6;

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const currentPage = Number(params?.page) || 1;
  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const currentArticles = articles.slice(startIndex, endIndex);

  const breadcrumbItems = [
    { name: 'Inicio', url: 'https://avgg.es' },
    { name: 'Blog', url: 'https://avgg.es/blog' },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Nav />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <span className="text-sm text-gray-400 uppercase tracking-wider">Blog</span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mt-3 leading-tight">
              Consejos y guías<br />
              <span className="text-gray-400">sobre diseño web</span>
            </h1>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl">
              Todo lo que necesitas saber sobre diseño web, SEO, marketing digital y tendencias para hacer crecer tu negocio online.
            </p>
          </div>

          {/* Articles grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {currentArticles.map((article, i) => (
              <Link
                key={i}
                href={`/blog/${article.slug}`}
                className="group block"
              >
                <article className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {article.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                      {article.title}
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-4 flex-grow line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-medium text-blue-600 group-hover:gap-3 transition-all">
                      Leer artículo
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-16">
              {currentPage > 1 ? (
                <Link
                  href={`/blog?page=${currentPage - 1}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 rounded-full hover:bg-gray-200 transition-colors font-medium"
                >
                  <ChevronLeft size={20} />
                  Anterior
                </Link>
              ) : (
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-400 rounded-full cursor-not-allowed">
                  <ChevronLeft size={20} />
                  Anterior
                </div>
              )}

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Link
                    key={page}
                    href={`/blog?page=${page}`}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors ${
                      page === currentPage
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {page}
                  </Link>
                ))}
              </div>

              {currentPage < totalPages ? (
                <Link
                  href={`/blog?page=${currentPage + 1}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
                >
                  Siguiente
                  <ChevronRight size={20} />
                </Link>
              ) : (
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-400 rounded-full cursor-not-allowed">
                  Siguiente
                  <ChevronRight size={20} />
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
