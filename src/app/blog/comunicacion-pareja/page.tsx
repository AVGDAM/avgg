import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Comunicación en la Pareja: Claves para el Éxito | Blog Natalia Chiva",
  description: "Mejora la comunicación con tu pareja y fortalece tu relación con estas estrategias efectivas. Consejos profesionales de terapia de pareja.",
  openGraph: {
    title: "Comunicación en la Pareja: Claves para el Éxito",
    description: "Estrategias efectivas para mejorar la comunicación en tu relación.",
    type: "article",
    publishedTime: "2026-01-20",
  },
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-800/30">
      <ArticleSchema
        title="Comunicación en la Pareja: Claves para el Éxito"
        description="Mejora la comunicación con tu pareja y fortalece tu relación con estas estrategias efectivas."
        datePublished="2026-01-20"
        dateModified="2026-01-20"
        url="https://www.nataliachiva.com/blog/comunicacion-pareja"
        image="/blog/pareja.png"
        category="Terapia de Pareja"
      />
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "https://www.nataliachiva.com" },
        { name: "Blog", url: "https://www.nataliachiva.com/blog" },
        { name: "Comunicación en la Pareja", url: "https://www.nataliachiva.com/blog/comunicacion-pareja" }
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
                Relaciones
              </span>
              <span className="flex items-center gap-1 text-sm text-muted dark:text-slate-400">
                <Calendar className="h-4 w-4" />
                20 de enero de 2026
              </span>
              <span className="flex items-center gap-1 text-sm text-muted dark:text-slate-400">
                <Clock className="h-4 w-4" />
                9 min de lectura
              </span>
            </div>

            <h1 className="text-4xl font-bold text-navy dark:text-slate-100 mb-4 leading-tight">
              Comunicación en la Pareja: Claves para el Éxito
            </h1>

            <p className="text-xl text-muted dark:text-slate-300 leading-relaxed">
              La comunicación efectiva es la piedra angular de cualquier relación saludable. Aprende estrategias prácticas para mejorar la comunicación con tu pareja y fortalecer vuestro vínculo.
            </p>
          </header>

          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
            <Image
              src="/blog/comunicacion-pareja.jpg"
              alt="Comunicación en la pareja"
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Por Qué es Importante la Comunicación</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La comunicación efectiva no solo significa hablar, sino también escuchar, comprender y responder de manera que ambos se sientan valorados. Es la herramienta que permite resolver conflictos, expresar necesidades, compartir emociones y construir intimidad emocional.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Obstáculos Comunes en la Comunicación</h2>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Los Cuatro Jinetes del Apocalipsis (Dr. John Gottman)</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-4">
              El Dr. Gottman identificó cuatro patrones de comunicación que predicen el fracaso de una relación:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-3 mb-6">
              <li><strong>Crítica:</strong> Atacar el carácter o personalidad del otro ("Siempre eres tan...") en lugar de abordar un comportamiento específico</li>
              <li><strong>Desprecio:</strong> Comunicar falta de respeto mediante sarcasmo, burlas, insultos o lenguaje corporal desdeñoso</li>
              <li><strong>Actitud Defensiva:</strong> Negarse a aceptar responsabilidad y contraatacar con excusas o culpas al otro</li>
              <li><strong>Evasión:</strong> Retirarse emocionalmente de la conversación, ignorar o dar la espalda al otro</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Estrategias para Mejorar la Comunicación</h2>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">1. Practica la Escucha Activa</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-4">
              La escucha activa significa prestar atención total a tu pareja:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Elimina distracciones (móvil, TV)</li>
              <li>Mantén contacto visual</li>
              <li>No interrumpas ni planees tu respuesta mientras habla</li>
              <li>Haz preguntas clarificadoras: "¿Puedes explicarme más sobre...?"</li>
              <li>Refleja lo que escuchas: "Entonces, lo que entiendo es que te sientes..."</li>
              <li>Valida sus emociones: "Tiene sentido que te sientas así"</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">2. Usa Mensajes "Yo" en Lugar de "Tú"</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-4">
              Los mensajes "Tú" suenan acusatorios y generan defensividad. Cambia:
            </p>
            <ul className="list-none pl-0 text-muted dark:text-slate-300 space-y-3 mb-6">
              <li>❌ "Tú nunca me escuchas"</li>
              <li>✅ "Me siento ignorado/a cuando estás en el móvil mientras hablamos"</li>
              <li>❌ "Tú siempre llegas tarde"</li>
              <li>✅ "Me siento ansioso/a y me preocupo cuando no llegas a la hora acordada"</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">3. Elige el Momento y Lugar Adecuado</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              No inicies conversaciones importantes cuando uno está cansado, estresado o con prisa. Busca momentos de calma y privacidad. Pregunta: "¿Es buen momento para hablar sobre...?" Si no lo es, acuerda cuándo sí será.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">4. Sé Específico y Concreto</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-4">
              Evita generalizaciones como "siempre" o "nunca". Habla de situaciones específicas:
            </p>
            <ul className="list-none pl-0 text-muted dark:text-slate-300 space-y-3 mb-6">
              <li>❌ "Nunca me ayudas en casa"</li>
              <li>✅ "Esta semana he hecho todas las comidas y me gustaría que compartamos esa responsabilidad"</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">5. Expresa Necesidades, No Solo Quejas</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-4">
              Después de expresar un problema, comunica qué necesitas:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>"Me siento solo/a cuando pasamos todo el fin de semana con amigos. Necesito que tengamos tiempo a solas también"</li>
              <li>"Cuando tomas decisiones sin consultarme, me siento excluido/a. Necesito que hablemos antes de compromisos importantes"</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">6. Toma Descansos Cuando Sea Necesario</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Si la conversación se vuelve muy intensa, está bien tomar un descanso. Pero hazlo conscientemente: "Necesito un descanso de 20 minutos para calmarme. Retomemos esto a las 8". No es evasión si hay compromiso de volver.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">7. Mantén el Respeto Incluso en Desacuerdo</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Puedes estar en desacuerdo sin faltar al respeto. Evita: gritar, insultar, sacar trapos sucios del pasado, comparar con otras personas, amenazar con la separación. Estos comportamientos causan daño irreparable.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">8. Practica la Empatía</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Intenta ver la situación desde la perspectiva de tu pareja. Pregunta: "¿Cómo te hace sentir esto?" "¿Qué necesitas de mí?" Reconoce la validez de sus sentimientos incluso si no estás de acuerdo con su perspectiva.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">9. Comunica lo Positivo También</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              No reserves la comunicación solo para problemas. Expresa aprecio, gratitud y amor regularmente. La regla de Gottman: por cada interacción negativa, necesitas cinco positivas para mantener una relación saludable.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">10. Busca Compromisos y Soluciones Juntos</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              El objetivo no es "ganar" la discusión, sino encontrar soluciones que funcionen para ambos. Pregunta: "¿Cómo podemos resolver esto de una manera que ambos estemos contentos?" Estáis en el mismo equipo.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Ejercicio Práctico: Conversaciones Diarias</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-4">
              Establece un ritual diario de conexión de 10-15 minutos donde cada uno comparta:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Una cosa positiva del día</li>
              <li>Un desafío o preocupación</li>
              <li>Algo que agradece del otro</li>
            </ul>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Sin móviles, sin interrupciones. Solo escucha y conexión.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Cuándo Buscar Ayuda Profesional</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Considera terapia de pareja si:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Las conversaciones terminan siempre en discusiones</li>
              <li>Uno o ambos evitan hablar de temas importantes</li>
              <li>Hay patrones de crítica, desprecio, defensividad o evasión</li>
              <li>Sienten que no se entienden o no se escuchan</li>
              <li>Los intentos de mejorar por vuestra cuenta no funcionan</li>
            </ul>

            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Un terapeuta de pareja puede actuar como mediador neutral, enseñar nuevas habilidades de comunicación y ayudar a romper patrones destructivos.
            </p>

            <div className="bg-beige-light/20 dark:bg-slate-900/50 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mt-8">
              <p className="text-navy dark:text-slate-100 font-semibold mb-2">Recuerda:</p>
              <p className="text-muted dark:text-slate-300">
                La comunicación efectiva es una habilidad que se aprende y se practica. No esperes perfección, pero sí compromiso de ambas partes para mejorar. Cada pequeño esfuerzo consciente fortalece vuestra relación.
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
                  Especializada en terapia sistémica familiar y de pareja. Con formación en psicoterapia integradora, trauma y apego.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">¿Necesitáis mejorar la comunicación en vuestra relación?</h3>
            <p className="text-white/90 dark:text-slate-300 mb-6">
              Puedo ayudaros a desarrollar habilidades de comunicación efectiva y fortalecer vuestro vínculo
            </p>
            <Link
              href="/contacto"
              className="inline-block rounded-lg bg-white text-navy dark:bg-slate-100 dark:text-slate-900 px-8 py-3 font-semibold transition hover:bg-gray-100 dark:hover:bg-slate-200"
            >
              Solicitar Cita de Pareja
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
