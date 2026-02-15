import type { Metadata } from "next";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Consultas Presenciales Santander - Centro Rualasal",
  description: "Consulta presencial en Centro Rualasal, Santander. Terapia individual, de pareja y familiar. C/ Rualasal 11, 1 Dcha. ☎️ 649 493 778",
  alternates: {
    canonical: "https://www.nataliachiva.com/consultas-presenciales",
  },
  openGraph: {
    title: "Consultas Presenciales - Psicóloga Santander",
    description: "Consulta presencial en Centro Rualasal, Santander. Terapia individual, de pareja y familiar.",
    url: "https://www.nataliachiva.com/consultas-presenciales",
    type: "website",
    images: ["/natalia-chiva.png"],
  },
};

export default function ConsultasPresencialesPage() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-800/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-navy dark:text-slate-100 mb-8 text-center">
            Consultas Presenciales
          </h2>
          
          <div className="bg-beige rounded-xl p-8 text-white mb-12 text-center">
            <MapPin className="h-12 w-12 mx-auto mb-4" />
            <p className="text-lg mb-2">
              <strong>Situados en «Centro de Consultas Rualasal»:</strong>
            </p>
            <p className="text-2xl font-bold">
              C/ Rualasal Nº 11, 1 Dcha
            </p>
            <p className="text-xl">
              SANTANDER, CANTABRIA (ESPAÑA)
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-slate-900/50 rounded-xl p-8 mb-12">
            <p className="text-muted dark:text-slate-300 text-center leading-relaxed">
              Si te gustaría realizar terapia individual (adultos y adolescentes), familiar o de pareja de manera presencial, contáctanos por teléfono, email o WhatsApp para darte una cita.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-beige rounded-lg p-6 text-white flex flex-col items-center justify-center min-h-[180px]">
              <MapPin className="h-8 w-8 mb-3" />
              <h4 className="font-semibold mb-2">Dirección</h4>
              <p className="text-sm">
                C/ Rualasal 11, 1 Dcha<br />
                Santander, Cantabria
              </p>
            </div>

            <div className="bg-blue-gray rounded-lg p-6 text-white flex flex-col items-center justify-center min-h-[180px]">
              <Phone className="h-8 w-8 mb-3" />
              <h4 className="font-semibold mb-2">Teléfono</h4>
              <a href="tel:+34649493778" className="text-sm hover:underline">
                (+34) 649 493 778
              </a>
            </div>

            <div className="bg-navy rounded-lg p-6 text-white flex flex-col items-center justify-center min-h-[180px]">
              <Mail className="h-8 w-8 mb-3" />
              <h4 className="font-semibold mb-2">Email</h4>
              <a href="mailto:info@nataliachiva.com" className="text-sm hover:underline">
                info@nataliachiva.com
              </a>
            </div>

            <a
              href="https://wa.me/34649493778"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] rounded-lg p-6 text-white hover:bg-[#20BA5A] transition flex flex-col items-center justify-center min-h-[180px]"
            >
              <MessageCircle className="h-8 w-8 mb-3" />
              <h4 className="font-semibold mb-2">WhatsApp</h4>
              <p className="text-sm">
                Escríbenos
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-8 text-center">
            Ubicación
          </h3>
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.8819824785544!2d-3.8062189!3d43.4631089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd493f8b3e3e3e3f%3A0x0!2sC.%20Rualasal%2C%2011%2C%2039001%20Santander%2C%20Cantabria!5e0!3m2!1ses!2ses!4v1234567890123!5m2!1ses!2ses"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Centro Rualasal - Natalia Chiva"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
