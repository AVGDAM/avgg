import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import SiteFooter from '@/components/SiteFooter';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, ShoppingCart, Instagram as InstagramIcon, CheckCircle2, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tienda online vs Instagram: ¿Dónde vender mejor en 2026? | AVGG',
  description: 'Vender por Instagram está bien, pero sin web propia dependes de algoritmos ajenos. Descubre por qué necesitas tu propia tienda online.',
  openGraph: {
    title: 'Tienda online vs Instagram: ¿Dónde vender mejor en 2026?',
    description: 'Vender por Instagram está bien, pero sin web propia dependes de algoritmos ajenos. Descubre por qué necesitas tu propia tienda online.',
    url: 'https://avgg.es/blog/tienda-online-vs-redes-sociales',
    siteName: 'AVGG',
    locale: 'es_ES',
    type: 'article',
    publishedTime: '2026-02-12T00:00:00.000Z',
    authors: ['AVGG'],
    images: [
      {
        url: '/blog/blog-tienda-vs-rrss.jpg',
        width: 1200,
        height: 630,
        alt: 'Tienda online vs Redes Sociales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tienda online vs Instagram: ¿Dónde vender mejor en 2026?',
    description: 'Por qué necesitas tu propia tienda online.',
    images: ['/blog/blog-tienda-vs-rrss.jpg'],
  },
  alternates: {
    canonical: 'https://avgg.es/blog/tienda-online-vs-redes-sociales',
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
              <span className="px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full font-medium">E-commerce</span>
              <span className="flex items-center gap-1.5"><Calendar size={16} /> 30 Ene 2026</span>
              <span className="flex items-center gap-1.5"><Clock size={16} /> 8 min de lectura</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-8">
              Tienda online vs Instagram: ¿Dónde vender mejor en 2026?
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Vender por Instagram está bien, pero sin web propia dependes de algoritmos ajenos. Descubre por qué necesitas tu propia tienda online.
            </p>
          </header>

          <div className="relative w-full h-[450px] rounded-3xl overflow-hidden mb-12 shadow-xl">
            <Image
              src="/blog/blog-tienda-vs-instagram.jpg"
              alt="Tienda online vs Instagram Shop"
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
            
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-600 p-8 rounded-r-2xl my-10 shadow-sm">
              <p className="text-xl text-gray-800 font-medium mb-0 leading-relaxed">
                <strong>Respuesta directa:</strong> Ambos. Instagram para visibilidad y captar audiencia. Tienda online para vender de verdad y construir un negocio sostenible. Uno no sustituye al otro, se complementan.
              </p>
            </div>

            <h2>La trampa de "solo vendo por Instagram"</h2>
            <p>
              "¿Para qué una tienda online si ya vendo por Instagram?". Escucho esto cada semana. Y entiendo el razonamiento: Instagram es gratis, fácil, ya tienes seguidores...
            </p>
            <p>
              Pero hay un problema: <strong>No es tu plataforma. Es de Meta.</strong> Y eso cambia todo.
            </p>

            <div className="not-prose bg-red-50 border-2 border-red-200 rounded-3xl p-10 my-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Historia real: La marca que perdió todo en 24h</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                María vendía joyería artesanal. 15.000 seguidores en Instagram, facturaba 3.000€/mes. Solo por DM, sin web.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Un día, su cuenta fue <strong>bloqueada por error</strong>. Sin aviso. Sin explicación. Apelación rechazada.
              </p>
              <div className="bg-white rounded-2xl p-8 mt-6 border border-red-200">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">0€</div>
                    <div className="text-sm text-gray-700">Ventas durante 3 meses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">15k</div>
                    <div className="text-sm text-gray-700">Seguidores perdidos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">3 años</div>
                    <div className="text-sm text-gray-700">De trabajo tirados</div>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mt-6 mb-0">
                <strong>Si hubiera tenido tienda online:</strong> Hubiera seguido vendiendo mientras recuperaba su Instagram.
              </p>
            </div>

            <h2>Instagram Shop vs Tienda Online: Comparativa real</h2>

            <div className="not-prose grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10 border-2 border-purple-200">
                <div className="flex items-center gap-3 mb-6">
                  <InstagramIcon className="text-purple-600" size={32} />
                  <h3 className="text-2xl font-bold text-gray-900">Instagram Shop</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-green-600" />
                      Ventajas
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-base">
                      <li>• Gratis (sin coste de hosting)</li>
                      <li>• Fácil de empezar</li>
                      <li>• Audiencia potencial enorme</li>
                      <li>• Visual y atractivo</li>
                      <li>• Bueno para impulso y descubrimiento</li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-purple-200">
                    <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                      <XCircle size={20} className="text-red-600" />
                      Desventajas
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-base">
                      <li>• Dependes del algoritmo (alcance orgánico cada vez menor)</li>
                      <li>• No posees la base de datos de clientes</li>
                      <li>• No apareces en Google</li>
                      <li>• Comisiones de Meta (5% + tasas)</li>
                      <li>• Funcionalidades limitadas</li>
                      <li>• Pueden cerrar tu cuenta sin aviso</li>
                      <li>• Difícil fidelizar clientes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 border-2 border-blue-200">
                <div className="flex items-center gap-3 mb-6">
                  <ShoppingCart className="text-blue-600" size={32} />
                  <h3 className="text-2xl font-bold text-gray-900">Tienda Online</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-green-600" />
                      Ventajas
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-base">
                      <li>• Es TUYA (control total)</li>
                      <li>• Base de datos de clientes propia</li>
                      <li>• Apareces en Google (SEO)</li>
                      <li>• Sin comisiones de plataforma</li>
                      <li>• Personalización total</li>
                      <li>• Email marketing directo</li>
                      <li>• Análisis completo de ventas</li>
                      <li>• Mayor credibilidad profesional</li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-blue-200">
                    <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                      <XCircle size={20} className="text-red-600" />
                      Desventajas
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-base">
                      <li>• Inversión inicial (3.500€ - 8.000€)</li>
                      <li>• Hosting y dominio (50-100€/año)</li>
                      <li>• Requiere mantenimiento</li>
                      <li>• Tienes que traer el tráfico tú</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2>La estrategia ganadora: Usar ambos (pero diferente)</h2>
            <p>
              La clave no es elegir uno u otro. Es usar cada uno para lo que mejor funciona:
            </p>

            <div className="not-prose space-y-6 my-10">
              <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <InstagramIcon className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Instagram = Escaparate y captación</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span><strong>Contenido visual:</strong> Fotos de productos, lifestyle, behind the scenes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span><strong>Generar deseo:</strong> Stories, reels mostrando productos en uso</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span><strong>Construir comunidad:</strong> Engagement, responder comentarios</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span><strong>Redirigir a tu web:</strong> Link en bio siempre apuntando a tu tienda</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <ShoppingCart className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Tienda Online = Conversión y fidelización</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                        <span><strong>Venta real:</strong> Checkout optimizado, múltiples métodos de pago</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                        <span><strong>Captura de emails:</strong> Para email marketing y ofertas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                        <span><strong>SEO:</strong> Aparecer en Google cuando buscan tus productos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                        <span><strong>Remarketing:</strong> Recuperar carritos abandonados</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                        <span><strong>Recompras:</strong> Emails automáticos para clientes recurrentes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2>Caso real: 10x ventas combinando ambos</h2>

            <div className="not-prose bg-gradient-to-br from-orange-600 to-amber-600 text-white rounded-3xl p-10 my-10">
              <h3 className="text-2xl font-bold mb-4">Cliente: Marca de cosmética natural</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-amber-100">Antes (Solo Instagram)</h4>
                  <ul className="space-y-2 text-amber-50 text-base">
                    <li>• 8.000 seguidores</li>
                    <li>• Ventas solo por DM</li>
                    <li>• 1.500€/mes facturación</li>
                    <li>• Mucho tiempo gestionando DMs</li>
                    <li>• Sin base de datos de clientes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-amber-100">Después (Instagram + Tienda)</h4>
                  <ul className="space-y-2 text-white font-medium text-base">
                    <li>• 12.000 seguidores (+50%)</li>
                    <li>• Tienda online + Instagram</li>
                    <li>• 15.200€/mes facturación</li>
                    <li>• Pedidos automáticos</li>
                    <li>• 2.400 emails captados</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <div className="text-4xl font-bold mb-2">10x más ventas</div>
                <p className="text-amber-100 text-lg">En 6 meses combinando Instagram (captación) + Tienda online (conversión)</p>
              </div>
            </div>

            <h2>¿Cuándo empezar con tienda online?</h2>
            <p>
              No necesitas esperar a tener 50.000 seguidores. Crea tu tienda online cuando:
            </p>

            <div className="not-prose grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-green-50 border-l-4 border-green-600 rounded-r-2xl p-8">
                <h4 className="font-bold text-green-900 mb-4">✓ SÍ necesitas tienda si:</h4>
                <ul className="space-y-2 text-gray-700 text-base">
                  <li>• Vendes +5 productos al mes</li>
                  <li>• Quieres escalar el negocio</li>
                  <li>• Pasas mucho tiempo en DMs</li>
                  <li>• Quieres aparecer en Google</li>
                  <li>• Buscas crear marca profesional</li>
                  <li>• Quieres automatizar ventas</li>
                </ul>
              </div>
              <div className="bg-gray-50 border-l-4 border-gray-400 rounded-r-2xl p-8">
                <h4 className="font-bold text-gray-900 mb-4">Puedes esperar si:</h4>
                <ul className="space-y-2 text-gray-600 text-base">
                  <li>• Recién empiezas (primeros 3 meses)</li>
                  <li>• Vendes menos de 5 productos/mes</li>
                  <li>• Es un hobby, no un negocio</li>
                  <li>• Aún estás validando el producto</li>
                </ul>
              </div>
            </div>

            <h2>Mitos sobre tiendas online</h2>

            <div className="not-prose space-y-4 my-10">
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-6">
                <p className="text-gray-800"><strong>❌ Mito:</strong> "Es muy caro montar una tienda online"</p>
                <p className="text-gray-700 mt-2 text-base">✓ <strong>Realidad:</strong> Desde 3.500€ tienes una tienda profesional. Lo recuperas en 2-3 meses.</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-6">
                <p className="text-gray-800"><strong>❌ Mito:</strong> "Nadie va a encontrar mi tienda"</p>
                <p className="text-gray-700 mt-2 text-base">✓ <strong>Realidad:</strong> Con SEO + Instagram + Google Ads, traes el tráfico que necesitas.</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-6">
                <p className="text-gray-800"><strong>❌ Mito:</strong> "Es muy complicado de gestionar"</p>
                <p className="text-gray-700 mt-2 text-base">✓ <strong>Realidad:</strong> Plataformas modernas son intuitivas. Si sabes usar Instagram, sabes gestionar una tienda.</p>
              </div>
            </div>

            <h2>Conclusión: No elijas, combina</h2>
            <p>
              Instagram para captar audiencia y generar deseo. Tienda online para vender profesionalmente y construir un negocio sostenible.
            </p>
            <p>
              Uno sin el otro es dejar dinero sobre la mesa. Usa Instagram como tu escaparate en la calle principal. Usa tu tienda online como tu negocio real donde pasa la magia: la venta.
            </p>
            <p className="text-2xl font-bold text-gray-900">
              Instagram te da visibilidad. Tu tienda online te da negocio.
            </p>

            <div className="not-prose bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl p-8 mt-12 text-white">
              <h3 className="text-2xl font-bold mb-3">¿Listo para crear tu tienda online?</h3>
              <p className="mb-6 text-orange-50 leading-relaxed">
                En AVGG creamos tiendas online profesionales desde 3.500€. Integradas con Instagram, optimizadas para conversión y listas para escalar.
              </p>
              <Link href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-full hover:bg-orange-50 transition-colors font-bold">
                Solicitar presupuesto de tienda online →
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
