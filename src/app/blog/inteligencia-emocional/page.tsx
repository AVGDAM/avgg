import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Inteligencia Emocional: Qué Es y Cómo Desarrollarla | Blog Natalia Chiva",
  description: "Descubre cómo la inteligencia emocional puede transformar tus relaciones y tu vida profesional. Guía completa con estrategias prácticas.",
  openGraph: {
    title: "Inteligencia Emocional: Qué Es y Cómo Desarrollarla",
    description: "Transforma tus relaciones y vida profesional con inteligencia emocional.",
    type: "article",
    publishedTime: "2026-01-25",
  },
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-800/30">
      <ArticleSchema
        title="Inteligencia Emocional: Qué Es y Cómo Desarrollarla"
        description="Descubre cómo la inteligencia emocional puede transformar tus relaciones y tu vida profesional."
        datePublished="2026-01-25"
        dateModified="2026-01-25"
        url="https://www.nataliachiva.com/blog/inteligencia-emocional"
        image="/blog/inteligencia-emocional.png"
        category="Desarrollo Personal"
      />
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "https://www.nataliachiva.com" },
        { name: "Blog", url: "https://www.nataliachiva.com/blog" },
        { name: "Inteligencia Emocional", url: "https://www.nataliachiva.com/blog/inteligencia-emocional" }
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
                Emociones
              </span>
              <span className="flex items-center gap-1 text-sm text-muted dark:text-slate-400">
                <Calendar className="h-4 w-4" />
                25 de enero de 2026
              </span>
              <span className="flex items-center gap-1 text-sm text-muted dark:text-slate-400">
                <Clock className="h-4 w-4" />
                8 min de lectura
              </span>
            </div>

            <h1 className="text-4xl font-bold text-navy dark:text-slate-100 mb-4 leading-tight">
              Inteligencia Emocional: Qué Es y Cómo Desarrollarla
            </h1>

            <p className="text-xl text-muted dark:text-slate-300 leading-relaxed">
              La inteligencia emocional es la capacidad de reconocer, comprender y gestionar nuestras emociones y las de los demás. Descubre por qué es crucial para tu éxito personal y profesional.
            </p>
          </header>

          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
            <Image
              src="/blog/inteligencia-emocional.jpg"
              alt="Inteligencia emocional - Desarrollo personal"
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">¿Qué es la Inteligencia Emocional?</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La inteligencia emocional (IE) es la habilidad de identificar, comprender y manejar las emociones propias y ajenas. Popularizada por Daniel Goleman en los años 90, la IE ha demostrado ser tan importante como el coeficiente intelectual para el éxito en la vida.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Los 5 Componentes de la Inteligencia Emocional</h2>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">1. Autoconciencia</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Es la capacidad de reconocer y comprender tus propias emociones, fortalezas, debilidades, valores y motivaciones. Implica ser honesto contigo mismo sobre cómo te sientes y por qué actúas de cierta manera. Las personas con alta autoconciencia son reflexivas y aprenden de sus experiencias.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">2. Autorregulación</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La capacidad de controlar o redirigir impulsos y estados de ánimo disruptivos. No se trata de reprimir emociones, sino de expresarlas de manera apropiada. Incluye adaptabilidad, integridad y la capacidad de pensar antes de actuar.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">3. Motivación</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Pasión por el trabajo que va más allá del dinero o el estatus. Es la energía para perseguir objetivos con entusiasmo y persistencia. Las personas emocionalmente inteligentes son optimistas incluso ante el fracaso.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">4. Empatía</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La habilidad de comprender y compartir los sentimientos de los demás. Implica ponerte en el lugar del otro, no solo intelectualmente sino emocionalmente. La empatía es crucial para construir relaciones sólidas y liderar efectivamente.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">5. Habilidades Sociales</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Competencia en gestionar relaciones y construir redes. Incluye comunicación efectiva, gestión de conflictos, liderazgo, trabajo en equipo y la capacidad de influir y persuadir. Las personas con fuertes habilidades sociales son excelentes colaboradores.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">¿Por Qué es Importante la Inteligencia Emocional?</h2>
            
            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">En el Ámbito Personal</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Mejores relaciones interpersonales más profundas y satisfactorias</li>
              <li>Mayor bienestar mental y resiliencia ante el estrés</li>
              <li>Mejor toma de decisiones y resolución de problemas</li>
              <li>Mayor autoestima y autoeficacia</li>
              <li>Reducción de ansiedad y depresión</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">En el Ámbito Profesional</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Mejor desempeño laboral y productividad</li>
              <li>Liderazgo más efectivo e inspirador</li>
              <li>Mejores habilidades de negociación y resolución de conflictos</li>
              <li>Mayor adaptabilidad al cambio</li>
              <li>Trabajo en equipo más efectivo</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Cómo Desarrollar tu Inteligencia Emocional</h2>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Desarrolla tu Autoconciencia</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Lleva un diario emocional:</strong> Escribe sobre tus emociones diarias, qué las desencadenó y cómo respondiste</li>
              <li><strong>Practica mindfulness:</strong> La atención plena te ayuda a observar tus emociones sin juzgarlas</li>
              <li><strong>Pide feedback:</strong> Pregunta a personas de confianza cómo te perciben</li>
              <li><strong>Identifica patrones:</strong> Reconoce qué situaciones desencadenan emociones específicas</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Mejora tu Autorregulación</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Pausa antes de reaccionar:</strong> Cuenta hasta diez cuando sientas emociones intensas</li>
              <li><strong>Técnicas de respiración:</strong> La respiración profunda activa la respuesta de relajación</li>
              <li><strong>Reencuadra situaciones:</strong> Busca interpretaciones alternativas menos amenazantes</li>
              <li><strong>Identifica valores:</strong> Actúa según tus valores, no tus impulsos momentáneos</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Cultiva la Empatía</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Escucha activamente:</strong> Presta atención total sin planear tu respuesta</li>
              <li><strong>Observa el lenguaje no verbal:</strong> Fíjate en expresiones faciales, tono y postura</li>
              <li><strong>Pregunta sobre sentimientos:</strong> "¿Cómo te hace sentir eso?" en lugar de asumir</li>
              <li><strong>Lee ficción:</strong> Las novelas aumentan la capacidad empática al ponerte en la perspectiva de otros</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Fortalece tus Habilidades Sociales</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Practica la comunicación asertiva:</strong> Expresa necesidades claramente sin agresividad ni pasividad</li>
              <li><strong>Aprende a dar y recibir feedback:</strong> Hazlo constructivamente y sin defensividad</li>
              <li><strong>Resuelve conflictos constructivamente:</strong> Busca soluciones ganar-ganar</li>
              <li><strong>Celebra los éxitos de otros:</strong> La generosidad emocional fortalece relaciones</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Ejercicio Práctico: El Semáforo Emocional</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-4">
              Cuando sientas una emoción intensa, usa esta técnica:
            </p>
            <ul className="list-none pl-0 text-muted dark:text-slate-300 space-y-3 mb-6">
              <li><strong>🔴 ROJO (Para):</strong> Detente y respira. No actúes inmediatamente.</li>
              <li><strong>🟡 AMARILLO (Piensa):</strong> Identifica la emoción y su causa. ¿Qué necesidad subyace? ¿Qué opciones tengo?</li>
              <li><strong>🟢 VERDE (Actúa):</strong> Elige conscientemente cómo responder de manera alineada con tus valores.</li>
            </ul>

            <div className="bg-beige-light/20 dark:bg-slate-900/50 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mt-8">
              <p className="text-navy dark:text-slate-100 font-semibold mb-2">Recuerda:</p>
              <p className="text-muted dark:text-slate-300">
                La inteligencia emocional no es innata; se puede desarrollar a cualquier edad. Requiere práctica consciente y paciencia contigo mismo. Cada pequeño paso cuenta en tu desarrollo emocional.
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
            <h3 className="text-2xl font-bold mb-3">¿Quieres desarrollar tu inteligencia emocional?</h3>
            <p className="text-white/90 dark:text-slate-300 mb-6">
              Puedo ayudarte a fortalecer tus habilidades emocionales y mejorar tus relaciones
            </p>
            <Link
              href="/contacto"
              className="inline-block rounded-lg bg-white text-navy dark:bg-slate-100 dark:text-slate-900 px-8 py-3 font-semibold transition hover:bg-gray-100 dark:hover:bg-slate-200"
            >
              Solicitar Cita
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
