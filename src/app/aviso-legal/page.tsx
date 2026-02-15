import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal del sitio web nataliachiva.com. Información sobre la titularidad y condiciones de uso.",
  alternates: {
    canonical: "https://www.nataliachiva.com/aviso-legal",
  },
};

export default function AvisoLegalPage() {
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
              Aviso Legal
            </h1>
            <p className="text-muted dark:text-slate-300">
              Última actualización: 14 de febrero de 2026
            </p>
          </header>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                1. Datos identificativos
              </h2>
              <p className="text-muted dark:text-slate-300 mb-3 leading-relaxed">
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se informa de los siguientes datos:
              </p>
              <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2">
                <li><strong>Titular:</strong> Natalia Chiva Montoya</li>
                <li><strong>NIF:</strong> [NIF]</li>
                <li><strong>Domicilio:</strong> C/ Rualasal 11, 1 Dcha. 39001 Santander, Cantabria</li>
                <li><strong>Email:</strong> <a href="mailto:info@nataliachiva.com" className="text-beige dark:text-blue-gray hover:underline">info@nataliachiva.com</a></li>
                <li><strong>Teléfono:</strong> <a href="tel:+34649493778" className="text-beige dark:text-blue-gray hover:underline">649 493 778</a></li>
                <li><strong>Actividad:</strong> Servicios de psicología sanitaria</li>
                <li><strong>Nº Colegiada:</strong> CA00989 - Colegio Oficial de Psicólogos de Cantabria</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                2. Objeto
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                El presente aviso legal regula el uso y utilización del sitio web <strong>www.nataliachiva.com</strong> (en adelante, el "Sitio Web"), del que es titular Natalia Chiva Montoya.
              </p>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                La navegación por el Sitio Web atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                3. Condiciones de uso
              </h2>
              
              <h3 className="text-xl font-semibold text-navy dark:text-slate-200 mb-3">
                3.1. Uso correcto del Sitio Web
              </h3>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                El usuario se compromete a utilizar el Sitio Web de conformidad con la ley, el presente Aviso Legal y cualquier otro aviso o instrucciones puestos en su conocimiento. El usuario se compromete a no utilizar el Sitio Web con fines o efectos ilícitos, lesivos de los derechos e intereses de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar o deteriorar el Sitio Web.
              </p>

              <h3 className="text-xl font-semibold text-navy dark:text-slate-200 mb-3">
                3.2. Contenidos
              </h3>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Los contenidos del Sitio Web, incluyendo sin carácter limitativo, textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, son propiedad intelectual de Natalia Chiva Montoya, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                4. Propiedad intelectual e industrial
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Todos los contenidos del Sitio Web (textos, imágenes, marcas, logotipos, combinación de colores, estructura y diseño, selección de materiales usados, programas necesarios para su funcionamiento, acceso y uso, etc.) son titularidad de Natalia Chiva Montoya y están protegidos por las normas españolas e internacionales sobre propiedad intelectual e industrial.
              </p>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Queda expresamente prohibida la reproducción total o parcial de este Sitio Web, ni siquiera mediante un hiperenlace, sin la autorización expresa de Natalia Chiva Montoya.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                5. Responsabilidad
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Natalia Chiva Montoya no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran derivarse de:
              </p>
              <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-4">
                <li>La falta de disponibilidad, mantenimiento y efectivo funcionamiento del Sitio Web</li>
                <li>La existencia de virus, programas maliciosos o lesivos en los contenidos</li>
                <li>El uso ilícito, negligente, fraudulento o contrario a este Aviso Legal</li>
                <li>La falta de licitud, calidad, fiabilidad, utilidad y disponibilidad de los servicios prestados por terceros</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                6. Enlaces
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                El Sitio Web puede contener enlaces a otros sitios web de terceros. Natalia Chiva Montoya no asume ninguna responsabilidad derivada de la conexión o contenidos de los enlaces de terceros a los que se hace referencia en el Sitio Web.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                7. Modificaciones
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Natalia Chiva Montoya se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su Sitio Web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                8. Legislación aplicable y jurisdicción
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                La relación entre Natalia Chiva Montoya y el usuario se regirá por la normativa española vigente. En caso de cualquier controversia las partes podrán someter sus conflictos a arbitraje o acudir a la jurisdicción ordinaria cumpliendo con las normas sobre jurisdicción y competencia al respecto. Natalia Chiva Montoya tiene su domicilio en Santander, España.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                9. Contacto
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Para cualquier consulta relacionada con este Aviso Legal, puede contactar con nosotros:
              </p>
              <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2">
                <li>Email: <a href="mailto:info@nataliachiva.com" className="text-beige dark:text-blue-gray hover:underline">info@nataliachiva.com</a></li>
                <li>Teléfono: <a href="tel:+34649493778" className="text-beige dark:text-blue-gray hover:underline">649 493 778</a></li>
                <li>Dirección: C/ Rualasal 11, 1 Dcha. 39001 Santander, Cantabria</li>
              </ul>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
