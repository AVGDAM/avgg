import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "Blog de Psicología - Artículos y Consejos",
  description: "Artículos sobre salud mental, ansiedad, depresión, terapia de pareja y bienestar emocional. Consejos profesionales de psicología en Santander.",
  alternates: {
    canonical: "https://www.nataliachiva.com/blog",
  },
  openGraph: {
    title: "Blog de Psicología - Natalia Chiva",
    description: "Artículos y consejos profesionales sobre salud mental y bienestar emocional.",
    url: "https://www.nataliachiva.com/blog",
    type: "website",
    images: ["/natalia-chiva.png"],
  },
};

// Datos de los artículos del blog
const articles = [
  {
    id: 1,
    slug: "como-superar-la-ansiedad",
    title: "Cómo Superar la Ansiedad: 7 Técnicas Efectivas",
    excerpt: "Descubre técnicas probadas para manejar la ansiedad en tu día a día y recuperar tu tranquilidad emocional.",
    image: "/blog/ansiedad.jpg",
    date: "2026-02-10",
    readTime: "8 min",
    category: "Ansiedad",
  },
  {
    id: 2,
    slug: "sintomas-depresion",
    title: "10 Síntomas de la Depresión que No Debes Ignorar",
    excerpt: "Aprende a identificar las señales de la depresión y cuándo es momento de buscar ayuda profesional.",
    image: "/blog/depresion.jpg",
    date: "2026-02-08",
    readTime: "6 min",
    category: "Depresión",
  },
  {
    id: 3,
    slug: "terapia-pareja-cuando-necesaria",
    title: "¿Cuándo es Necesaria la Terapia de Pareja?",
    excerpt: "Señales claras de que tu relación podría beneficiarse de la ayuda de un psicólogo especializado.",
    image: "/blog/terapia-pareja.jpg",
    date: "2026-02-05",
    readTime: "7 min",
    category: "Relaciones",
  },
  {
    id: 4,
    slug: "gestion-estres-trabajo",
    title: "Gestión del Estrés Laboral: Estrategias Prácticas",
    excerpt: "Técnicas efectivas para reducir el estrés en el trabajo y mejorar tu calidad de vida profesional.",
    image: "/blog/estres-laboral.jpg",
    date: "2026-02-03",
    readTime: "9 min",
    category: "Estrés",
  },
  {
    id: 5,
    slug: "autoestima-como-mejorarla",
    title: "Cómo Mejorar la Autoestima: Guía Completa",
    excerpt: "Pasos prácticos y consejos profesionales para fortalecer tu autoestima y confianza personal.",
    image: "/blog/autoestima.jpg",
    date: "2026-01-30",
    readTime: "10 min",
    category: "Desarrollo Personal",
  },
  {
    id: 6,
    slug: "terapia-online-beneficios",
    title: "Beneficios de la Terapia Online vs Presencial",
    excerpt: "Conoce las ventajas de la terapia psicológica online y cómo puede adaptarse a tu estilo de vida.",
    image: "/blog/terapia-online.jpg",
    date: "2026-01-28",
    readTime: "6 min",
    category: "Terapia",
  },
  {
    id: 7,
    slug: "inteligencia-emocional",
    title: "Inteligencia Emocional: Qué Es y Cómo Desarrollarla",
    excerpt: "Descubre cómo la inteligencia emocional puede transformar tus relaciones y tu vida profesional.",
    image: "/blog/inteligencia-emocional.jpg",
    date: "2026-01-25",
    readTime: "8 min",
    category: "Emociones",
  },
  {
    id: 8,
    slug: "ataques-panico-que-hacer",
    title: "Ataques de Pánico: Qué Hacer y Cómo Prevenirlos",
    excerpt: "Aprende a reconocer y manejar los ataques de pánico con técnicas respaldadas por la psicología.",
    image: "/blog/ataques-panico.jpg",
    date: "2026-01-22",
    readTime: "7 min",
    category: "Ansiedad",
  },
  {
    id: 9,
    slug: "comunicacion-pareja",
    title: "Comunicación en la Pareja: Claves para el Éxito",
    excerpt: "Mejora la comunicación con tu pareja y fortalece tu relación con estas estrategias efectivas.",
    image: "/blog/comunicacion-pareja.jpg",
    date: "2026-01-20",
    readTime: "9 min",
    category: "Relaciones",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-beige to-beige-light dark:from-slate-900 dark:to-slate-800 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white dark:text-slate-100 sm:text-5xl mb-4">
              Blog de Psicología
            </h1>
            <p className="text-lg text-white/90 dark:text-slate-300 max-w-2xl mx-auto">
              Artículos, consejos y recursos sobre salud mental, bienestar emocional y desarrollo personal
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-800/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.id}
                className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-200 dark:bg-slate-700">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-beige text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-muted dark:text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(article.date).toLocaleDateString('es-ES', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <Link href={`/blog/${article.slug}`}>
                    <h2 className="text-xl font-bold text-navy dark:text-slate-100 mb-3 group-hover:text-beige dark:group-hover:text-blue-gray-light transition-colors cursor-pointer">
                      {article.title}
                    </h2>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-muted dark:text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
                    {article.excerpt}
                  </p>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-2 text-beige dark:text-blue-gray-light font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Leer más
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Info */}
          <div className="mt-12 text-center">
            <p className="text-muted dark:text-slate-400">
              Mostrando <span className="font-semibold text-navy dark:text-slate-100">9</span> de{" "}
              <span className="font-semibold text-navy dark:text-slate-100">9</span> artículos
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white dark:text-slate-100 mb-4">
            ¿Necesitas ayuda profesional?
          </h2>
          <p className="text-lg text-white/90 dark:text-slate-300 mb-8">
            Si te identificas con alguno de estos temas, estoy aquí para ayudarte. Psicóloga en Santander.
          </p>
          <CTAButtons />
        </div>
      </section>
    </main>
  );
}
