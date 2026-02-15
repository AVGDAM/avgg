import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad y protección de datos de nataliachiva.com. Información sobre el tratamiento de datos personales.",
  alternates: {
    canonical: "https://www.nataliachiva.com/politica-privacidad",
  },
};

export default function PrivacidadPage() {
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
              Política de Privacidad
            </h1>
            <p className="text-muted dark:text-slate-300">
              Última actualización: 14 de febrero de 2026
            </p>
          </header>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                1. Información al usuario
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos:
              </p>
              
              <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-beige dark:border-blue-gray p-4 rounded-r-lg mb-4">
                <p className="text-sm text-navy dark:text-slate-300 mb-2">
                  <strong>Responsable del tratamiento:</strong>
                </p>
                <ul className="text-sm text-navy dark:text-slate-300 space-y-1 pl-4">
                  <li>• Identidad: Natalia Chiva Montoya</li>
                  <li>• NIF: [NIF]</li>
                  <li>• Dirección: C/ Rualasal 11, 1 Dcha. 39001 Santander, Cantabria</li>
                  <li>• Email: info@nataliachiva.com</li>
                  <li>• Teléfono: 649 493 778</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                2. Finalidad del tratamiento de datos
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Los datos personales que nos facilite serán tratados con las siguientes finalidades:
              </p>
              <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2">
                <li><strong>Prestación de servicios de psicología:</strong> Evaluación, diagnóstico y tratamiento psicológico</li>
                <li><strong>Gestión de citas:</strong> Agenda, recordatorios y seguimiento de sesiones</li>
                <li><strong>Comunicación:</strong> Respuesta a consultas y envío de información relacionada con nuestros servicios</li>
                <li><strong>Gestión administrativa:</strong> Facturación y gestión contable</li>
                <li><strong>Cumplimiento legal:</strong> Obligaciones derivadas de la normativa sanitaria y fiscal</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                3. Base legal para el tratamiento
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                La base legal para el tratamiento de sus datos personales es:
              </p>
              <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2">
                <li><strong>Consentimiento del interesado:</strong> Para la prestación de servicios psicológicos y comunicaciones</li>
                <li><strong>Ejecución de un contrato:</strong> Para la gestión de citas y prestación de servicios</li>
                <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y experiencia del usuario</li>
                <li><strong>Obligación legal:</strong> Cumplimiento de normativa sanitaria, fiscal y contable</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                4. Datos de salud (categoría especial)
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                En el ejercicio de la profesión sanitaria, tratamos datos de salud que son considerados categoría especial de datos según el artículo 9 del RGPD. El tratamiento de estos datos se basa en:
              </p>
              <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2">
                <li>Consentimiento explícito del paciente</li>
                <li>Necesidad para fines de medicina preventiva o laboral, evaluación de la capacidad laboral del trabajador, diagnóstico médico, prestación de asistencia o tratamiento de tipo sanitario</li>
                <li>Cumplimiento de obligaciones legales en el ámbito del Derecho sanitario</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                5. Plazo de conservación de datos
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Sus datos serán conservados durante:
              </p>
              <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2">
                <li><strong>Historia clínica:</strong> Mínimo 15 años desde la última asistencia (Ley 41/2002)</li>
                <li><strong>Datos de menores:</strong> Hasta 5 años después de la mayoría de edad</li>
                <li><strong>Datos de facturación:</strong> 6 años según normativa fiscal</li>
                <li><strong>Otros datos:</strong> Mientras persista la relación terapéutica y posteriormente durante el plazo legal establecido</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                6. Destinatarios de los datos
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Sus datos personales no serán cedidos a terceros, salvo obligación legal. En particular, podrán comunicarse a:
              </p>
              <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2">
                <li>Administración tributaria y organismos oficiales cuando sea legalmente obligatorio</li>
                <li>Compañías aseguradoras cuando el tratamiento esté cubierto por seguro de salud</li>
                <li>Otros profesionales sanitarios en caso de interconsulta con su consentimiento previo</li>
                <li>Servicios de hosting y plataformas digitales necesarias para la prestación del servicio</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                7. Derechos del usuario
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Cualquier persona tiene derecho a obtener información sobre si estamos tratando datos personales que le conciernan o no. Puede ejercer sus derechos de:
              </p>
              <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-4">
                <li><strong>Acceso:</strong> Conocer qué datos personales tenemos sobre usted</li>
                <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
                <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos cuando proceda</li>
                <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos</li>
                <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento</li>
                <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
                <li><strong>Revocación del consentimiento:</strong> Retirar el consentimiento prestado</li>
              </ul>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Para ejercer estos derechos, puede dirigirse a:
              </p>
              <ul className="list-disc pl-6 text-muted dark:text-slate-300 space-y-2 mb-4">
                <li>Email: <a href="mailto:info@nataliachiva.com" className="text-beige dark:text-blue-gray hover:underline">info@nataliachiva.com</a></li>
                <li>Dirección postal: C/ Rualasal 11, 1 Dcha. 39001 Santander, Cantabria</li>
              </ul>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Asimismo, le informamos del derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-beige dark:text-blue-gray hover:underline">www.aepd.es</a>) si considera que el tratamiento no se ajusta a la normativa vigente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                8. Medidas de seguridad
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Hemos adoptado las medidas de seguridad técnicas y organizativas necesarias para garantizar la seguridad de sus datos y evitar su alteración, pérdida, tratamiento o acceso no autorizado, de acuerdo con el estado de la tecnología y la naturaleza de los datos almacenados.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                9. Actualización de la política de privacidad
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Nos reservamos el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales, así como a prácticas de la industria. Estas políticas estarán vigentes hasta que sean modificadas por otras debidamente publicadas.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                10. Contacto
              </h2>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                Para cualquier consulta sobre esta Política de Privacidad o sobre el tratamiento de sus datos personales, puede contactar con nosotros:
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
