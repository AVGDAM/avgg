import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Brain, Heart, AlertCircle } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";
import KeyTakeaways from "@/components/KeyTakeaways";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Ansiedad: Qué es, Síntomas y Tratamiento | Psicóloga Santander",
  description: "Guía completa sobre la ansiedad: síntomas, causas y tratamientos efectivos. Psicóloga especializada en ansiedad en Santander. Consulta presencial y online.",
  keywords: "ansiedad, psicóloga ansiedad Santander, tratamiento ansiedad, síntomas ansiedad, terapia ansiedad online",
};

export default function AnsiedadPage() {
  const faqs = [
    {
      question: "¿La ansiedad se cura?",
      answer: "Sí, los trastornos de ansiedad son tratables. Con la terapia adecuada, la mayoría de las personas experimentan una mejora significativa. La terapia cognitivo-conductual tiene una tasa de efectividad del 60-80% en el tratamiento de trastornos de ansiedad."
    },
    {
      question: "¿Cuánto dura el tratamiento para la ansiedad?",
      answer: "El tratamiento típico con terapia cognitivo-conductual para ansiedad dura entre 12-20 sesiones. Muchas personas notan mejoras significativas en las primeras 6-8 sesiones. La duración exacta depende de la severidad de los síntomas y la respuesta individual al tratamiento."
    },
    {
      question: "¿Necesito medicación para tratar la ansiedad?",
      answer: "No siempre. La psicoterapia es efectiva por sí sola para ansiedad leve a moderada. En casos más severos, la combinación de terapia y medicación (prescrita por psiquiatra) puede ser beneficiosa. Un psicólogo puede evaluar tu caso y recomendar el mejor enfoque."
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-800/30">
      <FAQSchema faqs={faqs} />
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
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-navy dark:text-slate-100">
                Ansiedad
              </h1>
              <p className="text-muted dark:text-slate-400 mt-1">
                Psicóloga especializada en Santander
              </p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">¿Qué es la Ansiedad?</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La <strong>ansiedad</strong> es una respuesta emocional natural que todos experimentamos ante situaciones de incertidumbre o peligro. Se caracteriza por sentimientos de preocupación, nerviosismo o inquietud. Sin embargo, cuando la ansiedad se vuelve persistente, intensa y desproporcionada respecto a la situación, puede convertirse en un <strong>trastorno de ansiedad</strong> que requiere atención profesional.
            </p>

            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Como <strong>psicóloga especializada en ansiedad en Santander</strong>, trabajo con pacientes que experimentan diferentes tipos de ansiedad, ofreciendo tanto <strong>consulta presencial en Centro Rualasal</strong> como <strong>terapia online</strong> para toda España.
            </p>

            <KeyTakeaways items={[
              "La ansiedad afecta a 1 de cada 4 personas en algún momento de su vida",
              "La terapia cognitivo-conductual tiene una efectividad del 60-80% en trastornos de ansiedad",
              "El tratamiento típico dura entre 12-20 sesiones con resultados visibles desde las primeras 6-8 sesiones",
              "No siempre es necesaria medicación - la psicoterapia sola es efectiva para ansiedad leve a moderada",
              "La ansiedad es completamente tratable con el enfoque adecuado"
            ]} />

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Síntomas de la Ansiedad</h2>
            
            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Síntomas Físicos</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Palpitaciones o taquicardia</li>
              <li>Sudoración excesiva</li>
              <li>Temblores o sacudidas</li>
              <li>Sensación de falta de aire</li>
              <li>Dolor o presión en el pecho</li>
              <li>Náuseas o malestar estomacal</li>
              <li>Mareos o sensación de desmayo</li>
              <li>Tensión muscular</li>
              <li>Fatiga o agotamiento</li>
              <li>Problemas para dormir</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Síntomas Psicológicos y Emocionales</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Preocupación excesiva y persistente</li>
              <li>Pensamientos catastróficos</li>
              <li>Dificultad para concentrarse</li>
              <li>Irritabilidad</li>
              <li>Sensación de nerviosismo o inquietud constante</li>
              <li>Miedo intenso o pánico</li>
              <li>Sensación de pérdida de control</li>
              <li>Evitación de situaciones temidas</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Tipos de Trastornos de Ansiedad</h2>
            
            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Trastorno de Ansiedad Generalizada (TAG)</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Preocupación excesiva y persistente sobre diversos aspectos de la vida cotidiana (trabajo, salud, familia) durante al menos 6 meses. La persona encuentra difícil controlar esta preocupación.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Trastorno de Pánico</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Ataques de pánico recurrentes e inesperados: episodios súbitos de miedo intenso que alcanzan su máximo en minutos. La persona vive con miedo constante a sufrir otro ataque.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Fobias Específicas</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Miedo intenso e irracional a objetos o situaciones específicas (alturas, volar, animales, sangre, etc.) que lleva a la evitación.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Ansiedad Social</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Miedo intenso a situaciones sociales donde la persona puede ser juzgada o evaluada negativamente por otros, como hablar en público, comer delante de otros o asistir a eventos sociales.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Causas de la Ansiedad</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-4">
              La ansiedad no tiene una única causa, sino que resulta de la interacción de múltiples factores:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Factores biológicos:</strong> Predisposición genética, desequilibrios en neurotransmisores</li>
              <li><strong>Factores psicológicos:</strong> Experiencias traumáticas, patrones de pensamiento negativos, baja autoestima</li>
              <li><strong>Factores ambientales:</strong> Estrés crónico, eventos vitales estresantes, consumo de sustancias</li>
              <li><strong>Personalidad:</strong> Tendencia al perfeccionismo, necesidad de control, hipersensibilidad</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Tratamiento de la Ansiedad en Santander</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Como <strong>psicóloga sanitaria especializada en trastornos de ansiedad en Santander</strong>, ofrezco un tratamiento integral y personalizado:
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Terapia Cognitivo-Conductual (TCC)</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La <strong>TCC</strong> es el tratamiento más efectivo para los trastornos de ansiedad, respaldado por evidencia científica. Trabajamos en:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Identificar y modificar pensamientos ansiosos automáticos</li>
              <li>Reestructuración cognitiva para cambiar patrones de pensamiento</li>
              <li>Exposición gradual a situaciones temidas</li>
              <li>Técnicas de relajación y respiración</li>
              <li>Desarrollo de habilidades de afrontamiento</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Mindfulness y Técnicas de Relajación</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Integro prácticas de <strong>mindfulness</strong> y técnicas de relajación muscular progresiva para ayudarte a gestionar los síntomas físicos de la ansiedad y desarrollar mayor conciencia del momento presente.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Terapia Integradora</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Mi formación en <strong>psicoterapia integradora, trauma y apego</strong> me permite abordar las raíces profundas de la ansiedad, especialmente cuando está relacionada con experiencias tempranas o traumas.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Modalidades de Consulta</h2>
            
            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Consulta Presencial en Santander</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Ofrezco <strong>terapia presencial en Centro Rualasal</strong>, ubicado en C/ Rualasal 11, 1 Dcha, en el centro de Santander. Un espacio tranquilo y confidencial donde trabajaremos juntos en superar tu ansiedad.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Terapia Online para la Ansiedad</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              También ofrezco <strong>terapia online para ansiedad</strong> a través de videoconferencia, ideal si vives fuera de Santander, tienes dificultades para desplazarte, o simplemente prefieres la comodidad de la terapia desde casa. La terapia online es igualmente efectiva que la presencial.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Estrategias de Autoayuda para la Ansiedad</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-4">
              Mientras buscas ayuda profesional, puedes practicar:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Ejercicio regular:</strong> Reduce los síntomas de ansiedad y mejora el estado de ánimo</li>
              <li><strong>Respiración diafragmática:</strong> Activa el sistema nervioso parasimpático (relajación)</li>
              <li><strong>Limita cafeína y alcohol:</strong> Pueden aumentar los síntomas de ansiedad</li>
              <li><strong>Sueño adecuado:</strong> 7-9 horas de sueño de calidad</li>
              <li><strong>Conexiones sociales:</strong> Mantén contacto con personas de apoyo</li>
              <li><strong>Establece rutinas:</strong> La estructura reduce la incertidumbre</li>
            </ul>

            <div className="bg-beige-light/20 dark:bg-slate-900/50 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mt-8 mb-8">
              <p className="text-navy dark:text-slate-100 font-semibold mb-2">Importante:</p>
              <p className="text-muted dark:text-slate-300">
                Si la ansiedad interfiere significativamente con tu vida diaria, es fundamental buscar ayuda profesional. Como <strong>psicóloga sanitaria colegiada (CA00989)</strong>, puedo ayudarte a recuperar el control y mejorar tu calidad de vida.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Preguntas Frecuentes sobre Ansiedad</h2>
            
            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">¿La ansiedad se cura?</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Sí, los trastornos de ansiedad son tratables. Con la terapia adecuada, la mayoría de las personas experimentan una mejora significativa y pueden recuperar una vida plena.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">¿Cuánto dura el tratamiento?</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Varía según cada persona y la severidad de los síntomas. La TCC para ansiedad suele mostrar resultados en 12-20 sesiones, aunque algunas personas mejoran antes y otras necesitan más tiempo.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">¿Necesito medicación?</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              No siempre. La psicoterapia es efectiva por sí sola en muchos casos. En situaciones más severas, la combinación de terapia y medicación (prescrita por psiquiatra) puede ser beneficiosa.
            </p>
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
                  Especializada en trastornos de ansiedad. Consulta presencial en Santander y online para toda España.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">¿Sufres de ansiedad?</h3>
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
