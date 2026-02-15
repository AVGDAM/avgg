import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Cloud } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "Duelo: Proceso y Cómo Afrontarlo | Psicóloga Santander",
  description: "Comprende y afronta el proceso de duelo de manera saludable. Psicóloga especializada en Santander. Consulta presencial y online.",
  keywords: "duelo, psicóloga duelo Santander, pérdida, proceso de duelo, terapia duelo",
};

export default function DueloPage() {
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
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center">
              <Cloud className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-navy dark:text-slate-100">Duelo</h1>
              <p className="text-muted dark:text-slate-400 mt-1">Psicóloga especializada en Santander</p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">¿Qué es el Duelo?</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              El <strong>duelo</strong> es la respuesta natural ante una pérdida significativa. Aunque comúnmente se asocia con la muerte de un ser querido, el duelo puede surgir por cualquier pérdida importante: relaciones, salud, trabajo, o cambios vitales. Como <strong>psicóloga especializada en duelo en Santander</strong>, acompaño a personas en este proceso. Ofrezco <strong>consulta presencial y online</strong>.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Etapas del Duelo (Modelo Kübler-Ross)</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-4">
              Aunque no todos experimentan todas las etapas o en este orden, son una guía útil:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Negación:</strong> "Esto no puede estar pasando"</li>
              <li><strong>Ira:</strong> Enfado hacia circunstancias, otros, o uno mismo</li>
              <li><strong>Negociación:</strong> "Si hubiera...", intentos de revertir la pérdida</li>
              <li><strong>Depresión:</strong> Tristeza profunda al aceptar la realidad</li>
              <li><strong>Aceptación:</strong> Integrar la pérdida y seguir adelante</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Síntomas Normales del Duelo</h2>
            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Emocionales</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Tristeza profunda</li>
              <li>Ansiedad o miedo</li>
              <li>Culpa o remordimiento</li>
              <li>Ira o irritabilidad</li>
              <li>Alivio (en algunos casos)</li>
              <li>Entumecimiento emocional</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Físicos</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Fatiga</li>
              <li>Problemas de sueño</li>
              <li>Cambios en el apetito</li>
              <li>Opresión en pecho o garganta</li>
              <li>Hipersensibilidad al ruido</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Cognitivos</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Dificultad para concentrarse</li>
              <li>Confusión</li>
              <li>Sensación de presencia del fallecido</li>
              <li>Recuerdos intrusivos</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Duelo Complicado</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-4">
              A veces el duelo se complica y requiere ayuda profesional. Señales de alerta:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Incapacidad para aceptar la pérdida meses después</li>
              <li>Evitación extrema de recordatorios</li>
              <li>Pensamiento suicida persistente</li>
              <li>Deterioro funcional severo</li>
              <li>Ira intensa y prolongada</li>
              <li>Culpa excesiva</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Cómo Afrontar el Duelo</h2>
            
            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Permítete Sentir</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              No reprimas tus emociones. El dolor es parte del proceso de sanación. Llorar no es signo de debilidad.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Busca Apoyo</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Habla con amigos, familia o grupos de apoyo. Compartir tu dolor alivia la carga. No tienes que pasar por esto solo/a.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Cuida tu Salud</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Mantén rutinas básicas: comer, dormir, ejercicio. El autocuidado físico apoya la sanación emocional.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Honra la Memoria</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Encuentra formas significativas de recordar: rituales, álbumes, acciones en su memoria. Esto ayuda a integrar la pérdida.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Tratamiento en Santander</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Como <strong>psicóloga sanitaria en Santander</strong>, ofrezco un espacio seguro para:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Expresar y procesar emociones</li>
              <li>Trabajar la culpa o el remordimiento</li>
              <li>Encontrar significado tras la pérdida</li>
              <li>Reconstruir tu vida sin la persona/situación perdida</li>
              <li>Tratar duelo complicado</li>
            </ul>

            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Ofrezco <strong>consulta presencial en Centro Rualasal, Santander</strong> y <strong>terapia online</strong>.
            </p>

            <div className="bg-beige-light/20 dark:bg-slate-900/50 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mt-8 mb-8">
              <p className="text-navy dark:text-slate-100 font-semibold mb-2">Recuerda:</p>
              <p className="text-muted dark:text-slate-300">
                El duelo no tiene un tiempo fijo. Cada persona lo vive a su ritmo. No hay forma "correcta" de hacer duelo. Como <strong>psicóloga colegiada (CA00989)</strong>, te acompaño en tu proceso único.
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
                  Te acompaño en tu proceso de duelo. Consulta presencial en Santander y online.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">¿Necesitas apoyo en tu duelo?</h3>
            <p className="text-white/90 dark:text-slate-300 mb-6">
              Psicóloga especializada en Santander. No estás solo/a. Reserva tu cita.
            </p>
            <CTAButtons />
          </div>
        </div>
      </article>
    </main>
  );
}
