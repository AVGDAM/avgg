import type { Metadata } from "next";
import Link from "next/link";
import { Brain, Heart, Briefcase, Smile, Users, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Recursos Gratuitos de Psicología - Tests y Herramientas | Natalia Chiva",
  description: "Tests psicológicos gratuitos validados: ansiedad, depresión, estrés laboral, autoestima y más. Resultados inmediatos con recomendaciones profesionales.",
  keywords: ["tests psicológicos gratis", "test ansiedad", "test depresión", "recursos psicología", "autoayuda"],
  alternates: {
    canonical: "https://www.nataliachiva.com/recursos-gratuitos",
  },
  openGraph: {
    title: "Recursos Gratuitos de Psicología - Tests y Herramientas",
    description: "Tests psicológicos gratuitos y validados. Evalúa tu bienestar emocional con herramientas profesionales.",
    url: "https://www.nataliachiva.com/recursos-gratuitos",
    type: "website",
  },
};

const tests = [
  {
    title: "Test de Ansiedad",
    subtitle: "Escala GAD-7",
    description: "Test validado científicamente para evaluar tu nivel de ansiedad generalizada. Basado en la escala GAD-7 utilizada por profesionales.",
    icon: Brain,
    href: "/test-ansiedad",
    duration: "2 min",
    color: "from-blue-500 to-blue-600",
    popular: true,
  },
  {
    title: "Test de Depresión",
    subtitle: "Escala PHQ-9",
    description: "Evalúa síntomas de depresión con el cuestionario PHQ-9, reconocido internacionalmente por su fiabilidad.",
    icon: Heart,
    href: "/test-depresion",
    duration: "3 min",
    color: "from-purple-500 to-purple-600",
    popular: true,
  },
  {
    title: "Test de Estrés Laboral",
    subtitle: "Evaluación de Burnout",
    description: "Descubre si estás en riesgo de síndrome de burnout o agotamiento profesional. Identifica señales de alarma.",
    icon: Briefcase,
    href: "/test-estres-laboral",
    duration: "3 min",
    color: "from-orange-500 to-orange-600",
    popular: false,
  },
  {
    title: "Test de Autoestima",
    subtitle: "Escala de Rosenberg",
    description: "Evalúa tu nivel de autoestima con el test más utilizado mundialmente. Identifica áreas de mejora personal.",
    icon: Smile,
    href: "/test-autoestima",
    duration: "2 min",
    color: "from-green-500 to-green-600",
    popular: false,
  },
  {
    title: "Test de Salud Mental",
    subtitle: "Bienestar General",
    description: "Evaluación integral de tu bienestar emocional y psicológico. Analiza diferentes áreas de tu salud mental.",
    icon: CheckCircle,
    href: "/test-salud-mental",
    duration: "3 min",
    color: "from-teal-500 to-teal-600",
    popular: false,
  },
  {
    title: "Test de Pareja",
    subtitle: "Salud Relacional",
    description: "Evalúa la salud de tu relación de pareja. Identifica fortalezas y áreas que necesitan atención.",
    icon: Users,
    href: "/test-pareja",
    duration: "3 min",
    color: "from-pink-500 to-pink-600",
    popular: false,
  },
];

export default function RecursosGratuitosPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-800/30">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-beige/20 via-blue-gray/10 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-800/50 border-b border-gray-200 dark:border-slate-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-navy dark:text-slate-100 mb-6">
              Recursos Gratuitos de Psicología
            </h1>
            <p className="text-xl text-muted dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Tests psicológicos validados científicamente. Obtén resultados inmediatos y recomendaciones profesionales para cuidar tu bienestar emocional.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-beige dark:text-blue-gray" />
                <span>100% Gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-beige dark:text-blue-gray" />
                <span>Resultados Inmediatos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-beige dark:text-blue-gray" />
                <span>Tests Validados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-beige dark:text-blue-gray" />
                <span>Confidencial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tests Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tests.map((test) => {
              const IconComponent = test.icon;
              return (
                <Link
                  key={test.href}
                  href={test.href}
                  className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-slate-700 hover:border-beige dark:hover:border-blue-gray"
                >
                  {test.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`h-2 bg-gradient-to-r ${test.color}`} />
                  
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r ${test.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                        <IconComponent className="h-7 w-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-1 group-hover:text-beige dark:group-hover:text-blue-gray transition-colors">
                          {test.title}
                        </h3>
                        <p className="text-sm text-muted dark:text-slate-400">{test.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted dark:text-slate-300 leading-relaxed mb-4">
                      {test.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-slate-700">
                      <span className="text-sm text-muted dark:text-slate-400">
                        ⏱️ {test.duration}
                      </span>
                      <span className="text-beige dark:text-blue-gray font-semibold group-hover:underline">
                        Hacer test →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-beige dark:border-blue-gray p-8 rounded-r-2xl">
            <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
              ¿Por qué usar estos tests?
            </h2>
            <div className="space-y-4 text-muted dark:text-slate-300">
              <p>
                <strong>Estos tests psicológicos son herramientas de orientación</strong> basadas en escalas validadas científicamente y utilizadas por profesionales de la salud mental en todo el mundo.
              </p>
              <p>
                Te ayudan a tomar conciencia de tu estado emocional actual y pueden ser un primer paso para buscar ayuda profesional si lo necesitas.
              </p>
              <p className="text-sm italic border-t border-gray-200 dark:border-slate-700 pt-4">
                <strong>Importante:</strong> Estos tests NO sustituyen una evaluación profesional. Si tienes dudas o malestar significativo, consulta con un psicólogo.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
              ¿Necesitas ayuda profesional?
            </h3>
            <p className="text-lg text-muted dark:text-slate-300 mb-6">
              Si los resultados te preocupan o necesitas apoyo, estoy aquí para ayudarte.
            </p>
            <Link
              href="/contacto"
              className="inline-block bg-beige dark:bg-blue-gray text-white px-8 py-3 rounded-lg font-semibold hover:bg-beige-dark dark:hover:bg-blue-gray-light transition shadow-lg hover:shadow-xl"
            >
              Reservar Consulta Gratuita
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
