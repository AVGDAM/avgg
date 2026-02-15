import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Información sobre las cookies utilizadas en nataliachiva.com y cómo gestionarlas.",
  alternates: {
    canonical: "https://www.nataliachiva.com/cookies",
  },
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-800/30">
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
            <h1 className="text-4xl font-bold text-navy dark:text-slate-100 mb-4">
              Política de Cookies
            </h1>
            <p className="text-muted dark:text-slate-300">
              Última actualización: 14 de febrero de 2026
            </p>
          </header>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                ¿Qué son las cookies?
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o móvil) cuando visita un sitio web. Las cookies permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                ¿Qué cookies utilizamos?
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-navy dark:text-slate-200 mb-3">
                  Cookies técnicas (necesarias)
                </h3>
                <p className="text-muted dark:text-slate-300 mb-3 leading-relaxed">
                  Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar. Permiten funciones básicas como la navegación por páginas y el acceso a áreas seguras.
                </p>
                <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2">
                  <li><strong>cookieConsent</strong>: Guarda su preferencia sobre el uso de cookies (duración: 1 año)</li>
                  <li><strong>theme</strong>: Recuerda su preferencia de tema claro/oscuro (duración: permanente)</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-navy dark:text-slate-200 mb-3">
                  Cookies analíticas
                </h3>
                <p className="text-muted dark:text-slate-300 mb-3 leading-relaxed">
                  Estas cookies nos ayudan a entender cómo los visitantes interactúan con el sitio web, recopilando información de forma anónima.
                </p>
                <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2">
                  <li><strong>Google Analytics</strong>: Analiza el tráfico del sitio web (duración: 2 años)</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                ¿Cómo gestionar las cookies?
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Puede controlar y/o eliminar las cookies como desee. Puede eliminar todas las cookies que ya están en su ordenador y puede configurar la mayoría de los navegadores para evitar que se instalen.
              </p>
              
              <h3 className="text-xl font-semibold text-navy dark:text-slate-200 mb-3">
                Configuración del navegador
              </h3>
              <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-4">
                <li><strong>Chrome</strong>: Configuración → Privacidad y seguridad → Cookies</li>
                <li><strong>Firefox</strong>: Opciones → Privacidad y seguridad → Cookies</li>
                <li><strong>Safari</strong>: Preferencias → Privacidad → Cookies</li>
                <li><strong>Edge</strong>: Configuración → Cookies y permisos de sitio</li>
              </ul>

              <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-beige dark:border-blue-gray p-4 rounded-r-lg">
                <p className="text-sm text-navy dark:text-slate-300">
                  <strong>Nota:</strong> Si bloquea o elimina las cookies, algunas funciones del sitio web pueden no funcionar correctamente.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                Cookies de terceros
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Algunos servicios externos utilizan cookies para mejorar su funcionalidad:
              </p>
              <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2">
                <li><strong>Google Analytics</strong>: Para análisis estadístico del tráfico web</li>
                <li><strong>Google Fonts</strong>: Para la correcta visualización de las fuentes</li>
              </ul>
              <p className="text-muted dark:text-slate-300 mt-4 leading-relaxed">
                Estas cookies están sujetas a las políticas de privacidad de sus respectivos proveedores.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                Aceptación de cookies
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Al hacer clic en "Aceptar" en el banner de cookies, usted acepta el uso de las cookies descritas en esta política. Puede cambiar su consentimiento en cualquier momento borrando las cookies de su navegador.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                Actualización de la política
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Podemos actualizar nuestra Política de Cookies ocasionalmente. Le notificaremos cualquier cambio publicando la nueva política en esta página y actualizando la fecha de "última actualización".
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                Contacto
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Si tiene preguntas sobre nuestra Política de Cookies, puede contactarnos:
              </p>
              <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2">
                <li>Por email: <a href="mailto:info@nataliachiva.com" className="text-beige dark:text-blue-gray hover:underline">info@nataliachiva.com</a></li>
                <li>Por teléfono: <a href="tel:+34649493778" className="text-beige dark:text-blue-gray hover:underline">649 493 778</a></li>
                <li>Por correo postal: C/ Rualasal 11, 1 Dcha. Santander, Cantabria</li>
              </ul>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
