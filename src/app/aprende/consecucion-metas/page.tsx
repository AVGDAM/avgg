import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Target } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "Consecución de Metas: Cómo Alcanzar tus Objetivos | Psicóloga Santander",
  description: "Estrategias psicológicas para establecer y alcanzar tus metas. Psicóloga en Santander. Consulta presencial y online.",
  keywords: "metas, objetivos, psicóloga metas Santander, conseguir objetivos, motivación",
};

export default function ConsecucionMetasPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-800/30">
      <div className="border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-4">
          <Link href="/aprende" className="inline-flex items-center gap-2 text-sm text-muted dark:text-slate-400 hover:text-navy dark:hover:text-blue-gray-light transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Volver a Aprende
          </Link>
        </div>
      </div>

      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
              <Target className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-navy dark:text-slate-100">Consecución de Metas</h1>
              <p className="text-muted dark:text-slate-400 mt-1">Psicóloga especializada en Santander</p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Establecer y Alcanzar Metas</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La capacidad de establecer y alcanzar <strong>metas</strong> es fundamental para el bienestar psicológico y el desarrollo personal. Como <strong>psicóloga en Santander</strong>, ayudo a personas a clarificar sus objetivos y desarrollar estrategias efectivas para alcanzarlos. Ofrezco <strong>consulta presencial y online</strong>.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Método SMART para Establecer Metas</h2>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Específicas (Specific):</strong> Define claramente qué quieres lograr</li>
              <li><strong>Medibles (Measurable):</strong> Establece criterios para medir el progreso</li>
              <li><strong>Alcanzables (Achievable):</strong> Asegúrate de que sean realistas</li>
              <li><strong>Relevantes (Relevant):</strong> Que sean importantes para ti</li>
              <li><strong>Temporales (Time-bound):</strong> Establece plazos concretos</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Obstáculos Comunes</h2>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Procrastinación:</strong> Postergar indefinidamente el inicio</li>
              <li><strong>Miedo al fracaso:</strong> Paralización por miedo a no conseguirlo</li>
              <li><strong>Falta de motivación:</strong> Pérdida del entusiasmo inicial</li>
              <li><strong>Metas poco realistas:</strong> Objetivos demasiado ambiciosos</li>
              <li><strong>Falta de planificación:</strong> No dividir la meta en pasos pequeños</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Estrategias para Alcanzar tus Metas</h2>
            
            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">1. Divide en Pasos Pequeños</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Descompón tu meta grande en tareas más pequeñas y manejables. Esto reduce la sensación de abrumamiento y permite celebrar pequeños logros en el camino.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">2. Crea un Plan de Acción</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Especifica qué acciones tomarás, cuándo y cómo. Un plan concreto aumenta significativamente la probabilidad de éxito.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">3. Mantén la Motivación</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Recuerda regularmente el "porqué" de tu meta. Conecta con tus valores y visualiza cómo te sentirás al alcanzarla.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">4. Gestiona los Obstáculos</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Anticipa posibles dificultades y planifica cómo las enfrentarás. La flexibilidad y la capacidad de adaptación son clave.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Tratamiento en Santander</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Como <strong>psicóloga sanitaria en Santander</strong>, te ayudo a:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Clarificar tus metas y prioridades</li>
              <li>Superar bloqueos psicológicos (miedo, procrastinación)</li>
              <li>Desarrollar habilidades de autorregulación y disciplina</li>
              <li>Aumentar tu motivación intrínseca</li>
              <li>Celebrar logros y aprender de retrocesos</li>
            </ul>

            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Ofrezco <strong>consulta presencial en Centro Rualasal, Santander</strong> y <strong>terapia online</strong>.
            </p>

            <div className="bg-beige-light/20 dark:bg-slate-900/50 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mt-8 mb-8">
              <p className="text-navy dark:text-slate-100 font-semibold mb-2">Importante:</p>
              <p className="text-muted dark:text-slate-300">
                El proceso de alcanzar metas no es lineal. Los retrocesos son normales y parte del aprendizaje. Como <strong>psicóloga colegiada (CA00989)</strong>, te acompaño en todo el proceso.
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
                  Te ayudo a alcanzar tus metas. Consulta presencial en Santander y online.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">¿Necesitas ayuda para alcanzar tus metas?</h3>
            <p className="text-white/90 dark:text-slate-300 mb-6">
              Psicóloga en Santander. Reserva tu cita presencial u online.
            </p>
            <CTAButtons />
          </div>
        </div>
      </article>
    </main>
  );
}
