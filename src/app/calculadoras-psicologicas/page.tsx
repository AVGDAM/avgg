import type { Metadata } from "next";
import Link from "next/link";
import { Calculator, TrendingUp, HeartHandshake, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Calculadoras Psicológicas Gratuitas - Herramientas de Evaluación",
  description: "Calculadoras y herramientas psicológicas gratuitas: burnout, estrés, relación de pareja. Resultados personalizados al instante.",
  keywords: ["calculadora burnout", "medidor estrés", "evaluador pareja"],
};

const tools = [
  {
    title: "Calculadora de Burnout",
    description: "Mide tu nivel de agotamiento profesional y recibe recomendaciones personalizadas para recuperar tu energía laboral.",
    icon: Calculator,
    href: "/calculadora-burnout",
    color: "from-orange-500 to-red-500",
    features: ["Análisis detallado", "Tips personalizados", "Plan de acción"],
  },
  {
    title: "Medidor de Estrés",
    description: "Evalúa tu nivel de estrés actual en diferentes áreas de tu vida y obtén estrategias específicas de manejo.",
    icon: TrendingUp,
    href: "/medidor-estres",
    color: "from-yellow-500 to-orange-500",
    features: ["Evaluación por áreas", "Gráficos visuales", "Técnicas de reducción"],
  },
  {
    title: "Evaluador de Relación de Pareja",
    description: "Analiza la salud de tu relación en múltiples dimensiones: comunicación, intimidad, confianza y más.",
    icon: HeartHandshake,
    href: "/evaluador-relacion",
    color: "from-pink-500 to-purple-500",
    features: ["Análisis completo", "Puntos fuertes", "Áreas de mejora"],
  },
];

export default function CalculadorasPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-800/30">
      <section className="bg-gradient-to-br from-beige/20 via-blue-gray/10 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-800/50 border-b border-gray-200 dark:border-slate-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-navy dark:text-slate-100 mb-6">
              Calculadoras y Herramientas Psicológicas
            </h1>
            <p className="text-xl text-muted dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Herramientas interactivas para evaluar tu bienestar y recibir recomendaciones personalizadas basadas en evidencia científica.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-slate-700 hover:border-beige dark:hover:border-blue-gray"
                >
                  <div className={`h-2 bg-gradient-to-r ${tool.color}`} />
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                        <IconComponent className="h-7 w-7" />
                      </div>
                      <h3 className="text-xl font-bold text-navy dark:text-slate-100 group-hover:text-beige dark:group-hover:text-blue-gray transition-colors">
                        {tool.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted dark:text-slate-300 leading-relaxed mb-4">
                      {tool.description}
                    </p>
                    
                    <div className="space-y-2 pt-4 border-t border-gray-200 dark:border-slate-700">
                      {tool.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted dark:text-slate-400">
                          <CheckCircle className="h-4 w-4 text-beige dark:text-blue-gray" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 text-right">
                      <span className="text-beige dark:text-blue-gray font-semibold group-hover:underline">
                        Usar herramienta →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              ¿Necesitas apoyo profesional?
            </h2>
            <p className="text-lg text-white/90 dark:text-slate-300 mb-8">
              Si reconoces estos síntomas en ti o en alguien cercano, estoy aquí para ayudarte. Psicóloga en Santander.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.mundoctor.com/psicologia/santander/natalia-chiva-montoya"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-navy dark:bg-slate-800 dark:text-slate-100 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-slate-700 transition shadow-lg"
              >
                Reservar Cita
              </a>
              <a
                href="tel:+34649493778"
                className="bg-white/10 backdrop-blur text-white border-2 border-white/30 px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition flex items-center gap-2"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                649 493 778
              </a>
              <a
                href="https://wa.me/34649493778"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#20BA5A] transition shadow-lg flex items-center gap-2"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
