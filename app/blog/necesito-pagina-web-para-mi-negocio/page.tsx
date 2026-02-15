import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import SiteFooter from '@/components/SiteFooter';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, AlertTriangle, CheckCircle2, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: '¿Necesito realmente una página web para mi negocio? | AVGG',
  description: 'Si tu competencia aparece en Google y tú no, estás perdiendo clientes. Te explicamos por qué tener web ya no es opcional en 2026.',
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
              <span className="px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full font-medium">Diseño Web</span>
              <span className="flex items-center gap-1.5"><Calendar size={16} /> 8 Feb 2026</span>
              <span className="flex items-center gap-1.5"><Clock size={16} /> 6 min de lectura</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-8">
              ¿Necesito realmente una página web para mi negocio?
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Si tu competencia aparece en Google y tú no, estás perdiendo clientes. Te explicamos por qué tener web ya no es opcional en 2026.
            </p>
          </header>

          <div className="relative w-full h-[450px] rounded-3xl overflow-hidden mb-12 shadow-xl">
            <Image
              src="/blog/blog-necesito-web.jpg"
              alt="¿Necesitas una página web para tu negocio?"
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
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-600 p-8 rounded-r-2xl my-10 shadow-sm">
              <p className="text-xl text-gray-800 font-medium mb-0 leading-relaxed">
                <strong>Respuesta rápida:</strong> Sí. En 2026, no tener web es como no tener teléfono hace 20 años. El 87% de los consumidores busca online antes de comprar, incluso productos locales.
              </p>
            </div>

            <h2>La pregunta que muchos se hacen (y la respuesta que no quieren oír)</h2>
            <p>
              "Yo ya tengo Instagram, ¿para qué necesito una web?". "Mi negocio es local, la gente me conoce". "Las webs son caras y complicadas".
            </p>
            <p>
              Si alguna vez has pensado esto, déjame contarte una historia real.
            </p>

            <div className="not-prose bg-red-50 border-2 border-red-200 rounded-3xl p-10 my-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <AlertTriangle className="text-red-600" size={32} />
                Caso real: El fontanero que perdió 50.000€
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Juan tiene una fontanería en Santander. Buen profesional, 15 años de experiencia, clientes satisfechos. Pero sin web.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Su competencia (menos experiencia, mismos precios) creó una web. Resultado:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">-40%</div>
                  <div className="text-sm text-gray-700">Llamadas mensuales</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">70%</div>
                  <div className="text-sm text-gray-700">Clientes buscan online primero</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">50k€</div>
                  <div className="text-sm text-gray-700">Perdidos en 1 año</div>
                </div>
              </div>
            </div>

            <h2>Por qué SÍ necesitas una web en 2026</h2>

            <div className="not-prose space-y-6 my-10">
              <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Tu competencia YA tiene web</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Cuando alguien busca "fontanero en Santander", ¿quién crees que aparece? Tu competencia. Y quien aparece primero, gana el cliente.
                    </p>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <p className="text-gray-700 mb-0">
                        <strong>Dato:</strong> El 75% de los usuarios nunca pasa de la primera página de Google. Si no estás ahí, no existes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-violet-600">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">La gente busca online ANTES de llamar</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Incluso para servicios locales, el 87% de personas busca online primero. Quieren ver:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Precios orientativos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Opiniones de otros clientes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Fotos de trabajos anteriores</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Información de contacto clara</span>
                      </li>
                    </ul>
                    <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mt-6">
                      <p className="text-gray-700 mb-0">
                        <strong>Sin web, pierdes clientes antes de que te conozcan.</strong>
                      </p>
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Instagram no es suficiente</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Instagram está bien para visibilidad, pero:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-6">
                        <h4 className="font-bold text-red-900 mb-3">❌ Problemas de Instagram</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• No apareces en Google</li>
                          <li>• Dependes del algoritmo</li>
                          <li>• No puedes posicionarte por keywords</li>
                          <li>• Difícil de encontrar para nuevos clientes</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-6">
                        <h4 className="font-bold text-green-900 mb-3">✓ Ventajas de tener web</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Aparecer en Google 24/7</li>
                          <li>• Controlas tu contenido</li>
                          <li>• SEO para captar búsquedas</li>
                          <li>• Te encuentran por servicios específicos</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-orange-600">4</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Una web trabaja por ti 24/7</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Mientras duermes, tu web:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <TrendingUp className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                        <span><strong>Capta clientes potenciales</strong> con formularios de contacto</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <TrendingUp className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                        <span><strong>Responde preguntas frecuentes</strong> sin que tengas que estar disponible</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <TrendingUp className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                        <span><strong>Muestra tu portfolio</strong> y genera confianza</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <TrendingUp className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                        <span><strong>Posiciona tu marca</strong> como profesional y seria</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-pink-600">5</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Transmite profesionalidad y confianza</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Piensa: ¿A quién le confiarías 5.000€ de reforma?
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-2">Empresa A</h4>
                        <p className="text-sm text-gray-600">Solo Instagram, sin web, número de móvil</p>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-600">
                        <h4 className="font-bold text-blue-900 mb-2">Empresa B</h4>
                        <p className="text-sm text-gray-700">Web profesional, portfolio, reseñas, datos fiscales</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mt-4 mb-0">
                      <strong>La respuesta es obvia.</strong> Una web transmite seriedad, compromiso y permanencia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2>¿Pero no son muy caras las webs?</h2>
            <p>
              Aquí el miedo principal: el precio. Pero hagamos números:
            </p>

            <div className="not-prose bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-10 my-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cálculo de retorno de inversión (ROI)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-green-200">
                  <span className="text-lg text-gray-700">Inversión en web profesional</span>
                  <span className="text-2xl font-bold text-gray-900">2.500€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-green-200">
                  <span className="text-lg text-gray-700">Clientes extra por mes (promedio)</span>
                  <span className="text-2xl font-bold text-gray-900">2-3</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-green-200">
                  <span className="text-lg text-gray-700">Ticket medio por cliente</span>
                  <span className="text-2xl font-bold text-gray-900">800€</span>
                </div>
                <div className="flex justify-between items-center py-4 bg-green-600 text-white rounded-xl px-6 mt-4">
                  <span className="text-lg font-medium">Recuperas la inversión en</span>
                  <span className="text-3xl font-bold">2 meses</span>
                </div>
              </div>
              <p className="text-gray-700 mt-6 mb-0">
                <strong>Y la web sigue trabajando para ti durante años.</strong>
              </p>
            </div>

            <h2>¿Cuándo NO necesitas una web?</h2>
            <p>
              Seamos honestos. Hay casos donde quizás no sea prioritario:
            </p>
            <ul>
              <li>Tienes 60+ años y te vas a jubilar en 2 años</li>
              <li>Tu negocio depende 100% de contratos con empresas (no B2C)</li>
              <li>Trabajas exclusivamente por recomendación y tienes lista de espera de meses</li>
            </ul>
            <p>
              <strong>Pero si no estás en ninguno de esos casos, necesitas una web. Ya.</strong>
            </p>

            <h2>Conclusión: No es opcional, es supervivencia</h2>
            <p>
              En 2026, no tener web es como un restaurante sin carta. Técnicamente puedes funcionar, pero estás perdiendo el 80% de clientes potenciales.
            </p>
            <p>
              Tu competencia ya está online. Los clientes ya buscan online. Las IAs como ChatGPT ya recomiendan empresas que encuentran... online.
            </p>
            <p className="text-2xl font-bold text-gray-900">
              La pregunta no es "¿necesito una web?". La pregunta es "¿cuántos clientes más estoy dispuesto a perder?"
            </p>

            <div className="not-prose bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl p-8 mt-12 text-white">
              <h3 className="text-2xl font-bold mb-3">¿Listo para dejar de perder clientes?</h3>
              <p className="mb-6 text-amber-50 leading-relaxed">
                En AVGG creamos webs profesionales desde 1.500€. Presupuesto sin compromiso en 24h. Empieza a captar clientes online hoy.
              </p>
              <Link href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-600 rounded-full hover:bg-amber-50 transition-colors font-bold">
                Solicitar presupuesto gratuito →
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
