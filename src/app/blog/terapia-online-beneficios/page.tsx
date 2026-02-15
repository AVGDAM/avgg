import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Beneficios de la Terapia Online vs Presencial | Blog Natalia Chiva",
  description: "Conoce las ventajas de la terapia psicológica online y cómo puede adaptarse a tu estilo de vida. Comparativa completa de modalidades.",
  openGraph: {
    title: "Beneficios de la Terapia Online vs Presencial",
    description: "Ventajas de la terapia online y cómo elegir la mejor modalidad para ti.",
    type: "article",
    publishedTime: "2026-01-28",
  },
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-800/30">
      <ArticleSchema
        title="Beneficios de la Terapia Online vs Presencial"
        description="Conoce las ventajas de la terapia psicológica online y cómo puede adaptarse a tu estilo de vida."
        datePublished="2026-01-28"
        dateModified="2026-01-28"
        url="https://www.nataliachiva.com/blog/terapia-online-beneficios"
        image="/blog/online.png"
        category="Terapia"
      />
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "https://www.nataliachiva.com" },
        { name: "Blog", url: "https://www.nataliachiva.com/blog" },
        { name: "Beneficios Terapia Online", url: "https://www.nataliachiva.com/blog/terapia-online-beneficios" }
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
                Terapia
              </span>
              <span className="flex items-center gap-1 text-sm text-muted dark:text-slate-400">
                <Calendar className="h-4 w-4" />
                28 de enero de 2026
              </span>
              <span className="flex items-center gap-1 text-sm text-muted dark:text-slate-400">
                <Clock className="h-4 w-4" />
                6 min de lectura
              </span>
            </div>

            <h1 className="text-4xl font-bold text-navy dark:text-slate-100 mb-4 leading-tight">
              Beneficios de la Terapia Online vs Presencial
            </h1>

            <p className="text-xl text-muted dark:text-slate-300 leading-relaxed">
              La terapia online ha ganado popularidad en los últimos años. Conoce sus ventajas, diferencias con la terapia presencial y cómo elegir la modalidad más adecuada para ti.
            </p>
          </header>

          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
            <Image
              src="/blog/terapia-online.jpg"
              alt="Terapia online vs presencial"
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">¿Qué es la Terapia Online?</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La terapia online, también llamada telepsicología o terapia a distancia, consiste en recibir atención psicológica profesional a través de videoconferencia. Utiliza las mismas técnicas terapéuticas que la terapia presencial, pero desde la comodidad de tu espacio.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Ventajas de la Terapia Online</h2>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">1. Accesibilidad y Comodidad</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Puedes recibir terapia desde cualquier lugar con conexión a internet. Ideal si vives en zonas rurales, tienes movilidad reducida, o simplemente prefieres la comodidad de tu hogar. No hay desplazamientos, aparcamiento o salas de espera.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">2. Flexibilidad Horaria</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Mayor facilidad para encontrar horarios que se ajusten a tu agenda. Especialmente útil si trabajas en horarios irregulares, viajas frecuentemente, o tienes responsabilidades de cuidado que dificultan salir de casa.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">3. Privacidad y Anonimato</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Para algunas personas, la terapia online ofrece una mayor sensación de privacidad. No hay riesgo de encontrarse con conocidos en la sala de espera. Puede ser menos intimidante inicialmente para quienes se sienten vulnerables buscando ayuda.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">4. Continuidad del Tratamiento</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Si te mudas, viajas por trabajo, o surgen situaciones que dificultan el desplazamiento, la terapia online permite mantener la continuidad con el mismo terapeuta sin interrupciones.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">5. Entorno Seguro</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Para personas con ansiedad social, agorafobia o ciertos traumas, estar en un entorno familiar puede facilitar la apertura emocional y reducir la ansiedad asociada con acudir a consulta.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Ventajas de la Terapia Presencial</h2>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">1. Conexión Personal Directa</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              El contacto cara a cara permite una lectura más completa del lenguaje corporal y las señales no verbales. Algunas personas sienten una conexión más profunda en persona.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">2. Espacio Dedicado</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La consulta ofrece un espacio neutral, seguro y libre de distracciones, claramente separado de tu vida cotidiana. Este límite físico puede ayudar a crear una mentalidad terapéutica.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">3. Sin Dependencia Tecnológica</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              No hay preocupaciones sobre conexión a internet, problemas técnicos o interrupciones digitales. Ideal si no te sientes cómodo/a con la tecnología.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">4. Técnicas Específicas</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Algunas intervenciones terapéuticas, como ciertas técnicas de exposición o EMDR, pueden realizarse más fácilmente en persona, aunque muchas se han adaptado exitosamente al formato online.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">¿Es la Terapia Online tan Efectiva?</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La investigación científica ha demostrado que la terapia online es igualmente efectiva que la presencial para la mayoría de los problemas psicológicos, incluyendo:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Ansiedad y trastornos de ansiedad</li>
              <li>Depresión</li>
              <li>Estrés y burnout</li>
              <li>Problemas de relación</li>
              <li>Desarrollo personal y autoestima</li>
              <li>Gestión emocional</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">¿Cuándo Elegir una u Otra?</h2>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Considera la Terapia Online si:</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Tienes dificultades de desplazamiento o movilidad</li>
              <li>Vives lejos de centros urbanos</li>
              <li>Tu horario es muy ajustado</li>
              <li>Viajas frecuentemente</li>
              <li>Te sientes más cómodo/a en tu propio espacio</li>
              <li>La privacidad de no acudir físicamente es importante para ti</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Considera la Terapia Presencial si:</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Prefieres el contacto cara a cara</li>
              <li>No tienes un espacio privado y tranquilo en casa</li>
              <li>No te sientes cómodo/a con la tecnología</li>
              <li>Tu conexión a internet es inestable</li>
              <li>Valoras el ritual de acudir a un espacio dedicado</li>
              <li>Te beneficias de la separación física entre terapia y vida diaria</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Modalidad Híbrida</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Muchos psicólogos, incluida yo misma, ofrecemos ambas modalidades. Puedes alternar según tus necesidades en cada momento. Por ejemplo, sesiones presenciales regularmente y online cuando viajas o tienes conflictos de agenda.
            </p>

            <div className="bg-beige-light/20 dark:bg-slate-900/50 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mt-8">
              <p className="text-navy dark:text-slate-100 font-semibold mb-2">Consejo profesional:</p>
              <p className="text-muted dark:text-slate-300">
                Lo más importante no es la modalidad, sino encontrar un psicólogo con quien te sientas cómodo/a y en quien confíes. La alianza terapéutica es el factor más importante para el éxito de la terapia, independientemente del formato.
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
                  Ofrezco terapia presencial en Santander y online. Trabajamos juntos para encontrar la modalidad que mejor se adapte a tus necesidades.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">¿Listo/a para empezar tu terapia?</h3>
            <p className="text-white/90 dark:text-slate-300 mb-6">
              Te ofrezco ambas modalidades para que elijas la que mejor se adapte a ti
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/consultas-presenciales"
                className="inline-block rounded-lg bg-white text-navy dark:bg-slate-100 dark:text-slate-900 px-6 py-3 font-semibold transition hover:bg-gray-100 dark:hover:bg-slate-200"
              >
                Consulta Presencial
              </Link>
              <Link
                href="/consultas-online"
                className="inline-block rounded-lg border-2 border-white text-white px-6 py-3 font-semibold transition hover:bg-white hover:text-navy dark:hover:bg-slate-100 dark:hover:text-slate-900"
              >
                Consulta Online
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
