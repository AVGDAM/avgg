import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Clock, DollarSign, Zap, Video, Laptop, Tablet, Smartphone, Mic, Camera, Wifi, Shield, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Consultas Online - Terapia Psicológica por Videollamada",
  description: "Terapia psicológica online por videollamada. Accesible, flexible y eficiente desde cualquier lugar de España. Psicóloga sanitaria Natalia Chiva.",
  alternates: {
    canonical: "https://www.nataliachiva.com/consultas-online",
  },
  openGraph: {
    title: "Consultas Online - Psicóloga Santander",
    description: "Terapia psicológica online accesible desde toda España. Sesiones por videollamada segura.",
    url: "https://www.nataliachiva.com/consultas-online",
    type: "website",
    images: ["/natalia-chiva.png"],
  },
};

export default function ConsultasOnlinePage() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-800/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-navy dark:text-slate-100 mb-6">
            Consultas online
          </h2>
          <div className="space-y-4 text-muted dark:text-slate-300 leading-relaxed">
            <p>
              En los últimos años, el uso de las tecnologías de la información y la comunicación se han multiplicado y desarrollado, permitiendo a las personas comunicarse y relacionarse de una manera eficaz.
            </p>
            <p>
              Por este motivo, servicios que antes solo eran presenciales como las consultas psicológicas, se han adaptado y se ofrecen a distancia ya que se ha demostrado que los tratamientos a través de estos medios son igual de efectivos.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-navy dark:text-slate-100 mb-12 text-center">
            Algunos beneficios:
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Globe,
                titulo: "Accesible",
                descripcion: "Accesibilidad para aquellas personas que no pueden acudir de manera presencial porque viajan frecuentemente, tienen movilidad reducida, los recursos o servicios psicológicos están lejos de su zona de residencia y/o cualquier otro motivo.",
                color: "bg-beige"
              },
              {
                icon: Zap,
                titulo: "Fácil",
                descripcion: "Facilidad para iniciar una terapia psicológica ya que hay personas que pueden tener más resistencias a la hora de acudir a un psicólogo o psicóloga de manera presencial por diversas razones.",
                color: "bg-blue-gray"
              },
              {
                icon: Clock,
                titulo: "Flexible",
                descripcion: "Más flexibilidad de horarios y rápida comunicación. A través de un solo click puedes ver la disponibilidad del profesional y reservar tu cita online.",
                color: "bg-navy"
              },
              {
                icon: DollarSign,
                titulo: "Eficiente",
                descripcion: "Reducción de costes económicos y temporales ya que haciendo uso de los medios telemáticos, las personas no tienen que desplazarse.",
                color: "bg-beige-dark"
              }
            ].map((beneficio) => (
              <div key={beneficio.titulo} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${beneficio.color} text-white mb-4`}>
                  <beneficio.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  {beneficio.titulo}
                </h3>
                <p className="text-sm text-muted dark:text-slate-300">
                  {beneficio.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-slate-800/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-navy dark:text-slate-100 mb-6 text-center">
            Modalidad Online
          </h2>
          <p className="text-center text-muted dark:text-slate-300 mb-12 max-w-3xl mx-auto">
            Nos acercamos a las personas de forma online ofreciendo nuestros servicios de una manera fácil, segura y adaptada:
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-gray rounded-xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Video size={32} />
                <h3 className="text-2xl font-bold">Videollamada</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-white/80">•</span>
                  <span>Utiliza tu ordenador, tablet o teléfono móvil para conectarte a las sesiones desde donde estés.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/80">•</span>
                  <span>Uso de plataformas como Google Meet o Zoom.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/80">•</span>
                  <span>Utiliza tu micrófono y cámara web para interactuar como en una consulta presencial.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-slate-900/50 rounded-xl p-8 flex items-center justify-center">
              <div className="text-center">
                <p className="text-navy dark:text-blue-gray-light font-semibold mb-6 text-lg">
                  Para reservar tu cita contacta con nosotros
                </p>
                <Link
                  href="/contacto"
                  className="inline-block rounded-lg bg-navy px-8 py-3 text-white font-medium transition hover:bg-navy-light dark:bg-blue-gray dark:hover:bg-blue-gray-light"
                >
                  Contactar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-navy dark:text-slate-100 mb-6 text-center">
            Recursos necesarios:
          </h2>
          <p className="text-center text-lg font-medium text-navy dark:text-blue-gray-light mb-8">
            ¿Qué necesitas para realizar terapia online?
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {[
              { icon: Laptop, text: "Disponibilidad de ordenador" },
              { icon: Smartphone, text: "Teléfono móvil/fijo" },
              { icon: Tablet, text: "O tablet" },
              { icon: Wifi, text: "Acceso a Internet" },
              { icon: Mic, text: "Micrófono para las llamadas" },
              { icon: Camera, text: "Cámara para videollamadas" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-white dark:bg-slate-800 rounded-lg p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-gray/20 text-blue-gray-dark">
                  <item.icon size={20} />
                </div>
                <span className="text-muted dark:text-slate-300">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8">
            <p className="text-sm text-muted dark:text-slate-300">
              <strong className="text-navy dark:text-blue-gray-light">Aplicación seleccionada para la comunicación:</strong> Google Meet o Zoom.
            </p>
          </div>

          <div className="bg-beige/20 dark:bg-slate-800 rounded-xl p-6 border border-beige">
            <p className="text-muted dark:text-slate-300 mb-4">
              Si te gustaría recibir terapia psicológica online y surge alguna dificultad en la conexión como: acceso a las aplicaciones, habilitar micrófono y/o cámara web, etc., nosotros te facilitamos las instrucciones y te ayudamos a resolverlo.
            </p>
            <p className="text-navy dark:text-blue-gray-light font-medium">
              En ese caso, no dudes en ponerte en contacto con nosotros a través de nuestro correo electrónico.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-navy dark:bg-slate-800 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <Mail className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">¿Tienes alguna duda?</h3>
          <p className="mb-4">Contacta vía email</p>
          <a
            href="mailto:info@nataliachiva.com"
            className="inline-block text-xl font-semibold hover:underline"
          >
            info@nataliachiva.com
          </a>
          <h2 className="text-3xl font-bold mt-12">¡Te esperamos!</h2>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-slate-800/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="bg-gray-50 dark:bg-slate-900/50 rounded-xl p-8 border-l-4 border-beige">
            <div className="flex items-start gap-4">
              <Shield className="h-8 w-8 text-beige shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  Código Deontológico
                </h3>
                <p className="text-muted dark:text-slate-300 mb-4">
                  La confidencialidad y el secreto profesional de todo lo que se trate durante las sesiones de psicoterapia están asegurados por el profesional, respetando el Código Deontológico del Psicólogo.
                </p>
                <a
                  href="https://www.cop.es/pdf/Codigo-Deontologico-COP-Vigente.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy dark:text-blue-gray-light font-medium hover:underline"
                >
                  Más información →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
