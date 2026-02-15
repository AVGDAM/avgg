import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "Fobias: Tipos y Tratamiento | Psicóloga Santander",
  description: "Supera tus fobias con tratamiento especializado. Psicóloga en Santander. Consulta presencial y online.",
  keywords: "fobias, psicóloga fobias Santander, miedo irracional, terapia fobias, exposición",
};

export default function FobiasPage() {
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
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
              <AlertCircle className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-navy dark:text-slate-100">Fobias</h1>
              <p className="text-muted dark:text-slate-400 mt-1">Psicóloga especializada en Santander</p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">¿Qué son las Fobias?</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Las <strong>fobias</strong> son miedos intensos, irracionales y persistentes a objetos o situaciones específicas. El miedo es desproporcionado al peligro real y lleva a evitación. Como <strong>psicóloga especializada en fobias en Santander</strong>, ofrezco tratamiento efectivo mediante <strong>terapia de exposición</strong>. Consulta <strong>presencial y online</strong> disponible.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Tipos de Fobias</h2>
            
            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Fobias Específicas</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-4">Miedo a objetos o situaciones concretas:</p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Animales:</strong> Arañas (aracnofobia), perros, serpientes, pájaros</li>
              <li><strong>Entorno natural:</strong> Alturas (acrofobia), agua, tormentas</li>
              <li><strong>Sangre-inyecciones-heridas:</strong> Agujas, sangre, procedimientos médicos</li>
              <li><strong>Situacional:</strong> Volar (aerofobia), ascensores, espacios cerrados (claustrofobia)</li>
              <li><strong>Otros:</strong> Payasos, vómito, ruidos fuertes</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Fobia Social</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Miedo intenso a situaciones sociales donde puedes ser juzgado o evaluado negativamente. Va más allá de la timidez normal.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Agorafobia</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Miedo a espacios abiertos, multitudes, transporte público o situaciones de donde escapar sería difícil.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Síntomas de las Fobias</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-4">Al enfrentar el objeto/situación temido:</p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Ansiedad intensa inmediata</li>
              <li>Deseo abrumador de escapar</li>
              <li>Reconocimiento de que el miedo es excesivo (en adultos)</li>
              <li>Evitación activa</li>
              <li>Síntomas físicos: palpitaciones, sudoración, temblores, mareo</li>
              <li>En casos severos: ataque de pánico</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Causas de las Fobias</h2>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Experiencias traumáticas:</strong> Evento negativo con el objeto/situación</li>
              <li><strong>Aprendizaje observacional:</strong> Ver a otros reaccionar con miedo</li>
              <li><strong>Transmisión de información:</strong> Escuchar sobre peligros</li>
              <li><strong>Predisposición genética:</strong> Tendencia heredada a la ansiedad</li>
              <li><strong>Preparación evolutiva:</strong> Miedos que ayudaron a la supervivencia (serpientes, alturas)</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Tratamiento de las Fobias</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Como <strong>psicóloga sanitaria en Santander</strong>, utilizo principalmente:
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Terapia de Exposición</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Es el tratamiento más efectivo para fobias. Exposición gradual y sistemática al objeto/situación temido, comenzando con lo menos amenazante. Con repetición, el miedo disminuye (habituación).
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Desensibilización Sistemática</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Combina relajación con exposición gradual. Primero aprendes técnicas de relajación, luego te expones a la situación temida mientras mantienes la relajación.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Terapia Cognitiva</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Identificamos y modificamos pensamientos catastróficos sobre el objeto/situación temido. Desarrollamos una evaluación más realista del peligro.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">Técnicas de Realidad Virtual</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Para fobias como volar o alturas, la exposición en realidad virtual puede ser muy efectiva y controlada.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Pronóstico</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Las fobias específicas responden muy bien al tratamiento. La mayoría de personas experimentan una reducción significativa del miedo tras 8-12 sesiones de terapia de exposición. Cuanto antes se trate, mejor será el resultado.
            </p>

            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Ofrezco <strong>consulta presencial en Centro Rualasal, Santander</strong> y <strong>terapia online</strong>. La exposición puede adaptarse a ambos formatos según la fobia.
            </p>

            <div className="bg-beige-light/20 dark:bg-slate-900/50 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mt-8 mb-8">
              <p className="text-navy dark:text-slate-100 font-semibold mb-2">Recuerda:</p>
              <p className="text-muted dark:text-slate-300">
                No tienes que vivir con miedo. Las fobias son tratables. Como <strong>psicóloga colegiada (CA00989)</strong>, puedo ayudarte a superar tu fobia y recuperar tu libertad.
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
                  Especializada en tratamiento de fobias. Consulta presencial en Santander y online.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">¿Una fobia limita tu vida?</h3>
            <p className="text-white/90 dark:text-slate-300 mb-6">
              Psicóloga especializada en Santander. Supera tu miedo. Reserva tu cita.
            </p>
            <CTAButtons />
          </div>
        </div>
      </article>
    </main>
  );
}
