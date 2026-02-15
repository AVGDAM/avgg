import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import SiteFooter from '@/components/SiteFooter';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, Brain, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'GEO: Cómo posicionar tu web en ChatGPT y Perplexity | AVGG',
  description: 'Descubre cómo optimizar tu contenido para que las IAs como ChatGPT recomienden tu negocio cuando los usuarios pregunten.',
  openGraph: {
    title: 'GEO: Cómo posicionar tu web en ChatGPT y Perplexity',
    description: 'Descubre cómo optimizar tu contenido para que las IAs como ChatGPT recomienden tu negocio cuando los usuarios pregunten.',
    url: 'https://avgg.es/blog/geo-optimization-inteligencia-artificial',
    siteName: 'AVGG',
    locale: 'es_ES',
    type: 'article',
    publishedTime: '2026-02-13T00:00:00.000Z',
    authors: ['AVGG'],
    images: [
      {
        url: '/blog/blog-geo-ai.jpg',
        width: 1200,
        height: 630,
        alt: 'GEO - Optimización para Inteligencia Artificial',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GEO: Cómo posicionar tu web en ChatGPT y Perplexity',
    description: 'Optimiza tu contenido para IAs como ChatGPT.',
    images: ['/blog/blog-geo-ai.jpg'],
  },
  alternates: {
    canonical: 'https://avgg.es/blog/geo-optimization-inteligencia-artificial',
  },
};

export default function ArticlePage() {
  return (
    <>
      <Nav />
      <article className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Volver al blog
          </Link>

          <header className="mb-10">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full font-medium">SEO</span>
              <span className="flex items-center gap-1.5"><Calendar size={16} /> 10 Feb 2026</span>
              <span className="flex items-center gap-1.5"><Clock size={16} /> 7 min de lectura</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-8">
              GEO: Cómo posicionar tu web en ChatGPT y Perplexity
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              La nueva forma de SEO está aquí. Descubre cómo optimizar tu contenido para que las IAs como ChatGPT recomienden tu negocio cuando los usuarios pregunten.
            </p>
          </header>

          <div className="relative w-full h-[450px] rounded-3xl overflow-hidden mb-12 shadow-xl">
            <Image
              src="/blog/blog-geo-ia.jpg"
              alt="GEO - Optimización para motores de IA"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-xl max-w-none 
            prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-700 prose-p:leading-[1.8] prose-p:mb-6 prose-p:text-lg
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-ul:my-6 prose-ul:space-y-3
            prose-ol:my-6 prose-ol:space-y-3
            prose-li:text-gray-700 prose-li:text-lg prose-li:leading-relaxed">
            
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-600 p-8 rounded-r-2xl my-10 shadow-sm">
              <p className="text-xl text-gray-800 font-medium mb-0 leading-relaxed">
                <strong>Prueba esto ahora:</strong> Pregunta a ChatGPT "¿Qué agencia de diseño web me recomiendas en Santander?". Si no apareces, estás perdiendo clientes potenciales. Bienvenido al mundo del GEO (Generative Engine Optimization).
              </p>
            </div>

            <h2>El SEO tradicional está cambiando</h2>
            <p>
              El 40% de los jóvenes prefieren buscar en ChatGPT antes que en Google. Perplexity tiene ya 10 millones de usuarios activos mensuales. Google está integrando IA en sus resultados (AI Overviews). <strong>La forma en que la gente busca información está cambiando. Y rápido.</strong>
            </p>

            <h2 className="flex items-center gap-3">
              <Brain className="text-emerald-600" size={36} />
              ¿Qué es GEO?
            </h2>
            <p>
              GEO es la optimización de tu contenido para que los motores de búsqueda con IA (ChatGPT, Perplexity, Google AI Overviews, Bing Chat) recomienden tu negocio en sus respuestas.
            </p>

            <div className="not-prose bg-white border border-gray-200 rounded-3xl p-10 my-10 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Diferencia clave con SEO tradicional</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-600">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">SEO Tradicional</h4>
                  <p className="text-gray-700">Optimizas para aparecer en la lista de resultados de Google</p>
                </div>
                <div className="bg-emerald-50 rounded-2xl p-6 border-l-4 border-emerald-600">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">GEO (Nuevo)</h4>
                  <p className="text-gray-700">Optimizas para ser citado y recomendado EN la respuesta de la IA</p>
                </div>
              </div>
            </div>

            <h2>Por qué GEO importa AHORA</h2>
            
            <div className="not-prose grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
                <div className="text-4xl font-bold text-red-600 mb-2">40%</div>
                <p className="text-gray-700">de los jóvenes prefieren ChatGPT antes que Google</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
                <div className="text-4xl font-bold text-purple-600 mb-2">10M</div>
                <p className="text-gray-700">usuarios activos mensuales tiene Perplexity</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">-20%</div>
                <p className="text-gray-700">caída anual del tráfico de búsqueda tradicional</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                <div className="text-4xl font-bold text-green-600 mb-2">2026</div>
                <p className="text-gray-700">el año en que la IA cambió las búsquedas para siempre</p>
              </div>
            </div>

            <h2 className="flex items-center gap-3">
              <Sparkles className="text-emerald-600" size={36} />
              Estrategias GEO que funcionan
            </h2>

            <div className="not-prose space-y-6 my-10">
              <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-emerald-600">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Crea contenido en formato pregunta-respuesta</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Las IAs aman las FAQ. Estructura tu contenido como:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0 mt-1" />
                        <span>"¿Cuánto cuesta diseñar una web en Santander?" → Respuesta clara</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0 mt-1" />
                        <span>"¿Qué incluye un servicio de SEO?" → Lista detallada</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0 mt-1" />
                        <span>"¿Cómo elegir una agencia web?" → Guía paso a paso</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-emerald-600">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Usa datos estructurados (Schema.org)</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Marca tu contenido con Schema Markup. Las IAs lo leen perfectamente:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                        <span className="font-mono text-sm text-gray-700">LocalBusiness</span>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                        <span className="font-mono text-sm text-gray-700">Service</span>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                        <span className="font-mono text-sm text-gray-700">Review</span>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                        <span className="font-mono text-sm text-gray-700">FAQ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-emerald-600">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Genera contenido de alta calidad y profundidad</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Las IAs priorizan contenido completo y bien investigado.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-4">
                        <div className="font-bold text-red-900 mb-2">❌ Ejemplo malo</div>
                        <p className="text-sm text-gray-700">"Somos la mejor agencia web de Santander"</p>
                      </div>
                      <div className="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-4">
                        <div className="font-bold text-green-900 mb-2">✓ Ejemplo bueno</div>
                        <p className="text-sm text-gray-700">"Guía completa de diseño web en Santander: costes, plazos, tecnologías (2026)"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-emerald-600">4</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Optimiza para citación</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Escribe de forma que la IA pueda citar fácilmente:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0 mt-1" />
                        <span>Usa bullet points y listas numeradas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0 mt-1" />
                        <span>Define términos claramente</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0 mt-1" />
                        <span>Incluye estadísticas y datos concretos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0 mt-1" />
                        <span>Añade tu marca en contexto natural</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2>Caso real: Cómo posicionamos una clínica dental</h2>
            
            <div className="not-prose bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-3xl p-10 my-10">
              <h3 className="text-2xl font-bold mb-4">El desafío</h3>
              <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                Cliente: Clínica dental en Santander. Problema: No aparecía cuando preguntas a ChatGPT "¿Dentista recomendado en Santander?"
              </p>
              
              <h3 className="text-2xl font-bold mb-4 mt-8">Lo que hicimos</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <span className="text-sm text-blue-100">15 artículos FAQ</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <span className="text-sm text-blue-100">Schema Markup completo</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <span className="text-sm text-blue-100">Menciones en medios</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <span className="text-sm text-blue-100">Google Business optimizado</span>
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <div className="text-3xl font-bold mb-2">Resultado en 3 meses</div>
                <p className="text-blue-100 text-lg">ChatGPT empezó a recomendarla entre las top 3 clínicas dentales de Santander</p>
              </div>
            </div>

            <h2>Errores que matan tu GEO</h2>
            
            <div className="not-prose space-y-4 my-10">
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-6">
                <p className="text-gray-800"><strong>❌ Contenido generado 100% con IA sin revisión:</strong> Las IAs detectan contenido robótico</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-6">
                <p className="text-gray-800"><strong>❌ Keyword stuffing:</strong> Repetir palabras clave como loco ya no funciona</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-6">
                <p className="text-gray-800"><strong>❌ Información desactualizada:</strong> Las IAs priorizan contenido reciente</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-6">
                <p className="text-gray-800"><strong>❌ Falta de datos de contacto claros:</strong> Nombre, dirección, teléfono, email visibles</p>
              </div>
            </div>

            <h2>GEO + SEO = Estrategia ganadora</h2>
            <p>
              GEO no reemplaza al SEO, lo complementa. Tu estrategia ideal en 2026:
            </p>

            <div className="not-prose grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">SEO tradicional</h4>
                <p className="text-gray-700">Para aparecer en los primeros resultados de Google</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 border-2 border-emerald-200">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">GEO</h4>
                <p className="text-gray-700">Para ser citado en las respuestas de IA</p>
              </div>
              <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-2xl p-8 border-2 border-violet-200">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Local SEO</h4>
                <p className="text-gray-700">Para Google Maps y búsquedas locales</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border-2 border-orange-200">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Social proof</h4>
                <p className="text-gray-700">Reseñas y menciones en redes y medios</p>
              </div>
            </div>

            <h2>Conclusión: Adelántate a tu competencia</h2>
            <p>
              La mayoría de empresas aún no saben qué es GEO. Si empiezas ahora, tendrás ventaja de 2-3 años sobre tu competencia.
            </p>
            <p>
              El futuro del marketing online no es aparecer en la página 1 de Google. <strong>Es ser LA respuesta que la IA da cuando alguien pregunta.</strong>
            </p>

            <div className="not-prose bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 mt-12 text-white">
              <h3 className="text-2xl font-bold mb-3">¿Quieres optimizar tu web para GEO?</h3>
              <p className="mb-6 text-emerald-50 leading-relaxed">
                En AVGG implementamos estrategias GEO + SEO para que aparezcas tanto en Google como en ChatGPT, Perplexity y otras IAs.
              </p>
              <Link href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 rounded-full hover:bg-emerald-50 transition-colors font-bold">
                Analiza tu visibilidad en IAs →
              </Link>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <Link href="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group">
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                Volver al blog
              </Link>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Share2 size={18} />
                Compartir
              </button>
            </div>
          </div>
        </div>
      </article>
      <SiteFooter />
    </>
  );
}
