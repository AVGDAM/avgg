import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import SiteFooter from '@/components/SiteFooter';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Cookies | AVGG - Gestión de Cookies',
  description: 'Información sobre el uso de cookies en AVGG. Tipos de cookies (técnicas, analíticas, preferencias), finalidad y cómo gestionarlas desde tu navegador.',
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Política de Cookies | AVGG',
    description: 'Información sobre el uso de cookies en AVGG.',
    url: 'https://avgg.es/cookies',
    siteName: 'AVGG',
    locale: 'es_ES',
    type: 'website',
  },
  alternates: {
    canonical: 'https://avgg.es/cookies',
  },
};

export default function CookiesPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Política de Cookies
          </h1>
          <p className="text-gray-500 mb-12">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué son las cookies?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet, smartphone) cuando visita una página web. Las cookies permiten que la web recuerde sus acciones y preferencias durante un período de tiempo, para que no tenga que volver a configurarlas cada vez que regrese al sitio.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué cookies utilizamos?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                En AVGG utilizamos diferentes tipos de cookies según su finalidad:
              </p>

              <div className="space-y-8">
                {/* Cookies Técnicas */}
                <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🔧</span> Cookies Técnicas (Necesarias)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Son aquellas que permiten al usuario la navegación a través de la web y la utilización de las diferentes opciones o servicios que en ella existen.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <div>
                        <strong className="text-gray-900">cookiesAccepted</strong>
                        <p className="text-sm text-gray-600">Guarda tu preferencia sobre el uso de cookies. Duración: 1 año</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Estas cookies son necesarias</strong> para el funcionamiento básico del sitio web y no se pueden desactivar.
                    </p>
                  </div>
                </div>

                {/* Cookies Analíticas */}
                <div className="p-6 bg-violet-50 rounded-xl border border-violet-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">📊</span> Cookies Analíticas
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Permiten el seguimiento y análisis del comportamiento de los usuarios. La información recogida se utiliza para medir la actividad de la web y elaborar estadísticas con el objetivo de mejorar el sitio web.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <div>
                        <strong className="text-gray-900">Google Analytics (si se implementa)</strong>
                        <p className="text-sm text-gray-600">Recopila información anónima sobre cómo los visitantes usan la web. Duración: hasta 2 años</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white rounded-lg">
                    <p className="text-sm text-gray-600">
                      Estas cookies pueden desactivarse desde el banner de cookies o desde la configuración de tu navegador.
                    </p>
                  </div>
                </div>

                {/* Cookies de Preferencias */}
                <div className="p-6 bg-amber-50 rounded-xl border border-amber-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">⚙️</span> Cookies de Preferencias
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Permiten recordar información para que el usuario acceda al servicio con determinadas características que pueden diferenciar su experiencia de la de otros usuarios.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <div>
                        <strong className="text-gray-900">Preferencias de usuario</strong>
                        <p className="text-sm text-gray-600">Idioma, zona geográfica, configuración de pantalla, etc.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cómo gestionar las cookies?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Puedes aceptar o rechazar las cookies mediante el banner que aparece al acceder a nuestro sitio web por primera vez. También puedes configurar tu navegador para rechazar todas las cookies o para que te avise cuando se envíe una cookie.
              </p>
              
              <div className="space-y-4 mt-6">
                <h3 className="text-lg font-bold text-gray-900">Configuración por navegador:</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2">🌐 Google Chrome</h4>
                    <p className="text-sm text-gray-600">
                      Configuración → Privacidad y seguridad → Cookies y otros datos de sitios
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2">🦊 Mozilla Firefox</h4>
                    <p className="text-sm text-gray-600">
                      Opciones → Privacidad y Seguridad → Cookies y datos del sitio
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2">🧭 Safari</h4>
                    <p className="text-sm text-gray-600">
                      Preferencias → Privacidad → Cookies y datos de sitios web
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2">🔷 Microsoft Edge</h4>
                    <p className="text-sm text-gray-600">
                      Configuración → Cookies y permisos del sitio → Cookies
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                <p className="text-sm text-gray-700">
                  <strong>⚠️ Nota:</strong> Si deshabilitas todas las cookies, algunas funcionalidades del sitio web pueden no funcionar correctamente.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies de terceros</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nuestro sitio web puede contener enlaces a sitios web de terceros. AVGG no controla las cookies utilizadas por estos sitios web externos. Para más información sobre las cookies de terceros, consulta las políticas de privacidad de dichos sitios.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Actualización de la Política de Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                AVGG puede actualizar esta Política de Cookies para adaptarla a novedades legislativas, técnicas o cambios en el uso de cookies. Te recomendamos revisar esta página periódicamente para estar informado de cualquier cambio.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Más información</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para más información sobre privacidad y protección de datos, consulta:
              </p>
              <ul className="space-y-2">
                <li>
                  <Link href="/politica-privacidad" className="text-blue-600 hover:text-blue-700 underline">
                    → Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terminos" className="text-blue-600 hover:text-blue-700 underline">
                    → Términos y Condiciones
                  </Link>
                </li>
              </ul>
            </section>
          </div>

          {/* CTA Contact */}
          <div className="mt-16 p-8 bg-gradient-to-br from-blue-50 to-violet-50 rounded-2xl border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Dudas sobre cookies?</h3>
            <p className="text-gray-700 mb-6">
              Si tienes preguntas sobre nuestra política de cookies o sobre cómo gestionar tus preferencias, contáctanos.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:info@avgg.es"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
              >
                info@avgg.es
              </a>
              <a
                href="tel:+34658873627"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors font-medium border border-gray-200"
              >
                658 873 627
              </a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
