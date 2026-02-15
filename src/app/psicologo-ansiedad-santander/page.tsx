import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, ArrowLeft, CheckCircle } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Psicólogo Ansiedad en Santander - Tratamiento Especializado",
  description: "Psicóloga especializada en trastornos de ansiedad en Santander. Tratamiento eficaz para ansiedad generalizada, fobias y ataques de pánico. Primera consulta gratuita.",
  keywords: ["psicólogo ansiedad Santander", "tratamiento ansiedad Santander", "terapia ansiedad Santander", "psicóloga ansiedad"],
  alternates: {
    canonical: "https://www.nataliachiva.com/psicologo-ansiedad-santander",
  },
  openGraph: {
    title: "Psicólogo Ansiedad en Santander - Natalia Chiva",
    description: "Especialista en tratamiento de ansiedad en Santander. Terapia cognitivo-conductual efectiva.",
    url: "https://www.nataliachiva.com/psicologo-ansiedad-santander",
    type: "website",
    images: ["/natalia-chiva.png"],
  },
};

export default function PsicologoAnsiedadSantanderPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-800/30">
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "https://www.nataliachiva.com" },
        { name: "Psicólogo Ansiedad Santander", url: "https://www.nataliachiva.com/psicologo-ansiedad-santander" }
      ]} />

      <div className="border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted dark:text-slate-400 hover:text-navy dark:hover:text-blue-gray-light transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </div>
      </div>

      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-navy dark:text-slate-100 mb-4 leading-tight">
              Psicólogo Especialista en Ansiedad en Santander
            </h1>
            <p className="text-xl text-muted dark:text-slate-300 leading-relaxed">
              Tratamiento especializado para trastornos de ansiedad en Santander. Terapia cognitivo-conductual con resultados probados.
            </p>
          </header>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                ¿Por qué elegir un especialista en ansiedad en Santander?
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Como <strong>psicóloga especializada en ansiedad en Santander</strong>, ofrezco un tratamiento personalizado basado en terapia cognitivo-conductual, la intervención con mayor evidencia científica para los trastornos de ansiedad.
              </p>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Mi consulta está ubicada en el <strong>Centro Rualasal, en pleno centro de Santander</strong>, con fácil acceso en transporte público y parking cercano.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                Tipos de ansiedad que trato
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-beige dark:text-blue-gray shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-navy dark:text-slate-100 mb-1">Ansiedad Generalizada</h3>
                    <p className="text-sm text-muted dark:text-slate-300">Preocupación excesiva y constante</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-beige dark:text-blue-gray shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-navy dark:text-slate-100 mb-1">Ataques de Pánico</h3>
                    <p className="text-sm text-muted dark:text-slate-300">Crisis de ansiedad intensas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-beige dark:text-blue-gray shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-navy dark:text-slate-100 mb-1">Fobias Específicas</h3>
                    <p className="text-sm text-muted dark:text-slate-300">Miedo intenso a situaciones u objetos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-beige dark:text-blue-gray shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-navy dark:text-slate-100 mb-1">Ansiedad Social</h3>
                    <p className="text-sm text-muted dark:text-slate-300">Miedo a situaciones sociales</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                Método de trabajo
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Utilizo <strong>terapia cognitivo-conductual</strong>, reconocida por la OMS como el tratamiento más efectivo para la ansiedad:
              </p>
              <ol className="list-decimal pl-6 text-muted dark:text-slate-300 space-y-3 mb-4">
                <li><strong>Evaluación inicial:</strong> Comprendo tu situación específica y objetivos</li>
                <li><strong>Psicoeducación:</strong> Entiendes qué es la ansiedad y por qué ocurre</li>
                <li><strong>Técnicas de control:</strong> Aprendes herramientas prácticas (respiración, relajación, mindfulness)</li>
                <li><strong>Reestructuración cognitiva:</strong> Modificamos pensamientos que mantienen la ansiedad</li>
                <li><strong>Exposición gradual:</strong> Te enfrentas progresivamente a tus miedos en un entorno seguro</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                Consulta en el centro de Santander
              </h2>
              <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 mb-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-navy dark:text-slate-100 mb-3 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-beige dark:text-blue-gray" />
                      Ubicación
                    </h3>
                    <p className="text-muted dark:text-slate-300 mb-2">Centro Rualasal</p>
                    <p className="text-muted dark:text-slate-300 mb-2">C/ Rualasal 11, 1 Dcha</p>
                    <p className="text-muted dark:text-slate-300">39001 Santander, Cantabria</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy dark:text-slate-100 mb-3">
                      Acceso fácil
                    </h3>
                    <ul className="text-sm text-muted dark:text-slate-300 space-y-1">
                      <li>• A 5 minutos de la estación de autobuses</li>
                      <li>• Líneas de bus: 1, 3, 5, 7</li>
                      <li>• Parking público cercano</li>
                      <li>• Zona céntrica de Santander</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                Preguntas frecuentes sobre ansiedad
              </h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-beige dark:border-blue-gray pl-4">
                  <h3 className="font-semibold text-navy dark:text-slate-200 mb-2">
                    ¿Cuánto dura el tratamiento para la ansiedad?
                  </h3>
                  <p className="text-muted dark:text-slate-300 text-sm leading-relaxed">
                    El tratamiento típico dura entre 12-20 sesiones. Muchas personas notan mejoras significativas desde las primeras 6-8 sesiones.
                  </p>
                </div>

                <div className="border-l-4 border-beige dark:border-blue-gray pl-4">
                  <h3 className="font-semibold text-navy dark:text-slate-200 mb-2">
                    ¿Ofrecen consulta online?
                  </h3>
                  <p className="text-muted dark:text-slate-300 text-sm leading-relaxed">
                    Sí, además de la consulta presencial en Santander, ofrezco terapia online para toda España a través de videollamada segura.
                  </p>
                </div>

                <div className="border-l-4 border-beige dark:border-blue-gray pl-4">
                  <h3 className="font-semibold text-navy dark:text-slate-200 mb-2">
                    ¿Cómo puedo reservar una cita?
                  </h3>
                  <p className="text-muted dark:text-slate-300 text-sm leading-relaxed">
                    Puedes reservar tu cita a través de Mundoctor, llamando al 649 493 778 o enviando un WhatsApp.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-12 bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">¿Sufres de ansiedad en Santander?</h3>
            <p className="text-white/90 dark:text-slate-300 mb-6">
              Reserva tu primera consulta y empieza a recuperar tu tranquilidad.
            </p>
            <CTAButtons />
          </div>
        </div>
      </article>
    </main>
  );
}
