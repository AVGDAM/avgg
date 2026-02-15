import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import SiteFooter from '@/components/SiteFooter';
import { Phone, Mail, CheckCircle2, ArrowRight, Target, TrendingUp, Zap } from 'lucide-react';
import Link from 'next/link';

interface SectorPageProps {
  sector: string;
  sectorPlural: string;
  icon: string;
  heroSubtitle: string;
  challenges: string[];
  solutions: { title: string; description: string }[];
  features: string[];
  faqs: { question: string; answer: string }[];
  caseStudy?: { business: string; result: string };
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export default function SectorPageTemplate({ data }: { data: SectorPageProps }) {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl">
                {data.icon}
              </div>
              <span className="text-sm text-gray-500 uppercase tracking-wider">
                Especialistas en {data.sectorPlural}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Diseño web para <span className="text-blue-600">{data.sectorPlural}</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-8">
              {data.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/34658873627?text=Hola%2C%20necesito%20una%20web%20para%20mi%20negocio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors font-medium"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Solicitar presupuesto gratuito
              </a>
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 text-gray-900 rounded-full hover:bg-gray-200 transition-colors font-medium"
              >
                Ver proyectos
              </Link>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="px-6 mb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Retos digitales de {data.sectorPlural}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Sabemos que como <strong>{data.sector}</strong> te enfrentas a desafíos específicos que otras empresas 
              no tienen. Por eso hemos diseñado soluciones web adaptadas a las necesidades reales de tu sector.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {data.challenges.map((challenge, i) => (
                <div key={i} className="p-6 bg-red-50 rounded-xl border border-red-100">
                  <p className="text-gray-800 font-medium">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Cómo ayudamos a {data.sectorPlural} a crecer online
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.solutions.map((solution, i) => (
                <div key={i} className="p-8 bg-gradient-to-br from-blue-50 to-violet-50 rounded-2xl border border-blue-100">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl font-bold mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features specific to sector */}
        <section className="px-6 mb-20">
          <div className="max-w-6xl mx-auto bg-white rounded-3xl p-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Funcionalidades esenciales para tu web de {data.sector}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats/Trust */}
        <section className="px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 p-12 bg-gray-900 text-white rounded-3xl">
              <div className="text-center">
                <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">+25</div>
                <div className="text-gray-300">Proyectos en tu sector</div>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-gray-300">Clientes satisfechos</div>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">&lt;24h</div>
                <div className="text-gray-300">Respuesta presupuesto</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case study if available */}
        {data.caseStudy && (
          <section className="px-6 mb-20">
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Caso de éxito real
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong>{data.caseStudy.business}</strong>
              </p>
              <p className="text-gray-600 leading-relaxed">
                {data.caseStudy.result}
              </p>
              <Link 
                href="/proyectos"
                className="inline-flex items-center gap-2 mt-6 text-blue-600 font-medium hover:text-blue-700"
              >
                Ver más proyectos
                <ArrowRight size={18} />
              </Link>
            </div>
          </section>
        )}

        {/* FAQs */}
        <section className="px-6 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Preguntas frecuentes - {data.sectorPlural}
            </h2>
            <div className="space-y-6">
              {data.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <summary className="cursor-pointer p-6 font-semibold text-lg text-gray-900 list-none flex items-center justify-between">
                    {faq.question}
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="px-6">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Impulsa tu {data.sector} con una web profesional
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Presupuesto personalizado para {data.sectorPlural}. Sin compromiso, sin sorpresas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+34658873627"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors font-medium"
              >
                <Phone size={18} />
                658 873 627
              </a>
              <a
                href="https://wa.me/34658873627?text=Hola%2C%20necesito%20una%20web%20para%20mi%20negocio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors font-medium"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="mailto:info@avgg.es"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
              >
                <Mail size={18} />
                info@avgg.es
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
