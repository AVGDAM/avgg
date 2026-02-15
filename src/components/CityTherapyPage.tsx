import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Video, Monitor, Clock, Shield } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

interface CityPageProps {
  city: string;
  province?: string;
  comunidad: string;
}

export function generateCityMetadata(city: string, province?: string): Metadata {
  const location = province ? `${city}, ${province}` : city;
  return {
    title: `Psicóloga Online para ${city} - Terapia por Videollamada | Natalia Chiva`,
    description: `Psicóloga online especializada para pacientes de ${city}. Terapia por videollamada eficaz para ansiedad, depresión y más. Primera consulta gratuita.`,
    keywords: [`psicóloga online ${city}`, `terapia online ${city}`, `psicólogo videollamada ${city}`, `terapia psicológica ${city}`],
    alternates: {
      canonical: `https://www.nataliachiva.com/terapia-online-${city.toLowerCase().replace(/ /g, '-')}`,
    },
    openGraph: {
      title: `Psicóloga Online para ${city} - Natalia Chiva`,
      description: `Terapia psicológica online especializada para pacientes de ${location}. Sesiones por videollamada segura.`,
      url: `https://www.nataliachiva.com/terapia-online-${city.toLowerCase().replace(/ /g, '-')}`,
      type: "website",
      images: ["/natalia-chiva.png"],
    },
  };
}

