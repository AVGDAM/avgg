import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "Agorafobia: Síntomas y Tratamiento | Psicóloga Santander",
  description: "Comprende y supera la agorafobia. Psicóloga especializada en Santander. Consulta presencial y online.",
  keywords: "agorafobia, psicóloga agorafobia Santander, miedo espacios abiertos, terapia agorafobia",
};

export default function AgorafobiaPage() {
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
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-navy dark:text-slate-100">Agorafobia</h1>
              <p className="text-muted dark:text-slate-400 mt-1">Psicóloga especializada en Santander</p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">¿Qué es la Agorafobia?</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La <strong>agorafobia</strong> es un trastorno de ansiedad caracterizado por miedo intenso a situaciones o lugares de donde escapar sería difícil o embarazoso, o donde no habría ayuda disponible en caso de un ataque de pánico. Como <strong>psicóloga especializada en agorafobia en Santander</strong>, ofrezco tratamiento efectivo en <strong>consulta presencial y online</strong>.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Síntomas de la Agorafobia</h2>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Miedo a salir de casa solo/a</li>
              <li>Evitación de espacios abiertos (plazas, parkings)</li>
              <li>Miedo a espacios cerrados (tiendas, cines, transporte público)</li>
              <li>Ansiedad en multitudes o haciendo cola</li>
              <li>Necesidad de compañía para salir</li>
              <li>Ataques de pánico en situaciones temidas</li>
              <li>Miedo a no poder escapar o recibir ayuda</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Situaciones Comúnmente Evitadas</h2>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Transporte público (autobuses, trenes, metro)</li>
              <li>Centros comerciales y supermercados</li>
              <li>Cines, teatros, conciertos</li>
              <li>Puentes, túneles, autopistas</li>
              <li>Espacios abiertos grandes (parques, plazas)</li>
              <li>Estar solo/a fuera de casa</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Causas y Desarrollo</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La agorafobia suele desarrollarse después de uno o más ataques de pánico. La persona empieza a evitar situaciones donde ocurrieron o donde teme que puedan ocurrir. Con el tiempo, la evitación refuerza el miedo y el área de movimiento se reduce progresivamente.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Tratamiento de la Agorafobia</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Como <strong>psicóloga sanitaria en Santander</strong>, utilizo principalmente:
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Terapia de Exposición</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Exposición gradual y sistemática a las situaciones temidas, comenzando con las menos amenazantes. Esta técnica es altamente efectiva para la agorafobia.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Terapia Cognitivo-Conductual</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Identificamos y modificamos pensamientos catastróficos sobre las situaciones temidas. Desarrollamos estrategias de afrontamiento para manejar la ansiedad.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Técnicas de Relajación</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Respiración diafragmática, relajación muscular progresiva y mindfulness para manejar síntomas físicos de ansiedad.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Pronóstico</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Con tratamiento adecuado, la agorafobia tiene un buen pronóstico. La mayoría de las personas mejoran significativamente y recuperan su libertad de movimiento. Cuanto antes se busque ayuda, mejor será el resultado.
            </p>

            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Ofrezco <strong>consulta presencial en Centro Rualasal, Santander</strong> y <strong>terapia online</strong>. En casos de agorafobia severa donde salir es muy difícil, la terapia online puede ser un excelente punto de partida.
            </p>

            <div className="bg-beige-light/20 dark:bg-slate-900/50 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mt-8 mb-8">
              <p className="text-navy dark:text-slate-100 font-semibold mb-2">Importante:</p>
              <p className="text-muted dark:text-slate-300">
                No estás solo/a. La agorafobia es tratable. Como <strong>psicóloga colegiada (CA00989)</strong>, puedo ayudarte a recuperar tu libertad paso a paso.
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
                  Especializada en agorafobia. Consulta presencial en Santander y online.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">¿Sufres de agorafobia?</h3>
            <p className="text-white/90 dark:text-slate-300 mb-6">
              Psicóloga especializada en Santander. Recupera tu libertad. Reserva tu cita.
            </p>
            <CTAButtons />
          </div>
        </div>
      </article>
    </main>
  );
}
