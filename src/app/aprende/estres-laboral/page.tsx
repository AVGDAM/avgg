import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Briefcase } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "Estrés Laboral: Prevención y Tratamiento | Psicóloga Santander",
  description: "Maneja el estrés laboral y previene el burnout. Psicóloga especializada en Santander. Consulta presencial y online.",
  keywords: "estrés laboral, burnout, psicóloga estrés laboral Santander, agotamiento laboral",
};

export default function EstresLaboralPage() {
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
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-navy dark:text-slate-100">Estrés Laboral</h1>
              <p className="text-muted dark:text-slate-400 mt-1">Psicóloga especializada en Santander</p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">¿Qué es el Estrés Laboral?</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              El <strong>estrés laboral</strong> ocurre cuando las demandas del trabajo exceden la capacidad de afrontamiento del trabajador. Es una de las principales causas de malestar psicológico en la actualidad. Como <strong>psicóloga especializada en estrés laboral en Santander</strong>, ayudo a profesionales a recuperar el equilibrio. Ofrezco <strong>consulta presencial y online</strong>.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Síntomas del Estrés Laboral</h2>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Fatiga crónica y agotamiento</li>
              <li>Dificultad para concentrarse</li>
              <li>Irritabilidad y cambios de humor</li>
              <li>Problemas de sueño</li>
              <li>Dolores de cabeza frecuentes</li>
              <li>Problemas gastrointestinales</li>
              <li>Disminución del rendimiento</li>
              <li>Aumento del ausentismo</li>
              <li>Pérdida de motivación</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Síndrome de Burnout</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-4">
              El <strong>burnout</strong> es la forma más severa de estrés laboral crónico, caracterizado por:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Agotamiento emocional:</strong> Sentirse drenado y sin energía</li>
              <li><strong>Despersonalización:</strong> Actitud cínica hacia el trabajo y compañeros</li>
              <li><strong>Baja realización personal:</strong> Sensación de incompetencia</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Causas del Estrés Laboral</h2>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Sobrecarga de trabajo y plazos ajustados</li>
              <li>Falta de control sobre tareas</li>
              <li>Ambigüedad de rol o conflictos de rol</li>
              <li>Malas relaciones con compañeros o superiores</li>
              <li>Inseguridad laboral</li>
              <li>Falta de reconocimiento</li>
              <li>Desequilibrio trabajo-vida personal</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Estrategias de Gestión</h2>
            
            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Gestión del Tiempo</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Prioriza tareas, delega cuando sea posible, usa técnicas como Pomodoro. La gestión efectiva del tiempo reduce significativamente el estrés.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Establece Límites</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Aprende a decir "no" y establece horarios claros. Desconecta fuera del trabajo. Los límites son esenciales para prevenir el agotamiento.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Comunicación Asertiva</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Expresa tus necesidades y límites de forma clara y respetuosa. La comunicación efectiva previene conflictos y reduce el estrés.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Autocuidado</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Ejercicio, alimentación saludable, sueño adecuado y actividades placenteras fuera del trabajo son fundamentales.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Tratamiento en Santander</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Como <strong>psicóloga sanitaria en Santander</strong>, te ayudo a:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Identificar y modificar patrones de pensamiento estresantes</li>
              <li>Desarrollar habilidades de gestión del tiempo y priorización</li>
              <li>Mejorar habilidades de comunicación asertiva</li>
              <li>Establecer límites saludables</li>
              <li>Prevenir el burnout</li>
            </ul>

            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Ofrezco <strong>consulta presencial en Centro Rualasal, Santander</strong> y <strong>terapia online</strong>. La terapia online puede ser especialmente conveniente para profesionales con agendas apretadas.
            </p>

            <div className="bg-beige-light/20 dark:bg-slate-900/50 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mt-8 mb-8">
              <p className="text-navy dark:text-slate-100 font-semibold mb-2">Importante:</p>
              <p className="text-muted dark:text-slate-300">
                Tu salud mental es tan importante como tu desempeño laboral. Como <strong>psicóloga colegiada (CA00989)</strong>, puedo ayudarte a recuperar el equilibrio.
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
                  Especializada en estrés laboral y burnout. Consulta presencial en Santander y online.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">¿El trabajo te está agotando?</h3>
            <p className="text-white/90 dark:text-slate-300 mb-6">
              Psicóloga especializada en estrés laboral en Santander. Reserva tu cita.
            </p>
            <CTAButtons />
          </div>
        </div>
      </article>
    </main>
  );
}
