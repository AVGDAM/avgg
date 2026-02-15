import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Heart, Video, MapPin, Phone, MessageCircle, Brain, Users, Briefcase, Smile, Shield, ChevronDown } from "lucide-react";
import GoogleReviews from "@/components/GoogleReviews";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ReviewSchema from "@/components/ReviewSchema";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Psicóloga en Santander - Natalia Chiva | Terapia Individual y de Pareja",
  description: "Psicóloga sanitaria en Santander. Especialista en ansiedad, depresión, terapia de pareja y familia. Consulta presencial y online. Primera cita gratuita. ☎️ 649 493 778",
  alternates: {
    canonical: "https://www.nataliachiva.com",
  },
  openGraph: {
    title: "Psicóloga en Santander - Natalia Chiva",
    description: "Psicóloga sanitaria especializada en ansiedad, depresión y terapia de pareja. Consulta presencial en Santander y online.",
    url: "https://www.nataliachiva.com",
    siteName: "Natalia Chiva - Psicóloga Santander",
    images: [
      {
        url: "/natalia-chiva.png",
        width: 800,
        height: 600,
        alt: "Natalia Chiva - Psicóloga Sanitaria en Santander",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicóloga en Santander - Natalia Chiva",
    description: "Especialista en ansiedad, depresión y terapia de pareja. Consulta presencial y online.",
    images: ["/natalia-chiva.png"],
  },
};

export default function Home() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "https://www.nataliachiva.com" }
      ]} />
      <ReviewSchema rating={5.0} reviewCount={50} />
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl font-bold tracking-tight text-navy dark:text-slate-100 sm:text-4xl lg:text-5xl">
              Psicóloga en Santander - Natalia Chiva
            </h1>
            <p className="mt-4 text-lg text-muted dark:text-slate-300 leading-relaxed">
              <strong>Psicóloga General Sanitaria</strong> colegiada en Santander especializada en <strong>ansiedad, depresión, terapia de pareja y familia</strong>. 
            </p>
            <p className="mt-3 text-base text-muted dark:text-slate-400 leading-relaxed">
              Más de 5 años de experiencia ayudando a personas como tú a superar sus dificultades emocionales. Consulta <strong>presencial en Centro Rualasal</strong> y <strong>terapia online</strong> para toda España.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://www.mundoctor.com/psicologia/santander/natalia-chiva-montoya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-beige px-6 py-3 text-white font-semibold transition hover:bg-beige-dark dark:bg-blue-gray dark:hover:bg-blue-gray-light"
              >
                Reservar Cita
              </a>
              <a
                href="tel:+34649493778"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-beige text-beige dark:border-blue-gray dark:text-blue-gray px-6 py-3 font-semibold transition hover:bg-beige hover:text-white dark:hover:bg-blue-gray dark:hover:text-white"
              >
                <Phone className="h-5 w-5" />
                649 493 778
              </a>
              <a
                href="https://wa.me/34649493778"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-[#25D366] w-12 h-12 text-white transition hover:bg-[#20BA5A]"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative max-w-md mx-auto overflow-hidden rounded-lg shadow-xl bg-blue-gray">
              <Image
                src="/natalia-chiva.png"
                alt="Natalia Chiva - Psicóloga Sanitaria en Santander"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800/30 py-16 sm:py-20" aria-labelledby="servicios-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="servicios-heading" className="text-center text-2xl font-bold text-navy dark:text-slate-100 sm:text-3xl mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/terapia"
              className="group flex flex-col rounded-xl border border-gray-200 bg-beige p-6 shadow-sm transition hover:shadow-lg dark:border-slate-700 dark:bg-beige-dark"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/80 text-beige-dark dark:bg-slate-800/80 dark:text-beige-light" aria-hidden>
                <Heart size={24} />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-white dark:text-slate-100">
                TERAPIA
              </h3>
              <p className="mt-2 text-white/90 dark:text-slate-300">
                Adultos, Adolescentes, Pareja y Familias
              </p>
              <span className="mt-4 text-sm font-medium text-white dark:text-slate-200 group-hover:underline">
                Tipos de Terapia →
              </span>
            </Link>

            <Link
              href="/consultas-online"
              className="group flex flex-col rounded-xl border border-gray-200 bg-blue-gray p-6 shadow-sm transition hover:shadow-lg dark:border-slate-700 dark:bg-blue-gray-dark"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/80 text-blue-gray-dark dark:bg-slate-800/80 dark:text-blue-gray-light" aria-hidden>
                <Video size={24} />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-white dark:text-slate-100">
                CONSULTAS ONLINE
              </h3>
              <p className="mt-2 text-white/90 dark:text-slate-300">
                Descubre la terapia online y algunos de sus beneficios.
              </p>
              <span className="mt-4 text-sm font-medium text-white dark:text-slate-200 group-hover:underline">
                Telepsicología →
              </span>
            </Link>

            <Link
              href="/consultas-presenciales"
              className="group flex flex-col rounded-xl border border-gray-200 bg-navy p-6 shadow-sm transition hover:shadow-lg dark:border-slate-700 dark:bg-navy-dark"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/80 text-navy-dark dark:bg-slate-800/80 dark:text-navy-light" aria-hidden>
                <MapPin size={24} />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-white dark:text-slate-100">
                CONSULTA PRESENCIAL
              </h3>
              <p className="mt-2 text-white/90 dark:text-slate-300">
                C/Rualasal nº 11, 1º Dcha. Santander, Cantabria.
              </p>
              <span className="mt-4 text-sm font-medium text-white dark:text-slate-200 group-hover:underline">
                Ponte en contacto →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Problemas que trato */}
      <section className="border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50 py-16 sm:py-20" aria-labelledby="problemas-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 id="problemas-heading" className="text-2xl font-bold text-navy dark:text-slate-100 sm:text-3xl mb-4">
              ¿En qué puedo ayudarte?
            </h2>
            <p className="text-lg text-muted dark:text-slate-300 max-w-2xl mx-auto">
              Especialista en los problemas emocionales más comunes. Tratamiento personalizado con enfoque integrativo.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/psicologo-ansiedad-santander" className="group flex items-start gap-4 rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm border border-gray-200 dark:border-slate-700 hover:shadow-lg hover:border-beige dark:hover:border-blue-gray transition">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-slate-700 text-beige dark:text-blue-gray">
                <Brain className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-semibold text-navy dark:text-slate-100 group-hover:text-beige dark:group-hover:text-blue-gray transition-colors">Ansiedad y Estrés</h3>
                <p className="mt-1 text-sm text-muted dark:text-slate-400">Ansiedad generalizada, ataques de pánico, fobias, agorafobia y estrés crónico.</p>
              </div>
            </Link>
            <Link href="/aprende/depresion" className="group flex items-start gap-4 rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm border border-gray-200 dark:border-slate-700 hover:shadow-lg hover:border-beige dark:hover:border-blue-gray transition">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-slate-700 text-beige dark:text-blue-gray">
                <Heart className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-semibold text-navy dark:text-slate-100 group-hover:text-beige dark:group-hover:text-blue-gray transition-colors">Depresión</h3>
                <p className="mt-1 text-sm text-muted dark:text-slate-400">Tristeza persistente, falta de motivación, depresión mayor y trastornos del estado de ánimo.</p>
              </div>
            </Link>
            <Link href="/terapia-pareja-santander" className="group flex items-start gap-4 rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm border border-gray-200 dark:border-slate-700 hover:shadow-lg hover:border-beige dark:hover:border-blue-gray transition">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-slate-700 text-beige dark:text-blue-gray">
                <Users className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-semibold text-navy dark:text-slate-100 group-hover:text-beige dark:group-hover:text-blue-gray transition-colors">Terapia de Pareja</h3>
                <p className="mt-1 text-sm text-muted dark:text-slate-400">Comunicación, conflictos, infidelidad, celos y reconstrucción de la confianza.</p>
              </div>
            </Link>
            <Link href="/aprende/estres-laboral" className="group flex items-start gap-4 rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm border border-gray-200 dark:border-slate-700 hover:shadow-lg hover:border-beige dark:hover:border-blue-gray transition">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-slate-700 text-beige dark:text-blue-gray">
                <Briefcase className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-semibold text-navy dark:text-slate-100 group-hover:text-beige dark:group-hover:text-blue-gray transition-colors">Estrés Laboral y Burnout</h3>
                <p className="mt-1 text-sm text-muted dark:text-slate-400">Agotamiento profesional, ansiedad laboral, dificultad para desconectar y mobbing.</p>
              </div>
            </Link>
            <Link href="/aprende/autoestima" className="group flex items-start gap-4 rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm border border-gray-200 dark:border-slate-700 hover:shadow-lg hover:border-beige dark:hover:border-blue-gray transition">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-slate-700 text-beige dark:text-blue-gray">
                <Smile className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-semibold text-navy dark:text-slate-100 group-hover:text-beige dark:group-hover:text-blue-gray transition-colors">Autoestima y Desarrollo Personal</h3>
                <p className="mt-1 text-sm text-muted dark:text-slate-400">Inseguridad, autocrítica excesiva, gestión emocional y crecimiento personal.</p>
              </div>
            </Link>
            <Link href="/aprende/duelo" className="group flex items-start gap-4 rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm border border-gray-200 dark:border-slate-700 hover:shadow-lg hover:border-beige dark:hover:border-blue-gray transition">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-slate-700 text-beige dark:text-blue-gray">
                <Shield className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-semibold text-navy dark:text-slate-100 group-hover:text-beige dark:group-hover:text-blue-gray transition-colors">Duelo y Pérdidas</h3>
                <p className="mt-1 text-sm text-muted dark:text-slate-400">Proceso de duelo, pérdidas significativas, acompañamiento emocional y superación.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section className="border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800/30 py-16 sm:py-20" aria-labelledby="sobre-mi-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-4">
            <p className="text-sm text-muted dark:text-slate-400 uppercase tracking-wider">
              Consultas de Psicología Natalia Chiva
            </p>
          </div>
          <h2 id="sobre-mi-heading" className="text-center text-2xl font-bold text-navy dark:text-slate-100 sm:text-3xl mb-8">
            ¿Quiénes somos?
          </h2>
          <div className="mx-auto max-w-3xl space-y-4 text-muted dark:text-slate-300 text-lg leading-relaxed">
            <p>
              Mi nombre es Natalia Chiva. Soy Psicóloga Sanitaria con especial experiencia en ansiedad, estrés, gestión emocional, autoestima, y estado de ánimo. Trabajo desde una perspectiva integradora con el objetivo de apoyar y acompañar a las personas que acuden a mi consulta, ofreciéndoles una atención individualizada desde la empatía, la comprensión y la escucha activa.
            </p>
            <p className="text-center font-medium text-navy dark:text-blue-gray-light">
              ¡No dudes en ponerte en contacto conmigo!
            </p>
            <div className="text-center pt-4">
              <Link
                href="/contacto"
                className="inline-block rounded-lg bg-navy px-6 py-3 text-white font-medium transition hover:bg-navy-light dark:bg-blue-gray dark:hover:bg-blue-gray-light"
              >
                Contacta con nosotros
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800/30 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm text-beige dark:text-beige-light uppercase tracking-wider mb-2">
                Psicóloga General Sanitaria nºcol: CA00989
              </p>
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 mb-6">
                Natalia Chiva Montoya
              </h2>
              <div className="space-y-4 text-muted dark:text-slate-300 leading-relaxed">
                <p>
                  Decidí hacer la carrera de Psicología graduándome en la Universidad de Salamanca. Después, realicé el Máster de Psicología General Sanitaria en la Universidad Pontificia de Comillas de Madrid con mención en terapia sistémica familiar y de pareja.
                </p>
                <p>
                  Además, y debido a mis ganas de seguir aprendiendo hice el Máster en Apoyos a Personas con Discapacidad Intelectual y/o del Desarrollo y sus familias de la Universidad Autónoma de Madrid y Plena Inclusión.
                </p>
                <p>
                  Desde entonces sigo formándome como psicoterapeuta y he finalizado el Máster de Psicoterapia Integradora, Trauma y Apego de la UDIMA y NB psicología. Mi objetivo es acompañar a las personas para que puedan obtener una mayor calidad de vida.
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="https://www.linkedin.com/in/natalia-chiva-montoya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0077b5] px-6 py-3 text-white font-medium transition hover:bg-[#006399]"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-80 h-80">
                <div className="rounded-full overflow-hidden shadow-lg w-full h-full flex items-center justify-center">
                  <Image
                    src="/logo-natalia-chiva.png"
                    alt="Logo Natalia Chiva - Consultas de Psicología"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800/30 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-navy dark:text-blue-gray-light mb-2">1/4</div>
              <p className="text-sm text-muted dark:text-slate-400">
                Personas han presentado o presenta un problema de salud mental
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-navy dark:text-blue-gray-light mb-2">2030</div>
              <p className="text-sm text-muted dark:text-slate-400">
                En el año 2030 la depresión será la primera causa de discapacidad
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-navy dark:text-blue-gray-light mb-2">Covid-19</div>
              <p className="text-sm text-muted dark:text-slate-400">
                La próxima ola de la COVID-19 será de salud mental
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-navy dark:text-blue-gray-light mb-2">4,3</div>
              <p className="text-sm text-muted dark:text-slate-400">
                En España hay 4,3 psicólogos por cada 100.000 habitantes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviews />

      {/* FAQ Section */}
      <FAQSchema faqs={[
        { question: "¿Cuánto cuesta una sesión de psicología en Santander?", answer: "La terapia individual tiene un precio de 60€ por sesión (45-60 minutos) y la terapia de pareja 75€ por sesión (60 minutos). También trabajamos con aseguradoras como Adeslas y Santalucía." },
        { question: "¿La primera consulta es gratuita?", answer: "Sí, ofrecemos una primera toma de contacto gratuita para que puedas conocerme, explicar tu situación y resolver cualquier duda antes de empezar el proceso terapéutico." },
        { question: "¿Cuántas sesiones necesitaré?", answer: "Depende de cada persona y su situación. Generalmente, los resultados empiezan a notarse entre la 6ª y 8ª sesión. Un tratamiento de ansiedad suele durar entre 12 y 20 sesiones con terapia cognitivo-conductual." },
        { question: "¿La terapia online es igual de efectiva que la presencial?", answer: "Sí, numerosos estudios científicos demuestran que la terapia online tiene la misma efectividad que la presencial. Realizamos las sesiones por videoconferencia segura (Google Meet/Zoom) con total confidencialidad." },
        { question: "¿Cómo sé si necesito ir al psicólogo?", answer: "Si sientes malestar emocional que afecta a tu día a día, dificultades para manejar el estrés, problemas en tus relaciones o simplemente quieres mejorar tu bienestar, la terapia puede ayudarte. No necesitas estar en crisis para pedir ayuda." },
        { question: "¿Dónde está la consulta en Santander?", answer: "La consulta está en el Centro Rualasal, C/ Rualasal 11, 1º Dcha, 39001 Santander. Es una ubicación céntrica, bien comunicada por transporte público y con parking cercano." },
      ]} />
      <section className="border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50 py-16 sm:py-20" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="text-2xl font-bold text-navy dark:text-slate-100 sm:text-3xl mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-muted dark:text-slate-300">
              Resolvemos tus dudas sobre la terapia psicológica en Santander
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "¿Cuánto cuesta una sesión de psicología en Santander?",
                a: "La terapia individual tiene un precio de 60€ por sesión (45-60 minutos) y la terapia de pareja 75€ por sesión (60 minutos). También trabajamos con aseguradoras como Adeslas y Santalucía.",
              },
              {
                q: "¿La primera consulta es gratuita?",
                a: "Sí, ofrecemos una primera toma de contacto gratuita para que puedas conocerme, explicar tu situación y resolver cualquier duda antes de empezar el proceso terapéutico.",
              },
              {
                q: "¿Cuántas sesiones necesitaré?",
                a: "Depende de cada persona y su situación. Generalmente, los resultados empiezan a notarse entre la 6ª y 8ª sesión. Un tratamiento de ansiedad suele durar entre 12 y 20 sesiones con terapia cognitivo-conductual.",
              },
              {
                q: "¿La terapia online es igual de efectiva que la presencial?",
                a: "Sí, numerosos estudios científicos demuestran que la terapia online tiene la misma efectividad que la presencial. Realizamos las sesiones por videoconferencia segura (Google Meet/Zoom) con total confidencialidad.",
              },
              {
                q: "¿Cómo sé si necesito ir al psicólogo?",
                a: "Si sientes malestar emocional que afecta a tu día a día, dificultades para manejar el estrés, problemas en tus relaciones o simplemente quieres mejorar tu bienestar, la terapia puede ayudarte. No necesitas estar en crisis para pedir ayuda.",
              },
              {
                q: "¿Dónde está la consulta en Santander?",
                a: "La consulta está en el Centro Rualasal, C/ Rualasal 11, 1º Dcha, 39001 Santander. Es una ubicación céntrica, bien comunicada por transporte público y con parking cercano.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-left font-semibold text-navy dark:text-slate-100 hover:text-beige dark:hover:text-blue-gray transition-colors [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-muted dark:text-slate-400 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-muted dark:text-slate-300 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
