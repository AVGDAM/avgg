import type { Metadata } from "next";
import Link from "next/link";
import { Brain, Heart, Users, Target, Smile, Shield, Briefcase, Cloud, AlertCircle, Baby } from "lucide-react";

export const metadata: Metadata = {
  title: "Aprende sobre Psicología y Salud Mental",
  description: "Guías completas sobre ansiedad, depresión, autoestima, fobias y más. Recursos de psicología para mejorar tu salud mental. Psicóloga en Santander.",
  alternates: {
    canonical: "https://www.nataliachiva.com/aprende",
  },
  openGraph: {
    title: "Aprende sobre Psicología - Natalia Chiva",
    description: "Recursos y guías sobre salud mental, ansiedad, depresión y más.",
    url: "https://www.nataliachiva.com/aprende",
    type: "website",
    images: ["/natalia-chiva.png"],
  },
};

const topics = [
  {
    id: 1,
    slug: "ansiedad",
    title: "Ansiedad",
    description: "Comprende qué es la ansiedad, sus síntomas y cómo manejarla efectivamente.",
    icon: Brain,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    slug: "estres",
    title: "Estrés",
    description: "Aprende a identificar y gestionar el estrés en tu vida diaria.",
    icon: Cloud,
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 3,
    slug: "depresion",
    title: "Depresión",
    description: "Información sobre la depresión, sus causas y tratamientos efectivos.",
    icon: Heart,
    color: "from-red-500 to-red-600",
  },
  {
    id: 4,
    slug: "autoestima",
    title: "Autoestima",
    description: "Fortalece tu autoestima y confianza personal con estrategias probadas.",
    icon: Smile,
    color: "from-yellow-500 to-yellow-600",
  },
  {
    id: 5,
    slug: "consecucion-metas",
    title: "Consecución de Metas",
    description: "Establece y alcanza tus objetivos con técnicas de psicología efectivas.",
    icon: Target,
    color: "from-green-500 to-green-600",
  },
  {
    id: 6,
    slug: "agorafobia",
    title: "Agorafobia",
    description: "Entiende la agorafobia y cómo superarla paso a paso.",
    icon: Shield,
    color: "from-indigo-500 to-indigo-600",
  },
  {
    id: 7,
    slug: "estres-laboral",
    title: "Estrés Laboral",
    description: "Estrategias para manejar el estrés en el trabajo y prevenir el burnout.",
    icon: Briefcase,
    color: "from-orange-500 to-orange-600",
  },
  {
    id: 8,
    slug: "duelo",
    title: "Duelo",
    description: "Afronta el proceso de duelo de manera saludable y encuentra paz.",
    icon: Cloud,
    color: "from-gray-500 to-gray-600",
  },
  {
    id: 9,
    slug: "fobias",
    title: "Fobias",
    description: "Supera tus miedos irracionales con técnicas especializadas.",
    icon: AlertCircle,
    color: "from-pink-500 to-pink-600",
  },
  {
    id: 10,
    slug: "parentalidad-positiva",
    title: "Parentalidad Positiva",
    description: "Herramientas para criar hijos emocionalmente saludables y seguros.",
    icon: Baby,
    color: "from-teal-500 to-teal-600",
  },
];

export default function AprendePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-beige to-beige-light dark:from-slate-900 dark:to-slate-800 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white dark:text-slate-100 sm:text-5xl mb-4">
              Aprende sobre Psicología
            </h1>
            <p className="text-lg text-white/90 dark:text-slate-300 max-w-2xl mx-auto">
              Recursos, guías y artículos para entender mejor tu salud mental y emocional. Psicóloga especializada en Santander.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-800/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => {
              const Icon = topic.icon;
              return (
                <Link
                  key={topic.id}
                  href={`/aprende/${topic.slug}`}
                  className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`h-32 bg-gradient-to-br ${topic.color} flex items-center justify-center`}>
                    <Icon className="h-16 w-16 text-white" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-navy dark:text-slate-100 mb-3 group-hover:text-beige dark:group-hover:text-blue-gray-light transition-colors">
                      {topic.title}
                    </h2>
                    <p className="text-muted dark:text-slate-300 text-sm leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white dark:text-slate-100 mb-4">
            ¿Necesitas ayuda profesional?
          </h2>
          <p className="text-lg text-white/90 dark:text-slate-300 mb-8">
            Psicóloga sanitaria en Santander. Consulta presencial y online disponible.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.mundoctor.com/psicologia/santander/natalia-chiva-montoya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-white text-navy dark:bg-slate-100 dark:text-slate-900 px-8 py-3 font-semibold transition hover:bg-gray-100 dark:hover:bg-slate-200"
            >
              Reservar Cita
            </a>
            <a
              href="tel:+34649493778"
              className="inline-block rounded-lg border-2 border-white text-white px-8 py-3 font-semibold transition hover:bg-white hover:text-navy dark:hover:bg-slate-100 dark:hover:text-slate-900"
            >
              Llamar: 649 493 778
            </a>
            <a
              href="https://wa.me/34649493778"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-[#25D366] w-12 h-12 text-white transition hover:bg-[#20BA5A]"
              aria-label="WhatsApp"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
