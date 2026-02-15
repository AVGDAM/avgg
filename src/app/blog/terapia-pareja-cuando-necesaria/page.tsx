import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "¿Cuándo es Necesaria la Terapia de Pareja? | Blog Natalia Chiva",
  description: "Descubre las señales que indican que tu relación podría beneficiarse de terapia de pareja. Guía profesional de una psicóloga especializada en relaciones.",
  openGraph: {
    title: "¿Cuándo es Necesaria la Terapia de Pareja?",
    description: "Señales claras de que tu relación podría beneficiarse de ayuda profesional.",
    type: "article",
    publishedTime: "2026-02-05",
  },
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-800/30">
      <ArticleSchema
        title="¿Cuándo es Necesaria la Terapia de Pareja?"
        description="Descubre las señales que indican que tu relación podría beneficiarse de terapia de pareja."
        datePublished="2026-02-05"
        dateModified="2026-02-05"
        url="https://www.nataliachiva.com/blog/terapia-pareja-cuando-necesaria"
        image="/blog/pareja.png"
        category="Terapia de Pareja"
      />
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "https://www.nataliachiva.com" },
        { name: "Blog", url: "https://www.nataliachiva.com/blog" },
        { name: "Cuándo es Necesaria la Terapia de Pareja", url: "https://www.nataliachiva.com/blog/terapia-pareja-cuando-necesaria" }
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
                5 de febrero de 2026
              </span>
              <span className="flex items-center gap-1 text-sm text-muted dark:text-slate-400">
                <Clock className="h-4 w-4" />
                7 min de lectura
              </span>
            </div>

            <h1 className="text-4xl font-bold text-navy dark:text-slate-100 mb-4 leading-tight">
              ¿Cuándo es Necesaria la Terapia de Pareja?
            </h1>

            <p className="text-xl text-muted dark:text-slate-300 leading-relaxed">
              Todas las relaciones atraviesan momentos difíciles, pero ¿cómo saber cuándo es el momento de buscar ayuda profesional? Conoce las señales claras que indican que tu relación podría beneficiarse de la terapia de pareja.
            </p>
          </header>

          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
            <Image
              src="/blog/terapia-pareja.jpg"
              alt="Terapia de pareja - Cuándo es necesaria"
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">¿Qué es la Terapia de Pareja?</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La terapia de pareja es un tipo de psicoterapia que ayuda a las parejas a identificar y resolver conflictos, mejorar su relación y fortalecer su vínculo. Un terapeuta actúa como mediador neutral que facilita la comunicación y proporciona herramientas para abordar los problemas.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Señales de que Necesitas Terapia de Pareja</h2>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">1. Comunicación Deficiente o Inexistente</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Si las conversaciones terminan en discusiones, evitan hablar de temas importantes, o uno de los dos se cierra emocionalmente, es una señal clara. La comunicación es la base de cualquier relación saludable, y cuando falla, todo lo demás se resiente.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">2. Conflictos Recurrentes sin Resolución</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Discutir sobre los mismos temas una y otra vez sin llegar a ninguna solución. Estos patrones de conflicto repetitivos indican que la pareja no tiene las herramientas necesarias para resolver sus diferencias de manera efectiva.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">3. Infidelidad o Ruptura de Confianza</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Ya sea emocional o física, la infidelidad causa un daño profundo en la relación. Reconstruir la confianza es posible, pero generalmente requiere la guía de un profesional que pueda ayudar a procesar el dolor y establecer un camino hacia la sanación.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">4. Falta de Intimidad Física o Emocional</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              La intimidad va más allá del sexo. Si sienten que son más compañeros de piso que pareja, si hay una disminución significativa en el afecto físico, o si uno o ambos se sienten emocionalmente desconectados, es momento de buscar ayuda.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">5. Considerando la Separación</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Si uno o ambos están pensando en terminar la relación, la terapia puede ayudar a clarificar sentimientos, explorar opciones y, en algunos casos, salvar la relación. También puede facilitar una separación más saludable si esa es la decisión final.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">6. Eventos Vitales Estresantes</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Transiciones importantes como tener un hijo, cambios laborales, mudanzas, pérdida de un ser querido, o problemas financieros pueden poner a prueba incluso las relaciones más sólidas. La terapia puede ayudar a navegar estos cambios juntos.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">7. Patrones de Comportamiento Negativos</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Críticas constantes, desprecio, actitud defensiva o evasión (los "Cuatro Jinetes del Apocalipsis" según el Dr. Gottman) son predictores de problemas serios en la relación y requieren intervención profesional.
            </p>

            <h3 className="text-xl font-semibold text-navy dark:text-slate-100 mt-6 mb-3">8. Problemas con Familias Políticas</h3>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              Conflictos con las familias de origen pueden crear tensión significativa en la pareja. Un terapeuta puede ayudar a establecer límites saludables y a trabajar como equipo frente a presiones externas.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">Cuándo NO Esperar Más</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              No es necesario esperar a que la relación esté en crisis para buscar terapia. De hecho, acudir antes puede prevenir problemas mayores. La terapia también puede ser beneficiosa para:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Parejas que quieren fortalecer su relación antes de dar pasos importantes (matrimonio, convivencia, hijos)</li>
              <li>Mejorar habilidades de comunicación preventivamente</li>
              <li>Aprender a manejar conflictos de manera saludable</li>
              <li>Profundizar la conexión emocional</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">¿Qué Esperar de la Terapia de Pareja?</h2>
            <p className="text-muted dark:text-slate-300 leading-relaxed mb-6">
              En la terapia de pareja trabajaremos juntos en un espacio seguro y neutral donde ambos podrán:
            </p>
            <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-6">
              <li>Expresar sus sentimientos y necesidades sin juicio</li>
              <li>Identificar patrones de comportamiento dañinos</li>
              <li>Aprender nuevas habilidades de comunicación</li>
              <li>Reconstruir la confianza y la intimidad</li>
              <li>Desarrollar herramientas para resolver conflictos</li>
              <li>Fortalecer el vínculo emocional</li>
            </ul>

            <div className="bg-beige-light/20 dark:bg-slate-900/50 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mt-8">
              <p className="text-navy dark:text-slate-100 font-semibold mb-2">Nota importante:</p>
              <p className="text-muted dark:text-slate-300">
                Para que la terapia de pareja funcione, ambos miembros deben estar comprometidos con el proceso. Si hay violencia física, abuso emocional severo, o adicciones activas, pueden necesitarse terapias individuales primero antes de abordar la relación.
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
            <h3 className="text-2xl font-bold mb-3">¿Tu relación necesita apoyo?</h3>
            <p className="text-white/90 dark:text-slate-300 mb-6">
              Estoy aquí para ayudaros a fortalecer vuestra relación y encontrar soluciones juntos
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
