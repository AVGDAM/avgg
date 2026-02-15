import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Cómo Superar la Ansiedad: 7 Técnicas Efectivas | Blog Natalia Chiva",
  description: "Descubre 7 técnicas probadas para manejar la ansiedad en tu día a día. Consejos profesionales de psicología para recuperar tu tranquilidad emocional.",
  openGraph: {
    title: "Cómo Superar la Ansiedad: 7 Técnicas Efectivas",
    description: "Técnicas probadas para manejar la ansiedad y recuperar tu tranquilidad emocional.",
    type: "article",
    publishedTime: "2026-02-10",
  },
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-800/30">
      <ArticleSchema
        title="Cómo Superar la Ansiedad: 7 Técnicas Efectivas"
        description="Descubre 7 técnicas probadas para manejar la ansiedad en tu día a día. Consejos profesionales de psicología para recuperar tu tranquilidad emocional."
        datePublished="2026-02-10"
        dateModified="2026-02-10"
        url="https://www.nataliachiva.com/blog/como-superar-la-ansiedad"
        image="/blog/ansiedad.png"
        category="Ansiedad"
      />
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "https://www.nataliachiva.com" },
        { name: "Blog", url: "https://www.nataliachiva.com/blog" },
        { name: "Cómo Superar la Ansiedad", url: "https://www.nataliachiva.com/blog/como-superar-la-ansiedad" }
      ]} />
      {/* Back to Blog */}
      <div className="border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted dark:text-slate-400 hover:text-navy dark:hover:text-blue-gray-light transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al blog
          </Link>
        </div>
      </div>

      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center gap-1 bg-beige text-white text-sm font-semibold px-3 py-1 rounded-full">
                <Tag className="h-3 w-3" />
                Ansiedad
              </span>
              <span className="flex items-center gap-1 text-sm text-muted dark:text-slate-400">
                <Calendar className="h-4 w-4" />
                10 de febrero de 2026
              </span>
              <span className="flex items-center gap-1 text-sm text-muted dark:text-slate-400">
                <Clock className="h-4 w-4" />
                8 min de lectura
              </span>
            </div>

            <h1 className="text-4xl font-bold text-navy dark:text-slate-100 mb-4 leading-tight">
              Cómo Superar la Ansiedad: 7 Técnicas Efectivas
            </h1>

            <p className="text-xl text-muted dark:text-slate-300 leading-relaxed">
              La ansiedad es una respuesta natural del cuerpo ante situaciones de estrés, pero cuando se vuelve persistente puede afectar significativamente nuestra calidad de vida. Descubre estas técnicas respaldadas por la psicología para manejarla eficazmente.
            </p>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
            <Image
              src="/blog/ansiedad.jpg"
              alt="Cómo superar la ansiedad - Técnicas de relajación"
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">¿Qué es la ansiedad?</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La ansiedad es una emoción caracterizada por sentimientos de tensión, preocupación y cambios físicos como el aumento de la presión arterial. Es importante distinguir entre la ansiedad normal y los trastornos de ansiedad que requieren intervención profesional.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">7 Técnicas para Superar la Ansiedad</h2>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">1. Respiración Diafragmática</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La respiración profunda desde el diafragma ayuda a activar el sistema nervioso parasimpático, que es responsable de la relajación. Practica inhalar durante 4 segundos, mantener durante 4 y exhalar durante 6 segundos.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">2. Mindfulness y Meditación</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La práctica regular de mindfulness te ayuda a centrar tu atención en el momento presente, reduciendo la rumia mental y los pensamientos ansiosos sobre el futuro. Dedica al menos 10 minutos diarios a esta práctica.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">3. Ejercicio Físico Regular</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              El ejercicio libera endorfinas, los neurotransmisores del bienestar. Una caminata diaria de 30 minutos puede reducir significativamente los síntomas de ansiedad. No necesitas entrenamientos intensos; la constancia es más importante que la intensidad.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">4. Técnicas de Relajación Muscular Progresiva</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Consiste en tensar y relajar grupos musculares de forma sistemática. Esta técnica te ayuda a reconocer la diferencia entre tensión y relajación, permitiéndote identificar y liberar la tensión física asociada a la ansiedad.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">5. Reestructuración Cognitiva</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Aprende a identificar y cuestionar los pensamientos negativos automáticos. Pregúntate: "¿Es este pensamiento realista?", "¿Qué evidencia tengo?", "¿Cuál es la peor consecuencia real?". Esta técnica de la terapia cognitivo-conductual es muy efectiva.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">6. Establece una Rutina de Sueño</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La falta de sueño aumenta la ansiedad. Mantén horarios regulares, evita pantallas antes de dormir y crea un ambiente propicio para el descanso. Un sueño de calidad es fundamental para la regulación emocional.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">7. Limita el Consumo de Cafeína y Alcohol</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La cafeína puede aumentar los síntomas físicos de la ansiedad, mientras que el alcohol, aunque parezca relajante inicialmente, puede empeorar la ansiedad a largo plazo. Modera su consumo o elimínalos temporalmente para evaluar su impacto.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">¿Cuándo buscar ayuda profesional?</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Si la ansiedad interfiere significativamente con tu vida diaria, persiste durante más de 6 meses, o experimentas ataques de pánico, es fundamental consultar con un psicólogo. La terapia cognitivo-conductual ha demostrado ser altamente efectiva para los trastornos de ansiedad.
            </p>

            <div className="bg-beige-light/20 dark:bg-slate-900/50 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mt-8">
              <p className="text-navy dark:text-slate-100 font-semibold mb-2">Nota importante:</p>
              <p className="text-muted dark:text-slate-300">
                Estas técnicas son herramientas útiles para el manejo de la ansiedad, pero no reemplazan el tratamiento profesional cuando es necesario. Si experimentas síntomas severos, no dudes en buscar ayuda especializada.
              </p>
            </div>
          </div>

          {/* Author Section */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-beige to-blue-gray flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                NC
              </div>
              <div>
                <h3 className="font-bold text-navy dark:text-slate-100 mb-1">Natalia Chiva Montoya</h3>
                <p className="text-sm text-muted dark:text-slate-400 mb-2">Psicóloga General Sanitaria nºcol: CA00989</p>
                <p className="text-sm text-muted dark:text-slate-300 leading-relaxed">
                  Psicóloga especializada en terapia sistémica familiar, de pareja y psicoterapia integradora. Consulta presencial en Santander y online.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">¿Necesitas apoyo profesional?</h3>
            <p className="text-white/90 dark:text-slate-300 mb-6">
              Si la ansiedad está afectando tu calidad de vida, estoy aquí para ayudarte. Psicóloga en Santander.
            </p>
            <CTAButtons />
          </div>
        </div>
      </article>
    </main>
  );
}
