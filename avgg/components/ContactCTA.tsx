import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            ¿Tienes un proyecto<br />
            <span className="text-gray-400">en mente?</span>
          </h2>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos por teléfono, email o WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
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
      </div>
    </section>
  );
}
