import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Heart } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "Depresión: Síntomas, Causas y Tratamiento | Psicóloga Santander",
  description: "Guía completa sobre la depresión: síntomas, causas y tratamientos efectivos. Psicóloga especializada en depresión en Santander. Consulta presencial y online.",
  keywords: "depresión, psicóloga depresión Santander, tratamiento depresión, síntomas depresión, terapia depresión online",
};

export default function DepresionPage() {
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
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-navy dark:text-slate-100">
                Depresión
              </h1>
              <p className="text-muted dark:text-slate-400 mt-1">
                Psicóloga especializada en Santander
              </p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">¿Qué es la Depresión?</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La <strong>depresión</strong> es un trastorno del estado de ánimo que va mucho más allá de sentirse triste ocasionalmente. Es una condición médica seria que afecta cómo te sientes, piensas y manejas las actividades diarias. La <strong>depresión clínica</strong> causa sentimientos persistentes de tristeza y pérdida de interés en actividades que antes disfrutabas.
            </p>

            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Como <strong>psicóloga especializada en tratamiento de la depresión en Santander</strong>, ofrezco terapia basada en evidencia tanto en <strong>consulta presencial</strong> como <strong>online</strong>. La depresión es tratable, y con la ayuda adecuada, la mayoría de las personas experimentan una mejoría significativa.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Síntomas de la Depresión</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-4">
              Para un diagnóstico de depresión, los síntomas deben estar presentes durante al menos dos semanas:
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Síntomas Emocionales</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Tristeza persistente, ansiedad o sensación de "vacío"</li>
              <li>Sentimientos de desesperanza o pesimismo</li>
              <li>Irritabilidad, frustración o inquietud</li>
              <li>Sentimientos de culpa, inutilidad o impotencia</li>
              <li>Pérdida de interés o placer en pasatiempos y actividades</li>
              <li>Pensamientos de muerte o suicidio</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Síntomas Físicos</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Fatiga o falta de energía</li>
              <li>Cambios en el apetito y peso (pérdida o aumento)</li>
              <li>Alteraciones del sueño (insomnio o dormir demasiado)</li>
              <li>Movimientos o habla más lentos</li>
              <li>Inquietud o dificultad para estar quieto</li>
              <li>Dolores físicos sin causa aparente</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Síntomas Cognitivos</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Dificultad para concentrarse, recordar o tomar decisiones</li>
              <li>Pensamientos negativos persistentes</li>
              <li>Dificultad para pensar con claridad</li>
              <li>Rumia mental (dar vueltas a los mismos pensamientos)</li>
            </ul>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg mt-6 mb-6">
              <p className="text-red-900 dark:text-red-200 font-semibold mb-2">⚠️ Señal de Alerta:</p>
              <p className="text-red-800 dark:text-red-300">
                Si experimentas pensamientos suicidas, busca ayuda inmediatamente. Llama al 024 (línea de atención a la conducta suicida) o acude a urgencias. Tu vida es valiosa y hay ayuda disponible.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Tipos de Depresión</h2>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Trastorno Depresivo Mayor</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Episodios de síntomas graves que interfieren con la capacidad de trabajar, dormir, estudiar y comer. Puede ocurrir una sola vez o ser recurrente.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Trastorno Depresivo Persistente (Distimia)</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Estado de ánimo deprimido que dura al menos dos años. Los síntomas pueden ser menos severos que en la depresión mayor, pero son más prolongados.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Depresión Postparto</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Afecta a mujeres después del parto. Los síntomas van más allá de la "tristeza posparto" normal e incluyen depresión mayor, ansiedad extrema y agotamiento.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Trastorno Afectivo Estacional (TAE)</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Depresión que aparece durante ciertas estaciones del año, típicamente en otoño e invierno, cuando hay menos luz solar natural.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Causas de la Depresión</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-4">
              La depresión no tiene una causa única. Generalmente resulta de una combinación de factores:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Factores biológicos:</strong> Desequilibrios en neurotransmisores (serotonina, dopamina), predisposición genética</li>
              <li><strong>Factores psicológicos:</strong> Baja autoestima, patrones de pensamiento negativos, trauma infantil</li>
              <li><strong>Factores sociales:</strong> Eventos estresantes (pérdida, divorcio, desempleo), aislamiento social, falta de apoyo</li>
              <li><strong>Enfermedades médicas:</strong> Condiciones crónicas, problemas tiroideos, dolor crónico</li>
              <li><strong>Medicamentos:</strong> Algunos medicamentos pueden desencadenar depresión como efecto secundario</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Tratamiento de la Depresión en Santander</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Como <strong>psicóloga sanitaria especializada en depresión en Santander</strong>, ofrezco tratamiento integral y personalizado:
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Terapia Cognitivo-Conductual (TCC)</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La <strong>TCC</strong> es uno de los tratamientos más efectivos para la depresión. Trabajamos en:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Identificar y modificar pensamientos negativos automáticos</li>
              <li>Desarrollar patrones de pensamiento más realistas y equilibrados</li>
              <li>Aumentar actividades placenteras (activación conductual)</li>
              <li>Mejorar habilidades de resolución de problemas</li>
              <li>Establecer y alcanzar metas realistas</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Terapia Integradora</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Mi formación en <strong>psicoterapia integradora, trauma y apego</strong> me permite abordar las raíces más profundas de la depresión, especialmente cuando está relacionada con experiencias tempranas o traumas.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Activación Conductual</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Cuando estamos deprimidos, tendemos a retirarnos y evitar actividades. La activación conductual rompe este ciclo aumentando gradualmente actividades significativas y placenteras, lo que mejora el estado de ánimo.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Mindfulness y Técnicas de Aceptación</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Integro prácticas de mindfulness para ayudarte a relacionarte con tus pensamientos y emociones de manera más compasiva, reduciendo la rumia mental característica de la depresión.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">¿Necesito Medicación?</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Para depresión leve a moderada, la psicoterapia sola puede ser efectiva. En casos de depresión moderada a severa, la combinación de psicoterapia y medicación (antidepresivos recetados por psiquiatra) suele ser el tratamiento más efectivo. Como psicóloga, puedo trabajar coordinadamente con tu psiquiatra si decides seguir tratamiento farmacológico.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Estrategias de Autoayuda</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-4">
              Mientras buscas ayuda profesional, estas estrategias pueden ayudar:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Mantén una rutina:</strong> Levántate a la misma hora, come regularmente, establece estructura</li>
              <li><strong>Ejercicio físico:</strong> Incluso caminar 15-30 minutos diarios mejora el estado de ánimo</li>
              <li><strong>Exposición a luz solar:</strong> Especialmente importante en depresión estacional</li>
              <li><strong>Conexión social:</strong> Aunque sea difícil, mantén contacto con personas de apoyo</li>
              <li><strong>Evita alcohol y drogas:</strong> Pueden empeorar la depresión a largo plazo</li>
              <li><strong>Establece metas pequeñas:</strong> Divide tareas grandes en pasos manejables</li>
              <li><strong>Sé compasivo contigo mismo:</strong> La depresión no es debilidad ni falta de voluntad</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Consulta Presencial y Online</h2>
            
            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Terapia Presencial en Santander</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Ofrezco <strong>consulta presencial en Centro Rualasal</strong>, C/ Rualasal 11, 1 Dcha, en el centro de Santander. Un espacio seguro donde trabajaremos juntos para superar la depresión.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Terapia Online para la Depresión</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              También ofrezco <strong>terapia online</strong> para toda España. Es especialmente útil si la depresión dificulta salir de casa o si vives fuera de Santander. La terapia online es igualmente efectiva.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Pronóstico y Recuperación</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La depresión es altamente tratable. Con el tratamiento adecuado, la mayoría de las personas mejoran significativamente. La recuperación lleva tiempo, pero es posible. No estás solo/a en esto, y buscar ayuda es un signo de fortaleza, no de debilidad.
            </p>

            <div className="bg-beige-light/20 dark:bg-slate-900/50 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mt-8 mb-8">
              <p className="text-navy dark:text-slate-100 font-semibold mb-2">Recuerda:</p>
              <p className="text-muted dark:text-slate-300">
                La depresión no es tu culpa y no es algo que puedas superar solo con "fuerza de voluntad". Es una condición médica real que requiere tratamiento. Como <strong>psicóloga sanitaria colegiada (CA00989)</strong>, estoy aquí para ayudarte a recuperar tu bienestar.
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
                  Especializada en tratamiento de la depresión. Consulta presencial en Santander y online para toda España.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">¿Sufres de depresión?</h3>
            <p className="text-white/90 dark:text-slate-300 mb-6">
              Psicóloga especializada en Santander. La depresión es tratable. Reserva tu cita hoy.
            </p>
            <CTAButtons />
          </div>
        </div>
      </article>
    </main>
  );
}
