import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Política de Privacidad | AVGG - Protección de Datos',
  description: 'Política de privacidad y protección de datos de AVGG. Información sobre el uso de cookies, tratamiento de datos personales y derechos del usuario según RGPD.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://avgg.es/politica-privacidad',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Política de Privacidad
          </h1>
          <p className="text-gray-500 mb-12">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información al usuario</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AVGG, en adelante RESPONSABLE, es el Responsable del tratamiento de los datos personales del Usuario y le informa que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679 de 27 de abril de 2016 (GDPR) relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos, por lo que se le facilita la siguiente información del tratamiento:
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Datos de contacto</h2>
              <ul className="list-none space-y-2 text-gray-700">
                <li><strong>Responsable:</strong> AVGG</li>
                <li><strong>Dirección:</strong> Rualasal 11, 1D, 39007 Santander, Cantabria</li>
                <li><strong>Email:</strong> info@avgg.es</li>
                <li><strong>Teléfono:</strong> 658 873 627</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalidad del tratamiento</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Los datos personales que nos facilite a través de los formularios de contacto serán tratados con las siguientes finalidades:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Gestionar las consultas, peticiones o solicitudes realizadas por el Usuario</li>
                <li>Enviar información comercial sobre nuestros servicios (solo si ha dado su consentimiento)</li>
                <li>Análisis de tráfico web mediante cookies analíticas</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Legitimación del tratamiento</h2>
              <p className="text-gray-700 leading-relaxed">
                La base legal para el tratamiento de sus datos es el consentimiento del usuario al contactarnos a través de los formularios de la web o al aceptar la política de cookies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Conservación de datos</h2>
              <p className="text-gray-700 leading-relaxed">
                Los datos personales proporcionados se conservarán durante el tiempo necesario para cumplir con la finalidad para la que se recabaron y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad y del tratamiento de los datos.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Derechos del usuario</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El Usuario tiene derecho a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Acceder a sus datos personales</li>
                <li>Rectificar datos inexactos o incompletos</li>
                <li>Solicitar la supresión de sus datos</li>
                <li>Solicitar la limitación del tratamiento</li>
                <li>Oponerse al tratamiento</li>
                <li>Portabilidad de los datos</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Para ejercer estos derechos, puede contactar con nosotros en <strong>info@avgg.es</strong> o en nuestra dirección postal indicando "Protección de Datos" en el asunto.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Política de cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Este sitio web utiliza cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Tipos de cookies que utilizamos:</h3>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-2">Cookies técnicas (necesarias)</h4>
                <p className="text-gray-700">Son aquellas que permiten al usuario la navegación a través de la web y la utilización de las diferentes opciones o servicios que en ella existen.</p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-2">Cookies analíticas</h4>
                <p className="text-gray-700">Permiten el seguimiento y análisis del comportamiento de los usuarios en nuestra web. La información recogida se utiliza para mejorar la experiencia del usuario.</p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-2">Cookies de preferencias</h4>
                <p className="text-gray-700">Permiten recordar información para que el usuario acceda al servicio con determinadas características (idioma, número de resultados, etc.).</p>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                Puede configurar su navegador para rechazar o eliminar cookies. La mayoría de navegadores permiten gestionar las preferencias de cookies en sus ajustes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Seguridad</h2>
              <p className="text-gray-700 leading-relaxed">
                El RESPONSABLE ha adoptado los niveles de seguridad de protección de los Datos Personales legalmente requeridos, y procura instalar aquellos otros medios y medidas técnicas adicionales a su alcance para evitar la pérdida, mal uso, alteración, acceso no autorizado y robo de los Datos Personales facilitados.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modificaciones</h2>
              <p className="text-gray-700 leading-relaxed">
                AVGG se reserva el derecho de modificar la presente Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales, así como a prácticas de la industria. Estas políticas estarán vigentes hasta que sean modificadas por otras debidamente publicadas.
              </p>
            </section>
          </div>

          {/* CTA Contact */}
          <div className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Tienes dudas sobre privacidad?</h3>
            <p className="text-gray-700 mb-6">
              Si tienes alguna pregunta sobre nuestra política de privacidad o sobre cómo tratamos tus datos, no dudes en contactarnos.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:info@avgg.es"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
              >
                Contactar por email
              </a>
              <a
                href="tel:+34658873627"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 rounded-full hover:bg-gray-200 transition-colors font-medium"
              >
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
