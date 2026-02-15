import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Cloud } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "Estrés: Qué es, Síntomas y Cómo Manejarlo | Psicóloga Santander",
  description: "Guía completa sobre el estrés: causas, síntomas y técnicas efectivas de gestión. Psicóloga especializada en estrés en Santander. Consulta presencial y online.",
  keywords: "estrés, psicóloga estrés Santander, manejo del estrés, síntomas estrés, terapia estrés online",
};

export default function EstresPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-800/30">
      <div className="border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-4">
          <Link
            href="/aprende"
            className="inline-flex items-center gap-2 text-sm text-muted dark:text-slate-400 hover:text-navy dark:hover:text-blue-gray-light transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a Aprende
          </Link>
        </div>
      </div>

      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
              <Cloud className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-navy dark:text-slate-100">
                Estrés
              </h1>
              <p className="text-muted dark:text-slate-400 mt-1">
                Psicóloga especializada en Santander
              </p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">¿Qué es el Estrés?</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              El <strong>estrés</strong> es la respuesta natural del cuerpo ante situaciones que percibimos como amenazantes o desafiantes. En dosis moderadas, el estrés puede ser motivador y ayudarnos a rendir mejor. Sin embargo, cuando el <strong>estrés se vuelve crónico o excesivo</strong>, puede tener serios efectos negativos en nuestra salud física y mental.
            </p>

            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Como <strong>psicóloga especializada en manejo del estrés en Santander</strong>, ayudo a personas a identificar sus fuentes de estrés y desarrollar estrategias efectivas de afrontamiento. Ofrezco <strong>consulta presencial en Centro Rualasal</strong> y <strong>terapia online</strong> para toda España.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Tipos de Estrés</h2>
            
            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Estrés Agudo</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Es el tipo más común. Surge de las demandas y presiones del pasado reciente y del futuro próximo. En pequeñas dosis es emocionante, pero demasiado es agotador. Ejemplos: una entrevista de trabajo, un examen importante, una discusión intensa.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Estrés Crónico</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Es el estrés agotador que desgasta a las personas día tras día, año tras año. Surge cuando una persona nunca ve una salida a una situación deprimente: pobreza, familia disfuncional, trabajo que se odia. Es el tipo más dañino y puede llevar a problemas de salud graves.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Estrés Episódico Agudo</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Afecta a personas que frecuentemente experimentan estrés agudo. Sus vidas están tan desordenadas que son estudios de caso de caos y crisis. Siempre están apurados, asumiendo demasiadas responsabilidades y siendo incapaces de organizarse.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Síntomas del Estrés</h2>
            
            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Síntomas Físicos</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Dolores de cabeza frecuentes</li>
              <li>Tensión o dolor muscular, especialmente en cuello y hombros</li>
              <li>Fatiga constante</li>
              <li>Problemas de sueño (insomnio o sueño excesivo)</li>
              <li>Problemas digestivos (náuseas, diarrea, estreñimiento)</li>
              <li>Aumento o disminución del apetito</li>
              <li>Palpitaciones</li>
              <li>Sudoración excesiva</li>
              <li>Debilitamiento del sistema inmune (enfermar frecuentemente)</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Síntomas Emocionales y Cognitivos</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Irritabilidad o mal humor</li>
              <li>Ansiedad o nerviosismo</li>
              <li>Sensación de agobio o abrumado</li>
              <li>Dificultad para concentrarse</li>
              <li>Problemas de memoria</li>
              <li>Pensamientos acelerados</li>
              <li>Preocupación constante</li>
              <li>Cambios de humor</li>
              <li>Sentirse abrumado</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Síntomas Conductuales</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Cambios en el apetito</li>
              <li>Procrastinación o evasión de responsabilidades</li>
              <li>Aumento del consumo de alcohol, tabaco o drogas</li>
              <li>Comportamientos nerviosos (morderse las uñas, caminar de un lado a otro)</li>
              <li>Aislamiento social</li>
              <li>Descuido de responsabilidades</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Causas Comunes del Estrés</h2>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Estrés laboral:</strong> Sobrecarga de trabajo, presión de plazos, conflictos con compañeros o jefes</li>
              <li><strong>Problemas financieros:</strong> Deudas, inseguridad económica, gastos inesperados</li>
              <li><strong>Relaciones:</strong> Conflictos de pareja, problemas familiares, divorcio</li>
              <li><strong>Cambios vitales:</strong> Mudanza, nuevo trabajo, matrimonio, llegada de un hijo</li>
              <li><strong>Problemas de salud:</strong> Enfermedad crónica, lesión, cuidado de familiares enfermos</li>
              <li><strong>Perfeccionismo:</strong> Expectativas poco realistas sobre uno mismo</li>
              <li><strong>Falta de control:</strong> Sentir que las circunstancias están fuera de tu control</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Consecuencias del Estrés Crónico</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-4">
              El estrés prolongado puede tener graves consecuencias:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Salud mental:</strong> Depresión, ansiedad, irritabilidad, burnout</li>
              <li><strong>Salud cardiovascular:</strong> Hipertensión, mayor riesgo de infarto</li>
              <li><strong>Sistema inmune:</strong> Mayor susceptibilidad a enfermedades</li>
              <li><strong>Problemas digestivos:</strong> Síndrome de intestino irritable, úlceras</li>
              <li><strong>Problemas reproductivos:</strong> Irregularidades menstruales, disfunción sexual</li>
              <li><strong>Deterioro cognitivo:</strong> Problemas de memoria y concentración</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Tratamiento del Estrés en Santander</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Como <strong>psicóloga sanitaria especializada en manejo del estrés en Santander</strong>, ofrezco tratamiento personalizado y basado en evidencia:
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Terapia Cognitivo-Conductual</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Trabajamos en identificar y modificar patrones de pensamiento que generan o mantienen el estrés. Aprendes a reevaluar situaciones estresantes de manera más realista y adaptativa.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Técnicas de Relajación</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Respiración diafragmática:</strong> Reduce la activación fisiológica del estrés</li>
              <li><strong>Relajación muscular progresiva:</strong> Libera la tensión física</li>
              <li><strong>Mindfulness:</strong> Desarrolla conciencia del momento presente</li>
              <li><strong>Visualización:</strong> Usa la imaginación para promover calma</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Gestión del Tiempo y Prioridades</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Aprendes a organizar tu tiempo eficazmente, establecer prioridades realistas, delegar tareas y decir "no" cuando es necesario. La gestión efectiva del tiempo reduce significativamente el estrés.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Resolución de Problemas</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Desarrollamos habilidades para abordar problemas de manera sistemática: identificar el problema, generar soluciones alternativas, evaluar opciones e implementar la mejor solución.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Estrategias de Autoayuda para el Estrés</h2>
            
            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">1. Ejercicio Regular</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              El ejercicio físico es uno de los mejores antídotos contra el estrés. Libera endorfinas, mejora el sueño y aumenta la autoconfianza. Incluso 30 minutos diarios de caminata pueden hacer una gran diferencia.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">2. Alimentación Saludable</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Una dieta equilibrada proporciona energía estable y mejora el estado de ánimo. Evita el exceso de cafeína, azúcar y comida procesada, que pueden aumentar el estrés.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">3. Sueño de Calidad</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Establece una rutina de sueño regular. El descanso adecuado (7-9 horas) es esencial para manejar el estrés. Evita pantallas antes de dormir y crea un ambiente propicio para el descanso.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">4. Conexiones Sociales</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Mantén relaciones cercanas con amigos y familia. El apoyo social es un factor protector crucial contra el estrés. Hablar de tus preocupaciones con personas de confianza alivia la carga emocional.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">5. Establece Límites</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Aprende a decir "no" a demandas adicionales cuando ya estás sobrecargado. Establecer límites saludables en el trabajo y en relaciones personales es fundamental para prevenir el agotamiento.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Consulta Presencial y Online</h2>
            
            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Terapia Presencial en Santander</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Ofrezco <strong>consulta presencial en Centro Rualasal</strong>, C/ Rualasal 11, 1 Dcha, en el centro de Santander. Un espacio tranquilo donde trabajaremos juntos en reducir tu estrés y mejorar tu calidad de vida.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Terapia Online para el Estrés</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              También ofrezco <strong>terapia online</strong> a través de videoconferencia, perfecta si tu agenda está muy apretada o vives fuera de Santander. La terapia online ofrece la misma efectividad con mayor flexibilidad.
            </p>

            <div className="bg-beige-light/20 dark:bg-slate-900/50 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mt-8 mb-8">
              <p className="text-navy dark:text-slate-100 font-semibold mb-2">Importante:</p>
              <p className="text-muted dark:text-slate-300">
                Si el estrés está afectando significativamente tu salud, relaciones o trabajo, es momento de buscar ayuda profesional. Como <strong>psicóloga sanitaria colegiada (CA00989)</strong>, puedo ayudarte a recuperar el equilibrio.
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
                  Especializada en manejo del estrés. Consulta presencial en Santander y online para toda España.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">¿El estrés te está afectando?</h3>
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
