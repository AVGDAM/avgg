import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowLeft, CheckCircle, Heart } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Terapia de Pareja en Santander - Psicóloga Especializada",
  description: "Terapia de pareja en Santander con psicóloga especializada. Mejora la comunicación y fortalece tu relación. Consulta presencial y online.",
  keywords: ["terapia pareja Santander", "psicólogo pareja Santander", "terapia matrimonial Santander", "consejero matrimonial"],
  alternates: {
    canonical: "https://www.nataliachiva.com/terapia-pareja-santander",
  },
  openGraph: {
    title: "Terapia de Pareja en Santander - Natalia Chiva",
    description: "Mejora tu relación con terapia de pareja especializada en Santander.",
    url: "https://www.nataliachiva.com/terapia-pareja-santander",
    type: "website",
    images: ["/natalia-chiva.png"],
  },
};

export default function TerapiaParejaSantanderPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-800/30">
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "https://www.nataliachiva.com" },
        { name: "Terapia de Pareja Santander", url: "https://www.nataliachiva.com/terapia-pareja-santander" }
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
            <div className="flex items-center gap-3 mb-4">
              <Heart className="h-10 w-10 text-beige dark:text-blue-gray" />
              <h1 className="text-4xl font-bold text-navy dark:text-slate-100 leading-tight">
                Terapia de Pareja en Santander
              </h1>
            </div>
            <p className="text-xl text-muted dark:text-slate-300 leading-relaxed">
              Fortalece tu relación con terapia de pareja especializada. Mejora la comunicación, resuelve conflictos y recupera la conexión emocional.
            </p>
          </header>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                ¿Cuándo acudir a terapia de pareja en Santander?
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Como <strong>psicóloga especializada en terapia de pareja en Santander</strong>, ayudo a parejas a superar sus dificultades y fortalecer su relación. No es necesario estar en crisis para beneficiarse de la terapia.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-beige dark:text-blue-gray shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted dark:text-slate-300">Problemas de comunicación</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-beige dark:text-blue-gray shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted dark:text-slate-300">Conflictos frecuentes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-beige dark:text-blue-gray shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted dark:text-slate-300">Distanciamiento emocional</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-beige dark:text-blue-gray shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted dark:text-slate-300">Crisis o infidelidad</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-beige dark:text-blue-gray shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted dark:text-slate-300">Problemas de convivencia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-beige dark:text-blue-gray shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted dark:text-slate-300">Dificultades sexuales</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                Cómo funciona la terapia de pareja
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                En mi consulta de <strong>Santander</strong>, trabajo con un enfoque integrador que combina diferentes técnicas terapéuticas:
              </p>
              <ol className="list-decimal pl-6 text-muted dark:text-slate-300 space-y-3 mb-4">
                <li><strong>Primera sesión conjunta:</strong> Evaluamos la situación de la pareja y establecemos objetivos</li>
                <li><strong>Sesiones individuales:</strong> Entiendo la perspectiva de cada miembro</li>
                <li><strong>Trabajo conjunto:</strong> Mejoramos la comunicación y habilidades de resolución de conflictos</li>
                <li><strong>Tareas para casa:</strong> Practicáis lo aprendido en vuestra vida cotidiana</li>
                <li><strong>Seguimiento:</strong> Consolidamos los cambios y prevenimos recaídas</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                Consulta en Santander y online
              </h2>
              <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 mb-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-navy dark:text-slate-100 mb-3 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-beige dark:text-blue-gray" />
                      Consulta Presencial
                    </h3>
                    <p className="text-muted dark:text-slate-300 mb-2">Centro Rualasal</p>
                    <p className="text-muted dark:text-slate-300 mb-2">C/ Rualasal 11, 1 Dcha</p>
                    <p className="text-muted dark:text-slate-300 mb-3">39001 Santander</p>
                    <p className="text-sm text-muted dark:text-slate-400">Ambiente privado y confidencial</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy dark:text-slate-100 mb-3">
                      Terapia Online
                    </h3>
                    <p className="text-muted dark:text-slate-300 mb-3">
                      También ofrezco terapia de pareja online para toda España
                    </p>
                    <p className="text-sm text-muted dark:text-slate-400">
                      • Misma efectividad que presencial<br />
                      • Mayor flexibilidad horaria<br />
                      • Desde la comodidad de vuestro hogar
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                Preguntas frecuentes
              </h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-beige dark:border-blue-gray pl-4">
                  <h3 className="font-semibold text-navy dark:text-slate-200 mb-2">
                    ¿Cuánto dura la terapia de pareja?
                  </h3>
                  <p className="text-muted dark:text-slate-300 text-sm leading-relaxed">
                    Normalmente entre 10-20 sesiones, dependiendo de la situación. Muchas parejas notan mejoras significativas en las primeras 5-8 sesiones.
                  </p>
                </div>

                <div className="border-l-4 border-beige dark:border-blue-gray pl-4">
                  <h3 className="font-semibold text-navy dark:text-slate-200 mb-2">
                    ¿Tenemos que venir los dos siempre?
                  </h3>
                  <p className="text-muted dark:text-slate-300 text-sm leading-relaxed">
                    Lo ideal es que acudan ambos. Sin embargo, puedo trabajar con uno solo si el otro no puede o no quiere asistir inicialmente.
                  </p>
                </div>

                <div className="border-l-4 border-beige dark:border-blue-gray pl-4">
                  <h3 className="font-semibold text-navy dark:text-slate-200 mb-2">
                    ¿Cuál es el precio de las sesiones?
                  </h3>
                  <p className="text-muted dark:text-slate-300 text-sm leading-relaxed">
                    Contacta conmigo para información sobre tarifas y disponibilidad. La primera consulta es gratuita.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-12 bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">¿Necesitáis ayuda profesional?</h3>
            <p className="text-white/90 dark:text-slate-300 mb-6">
              Terapia de pareja en Santander. Primera consulta gratuita.
            </p>
            <CTAButtons />
          </div>
        </div>
      </article>
    </main>
  );
}
