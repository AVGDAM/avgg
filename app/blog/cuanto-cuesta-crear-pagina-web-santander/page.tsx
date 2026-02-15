import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import SiteFooter from '@/components/SiteFooter';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, CheckCircle2, AlertCircle, Euro } from 'lucide-react';

export const metadata: Metadata = {
  title: '¿Cuánto cuesta crear una página web en Santander? | AVGG',
  description: 'Descubre los precios reales de diseño web en Santander en 2026. Guía completa con costes, qué incluye cada paquete y cómo elegir sin sorpresas.',
  openGraph: {
    title: '¿Cuánto cuesta crear una página web en Santander?',
    description: 'Descubre los precios reales de diseño web en Santander en 2026. Guía completa con costes, qué incluye cada paquete y cómo elegir sin sorpresas.',
    url: 'https://avgg.es/blog/cuanto-cuesta-crear-pagina-web-santander',
    siteName: 'AVGG',
    locale: 'es_ES',
    type: 'article',
    publishedTime: '2026-02-10T00:00:00.000Z',
    authors: ['AVGG'],
    images: [
      {
        url: '/blog/blog-precios-web.jpg',
        width: 1200,
        height: 630,
        alt: 'Precios de diseño web en Santander',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Cuánto cuesta crear una página web en Santander?',
    description: 'Precios reales de diseño web en Santander en 2026.',
    images: ['/blog/blog-precios-web.jpg'],
  },
  alternates: {
    canonical: 'https://avgg.es/blog/cuanto-cuesta-crear-pagina-web-santander',
  },
};

export default function ArticlePage() {
  return (
    <>
      <Nav />
      <article className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Volver al blog
          </Link>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full font-medium">Diseño Web</span>
              <span className="flex items-center gap-1.5">
                <Calendar size={16} />
                15 Feb 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={16} />
                8 min de lectura
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-8">
              ¿Cuánto cuesta crear una página web en Santander?
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Descubre los precios reales de diseño web en Santander, qué incluye cada paquete y cómo elegir la mejor opción para tu negocio sin sorpresas.
            </p>
          </header>

          {/* Featured image */}
          <div className="relative w-full h-[450px] rounded-3xl overflow-hidden mb-12 shadow-xl">
            <Image
              src="/blog/blog-cuanto-cuesta-pagina-web.jpg"
              alt="Precios de diseño web en Santander"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
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
            
            <div className="bg-gradient-to-r from-blue-50 to-violet-50 border-l-4 border-blue-600 p-8 rounded-r-2xl my-10 shadow-sm">
              <p className="text-xl text-gray-800 font-medium mb-0 leading-relaxed">
                <strong>Resumen rápido:</strong> Una web profesional en Santander cuesta entre 1.500€ y 5.000€. Una tienda online desde 3.500€. Te explicamos por qué y qué incluye cada opción.
              </p>
            </div>

            <h2>La pregunta que todos hacen (y pocos responden con claridad)</h2>
            <p>
              Si estás leyendo esto, probablemente estés pensando en crear una web para tu negocio en Santander y quieras saber <strong>cuánto te va a costar realmente</strong>. La respuesta típica es "depende", pero voy a darte números concretos.
            </p>
            <p>
              Después de diseñar más de 50 webs para empresas en Cantabria, estos son los rangos de precios reales que manejamos en 2026.
            </p>

            <h2 className="flex items-center gap-3">
              <Euro className="text-blue-600" size={36} />
              Rangos de precios reales en Santander (2026)
            </h2>

            <div className="not-prose bg-white border border-gray-200 rounded-3xl p-10 my-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Web básica corporativa</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-4">800€ - 2.500€</div>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Una web corporativa sencilla con 5-7 páginas. Perfecta para autónomos, pequeños negocios o profesionales que necesitan presencia online.
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">✓ Qué incluye:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={22} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Diseño responsive (móvil, tablet, escritorio)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={22} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Formulario de contacto funcional</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={22} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">SEO básico (meta tags, URLs amigables)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={22} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Integración con Google Analytics</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={22} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">1 mes de soporte post-lanzamiento</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="not-prose bg-white border border-gray-200 rounded-3xl p-10 my-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-violet-600">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Web profesional con CMS</h3>
                  <div className="text-4xl font-bold text-violet-600 mb-4">2.500€ - 5.000€</div>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Una web más completa con sistema de gestión de contenidos para que puedas actualizar contenido tú mismo. Ideal para negocios que quieren blog activo o catálogo de servicios amplio.
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">✓ Qué incluye:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={22} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Todo lo anterior +</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={22} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Panel de administración personalizado</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={22} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Blog con categorías y etiquetas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={22} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">SEO avanzado (Schema markup)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={22} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Optimización de velocidad</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={22} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Formación para gestionar contenidos</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={22} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">3 meses de soporte</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="not-prose bg-white border border-gray-200 rounded-3xl p-10 my-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Tienda online (E-commerce)</h3>
                  <div className="text-4xl font-bold text-emerald-600 mb-4">3.500€ - 8.000€+</div>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Una tienda online completa con carrito de compra, pasarela de pago y gestión de pedidos. Si vendes productos o servicios online, necesitas esto.
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">✓ Qué incluye:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={22} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Catálogo de productos ilimitado</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={22} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Carrito y checkout optimizado</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={22} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Pasarela de pago (Stripe, Redsys)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={22} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Gestión de inventario y pedidos</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={22} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Emails automáticos</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={22} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Área de cliente</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={22} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">SEO para e-commerce</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={22} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">6 meses de soporte</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="not-prose bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-10 my-10 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-gray-900">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Web a medida con funcionalidades específicas</h3>
                  <div className="text-4xl font-bold text-yellow-400 mb-4">8.000€ - 20.000€+</div>
                </div>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed">
                Plataformas complejas con desarrollo personalizado: sistemas de reservas, portales de usuarios, intranets, aplicaciones web, integraciones con APIs externas, etc.
              </p>
            </div>

            <h2>¿Por qué varían tanto los precios?</h2>
            <p>
              El precio de una web no se saca de un sombrero. Depende de múltiples factores:
            </p>
            <ul>
              <li><strong>Número de páginas:</strong> Más páginas = más trabajo de diseño y maquetación</li>
              <li><strong>Funcionalidades:</strong> Formularios avanzados, áreas privadas, chat en vivo, reservas online...</li>
              <li><strong>Diseño personalizado vs plantilla:</strong> Un diseño desde cero cuesta más</li>
              <li><strong>Copywriting y fotografía:</strong> ¿Traes tu propio contenido o lo creamos nosotros?</li>
              <li><strong>SEO y marketing:</strong> ¿Solo quieres la web o también posicionamiento?</li>
              <li><strong>Mantenimiento:</strong> ¿Necesitas soporte continuo?</li>
            </ul>

            <div className="not-prose bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <AlertCircle className="text-amber-600" size={24} />
                Gastos recurrentes que debes considerar
              </h3>
              <p className="text-gray-700 mb-4">
                Crear la web es solo el principio. También necesitas:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Dominio:</strong> 10-15€/año (ej: tunegocio.es)</li>
                <li><strong>Hosting:</strong> 50-200€/año según tráfico</li>
                <li><strong>Certificado SSL:</strong> Gratis con Let's Encrypt</li>
                <li><strong>Mantenimiento:</strong> 30-100€/mes (actualizaciones, copias de seguridad)</li>
                <li><strong>Email profesional:</strong> 5-10€/mes por cuenta</li>
              </ul>
            </div>

            <h2>¿Qué pasa con las webs baratas de 300€?</h2>
            <p>
              Existen. Normalmente son plantillas genéricas de WordPress con mínima personalización. Pueden funcionar si solo necesitas "tener algo", pero:
            </p>
            <ul>
              <li>❌ No están optimizadas para SEO</li>
              <li>❌ El diseño se parece a miles de webs más</li>
              <li>❌ Difíciles de actualizar sin conocimientos técnicos</li>
              <li>❌ Suelen tener problemas de seguridad</li>
              <li>❌ No incluyen soporte post-lanzamiento</li>
            </ul>

            <h2>Entonces, ¿cuánto debería invertir?</h2>
            <p>
              Mi recomendación honesta basada en la experiencia:
            </p>
            <div className="not-prose grid md:grid-cols-3 gap-4 my-8">
              <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <h4 className="font-bold text-gray-900 mb-2">Autónomo / Pequeño negocio</h4>
                <div className="text-2xl font-bold text-blue-600 mb-2">1.500€ - 3.000€</div>
                <p className="text-sm text-gray-700">Para una web profesional que te dure años</p>
              </div>
              <div className="bg-violet-50 rounded-xl p-6 border-2 border-violet-200">
                <h4 className="font-bold text-gray-900 mb-2">Negocio establecido</h4>
                <div className="text-2xl font-bold text-violet-600 mb-2">3.000€ - 5.000€</div>
                <p className="text-sm text-gray-700">Con SEO incluido para captar clientes</p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6 border-2 border-emerald-200">
                <h4 className="font-bold text-gray-900 mb-2">Tienda online</h4>
                <div className="text-2xl font-bold text-emerald-600 mb-2">Desde 4.000€</div>
                <p className="text-sm text-gray-700">Para una tienda profesional y segura</p>
              </div>
            </div>

            <h2>Cómo saber si te están cobrando de más</h2>
            <p>
              <strong>Señales de alarma:</strong>
            </p>
            <ul>
              <li>❌ Te cobran por módulos básicos que deberían estar incluidos (formulario de contacto, Google Maps...)</li>
              <li>❌ No te explican claramente qué incluye cada precio</li>
              <li>❌ Te atan a cuotas mensuales sin que puedas llevarte la web</li>
              <li>❌ No te entregan acceso al dominio y hosting</li>
              <li>❌ El presupuesto no desglosa horas ni tareas</li>
            </ul>

            <h2>Preguntas que DEBES hacer antes de contratar</h2>
            <ol>
              <li>¿La web será mía o me la estáis alquilando?</li>
              <li>¿Qué pasa si quiero cambiar de agencia en el futuro?</li>
              <li>¿Cuántas revisiones de diseño incluye el precio?</li>
              <li>¿Qué pasa si quiero añadir funcionalidades después?</li>
              <li>¿Incluye formación para que yo pueda actualizar contenidos?</li>
              <li>¿Cuánto cuesta el mantenimiento mensual?</li>
              <li>¿Me ayudáis con el SEO y el posicionamiento?</li>
            </ol>

            <h2>Conclusión: Invierte inteligentemente</h2>
            <p>
              Tu página web es tu vendedor 24/7. Si inviertes 3.000€ en una web profesional y te trae 2 clientes extra al mes durante un año, ya la has rentabilizado.
            </p>
            <p>
              En Santander hay muchas opciones. Pero recuerda: <strong>lo barato sale caro</strong>. Es mejor esperar un poco más y hacerlo bien desde el principio que tener que rehacer la web en 6 meses.
            </p>

            <div className="not-prose bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl p-8 mt-12 text-white">
              <h3 className="text-2xl font-bold mb-3">¿Necesitas un presupuesto personalizado?</h3>
              <p className="mb-6 text-blue-50">
                En AVGG trabajamos con presupuestos transparentes y sin letra pequeña. Cuéntanos tu proyecto y te enviamos un presupuesto detallado en 24h.
              </p>
              <Link href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors font-bold">
                Solicitar presupuesto gratuito →
              </Link>
            </div>
          </div>

          {/* Share */}
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
