import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import SiteFooter from '@/components/SiteFooter';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Contacto | AVGG - Agencia de Diseño Web en Santander',
  description: 'Contacta con AVGG, agencia de diseño web en Santander. Llámanos al 658 873 627, escríbenos a info@avgg.es o visítanos en Rualasal 11. Presupuesto gratuito en 24h.',
  keywords: ['contacto avgg', 'diseño web santander contacto', 'presupuesto web', 'agencia digital santander'],
  openGraph: {
    title: 'Contacto | AVGG - Diseño Web Santander',
    description: 'Contacta con nosotros para tu proyecto web. Respuesta en menos de 24 horas.',
    type: 'website',
    url: 'https://avgg.es/contacto',
  },
  alternates: {
    canonical: 'https://avgg.es/contacto',
  },
};

export default function ContactoPage() {
  const breadcrumbItems = [
    { name: 'Inicio', url: 'https://avgg.es' },
    { name: 'Contacto', url: 'https://avgg.es/contacto' },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Nav />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="text-sm text-gray-400 uppercase tracking-wider">Contacto</span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mt-3 leading-tight">
              Hablemos de tu<br />
              <span className="text-gray-400">proyecto</span>
            </h1>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Contáctanos por teléfono, email, WhatsApp o visítanos en nuestra oficina en Santander.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
            {/* Dirección */}
            <a
              href="https://maps.google.com/?q=Rualasal+11+Santander"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-amber-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 group-hover:bg-gray-900 transition-colors">
                <MapPin size={28} className="text-amber-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dirección</h3>
              <p className="text-gray-600 text-sm">C/ Rualasal 11, 1 Dcha<br />39001 Santander, Cantabria</p>
            </a>

            {/* Teléfono */}
            <a
              href="tel:+34658873627"
              className="group bg-blue-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 group-hover:bg-gray-900 transition-colors">
                <Phone size={28} className="text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Teléfono</h3>
              <p className="text-gray-600 text-sm">(+34) 658 873 627</p>
            </a>

            {/* Email */}
            <a
              href="mailto:info@avgg.es"
              className="group bg-violet-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 group-hover:bg-gray-900 transition-colors">
                <Mail size={28} className="text-violet-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm">info@avgg.es</p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/34658873627"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 group-hover:bg-gray-900 transition-colors">
                <MessageCircle size={28} className="text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 text-sm">Escríbenos directamente</p>
            </a>
          </div>

          {/* Additional info */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gray-50 rounded-2xl p-10 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Dónde estamos?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nuestra oficina está ubicada en el centro de Santander, Cantabria. Con sede física en Santander, trabajamos con empresas de toda España de forma remota y presencial. Si prefieres reunirte en persona, estaremos encantados de recibirte.
              </p>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <p className="text-sm text-gray-500 mb-2">Horario de atención</p>
                <p className="text-gray-900 font-medium">Lunes a Viernes: 9:00 - 18:00</p>
                <p className="text-gray-600 text-sm mt-2">Citas previas recomendadas</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
