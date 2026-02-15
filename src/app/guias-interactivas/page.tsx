import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Calendar, Wind, Sparkles, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Guías Interactivas de Psicología - Planes Paso a Paso",
  description: "Guías interactivas gratuitas para mejorar tu bienestar: reduce ansiedad en 5 días, mejora tu autoestima en 7 días, ejercicios de respiración y relajación.",
  keywords: ["guía ansiedad", "plan autoestima", "ejercicios respiración", "relajación progresiva"],
};

const guides = [
  {
    title: "5 Días para Reducir tu Ansiedad",
    description: "Plan estructurado día a día con ejercicios prácticos para reducir los síntomas de ansiedad de forma gradual y sostenible.",
    icon: Calendar,
    href: "/guia-5-dias-ansiedad",
    color: "from-blue-500 to-indigo-500",
    duration: "5 días",
    features: ["Ejercicios diarios", "Técnicas validadas", "Seguimiento de progreso"],
    popular: true,
  },
  {
    title: "Plan de 7 Días para Mejorar tu Autoestima",
    description: "Programa semanal con actividades específicas para fortalecer tu autoconcepto y valoración personal.",
    icon: Sparkles,
    href: "/plan-7-dias-autoestima",
    color: "from-purple-500 to-pink-500",
    duration: "7 días",
    features: ["Ejercicios de reflexión", "Desafíos diarios", "Herramientas prácticas"],
  },
  {
    title: "Ejercicios de Respiración Guiados",
    description: "Técnicas de respiración paso a paso para calmar la ansiedad, reducir el estrés y mejorar tu bienestar inmediato.",
    icon: Wind,
    href: "/ejercicios-respiracion",
    color: "from-cyan-500 to-blue-500",
    duration: "5-10 min",
    features: ["Múltiples técnicas", "Instrucciones detalladas", "Para cualquier momento"],
    popular: true,
  },
  {
    title: "Técnicas de Relajación Progresiva",
    description: "Aprende a relajar tu cuerpo y mente mediante ejercicios de tensión-relajación muscular guiados.",
    icon: BookOpen,
    href: "/relajacion-progresiva",
    color: "from-green-500 to-teal-500",
    duration: "15-20 min",
    features: ["Guía paso a paso", "Ejercicios corporales", "Reducción de tensión"],
  },
];

export default function GuiasInteractivasPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-800/30">
      <section className="bg-gradient-to-br from-beige/20 via-blue-gray/10 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-800/50 border-b border-gray-200 dark:border-slate-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-navy dark:text-slate-100 mb-6">
              Guías Interactivas de Psicología
            </h1>
            <p className="text-xl text-muted dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Planes estructurados paso a paso para mejorar tu bienestar emocional. Cada guía incluye ejercicios prácticos basados en evidencia científica.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide) => {
              const IconComponent = guide.icon;
              return (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-slate-700 hover:border-beige dark:hover:border-blue-gray"
                >
                  {guide.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`h-2 bg-gradient-to-r ${guide.color}`} />
                  
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r ${guide.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                        <IconComponent className="h-7 w-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-1 group-hover:text-beige dark:group-hover:text-blue-gray transition-colors">
                          {guide.title}
                        </h3>
                        <p className="text-sm text-muted dark:text-slate-400">⏱️ {guide.duration}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted dark:text-slate-300 leading-relaxed mb-4">
                      {guide.description}
                    </p>
                    
                    <div className="space-y-2 pt-4 border-t border-gray-200 dark:border-slate-700">
                      {guide.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted dark:text-slate-400">
                          <CheckCircle className="h-4 w-4 text-beige dark:text-blue-gray" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 text-right">
                      <span className="text-beige dark:text-blue-gray font-semibold group-hover:underline">
                        Comenzar guía →
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
              ¿Quieres un plan personalizado?
            </h2>
            <p className="text-lg text-white/90 dark:text-slate-300 mb-8">
              Estas guías son un excelente punto de partida. Para un acompañamiento profesional personalizado, agenda una consulta.
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
