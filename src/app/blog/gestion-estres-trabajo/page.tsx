import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Gestión del Estrés Laboral: Estrategias Prácticas | Blog Natalia Chiva",
  description: "Aprende técnicas efectivas para reducir el estrés en el trabajo y mejorar tu calidad de vida profesional. Consejos de psicología laboral.",
  openGraph: {
    title: "Gestión del Estrés Laboral: Estrategias Prácticas",
    description: "Técnicas efectivas para reducir el estrés en el trabajo.",
    type: "article",
    publishedTime: "2026-02-03",
  },
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-800/30">
      <ArticleSchema
        title="Gestión del Estrés Laboral: Estrategias Prácticas"
        description="Aprende técnicas efectivas para reducir el estrés en el trabajo y mejorar tu calidad de vida profesional."
        datePublished="2026-02-03"
        dateModified="2026-02-03"
        url="https://www.nataliachiva.com/blog/gestion-estres-trabajo"
        image="/blog/estres.png"
        category="Estrés"
      />
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "https://www.nataliachiva.com" },
        { name: "Blog", url: "https://www.nataliachiva.com/blog" },
        { name: "Gestión del Estrés Laboral", url: "https://www.nataliachiva.com/blog/gestion-estres-trabajo" }
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
                Estrés
              </span>
              <span className="flex items-center gap-1 text-sm text-muted dark:text-slate-400">
                <Calendar className="h-4 w-4" />
                3 de febrero de 2026
              </span>
              <span className="flex items-center gap-1 text-sm text-muted dark:text-slate-400">
                <Clock className="h-4 w-4" />
                9 min de lectura
              </span>
            </div>

            <h1 className="text-4xl font-bold text-navy dark:text-slate-100 mb-4 leading-tight">
              Gestión del Estrés Laboral: Estrategias Prácticas
            </h1>

            <p className="text-xl text-muted dark:text-slate-300 leading-relaxed">
              El estrés laboral es una de las principales causas de malestar psicológico en la actualidad. Aprende estrategias efectivas para manejarlo y mejorar tu bienestar en el trabajo.
            </p>
          </header>

          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
            <Image
              src="/blog/estres-laboral.jpg"
              alt="Gestión del estrés laboral - Estrategias"
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">¿Qué es el Estrés Laboral?</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              El estrés laboral es una respuesta física y emocional dañina que ocurre cuando los requisitos del trabajo no coinciden con las capacidades, recursos o necesidades del trabajador. Puede afectar la salud física, mental y el desempeño laboral.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Señales de Estrés Laboral</h2>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Fatiga constante y problemas de sueño</li>
              <li>Dificultad para concentrarse</li>
              <li>Irritabilidad y cambios de humor</li>
              <li>Dolores de cabeza o musculares frecuentes</li>
              <li>Problemas gastrointestinales</li>
              <li>Disminución del rendimiento</li>
              <li>Aislamiento social</li>
              <li>Pérdida de motivación</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Estrategias de Gestión del Estrés Laboral</h2>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">1. Identifica las Fuentes de Estrés</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Lleva un diario durante una o dos semanas para identificar qué situaciones te generan más estrés y cómo respondes a ellas. Identificar los patrones es el primer paso para cambiarlos.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">2. Establece Límites Claros</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              En la era digital, el trabajo puede invadir tu vida personal. Establece horarios específicos para revisar emails y desconecta fuera del horario laboral. Aprende a decir "no" cuando sea necesario.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">3. Prioriza y Organiza</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Usa técnicas de gestión del tiempo como la Matriz de Eisenhower para priorizar tareas según urgencia e importancia. Divide proyectos grandes en tareas más pequeñas y manejables.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">4. Toma Descansos Regulares</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Tomar descansos breves cada hora mejora la productividad y reduce el estrés. Usa la técnica Pomodoro: 25 minutos de trabajo concentrado seguidos de 5 minutos de descanso.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">5. Practica la Comunicación Asertiva</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Expresa tus necesidades, opiniones y límites de forma clara y respetuosa. La comunicación asertiva reduce malentendidos y previene la acumulación de resentimiento.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">6. Cuida tu Salud Física</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              El ejercicio regular, una dieta equilibrada y un sueño adecuado son fundamentales. El ejercicio libera endorfinas que mejoran el estado de ánimo y reducen el estrés.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">7. Desarrolla una Red de Apoyo</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Mantén relaciones positivas con compañeros de trabajo. Compartir preocupaciones con personas de confianza puede proporcionar nuevas perspectivas y apoyo emocional.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">8. Practica Técnicas de Relajación</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Incorpora técnicas como respiración profunda, meditación o yoga. Incluso 5 minutos de respiración consciente durante el día pueden reducir significativamente el estrés.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">9. Encuentra Significado en tu Trabajo</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Conecta con el propósito de tu trabajo. Reflexiona sobre cómo tu labor contribuye a objetivos mayores o ayuda a otros. El sentido de propósito reduce el estrés.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">10. Modifica tu Perspectiva</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Reencuadra situaciones estresantes como oportunidades de aprendizaje. Practica la gratitud diaria enfocándote en aspectos positivos de tu trabajo.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Síndrome de Burnout</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              El burnout o síndrome del quemado es una forma severa de estrés laboral crónico que se caracteriza por:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Agotamiento emocional</strong>: Sentirse drenado y sin energía</li>
              <li><strong>Despersonalización</strong>: Actitud cínica hacia el trabajo y las personas</li>
              <li><strong>Reducción de la eficacia personal</strong>: Sentimientos de incompetencia</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Cuándo Buscar Ayuda Profesional</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Si el estrés laboral afecta significativamente tu salud, relaciones personales o si experimentas síntomas de burnout, es fundamental buscar ayuda profesional. Un psicólogo puede ayudarte a:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Identificar y cambiar patrones de pensamiento negativos</li>
              <li>Desarrollar estrategias de afrontamiento efectivas</li>
              <li>Mejorar habilidades de gestión del tiempo y comunicación</li>
              <li>Trabajar conflictos laborales específicos</li>
              <li>Considerar opciones de cambio de carrera si es necesario</li>
            </ul>

            <div className="bg-beige-light/20 dark:bg-slate-900/50 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mt-8">
              <p className="text-navy dark:text-slate-100 font-semibold mb-2">Recuerda:</p>
              <p className="text-muted dark:text-slate-300">
                Gestionar el estrés laboral no es un lujo, es una necesidad para mantener tu salud física y mental a largo plazo. Invertir en tu bienestar te hace más productivo y feliz.
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
            <h3 className="text-2xl font-bold mb-3">¿El estrés laboral te está afectando?</h3>
            <p className="text-white/90 dark:text-slate-300 mb-6">
              Puedo ayudarte a desarrollar estrategias efectivas para manejar el estrés
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