export default function CityTherapyPage({ city, province, comunidad }: CityPageProps) {
  const location = province ? `${city}, ${province}` : city;
  const urlSlug = city.toLowerCase().replace(/ /g, '-');

  return (
    <main className="min-h-screen bg-white dark:bg-slate-800/30">
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "https://www.nataliachiva.com" },
        { name: `Terapia Online ${city}`, url: `https://www.nataliachiva.com/terapia-online-${urlSlug}` }
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
              <Video className="h-10 w-10 text-beige dark:text-blue-gray" />
              <h1 className="text-4xl font-bold text-navy dark:text-slate-100 leading-tight">
                Psicóloga Online para {city}
              </h1>
            </div>
            <p className="text-xl text-muted dark:text-slate-300 leading-relaxed">
              Terapia psicológica online especializada para pacientes de {location}. Sesiones por videollamada tan efectivas como la terapia presencial.
            </p>
          </header>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                ¿Por qué elegir terapia online desde {city}?
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Como <strong>psicóloga general sanitaria especializada en terapia online</strong>, ofrezco atención profesional a pacientes de {city} y toda {comunidad}. La terapia por videollamada ha demostrado la misma eficacia que la presencial, con la ventaja añadida de la comodidad y flexibilidad.
              </p>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Aunque mi consulta física está en Santander, puedo atender a pacientes de {city} con la misma calidad y profesionalidad que si estuvieran en mi consulta presencial.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                Ventajas de la terapia online para pacientes de {city}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-beige dark:text-blue-gray shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-navy dark:text-slate-100 mb-1">Sin desplazamientos</h3>
                    <p className="text-sm text-muted dark:text-slate-300">Ahorra tiempo y dinero en transporte</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-beige dark:text-blue-gray shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-navy dark:text-slate-100 mb-1">Horarios flexibles</h3>
                    <p className="text-sm text-muted dark:text-slate-300">Mayor disponibilidad de citas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-beige dark:text-blue-gray shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-navy dark:text-slate-100 mb-1">Desde tu hogar</h3>
                    <p className="text-sm text-muted dark:text-slate-300">Comodidad y privacidad total</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-beige dark:text-blue-gray shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-navy dark:text-slate-100 mb-1">Misma efectividad</h3>
                    <p className="text-sm text-muted dark:text-slate-300">Resultados comprobados</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-beige dark:text-blue-gray shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-navy dark:text-slate-100 mb-1">Ideal para {city}</h3>
                    <p className="text-sm text-muted dark:text-slate-300">Acceso a especialistas fuera de tu ciudad</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-beige dark:text-blue-gray shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-navy dark:text-slate-100 mb-1">Plataforma segura</h3>
                    <p className="text-sm text-muted dark:text-slate-300">Google Meet o Zoom encriptado</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                Problemas que trato online desde {city}
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Ofrezco terapia especializada para pacientes de {city} en:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-4">
                {[
                  "Ansiedad y estrés",
                  "Depresión",
                  "Ataques de pánico",
                  "Fobias",
                  "Terapia de pareja",
                  "Problemas de autoestima",
                  "Gestión emocional",
                  "Duelo y pérdidas",
                  "Problemas de sueño",
                  "Estrés laboral"
                ].map((problema) => (
                  <li key={problema} className="flex items-center gap-2 text-muted dark:text-slate-300">
                    <CheckCircle className="h-4 w-4 text-beige dark:text-blue-gray shrink-0" />
                    {problema}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                Cómo funciona la terapia online
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-beige dark:bg-blue-gray text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy dark:text-slate-200 mb-1">Reserva tu cita</h3>
                    <p className="text-sm text-muted dark:text-slate-300">Contacta por teléfono, WhatsApp o a través de Mundoctor</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-beige dark:bg-blue-gray text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy dark:text-slate-200 mb-1">Recibe el enlace</h3>
                    <p className="text-sm text-muted dark:text-slate-300">Te envío el link de Google Meet o Zoom antes de la sesión</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-beige dark:bg-blue-gray text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy dark:text-slate-200 mb-1">Conéctate desde {city}</h3>
                    <p className="text-sm text-muted dark:text-slate-300">Solo necesitas un dispositivo con cámara y conexión a internet</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-beige dark:bg-blue-gray text-white flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy dark:text-slate-200 mb-1">Sesión de 50-60 minutos</h3>
                    <p className="text-sm text-muted dark:text-slate-300">Terapia profesional con la misma calidad que presencial</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                Preguntas frecuentes desde {city}
              </h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-beige dark:border-blue-gray pl-4">
                  <h3 className="font-semibold text-navy dark:text-slate-200 mb-2">
                    ¿La terapia online es igual de efectiva que la presencial?
                  </h3>
                  <p className="text-muted dark:text-slate-300 text-sm leading-relaxed">
                    Sí. Múltiples estudios científicos demuestran que la terapia online tiene la misma efectividad que la presencial para la mayoría de problemas psicológicos. La clave está en la calidad del terapeuta y la conexión terapéutica, no en el medio.
                  </p>
                </div>

                <div className="border-l-4 border-beige dark:border-blue-gray pl-4">
                  <h3 className="font-semibold text-navy dark:text-slate-200 mb-2">
                    ¿Qué necesito para hacer terapia online desde {city}?
                  </h3>
                  <p className="text-muted dark:text-slate-300 text-sm leading-relaxed">
                    Solo necesitas un ordenador, tablet o móvil con cámara, micrófono y conexión estable a internet. Un espacio privado donde puedas hablar con tranquilidad.
                  </p>
                </div>

                <div className="border-l-4 border-beige dark:border-blue-gray pl-4">
                  <h3 className="font-semibold text-navy dark:text-slate-200 mb-2">
                    ¿Es segura y confidencial la videollamada?
                  </h3>
                  <p className="text-muted dark:text-slate-300 text-sm leading-relaxed">
                    Absolutamente. Utilizo plataformas seguras con cifrado de extremo a extremo (Google Meet o Zoom). Toda la información está protegida por secreto profesional y la Ley de Protección de Datos.
                  </p>
                </div>

                <div className="border-l-4 border-beige dark:border-blue-gray pl-4">
                  <h3 className="font-semibold text-navy dark:text-slate-200 mb-2">
                    ¿Cuánto cuestan las sesiones online?
                  </h3>
                  <p className="text-muted dark:text-slate-300 text-sm leading-relaxed">
                    El precio es el mismo que la terapia presencial. Contacta conmigo para información detallada sobre tarifas. La primera consulta es gratuita.
                  </p>
                </div>

                <div className="border-l-4 border-beige dark:border-blue-gray pl-4">
                  <h3 className="font-semibold text-navy dark:text-slate-200 mb-2">
                    ¿Puedo hacer terapia de pareja online desde {city}?
                  </h3>
                  <p className="text-muted dark:text-slate-300 text-sm leading-relaxed">
                    Sí, ofrezco terapia de pareja online. Ambos pueden conectarse desde el mismo lugar o desde ubicaciones diferentes si es necesario.
                  </p>
                </div>

                <div className="border-l-4 border-beige dark:border-blue-gray pl-4">
                  <h3 className="font-semibold text-navy dark:text-slate-200 mb-2">
                    ¿Con qué frecuencia son las sesiones?
                  </h3>
                  <p className="text-muted dark:text-slate-300 text-sm leading-relaxed">
                    Normalmente una sesión semanal al principio. Según evoluciones, podemos espaciarlas a quincenal o mensual. Lo adaptamos a tus necesidades.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                Mi experiencia profesional
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Soy <strong>Natalia Chiva Montoya, Psicóloga General Sanitaria</strong> colegiada (Nº CA00989) con más de 5 años de experiencia. He ayudado a cientos de pacientes de toda España, incluyendo {city}, a superar sus dificultades emocionales.
              </p>
              <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-beige dark:border-blue-gray p-4 rounded-r-lg">
                <p className="text-sm text-navy dark:text-slate-300">
                  <strong>Especializada en:</strong> Terapia cognitivo-conductual, terapia de pareja, ansiedad y depresión. Formación continua en las técnicas más actuales y efectivas.
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">¿Necesitas terapia online desde {city}?</h3>
            <p className="text-white/90 dark:text-slate-300 mb-6">
              Reserva tu primera consulta gratuita. Atiendo pacientes de {location} y toda España.
            </p>
            <CTAButtons />
          </div>
        </div>
      </article>
    </main>
  );
}
