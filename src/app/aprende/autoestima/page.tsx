import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Smile } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "Autoestima: Cómo Mejorarla y Fortalecerla | Psicóloga Santander",
  description: "Guía para mejorar tu autoestima y confianza. Psicóloga especializada en autoestima en Santander. Consulta presencial y online.",
  keywords: "autoestima, psicóloga autoestima Santander, mejorar autoestima, baja autoestima, terapia autoestima online",
};

export default function AutoestimaPage() {
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
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
              <Smile className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-navy dark:text-slate-100">Autoestima</h1>
              <p className="text-muted dark:text-slate-400 mt-1">Psicóloga especializada en Santander</p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">¿Qué es la Autoestima?</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La <strong>autoestima</strong> es la valoración y percepción que tenemos de nosotros mismos. Es la confianza en nuestro propio valor como persona y en nuestra capacidad para enfrentar los desafíos de la vida. Como <strong>psicóloga especializada en autoestima en Santander</strong>, ayudo a personas a desarrollar una autoestima saludable mediante <strong>terapia presencial y online</strong>.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Señales de Baja Autoestima</h2>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Autocrítica constante y pensamientos negativos sobre ti mismo/a</li>
              <li>Dificultad para aceptar cumplidos</li>
              <li>Comparación constante con los demás</li>
              <li>Miedo excesivo al fracaso o al rechazo</li>
              <li>Dificultad para establecer límites</li>
              <li>Buscar aprobación externa constantemente</li>
              <li>Evitar desafíos por miedo a no ser capaz</li>
              <li>Relaciones desequilibradas donde te infravaloras</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Causas de la Baja Autoestima</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-4">La baja autoestima puede originarse por:</p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Experiencias infantiles:</strong> Críticas constantes, falta de afecto, expectativas poco realistas</li>
              <li><strong>Fracasos o rechazos:</strong> Experiencias negativas acumuladas sin apoyo</li>
              <li><strong>Perfeccionismo:</strong> Estándares imposiblemente altos</li>
              <li><strong>Bullying o abuso:</strong> Experiencias traumáticas</li>
              <li><strong>Redes sociales:</strong> Comparación constante con vidas "perfectas"</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Cómo Mejorar tu Autoestima</h2>
            
            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">1. Practica la Autocompasión</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Trátatete con la misma amabilidad que tratarías a un buen amigo. Reconoce que la imperfección es parte de la experiencia humana. La autocompasión no es autoindulgencia, sino reconocer tu humanidad.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">2. Desafía Pensamientos Negativos</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Identifica y cuestiona pensamientos autocríticos. ¿Son realistas? ¿Son útiles? Reemplázalos con pensamientos más equilibrados y compasivos.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">3. Establece Límites Saludables</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Aprende a decir "no" sin culpa. Los límites son una forma de autorrespeto y comunicación de tus necesidades.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">4. Celebra tus Logros</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Reconoce tus éxitos, por pequeños que sean. Lleva un registro de logros y momentos en que manejaste situaciones difíciles.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">5. Cuida tu Cuerpo</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Ejercicio, nutrición y descanso adecuados mejoran no solo tu salud física sino también tu autoestima. Cuando cuidas tu cuerpo, envías el mensaje de que eres valioso/a.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Tratamiento en Santander</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Como <strong>psicóloga sanitaria en Santander</strong>, trabajo con terapia cognitivo-conductual y técnicas integradoras para ayudarte a:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Identificar creencias limitantes sobre ti mismo/a</li>
              <li>Desarrollar una autoimagen más realista y compasiva</li>
              <li>Fortalecer habilidades de asertividad</li>
              <li>Construir confianza genuina en tus capacidades</li>
            </ul>

            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Ofrezco <strong>consulta presencial en Centro Rualasal, Santander</strong> y <strong>terapia online</strong> para toda España.
            </p>

            <div className="bg-beige-light/20 dark:bg-slate-900/50 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mt-8 mb-8">
              <p className="text-navy dark:text-slate-100 font-semibold mb-2">Recuerda:</p>
              <p className="text-muted dark:text-slate-300">
                Mejorar la autoestima es un proceso gradual. Cada pequeño paso cuenta. Como <strong>psicóloga colegiada (CA00989)</strong>, puedo acompañarte en este proceso de crecimiento personal.
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
                  Especializada en autoestima y desarrollo personal. Consulta presencial en Santander y online.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">¿Quieres mejorar tu autoestima?</h3>
            <p className="text-white/90 dark:text-slate-300 mb-6">
              Psicóloga especializada en Santander. Reserva tu cita presencial u online.
            </p>
            <CTAButtons />
          </div>
        </div>
      </article>
    </main>
  );
}
