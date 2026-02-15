import type { Metadata } from "next";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto - Psicóloga Santander | Pedir Cita",
  description: "Contacta con Natalia Chiva, psicóloga sanitaria en Santander. ☎️ 649 493 778 | WhatsApp | Email: info@nataliachiva.com. Centro Rualasal.",
  alternates: {
    canonical: "https://www.nataliachiva.com/contacto",
  },
  openGraph: {
    title: "Contacto - Psicóloga en Santander",
    description: "Contacta y reserva tu cita. Teléfono: 649 493 778. Centro Rualasal, Santander.",
    url: "https://www.nataliachiva.com/contacto",
    type: "website",
    images: ["/natalia-chiva.png"],
  },
};

export default function ContactoPage() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-800/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-navy dark:text-slate-100 mb-4">
              Contacto
            </h1>
            <p className="text-lg text-muted dark:text-slate-300 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Contáctanos por teléfono o email.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-beige rounded-xl p-6 text-white text-center">
              <MapPin className="h-10 w-10 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Dirección</h3>
              <p className="text-sm">C/ Rualasal 11, 1 Dcha</p>
              <p className="text-sm">39001 Santander, Cantabria</p>
            </div>

            <div className="bg-blue-gray rounded-xl p-6 text-white text-center">
              <Phone className="h-10 w-10 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Teléfono</h3>
              <a href="tel:+34649493778" className="hover:underline text-lg block">
                (+34) 649 493 778
              </a>
            </div>

            <div className="bg-navy rounded-xl p-6 text-white text-center">
              <Mail className="h-10 w-10 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:info@nataliachiva.com" className="hover:underline block">
                info@nataliachiva.com
              </a>
            </div>

            <a
              href="https://wa.me/34649493778"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] rounded-xl p-6 text-white text-center hover:bg-[#20BA5A] transition block"
            >
              <MessageCircle className="h-10 w-10 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-sm">
                Escríbenos directamente
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-8 text-center">
            Cómo llegar
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
