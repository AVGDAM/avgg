import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import SiteFooter from '@/components/SiteFooter';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | AVGG - Aviso Legal',
  description: 'Términos y condiciones de uso del sitio web de AVGG. Condiciones legales, derechos de propiedad intelectual y condiciones de contratación de servicios de diseño web.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://avgg.es/terminos',
  },
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Términos y Condiciones
          </h1>
          <p className="text-gray-500 mb-12">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información General</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bienvenido a AVGG. Estos Términos y Condiciones regulan el uso de nuestro sitio web y los servicios ofrecidos. Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos.
              </p>
              <ul className="list-none space-y-2 text-gray-700 mb-4">
                <li><strong>Titular:</strong> AVGG</li>
                <li><strong>Domicilio:</strong> Rualasal 11, 1D, 39007 Santander, Cantabria</li>
                <li><strong>Email:</strong> info@avgg.es</li>
                <li><strong>Teléfono:</strong> 658 873 627</li>
                <li><strong>Sitio Web:</strong> avgg.es</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Objeto</h2>
              <p className="text-gray-700 leading-relaxed">
                El presente aviso legal regula el uso del sitio web AVGG, del que es titular AVGG. La navegación por el sitio web atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Servicios</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A través de este sitio web, AVGG facilita a los usuarios información sobre sus servicios profesionales en el ámbito del diseño y desarrollo web:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Diseño y desarrollo de páginas web</li>
                <li>Tiendas online y e-commerce</li>
                <li>Posicionamiento SEO y marketing digital</li>
                <li>Mantenimiento y actualización de sitios web</li>
                <li>Desarrollo de aplicaciones web a medida</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Responsabilidad</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El titular no se hace responsable de:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>La continuidad y disponibilidad de los contenidos</li>
                <li>La ausencia de errores en dichos contenidos ni la corrección de cualquier defecto que pudiera ocurrir</li>
                <li>La ausencia de virus y/o demás componentes dañinos</li>
                <li>Los daños o perjuicios que cause cualquier persona que vulnere los sistemas de seguridad</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Propiedad Intelectual e Industrial</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Todos los contenidos del sitio web (textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente) son propiedad intelectual de AVGG, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente en materia de propiedad intelectual sobre los mismos.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Quedan expresamente prohibidas la reproducción, distribución y comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, sin autorización expresa de AVGG.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Condiciones de Contratación</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Los servicios de diseño y desarrollo web se contratan mediante:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Solicitud de presupuesto a través del formulario de contacto</li>
                <li>Llamada telefónica o reunión presencial</li>
                <li>Mensaje por WhatsApp o email</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Una vez acordados los términos del proyecto, se formalizará un contrato específico donde se detallarán:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                <li>Alcance del proyecto</li>
                <li>Plazos de entrega</li>
                <li>Precio y forma de pago</li>
                <li>Derechos de propiedad intelectual</li>
                <li>Garantías y mantenimiento</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Precios y Formas de Pago</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Los precios indicados en la web son orientativos. El precio final se acordará en el presupuesto personalizado según las necesidades específicas de cada proyecto.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Las formas de pago aceptadas son:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Transferencia bancaria</li>
                <li>Pago mediante plataformas online (Stripe, PayPal)</li>
                <li>Pago fraccionado según hitos del proyecto</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Todos los precios incluyen IVA cuando corresponda.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Garantía y Mantenimiento</h2>
              <p className="text-gray-700 leading-relaxed">
                AVGG garantiza el correcto funcionamiento de los desarrollos web entregados durante el periodo especificado en cada contrato. Se ofrecen servicios de mantenimiento y soporte técnico que se contratarán de forma independiente.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Protección de Datos</h2>
              <p className="text-gray-700 leading-relaxed">
                Para más información sobre cómo tratamos sus datos personales, consulte nuestra{' '}
                <Link href="/politica-privacidad" className="text-blue-600 hover:text-blue-700 underline">
                  Política de Privacidad
                </Link>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Enlaces a Terceros</h2>
              <p className="text-gray-700 leading-relaxed">
                El sitio web puede contener enlaces a sitios web de terceros. AVGG no asume responsabilidad alguna por el contenido, política de privacidad o prácticas de sitios web de terceros.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modificaciones</h2>
              <p className="text-gray-700 leading-relaxed">
                AVGG se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que presta como la forma en la que éstos aparezcan presentados o localizados.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Legislación Aplicable y Jurisdicción</h2>
              <p className="text-gray-700 leading-relaxed">
                Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los Juzgados y Tribunales de Santander, Cantabria, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.
              </p>
            </section>
          </div>

          {/* CTA Contact */}
          <div className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Tienes dudas legales?</h3>
            <p className="text-gray-700 mb-6">
              Si tienes alguna pregunta sobre nuestros términos y condiciones, estamos aquí para ayudarte.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:info@avgg.es"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
              >
                Contactar por email
              </a>
              <a
                href="https://wa.me/34658873627?text=Hola%2C%20tengo%20una%20consulta%20legal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors font-medium"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
