import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Ataques de Pánico: Qué Hacer y Cómo Prevenirlos | Blog Natalia Chiva",
  description: "Aprende a reconocer y manejar los ataques de pánico con técnicas respaldadas por la psicología. Guía completa de prevención y tratamiento.",
  openGraph: {
    title: "Ataques de Pánico: Qué Hacer y Cómo Prevenirlos",
    description: "Reconoce y maneja los ataques de pánico con técnicas profesionales.",
    type: "article",
    publishedTime: "2026-01-22",
  },
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-800/30">
      <ArticleSchema
        title="Ataques de Pánico: Qué Hacer y Cómo Prevenirlos"
        description="Aprende a reconocer y manejar los ataques de pánico con técnicas respaldadas por la psicología."
        datePublished="2026-01-22"
        dateModified="2026-01-22"
        url="https://www.nataliachiva.com/blog/ataques-panico-que-hacer"
        image="/blog/panico.png"
        category="Ansiedad"
      />
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "https://www.nataliachiva.com" },
        { name: "Blog", url: "https://www.nataliachiva.com/blog" },
        { name: "Ataques de Pánico", url: "https://www.nataliachiva.com/blog/ataques-panico-que-hacer" }
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
                Ansiedad
              </span>
              <span className="flex items-center gap-1 text-sm text-muted dark:text-slate-400">
                <Calendar className="h-4 w-4" />
                22 de enero de 2026
              </span>
              <span className="flex items-center gap-1 text-sm text-muted dark:text-slate-400">
                <Clock className="h-4 w-4" />
                7 min de lectura
              </span>
            </div>

            <h1 className="text-4xl font-bold text-navy dark:text-slate-100 mb-4 leading-tight">
              Ataques de Pánico: Qué Hacer y Cómo Prevenirlos
            </h1>

            <p className="text-xl text-muted dark:text-slate-300 leading-relaxed">
              Los ataques de pánico son episodios intensos de miedo que pueden ser aterradores. Aprende a reconocerlos, manejarlos en el momento y prevenirlos a largo plazo.
            </p>
          </header>

          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
            <Image
              src="/blog/ataques-panico.jpg"
              alt="Ataques de pánico - Qué hacer"
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">¿Qué es un Ataque de Pánico?</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Un ataque de pánico es un episodio repentino de miedo intenso que desencadena reacciones físicas severas cuando no hay peligro real o causa aparente. Pueden ser extremadamente aterradores y hacer que sientas que estás perdiendo el control, teniendo un ataque cardíaco o incluso muriendo.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Síntomas de un Ataque de Pánico</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-4">
              Los ataques de pánico típicamente incluyen varios de estos síntomas:
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Síntomas Físicos</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Palpitaciones, corazón acelerado o taquicardia</li>
              <li>Sudoración excesiva</li>
              <li>Temblores o sacudidas</li>
              <li>Sensación de falta de aire o asfixia</li>
              <li>Dolor o molestias en el pecho</li>
              <li>Náuseas o malestar abdominal</li>
              <li>Mareo, inestabilidad o desmayo</li>
              <li>Escalofríos o sofocos</li>
              <li>Entumecimiento u hormigueo</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Síntomas Psicológicos</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Miedo a perder el control o "volverse loco"</li>
              <li>Miedo a morir</li>
              <li>Sensación de irrealidad (desrealización)</li>
              <li>Sensación de estar separado de uno mismo (despersonalización)</li>
            </ul>

            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Los ataques de pánico suelen alcanzar su punto máximo en 10 minutos y raramente duran más de 30 minutos. Sin embargo, durante ese tiempo, el terror puede ser tan severo que puedes sentir que estás en verdadero peligro.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Qué Hacer Durante un Ataque de Pánico</h2>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">1. Reconoce que es un Ataque de Pánico</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Recuérdate a ti mismo: "Esto es un ataque de pánico, no un peligro real. Es incómodo pero no peligroso. Pasará pronto". Este reconocimiento puede reducir el miedo adicional que agrava los síntomas.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">2. Practica Respiración Controlada</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-4">
              La hiperventilación empeora los síntomas. Usa esta técnica:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Inhala lentamente por la nariz contando hasta 4</li>
              <li>Mantén el aire contando hasta 4</li>
              <li>Exhala lentamente por la boca contando hasta 6</li>
              <li>Pausa y repite</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">3. Usa la Técnica 5-4-3-2-1</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-4">
              Esta técnica de grounding te ayuda a reconectar con el presente:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>5 cosas que puedes VER</li>
              <li>4 cosas que puedes TOCAR</li>
              <li>3 cosas que puedes OÍR</li>
              <li>2 cosas que puedes OLER</li>
              <li>1 cosa que puedes SABOREAR</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">4. Acepta la Experiencia</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Paradójicamente, resistir el ataque de pánico puede intensificarlo. Intenta aceptar las sensaciones sin luchar contra ellas: "Está bien, esto es incómodo pero puedo tolerarlo. Ya ha pasado antes y pasará de nuevo".
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">5. Encuentra un Lugar Tranquilo (si es posible)</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Si estás en un lugar público y te sientes cómodo haciéndolo, busca un espacio más tranquilo. Sin embargo, evitar sistemáticamente lugares puede llevar a agorafobia.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">6. Usa Afirmaciones Positivas</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>"Esto pasará"</li>
              <li>"Estoy seguro/a"</li>
              <li>"Puedo manejar esto"</li>
              <li>"Ya he superado esto antes"</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Cómo Prevenir Ataques de Pánico</h2>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">1. Identifica y Evita Desencadenantes</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Lleva un registro de cuándo ocurren los ataques. Busca patrones: ¿Hay situaciones, pensamientos o sensaciones físicas que los preceden? La cafeína, el alcohol, el tabaco y la falta de sueño pueden ser desencadenantes.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">2. Practica Técnicas de Relajación Regularmente</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              No esperes al ataque. Practica meditación, yoga, relajación muscular progresiva o respiración profunda diariamente. Esto reduce tu nivel de ansiedad base y te da herramientas automatizadas para crisis.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">3. Mantén un Estilo de Vida Saludable</h3>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Ejercicio regular (libera endorfinas y reduce ansiedad)</li>
              <li>Sueño adecuado (7-9 horas)</li>
              <li>Dieta equilibrada</li>
              <li>Limita cafeína y alcohol</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">4. Busca Apoyo Social</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Hablar con personas de confianza sobre tus experiencias puede reducir el estrés. El apoyo social es un factor protector importante contra la ansiedad.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">5. Terapia Cognitivo-Conductual (TCC)</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La TCC es el tratamiento más efectivo para los ataques de pánico. Te ayuda a identificar y cambiar patrones de pensamiento que desencadenan o mantienen el pánico. También incluye exposición gradual a las sensaciones temidas para desensibilizarte.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Diferencia entre Ataque de Pánico y Ataque Cardíaco</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Es común confundirlos. Señales de que es un ataque de pánico y no cardíaco:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Los síntomas alcanzan su pico rápidamente (10 min) y luego disminuyen</li>
              <li>El dolor es punzante o agudo, no opresivo</li>
              <li>Los síntomas mejoran con respiración y relajación</li>
              <li>No hay factores de riesgo cardíaco</li>
            </ul>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg mt-8 mb-8">
              <p className="text-red-900 dark:text-red-200 font-semibold mb-2">⚠️ Importante:</p>
              <p className="text-red-800 dark:text-red-300">
                Si es la primera vez que experimentas estos síntomas, especialmente dolor en el pecho, busca atención médica inmediata para descartar problemas cardíacos. Una vez descartados, un psicólogo puede ayudarte a manejar los ataques de pánico.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Cuándo Buscar Ayuda Profesional</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Busca ayuda de un psicólogo si:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Experimentas ataques de pánico frecuentes</li>
              <li>Vives con miedo constante de otro ataque</li>
              <li>Evitas lugares o situaciones por miedo a los ataques</li>
              <li>Los ataques interfieren con tu vida diaria</li>
              <li>Desarrollas otros problemas como depresión o abuso de sustancias</li>
            </ul>

            <div className="bg-beige-light/20 dark:bg-slate-900/50 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mt-8">
              <p className="text-navy dark:text-slate-100 font-semibold mb-2">Recuerda:</p>
              <p className="text-muted dark:text-slate-300">
                Los ataques de pánico son tratables. Con las herramientas adecuadas y apoyo profesional, puedes aprender a manejarlos e incluso prevenirlos. No tienes que vivir con miedo constante.
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
            <h3 className="text-2xl font-bold mb-3">¿Sufres de ataques de pánico?</h3>
            <p className="text-white/90 dark:text-slate-300 mb-6">
              Puedo ayudarte a entenderlos, manejarlos y superarlos
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
