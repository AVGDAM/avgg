import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "10 Síntomas de la Depresión que No Debes Ignorar | Blog Natalia Chiva",
  description: "Conoce los principales síntomas de la depresión y aprende cuándo es fundamental buscar ayuda profesional. Guía completa de una psicóloga sanitaria.",
  openGraph: {
    title: "10 Síntomas de la Depresión que No Debes Ignorar",
    description: "Identifica las señales de la depresión y cuándo buscar ayuda profesional.",
    type: "article",
    publishedTime: "2026-02-08",
  },
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-800/30">
      <ArticleSchema
        title="10 Síntomas de la Depresión que No Debes Ignorar"
        description="Conoce los principales síntomas de la depresión y aprende cuándo es fundamental buscar ayuda profesional."
        datePublished="2026-02-08"
        dateModified="2026-02-08"
        url="https://www.nataliachiva.com/blog/sintomas-depresion"
        image="/blog/depresion.png"
        category="Depresión"
      />
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "https://www.nataliachiva.com" },
        { name: "Blog", url: "https://www.nataliachiva.com/blog" },
        { name: "Síntomas de la Depresión", url: "https://www.nataliachiva.com/blog/sintomas-depresion" }
      ]} />
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
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center gap-1 bg-beige text-white text-sm font-semibold px-3 py-1 rounded-full">
                <Tag className="h-3 w-3" />
                Depresión
              </span>
              <span className="flex items-center gap-1 text-sm text-muted dark:text-slate-400">
                <Calendar className="h-4 w-4" />
                8 de febrero de 2026
              </span>
              <span className="flex items-center gap-1 text-sm text-muted dark:text-slate-400">
                <Clock className="h-4 w-4" />
                6 min de lectura
              </span>
            </div>

            <h1 className="text-4xl font-bold text-navy dark:text-slate-100 mb-4 leading-tight">
              10 Síntomas de la Depresión que No Debes Ignorar
            </h1>

            <p className="text-xl text-muted dark:text-slate-300 leading-relaxed">
              La depresión es más que sentirse triste ocasionalmente. Es un trastorno del estado de ánimo que afecta cómo te sientes, piensas y manejas las actividades diarias. Conocer sus síntomas es el primer paso para buscar ayuda.
            </p>
          </header>

          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
            <Image
              src="/blog/depresion.jpg"
              alt="Síntomas de la depresión - Apoyo psicológico"
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">¿Qué es la depresión?</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La depresión es un trastorno del estado de ánimo que causa un sentimiento persistente de tristeza y pérdida de interés. Afecta cómo te sientes, piensas y te comportas, y puede llevar a una variedad de problemas emocionales y físicos.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">10 Síntomas Principales de la Depresión</h2>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">1. Tristeza Persistente o Estado de Ánimo Bajo</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Sentirse triste, vacío o sin esperanza la mayor parte del día, casi todos los días. Este sentimiento es más intenso que la tristeza normal y no desaparece con el tiempo.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">2. Pérdida de Interés o Placer</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Anhedonia: pérdida de interés o placer en actividades que antes disfrutabas, incluyendo pasatiempos, deportes, salir con amigos o incluso la intimidad sexual.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">3. Cambios Significativos en el Peso o Apetito</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Pérdida o aumento de peso significativo sin estar a dieta, o disminución o aumento del apetito casi todos los días. Puede manifestarse como pérdida de apetito o comer en exceso como mecanismo de afrontamiento.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">4. Alteraciones del Sueño</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Insomnio (dificultad para dormir) o hipersomnia (dormir demasiado) casi todos los días. Puede incluir despertarse muy temprano y no poder volver a dormir, o dormir muchas más horas de lo normal.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">5. Agitación o Enlentecimiento Psicomotor</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Sentirse inquieto y no poder quedarse quieto, o por el contrario, sentir que tus movimientos y habla se han vuelto más lentos, observable por otros.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">6. Fatiga y Pérdida de Energía</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Sentirse cansado todo el tiempo, incluso después de descansar. Las tareas simples pueden parecer abrumadoras y requerir un esfuerzo extra.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">7. Sentimientos de Inutilidad o Culpa Excesiva</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Sentimientos excesivos o inapropiados de culpabilidad, inutilidad o desesperanza. Autocrítica severa y culparse por eventos fuera de tu control.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">8. Dificultad para Concentrarse o Tomar Decisiones</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Problemas para pensar, concentrarse, recordar información o tomar decisiones simples. Incluso decisiones cotidianas pueden parecer abrumadoras.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">9. Síntomas Físicos Inexplicables</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Dolores de cabeza, dolores corporales, problemas digestivos u otros síntomas físicos que no responden al tratamiento médico convencional.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">10. Pensamientos Recurrentes de Muerte o Suicidio</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Pensamientos recurrentes sobre la muerte, ideación suicida sin un plan específico, o intentos de suicidio o un plan específico para suicidarse.
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg mt-8 mb-8">
              <p className="text-red-900 dark:text-red-200 font-semibold mb-2">⚠️ Advertencia Importante:</p>
              <p className="text-red-800 dark:text-red-300">
                Si experimentas pensamientos suicidas, busca ayuda inmediatamente. Llama al 024 (línea de atención a la conducta suicida en España) o acude a urgencias. No estás solo/a y hay ayuda disponible.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">¿Cuándo buscar ayuda profesional?</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Si experimentas varios de estos síntomas durante más de dos semanas y estos interfieren con tu vida diaria, trabajo, relaciones o actividades cotidianas, es fundamental que busques ayuda profesional. La depresión es tratable y cuanto antes se inicie el tratamiento, mejor será el pronóstico.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Tratamiento de la Depresión</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La depresión se trata típicamente con psicoterapia, medicación o una combinación de ambos. La terapia cognitivo-conductual y la terapia interpersonal han demostrado ser especialmente efectivas. Un psicólogo puede trabajar contigo para desarrollar estrategias de afrontamiento y abordar los pensamientos y comportamientos que contribuyen a tu depresión.
            </p>

            <div className="bg-beige-light/20 dark:bg-slate-900/50 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mt-8">
              <p className="text-navy dark:text-slate-100 font-semibold mb-2">Recuerda:</p>
              <p className="text-muted dark:text-slate-300">
                La depresión no es una debilidad ni algo que puedas superar solo con "fuerza de voluntad". Es una condición médica real que requiere tratamiento profesional. Buscar ayuda es un signo de fortaleza, no de debilidad.
              </p>
            </div>
          </div>

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

          <div className="mt-12 bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">¿Necesitas apoyo profesional?</h3>
            <p className="text-white/90 dark:text-slate-300 mb-6">
              Si reconoces estos síntomas en ti o en alguien cercano, estoy aquí para ayudarte. Psicóloga en Santander.
            </p>
            <CTAButtons />
          </div>
        </div>
      </article>
    </main>
  );
}
