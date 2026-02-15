import type { Metadata } from "next";
import Link from "next/link";
import { User, Users, Home as HomeIcon, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Terapia Psicológica Santander - Individual, Pareja y Familia",
  description: "Terapia individual, de pareja y familiar en Santander. Apoyo psicológico especializado para adultos y adolescentes. Natalia Chiva - Psicóloga Sanitaria.",
  alternates: {
    canonical: "https://www.nataliachiva.com/terapia",
  },
  openGraph: {
    title: "Terapia Psicológica en Santander - Natalia Chiva",
    description: "Terapia individual, de pareja y familiar. Psicóloga sanitaria especializada en Santander.",
    url: "https://www.nataliachiva.com/terapia",
    type: "website",
    images: ["/natalia-chiva.png"],
  },
};

export default function TerapiaPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-beige/30 to-white dark:from-slate-900 dark:to-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-navy dark:text-slate-100 sm:text-5xl mb-4">
              Terapia
            </h1>
            <p className="text-lg text-muted dark:text-slate-300 max-w-3xl mx-auto">
              Psicóloga Sanitaria en Santander, terapia individual y de pareja. Apoyo y acompañamiento psicológico adultos y adolescentes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-slate-800/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-navy dark:text-slate-100 mb-12 text-center">
            Qué ofrecemos:
          </h2>

          <div className="space-y-16">
            {/* Terapia Individual */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-beige text-white">
                    <User size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy dark:text-slate-100">
                    Terapia individual
                  </h3>
                </div>
                <div className="space-y-4 text-muted dark:text-slate-300">
                  <p>
                    El objetivo de la terapia individual es comprenderse a uno mismo, así como aprender herramientas y estrategias que nos permitirán afrontar mejor las distintas situaciones de nuestro día a día.
                  </p>
                  <p>
                    Además, servirá para superar con mayor facilidad las crisis que podamos atravesar a lo largo del ciclo vital y favorecerá el crecimiento y desarrollo personal dirigiéndonos a nuestras metas y objetivos, y obteniendo una mayor calidad de vida.
                  </p>
                  <p className="font-medium text-navy dark:text-blue-gray-light">
                    Ofrecemos terapia individual para <strong>adultos y adolescentes</strong> en modalidad online y presencial.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-slate-900/50 rounded-xl p-6">
                <h4 className="font-semibold text-navy dark:text-slate-100 mb-4">Áreas de trabajo:</h4>
                <ul className="space-y-2">
                  {[
                    "Ansiedad",
                    "Depresión",
                    "Miedos",
                    "Conflictos sociales",
                    "Estrés laboral",
                    "Estrés figura del cuidador",
                    "Desarrollo personal",
                    "Psicoeducación y Gestión emocional",
                    "Habilidades sociales y de comunicación",
                    "Estrategias para el estudio y motivación"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted dark:text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-beige shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3">
                  <Link href="/consultas-online" className="inline-block px-4 py-2 bg-blue-gray text-white text-sm rounded-lg hover:bg-blue-gray-dark transition">
                    Online
                  </Link>
                  <Link href="/consultas-presenciales" className="inline-block px-4 py-2 bg-navy text-white text-sm rounded-lg hover:bg-navy-light transition">
                    Presencial
                  </Link>
                </div>
              </div>
            </div>

            {/* Terapia de Pareja */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-gray text-white">
                    <Users size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy dark:text-slate-100">
                    Terapia de pareja
                  </h3>
                </div>
                <div className="space-y-4 text-muted dark:text-slate-300">
                  <p>
                    El objetivo de la terapia de pareja es mejorar la relación entre dos personas que tienen un proyecto de vida común. Entre otros aspectos es importante trabajar la comunicación, la resolución de conflictos y el establecimiento de un vínculo seguro y saludable.
                  </p>
                  <p>
                    Es importante que exista un compromiso por parte de las personas que participan en la terapia para conseguir los objetivos de una manera eficaz, favoreciendo a la recuperación de la estabilidad y el bienestar.
                  </p>
                  <p className="font-medium text-navy dark:text-blue-gray-light">
                    Ofrecemos terapia de <strong>pareja</strong> en modalidad presencial.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-slate-900/50 rounded-xl p-6">
                <h4 className="font-semibold text-navy dark:text-slate-100 mb-4">Áreas de trabajo:</h4>
                <ul className="space-y-2">
                  {[
                    "Conflictos de comunicación",
                    "Conflictos con la familia de origen",
                    "Roles en la pareja"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted dark:text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-blue-gray shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href="/consultas-presenciales" className="inline-block px-4 py-2 bg-navy text-white text-sm rounded-lg hover:bg-navy-light transition">
                    Presencial
                  </Link>
                </div>
              </div>
            </div>

            {/* Terapia de Familia */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-white">
                    <HomeIcon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy dark:text-slate-100">
                    Terapia de familia
                  </h3>
                </div>
                <div className="space-y-4 text-muted dark:text-slate-300">
                  <p>
                    El objetivo de la terapia de familia es mejorar el clima y la relación de todos los miembros del núcleo familiar ya que, en ocasiones, debido a la falta de comunicación se producen malentendidos que conducen a diferentes conflictos en la familia.
                  </p>
                  <p>
                    También, es importante que exista un compromiso por parte de las personas que formen parte de la terapia para conseguir alcanzar los objetivos que se planteen y recuperar un ambiente cálido y confortable.
                  </p>
                  <p className="font-medium text-navy dark:text-blue-gray-light">
                    Ofrecemos terapia <strong>de familia</strong> en modalidad presencial.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-slate-900/50 rounded-xl p-6">
                <h4 className="font-semibold text-navy dark:text-slate-100 mb-4">Áreas de trabajo:</h4>
                <ul className="space-y-2">
                  {[
                    "Conflictos de comunicación",
                    "Parentalidad Positiva",
                    "Roles en la familia"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted dark:text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-navy shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href="/consultas-presenciales" className="inline-block px-4 py-2 bg-navy text-white text-sm rounded-lg hover:bg-navy-light transition">
                    Presencial
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-navy dark:text-slate-100 mb-6 text-center">
            Cómo trabajamos:
          </h2>
          <div className="max-w-3xl mx-auto mb-12 space-y-4 text-muted dark:text-slate-300">
            <p>
              Cada persona con la que trabajamos es única, por eso, escuchamos cada demanda y personificamos la atención estableciendo objetivos individualizados. Además, no tenemos solo en cuenta las dificultades si no también ponemos el foco de atención en las fortalezas porque creemos que son el motor para que cada persona avance en cada etapa del ciclo vital.
            </p>
            <p>
              También ponemos en valor la capacidad de las personas para buscar un apoyo profesional para conseguir sus metas y objetivos y, por tanto, mejorar su calidad de vida.
            </p>
            <p>
              También, consideramos que establecer una <strong className="text-navy dark:text-blue-gray-light">alianza o vínculo terapéutico</strong> mediante escucha activa, empatía y comprensión entre la persona y el psicólogo o psicóloga es fundamental para poder desarrollar la terapia.
            </p>
            <p className="font-medium text-navy dark:text-blue-gray-light">
              El procedimiento que se seguirá tras el primer contacto se resumen en cuatro pasos:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                numero: "1",
                titulo: "Recogida de información y evaluación:",
                descripcion: "Escucha activa de la demanda de cada persona y análisis de sus necesidades mediante una entrevista inicial y el uso de cuestionarios si se valora oportuno para una exhaustiva recogida de información."
              },
              {
                numero: "2",
                titulo: "Desarrollo de la terapia:",
                descripcion: "Aprendizaje de distintas herramientas y estrategias que permitan a la persona alcanzar los objetivos terapéuticos, así como enfrentarse a los distintos retos de su vida diaria y conocerse mejor."
              },
              {
                numero: "3",
                titulo: "Planteamiento de objetivos terapéuticos:",
                descripcion: "Acuerdo y establecimiento de objetivos terapéuticos individualizados y ajustados a las necesidades de cada persona cuyo fin último es mejorar su calidad de vida."
              },
              {
                numero: "4",
                titulo: "Seguimiento:",
                descripcion: "Observación de la evolución de la persona tras el proceso terapéutico y los cambios establecidos a lo largo del tiempo. Apoyo y prevención de recaídas."
              }
            ].map((paso) => (
              <div key={paso.numero} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-beige text-white font-bold text-xl mb-4">
                  {paso.numero}
                </div>
                <h3 className="font-semibold text-navy dark:text-slate-100 mb-3">
                  {paso.titulo}
                </h3>
                <p className="text-sm text-muted dark:text-slate-300">
                  {paso.descripcion}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contacto"
              className="inline-block rounded-lg bg-navy px-8 py-3 text-white font-medium transition hover:bg-navy-light dark:bg-blue-gray dark:hover:bg-blue-gray-light"
            >
              Contacta con nosotros
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
