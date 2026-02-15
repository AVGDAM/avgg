import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Cómo Mejorar la Autoestima: Guía Completa | Blog Natalia Chiva",
  description: "Pasos prácticos y consejos profesionales para fortalecer tu autoestima y confianza personal. Guía completa de psicología.",
  openGraph: {
    title: "Cómo Mejorar la Autoestima: Guía Completa",
    description: "Pasos prácticos para fortalecer tu autoestima y confianza personal.",
    type: "article",
    publishedTime: "2026-01-30",
  },
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-800/30">
      <ArticleSchema
        title="Cómo Mejorar la Autoestima: Guía Completa"
        description="Pasos prácticos y consejos profesionales para fortalecer tu autoestima y confianza personal."
        datePublished="2026-01-30"
        dateModified="2026-01-30"
        url="https://www.nataliachiva.com/blog/autoestima-como-mejorarla"
        image="/blog/autoestima.png"
        category="Desarrollo Personal"
      />
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "https://www.nataliachiva.com" },
        { name: "Blog", url: "https://www.nataliachiva.com/blog" },
        { name: "Cómo Mejorar la Autoestima", url: "https://www.nataliachiva.com/blog/autoestima-como-mejorarla" }
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
                Desarrollo Personal
              </span>
              <span className="flex items-center gap-1 text-sm text-muted dark:text-slate-400">
                <Calendar className="h-4 w-4" />
                30 de enero de 2026
              </span>
              <span className="flex items-center gap-1 text-sm text-muted dark:text-slate-400">
                <Clock className="h-4 w-4" />
                10 min de lectura
              </span>
            </div>

            <h1 className="text-4xl font-bold text-navy dark:text-slate-100 mb-4 leading-tight">
              Cómo Mejorar la Autoestima: Guía Completa
            </h1>

            <p className="text-xl text-muted dark:text-slate-300 leading-relaxed">
              La autoestima es la valoración que tenemos de nosotros mismos. Aprende estrategias efectivas para fortalecerla y vivir una vida más plena y satisfactoria.
            </p>
          </header>

          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
            <Image
              src="/blog/autoestima.jpg"
              alt="Cómo mejorar la autoestima"
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">¿Qué es la Autoestima?</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La autoestima es la percepción y valoración que tenemos de nosotros mismos. Incluye nuestras creencias sobre nuestras capacidades, valía personal y el respeto que nos tenemos. Una autoestima saludable es fundamental para el bienestar emocional.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Señales de Baja Autoestima</h2>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Autocrítica constante y pensamientos negativos sobre uno mismo</li>
              <li>Dificultad para aceptar cumplidos</li>
              <li>Miedo excesivo al fracaso o al rechazo</li>
              <li>Comparación constante con los demás</li>
              <li>Dificultad para tomar decisiones</li>
              <li>Necesidad constante de aprobación externa</li>
              <li>Evitar desafíos o nuevas oportunidades</li>
              <li>Relaciones desequilibradas o tóxicas</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Estrategias para Mejorar la Autoestima</h2>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">1. Practica la Autocompasión</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Trata tus errores con la misma amabilidad que tratarías a un buen amigo. Reconoce que la imperfección es parte de la experiencia humana. La autocompasión no es autoindulgencia, es reconocer tu humanidad.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">2. Desafía tus Pensamientos Negativos</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Identifica pensamientos autocríticos y cuestiona su validez. ¿Son realmente ciertos? ¿Son útiles? Reemplázalos con pensamientos más equilibrados y realistas. Por ejemplo, cambia "Siempre fallo" por "A veces cometo errores, como todos, y puedo aprender de ellos".
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">3. Establece Límites Saludables</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Aprende a decir "no" sin sentirte culpable. Establecer límites es una forma de respetarte a ti mismo y comunicar tus necesidades a los demás. Los límites saludables protegen tu energía y bienestar.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">4. Celebra tus Logros</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Lleva un registro de tus logros, por pequeños que sean. Celebra tus éxitos en lugar de minimizarlos. Reconoce tu esfuerzo y progreso, no solo los resultados finales.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">5. Cuida tu Cuerpo</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              El ejercicio, la nutrición adecuada y el descanso suficiente no solo mejoran tu salud física, sino también tu autoestima. Cuando cuidas tu cuerpo, envías el mensaje de que eres valioso y mereces cuidado.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">6. Desarrolla tus Competencias</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Aprende nuevas habilidades o mejora las que ya tienes. La competencia genuina es una fuente sólida de autoestima. Elige actividades que te interesen y desafíen constructivamente.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">7. Rodéate de Personas Positivas</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Las relaciones que tenemos influyen en cómo nos vemos a nosotros mismos. Busca personas que te apoyen, te valoren y te animen. Limita el tiempo con personas críticas o tóxicas.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">8. Practica la Gratitud</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Dedica tiempo diario a reconocer aspectos positivos de ti mismo y tu vida. La gratitud cambia el enfoque de lo que nos falta a lo que tenemos, incluyendo nuestras fortalezas personales.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">9. Acepta tus Imperfecciones</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Nadie es perfecto. Acepta que tienes tanto fortalezas como áreas de mejora, y eso está bien. La aceptación de uno mismo es clave para una autoestima saludable.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">10. Ayuda a los Demás</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Hacer algo por otros puede mejorar tu sentido de propósito y valía. El voluntariado o simplemente ayudar a un amigo puede recordarte tus capacidades y tu valor.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Ejercicio Práctico: Diario de Autoestima</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-4">
              Durante las próximas dos semanas, escribe cada noche:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Tres cosas que hiciste bien ese día</li>
              <li>Una cualidad personal que apreciaste en ti</li>
              <li>Un desafío que enfrentaste y cómo lo manejaste</li>
              <li>Algo por lo que estás agradecido/a</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">El Papel de la Terapia</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Si tu baja autoestima está profundamente arraigada o afecta significativamente tu vida, la terapia puede ser muy beneficiosa. Un psicólogo puede ayudarte a:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Identificar el origen de tu baja autoestima</li>
              <li>Trabajar creencias limitantes sobre ti mismo</li>
              <li>Desarrollar una imagen más realista y compasiva de ti</li>
              <li>Aprender habilidades de afrontamiento efectivas</li>
              <li>Sanar heridas emocionales del pasado</li>
            </ul>

            <div className="bg-beige-light/20 dark:bg-slate-900/50 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mt-8">
              <p className="text-navy dark:text-slate-100 font-semibold mb-2">Recuerda:</p>
              <p className="text-muted dark:text-slate-300">
                Mejorar la autoestima es un proceso gradual, no un evento único. Sé paciente contigo mismo/a. Cada pequeño paso cuenta y mereces invertir tiempo y esfuerzo en tu bienestar.
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
            <h3 className="text-2xl font-bold mb-3">¿Necesitas ayuda para fortalecer tu autoestima?</h3>
            <p className="text-white/90 dark:text-slate-300 mb-6">
              Puedo ayudarte a desarrollar una relación más sana y compasiva contigo mismo/a
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
