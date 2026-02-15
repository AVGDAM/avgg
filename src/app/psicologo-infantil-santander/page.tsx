import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Baby } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Psicólogo Infantil en Santander - Especialista en Niños y Adolescentes",
  description: "Psicóloga infantil en Santander especializada en niños y adolescentes. Tratamiento de ansiedad, TDAH, conducta y problemas escolares.",
  keywords: ["psicólogo infantil Santander", "psicóloga niños Santander", "psicólogo adolescentes Santander"],
  alternates: {
    canonical: "https://www.nataliachiva.com/psicologo-infantil-santander",
  },
};

export default function PsicologoInfantilSantanderPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-800/30">
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "https://www.nataliachiva.com" },
        { name: "Psicólogo Infantil Santander", url: "https://www.nataliachiva.com/psicologo-infantil-santander" }
      ]} />

      <div className="border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted dark:text-slate-400 hover:text-navy dark:hover:text-blue-gray-light transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </div>
      </div>

      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Baby className="h-10 w-10 text-beige dark:text-blue-gray" />
              <h1 className="text-4xl font-bold text-navy dark:text-slate-100 leading-tight">
                Psicólogo Infantil en Santander
              </h1>
            </div>
            <p className="text-xl text-muted dark:text-slate-300 leading-relaxed">
              Atención psicológica especializada para niños y adolescentes en Santander. Tratamiento cercano y efectivo.
            </p>
          </header>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                Problemas que trato
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Ansiedad infantil",
                  "Problemas de conducta",
                  "TDAH",
                  "Acoso escolar (bullying)",
                  "Dificultades de aprendizaje",
                  "Baja autoestima",
                  "Miedos y fobias",
                  "Problemas familiares"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-beige dark:text-blue-gray shrink-0" />
                    <span className="text-muted dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                Consulta en Santander
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Mi consulta está ubicada en el <strong>Centro Rualasal, en el centro de Santander</strong>, un espacio tranquilo y acogedor diseñado para que los niños se sientan cómodos y seguros.
              </p>
            </section>
          </div>

          <div className="mt-12 bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">¿Tu hijo necesita ayuda?</h3>
            <p className="text-white/90 dark:text-slate-300 mb-6">
              Psicólogo infantil en Santander. Primera consulta gratuita.
            </p>
            <CTAButtons />
          </div>
        </div>
      </article>
    </main>
  );
}
