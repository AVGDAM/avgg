import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Baby } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "Parentalidad Positiva: Crianza Saludable | Psicóloga Santander",
  description: "Herramientas de parentalidad positiva para criar hijos emocionalmente sanos. Psicóloga en Santander. Consulta presencial y online.",
  keywords: "parentalidad positiva, crianza, psicóloga familias Santander, educación hijos",
};

export default function ParentalidadPositivaPage() {
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
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
              <Baby className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-navy dark:text-slate-100">Parentalidad Positiva</h1>
              <p className="text-muted dark:text-slate-400 mt-1">Psicóloga especializada en Santander</p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">¿Qué es la Parentalidad Positiva?</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La <strong>parentalidad positiva</strong> es un enfoque de crianza basado en el respeto mutuo, la comunicación efectiva y la disciplina no punitiva. Se centra en enseñar habilidades en lugar de castigar errores. Como <strong>psicóloga especializada en familias en Santander</strong>, ayudo a padres a desarrollar estas habilidades. Ofrezco <strong>consulta presencial y online</strong>.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Principios de la Parentalidad Positiva</h2>
            
            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">1. Vínculo y Apego Seguro</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Crear una relación de confianza y seguridad con tus hijos. El apego seguro es la base del desarrollo emocional saludable.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">2. Establecer Estructura y Límites</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Los límites claros y consistentes proporcionan seguridad. Los niños necesitan saber qué se espera de ellos.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">3. Entender y Respetar el Desarrollo</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Adaptar expectativas a la edad y etapa de desarrollo. Lo que funciona a los 3 años no funciona a los 13.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">4. Empoderar y Promover Autonomía</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Dar opciones apropiadas para la edad. Permitir que los niños tomen decisiones y aprendan de consecuencias naturales.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">5. Educar sin Violencia</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              No usar castigos físicos ni humillaciones. Enfocarse en enseñar comportamientos deseables en lugar de castigar los indeseables.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Herramientas de Parentalidad Positiva</h2>
            
            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Comunicación Efectiva</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Escucha activa:</strong> Presta atención total cuando tu hijo habla</li>
              <li><strong>Valida emociones:</strong> "Veo que estás enfadado" antes de corregir comportamiento</li>
              <li><strong>Mensajes "Yo":</strong> "Me preocupo cuando..." en lugar de "Tú siempre..."</li>
              <li><strong>Habla a su nivel:</strong> Físicamente (ponte a su altura) y emocionalmente</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Disciplina Positiva</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Consecuencias lógicas:</strong> Relacionadas con el comportamiento</li>
              <li><strong>Tiempo fuera positivo:</strong> Espacio para calmarse, no castigo</li>
              <li><strong>Refuerzo positivo:</strong> Reconoce comportamientos deseables</li>
              <li><strong>Redirigir:</strong> Ofrecer alternativas al comportamiento problemático</li>
              <li><strong>Resolución de problemas conjunta:</strong> Involucra al niño en encontrar soluciones</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Manejo de Rabietas y Berrinches</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Mantén la calma (tu regulación ayuda a su regulación)</li>
              <li>Valida la emoción, no el comportamiento</li>
              <li>Ofrece espacio para calmarse</li>
              <li>Una vez calmado, habla sobre lo sucedido</li>
              <li>Enseña estrategias de autorregulación</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Errores Comunes a Evitar</h2>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Inconsistencia:</strong> Cambiar reglas según tu estado de ánimo</li>
              <li><strong>Expectativas irrealistas:</strong> Esperar comportamiento de adulto</li>
              <li><strong>Comparaciones:</strong> Comparar con hermanos u otros niños</li>
              <li><strong>Amenazas vacías:</strong> Amenazar con consecuencias que no cumples</li>
              <li><strong>Etiquetas negativas:</strong> "Eres malo" en lugar de "ese comportamiento no está bien"</li>
              <li><strong>Resolverlo todo por ellos:</strong> No permitir que aprendan de errores</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Autocuidado Parental</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              No puedes dar de un vaso vacío. Cuidar de ti mismo/a no es egoísta, es necesario:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Tiempo personal regular</li>
              <li>Apoyo social (familia, amigos, grupos de padres)</li>
              <li>Perdónate los errores - la parentalidad perfecta no existe</li>
              <li>Busca ayuda profesional cuando lo necesites</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Apoyo Profesional en Santander</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Como <strong>psicóloga sanitaria en Santander</strong>, ofrezco:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Orientación parental individualizada</li>
              <li>Estrategias específicas para tu familia</li>
              <li>Manejo de comportamientos desafiantes</li>
              <li>Fortalecimiento del vínculo familiar</li>
              <li>Terapia familiar cuando sea necesario</li>
            </ul>

            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Ofrezco <strong>consulta presencial en Centro Rualasal, Santander</strong> y <strong>terapia online</strong>.
            </p>

            <div className="bg-beige-light/20 dark:bg-slate-900/50 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mt-8 mb-8">
              <p className="text-navy dark:text-slate-100 font-semibold mb-2">Recuerda:</p>
              <p className="text-muted dark:text-slate-300">
                Ser padre/madre es aprender constante. No existen padres perfectos, pero sí padres comprometidos con el bienestar de sus hijos. Como <strong>psicóloga colegiada (CA00989)</strong>, puedo acompañarte en este camino.
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
                  Especializada en terapia familiar y orientación parental. Consulta presencial en Santander y online.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">¿Necesitas orientación parental?</h3>
            <p className="text-white/90 dark:text-slate-300 mb-6">
              Psicóloga especializada en familias en Santander. Reserva tu cita.
            </p>
            <CTAButtons />
          </div>
        </div>
      </article>
    </main>
  );
}
