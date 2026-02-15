import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import SiteFooter from '@/components/SiteFooter';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, MapPin, Star, TrendingUp, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SEO Local en Santander: Cómo aparecer en Google Maps | AVGG',
  description: 'Guía completa para posicionar tu negocio en Santander en Google Maps y búsquedas locales. Atrae clientes de tu zona que ya están buscando lo que ofreces.',
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
              <span className="px-4 py-1.5 bg-cyan-100 text-cyan-700 rounded-full font-medium">SEO</span>
              <span className="flex items-center gap-1.5"><Calendar size={16} /> 2 Feb 2026</span>
              <span className="flex items-center gap-1.5"><Clock size={16} /> 11 min de lectura</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-8">
              SEO Local en Santander: Cómo aparecer en Google Maps
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Guía completa para posicionar tu negocio en Santander en Google Maps y búsquedas locales. Atrae clientes de tu zona que ya están buscando lo que ofreces.
            </p>
          </header>

          <div className="relative w-full h-[450px] rounded-3xl overflow-hidden mb-12 shadow-xl">
            <Image
              src="/blog/blog-seo-local.jpg"
              alt="SEO Local en Santander - Google Maps"
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
            
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-600 p-8 rounded-r-2xl my-10 shadow-sm">
              <p className="text-xl text-gray-800 font-medium mb-0 leading-relaxed">
                <strong>Dato clave:</strong> El 46% de todas las búsquedas en Google tienen intención local. Si tu negocio está en Santander y no apareces en Google Maps, estás perdiendo casi la mitad de clientes potenciales.
              </p>
            </div>

            <h2>Por qué el SEO Local es diferente (y más importante)</h2>
            <p>
              Imagina esto: alguien en Santander busca "fontanero cerca de mí" o "restaurante en Santander". ¿Apareces? Si no, otro negocio está ganando ese cliente.
            </p>
            <p>
              El SEO Local no es aparecer en Google normal. Es aparecer en <strong>Google Maps, en el paquete de 3 (Local Pack) y en búsquedas "cerca de mí"</strong>. Y es MÁS valioso porque la gente busca con intención de compra AHORA.
            </p>

            <div className="not-prose grid md:grid-cols-3 gap-6 my-10">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 text-center">
                <div className="text-5xl font-bold text-green-600 mb-2">46%</div>
                <p className="text-gray-700">de búsquedas son locales</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200 text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">76%</div>
                <p className="text-gray-700">visita el negocio en 24h</p>
              </div>
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 border-2 border-violet-200 text-center">
                <div className="text-5xl font-bold text-violet-600 mb-2">28%</div>
                <p className="text-gray-700">compra ese mismo día</p>
              </div>
            </div>

            <h2 className="flex items-center gap-3">
              <MapPin className="text-cyan-600" size={36} />
              Paso 1: Configura Google Business Profile (OBLIGATORIO)
            </h2>
            <p>
              Si no tienes Google Business Profile, no existes para Google Maps. Es gratis y es lo primero que debes hacer.
            </p>

            <div className="not-prose bg-white border border-gray-200 rounded-3xl p-10 my-10 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Cómo crear tu perfil (paso a paso)</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-cyan-600">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Ve a google.com/business</h4>
                    <p className="text-gray-700 text-base">Crea una cuenta con tu email de empresa</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-cyan-600">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Añade tu negocio</h4>
                    <p className="text-gray-700 text-base">Nombre exacto, dirección completa, teléfono, horarios</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-cyan-600">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Verifica tu negocio</h4>
                    <p className="text-gray-700 text-base">Google te enviará una postal con un código (tarda 5-7 días)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-cyan-600">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Completa el perfil 100%</h4>
                    <p className="text-gray-700 text-base">Descripción, fotos, servicios, atributos, horarios especiales</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="flex items-center gap-3">
              <Star className="text-yellow-500" size={36} />
              Paso 2: Consigue reseñas (el factor #1 de ranking)
            </h2>
            <p>
              Las reseñas son EL factor más importante para aparecer en el Local Pack de Google. No solo la cantidad, también la calidad y frecuencia.
            </p>

            <div className="not-prose bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-3xl p-10 my-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Estrategia para conseguir reseñas</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 border border-yellow-200">
                  <h4 className="font-bold text-gray-900 mb-3">✓ Qué hacer:</h4>
                  <ul className="space-y-2 text-gray-700 text-base">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Pide reseñas a clientes satisfechos justo después del servicio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Envía un email con el link directo a tu perfil de Google</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Pon un código QR en tu tienda/oficina que lleve a reseñas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Responde TODAS las reseñas (buenas y malas)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
                  <h4 className="font-bold text-red-900 mb-3">❌ Nunca hagas esto:</h4>
                  <ul className="space-y-2 text-gray-700 text-base">
                    <li>• Comprar reseñas falsas (Google te penaliza)</li>
                    <li>• Pedir reseñas a cambio de descuentos (contra políticas de Google)</li>
                    <li>• Ignorar reseñas negativas</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Paso 3: Optimiza tu sitio web para búsquedas locales</h2>
            <p>
              Google Business está bien, pero necesitas una web optimizada para búsquedas locales. Aquí cómo:
            </p>

            <div className="not-prose space-y-6 my-10">
              <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">1. Títulos y descripciones con ciudad</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-6">
                    <p className="font-bold text-red-900 mb-2">❌ Malo:</p>
                    <p className="text-sm text-gray-700 italic">"Fontanería profesional | Inicio"</p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-6">
                    <p className="font-bold text-green-900 mb-2">✓ Bueno:</p>
                    <p className="text-sm text-gray-700 font-semibold">"Fontanero en Santander 24h | Reparaciones urgentes"</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">2. Crea páginas por servicio + ubicación</h3>
                <p className="text-lg text-gray-700 mb-4">Ejemplo para un fontanero:</p>
                <ul className="space-y-2 text-gray-700 text-base">
                  <li>• /fontanero-santander</li>
                  <li>• /reparacion-fugas-santander</li>
                  <li>• /instalacion-calderas-santander</li>
                  <li>• /fontanero-urgente-santander</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">3. Añade Schema Markup de LocalBusiness</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Schema Markup es código que ayuda a Google a entender tu negocio. Incluye:
                </p>
                <div className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                  <pre className="text-sm"><code>{`{
  "@type": "LocalBusiness",
  "name": "Tu Empresa",
  "address": {
    "streetAddress": "C/ Rualasal 11",
    "addressLocality": "Santander",
    "postalCode": "39001"
  },
  "geo": {
    "latitude": 43.4623,
    "longitude": -3.8099
  },
  "telephone": "+34658873627"
}`}</code></pre>
                </div>
              </div>
            </div>

            <h2>Paso 4: Consigue menciones locales (NAP Citations)</h2>
            <p>
              Google confía más en tu negocio si aparece en directorios locales con datos consistentes (NAP = Name, Address, Phone).
            </p>

            <div className="not-prose bg-blue-50 rounded-3xl p-10 my-10 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Directorios donde debes estar:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-blue-200">
                  <span className="text-gray-700">• Páginas Amarillas</span>
                </div>
                <div className="bg-white rounded-xl p-4 border border-blue-200">
                  <span className="text-gray-700">• Yelp España</span>
                </div>
                <div className="bg-white rounded-xl p-4 border border-blue-200">
                  <span className="text-gray-700">• TripAdvisor (si aplica)</span>
                </div>
                <div className="bg-white rounded-xl p-4 border border-blue-200">
                  <span className="text-gray-700">• Facebook Business</span>
                </div>
                <div className="bg-white rounded-xl p-4 border border-blue-200">
                  <span className="text-gray-700">• LinkedIn Company</span>
                </div>
                <div className="bg-white rounded-xl p-4 border border-blue-200">
                  <span className="text-gray-700">• Directorios de tu sector</span>
                </div>
              </div>
              <p className="text-gray-700 mt-6 mb-0">
                <strong>Importante:</strong> Los datos (nombre, dirección, teléfono) deben ser EXACTAMENTE iguales en todos los sitios.
              </p>
            </div>

            <h2>Paso 5: Publica contenido local</h2>
            <p>
              Blog posts sobre temas locales ayudan a posicionarte. Ejemplos:
            </p>
            <ul>
              <li>"Los 10 problemas de fontanería más comunes en pisos antiguos de Santander"</li>
              <li>"Guía para reformar tu cocina en Santander: permisos y costes"</li>
              <li>"Cómo preparar tu casa en Santander para el invierno"</li>
            </ul>

            <h2 className="flex items-center gap-3">
              <TrendingUp className="text-cyan-600" size={36} />
              Errores que te hacen invisible en Google Maps
            </h2>

            <div className="not-prose space-y-4 my-10">
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-6">
                <p className="text-gray-800 text-base"><strong>❌ Error 1:</strong> Google Business sin verificar o incompleto (menos del 70%)</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-6">
                <p className="text-gray-800 text-base"><strong>❌ Error 2:</strong> Sin reseñas o solo reseñas viejas (Google prioriza recientes)</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-6">
                <p className="text-gray-800 text-base"><strong>❌ Error 3:</strong> Dirección diferente en Google, web, Facebook, directorios</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-6">
                <p className="text-gray-800 text-base"><strong>❌ Error 4:</strong> No subir fotos regularmente (Google prioriza perfiles activos)</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-6">
                <p className="text-gray-800 text-base"><strong>❌ Error 5:</strong> Horarios desactualizados o no responder mensajes de Google</p>
              </div>
            </div>

            <h2>Caso real: De invisible a top 3 en Google Maps</h2>

            <div className="not-prose bg-gradient-to-br from-cyan-600 to-blue-600 text-white rounded-3xl p-10 my-10">
              <h3 className="text-2xl font-bold mb-4">Cliente: Clínica dental en Santander</h3>
              <p className="text-cyan-100 mb-6 text-lg">
                Problema: No aparecían al buscar "dentista en Santander". Su competencia les comía todo el mercado.
              </p>
              <h4 className="text-xl font-bold mb-4">Lo que hicimos:</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <span className="text-sm">✓ Google Business 100% optimizado</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <span className="text-sm">✓ 15 reseñas de 5⭐ en 2 meses</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <span className="text-sm">✓ 50 fotos profesionales subidas</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <span className="text-sm">✓ Citations en 20 directorios</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <span className="text-sm">✓ Blog con contenido local</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <span className="text-sm">✓ Schema Markup implementado</span>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <div className="text-3xl font-bold mb-2">Resultado en 4 meses</div>
                <p className="text-cyan-100 text-lg mb-4">Top 3 en Google Maps para "dentista Santander"</p>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
                  <div>
                    <div className="text-2xl font-bold">+180%</div>
                    <div className="text-sm text-cyan-100">Llamadas</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">+250%</div>
                    <div className="text-sm text-cyan-100">Citas web</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">+320%</div>
                    <div className="text-sm text-cyan-100">Visitas perfil</div>
                  </div>
                </div>
              </div>
            </div>

            <h2>Conclusión: El SEO Local es tu mina de oro</h2>
            <p>
              Si tienes un negocio físico en Santander, el SEO Local debería ser tu prioridad #1. Es más barato que publicidad, más efectivo que redes sociales, y los resultados son duraderos.
            </p>
            <p className="text-2xl font-bold text-gray-900">
              La pregunta no es "¿funciona el SEO Local?". La pregunta es "¿cuánto estoy perdiendo al no estar en Google Maps?"
            </p>

            <div className="not-prose bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl p-8 mt-12 text-white">
              <h3 className="text-2xl font-bold mb-3">¿Quieres aparecer en Google Maps?</h3>
              <p className="mb-6 text-cyan-50 leading-relaxed">
                En AVGG optimizamos tu Google Business Profile y tu web para SEO Local. Empieza a captar clientes de Santander que ya están buscando lo que ofreces.
              </p>
              <Link href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 rounded-full hover:bg-cyan-50 transition-colors font-bold">
                Solicitar auditoría SEO Local →
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
