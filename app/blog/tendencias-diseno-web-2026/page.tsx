import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import SiteFooter from '@/components/SiteFooter';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, Sparkles, Zap, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tendencias de diseño web en 2026: Lo que funciona (y lo que ya no) | AVGG',
  description: 'Diseños minimalistas, animaciones sutiles, tipografías grandes y velocidad extrema. Descubre qué buscan los usuarios en una web moderna en 2026.',
  openGraph: {
    title: 'Tendencias de diseño web en 2026: Lo que funciona (y lo que ya no)',
    description: 'Diseños minimalistas, animaciones sutiles, tipografías grandes y velocidad extrema. Descubre qué buscan los usuarios en una web moderna en 2026.',
    url: 'https://avgg.es/blog/tendencias-diseno-web-2026',
    siteName: 'AVGG',
    locale: 'es_ES',
    type: 'article',
    publishedTime: '2026-02-14T00:00:00.000Z',
    authors: ['AVGG'],
    images: [
      {
        url: '/blog/blog-tendencias-2026.jpg',
        width: 1200,
        height: 630,
        alt: 'Tendencias de diseño web en 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tendencias de diseño web en 2026: Lo que funciona (y lo que ya no)',
    description: 'Diseños minimalistas, animaciones sutiles, tipografías grandes y velocidad extrema.',
    images: ['/blog/blog-tendencias-2026.jpg'],
  },
  alternates: {
    canonical: 'https://avgg.es/blog/tendencias-diseno-web-2026',
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
              <span className="px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full font-medium">Diseño Web</span>
              <span className="flex items-center gap-1.5"><Calendar size={16} /> 25 Ene 2026</span>
              <span className="flex items-center gap-1.5"><Clock size={16} /> 12 min de lectura</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-8">
              Tendencias de diseño web en 2026: Lo que funciona (y lo que ya no)
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Diseños minimalistas, animaciones sutiles, tipografías grandes y velocidad extrema. Descubre qué buscan los usuarios en una web moderna en 2026.
            </p>
          </header>

          <div className="relative w-full h-[450px] rounded-3xl overflow-hidden mb-12 shadow-xl">
            <Image
              src="/blog/blog-tendencias-2026.jpg"
              alt="Tendencias diseño web 2026"
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
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-600 p-8 rounded-r-2xl my-10 shadow-sm">
              <p className="text-xl text-gray-800 font-medium mb-0 leading-relaxed">
                <strong>Lo más importante:</strong> En 2026, "menos es más" ha ganado. Velocidad, claridad y funcionalidad vencen a diseños complicados y cargados. Si tu web tarda en cargar o confunde, ya perdiste.
              </p>
            </div>

            <h2>El cambio que lo cambió todo</h2>
            <p>
              Si tu web parece de 2020, está anticuada. El diseño web ha evolucionado radicalmente en los últimos 3 años.
            </p>
            <p>
              <strong>Los usuarios en 2026 esperan:</strong> Carga instantánea, diseño limpio, texto legible sin zoom, y experiencia perfecta en móvil. Todo lo demás es secundario.
            </p>

            <h2 className="flex items-center gap-3">
              <Sparkles className="text-indigo-600" size={36} />
              10 tendencias que dominan 2026
            </h2>

            <div className="not-prose space-y-8 my-12">
              <div className="bg-white border-2 border-indigo-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-indigo-600">1</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Minimalismo brutal (pero bonito)</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Menos elementos, más impacto. Mucho espacio en blanco, jerarquía clara, tipografía grande.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-6">
                        <p className="font-bold text-red-900 mb-2">❌ Anticuado (2020):</p>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li>• 10 colores diferentes</li>
                          <li>• Sidebar lleno de widgets</li>
                          <li>• Banner animado en home</li>
                          <li>• Texto pequeño y apretado</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-6">
                        <p className="font-bold text-green-900 mb-2">✓ Moderno (2026):</p>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li>• 2-3 colores máximo</li>
                          <li>• Sin sidebar, todo al centro</li>
                          <li>• Hero limpio con 1 mensaje claro</li>
                          <li>• Tipografía grande (min 18px)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-indigo-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-violet-600">2</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Tipografías XL (la más grande que te atrevas)</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Headlines gigantes (80-120px en desktop). Subtítulos 24-32px. Texto de párrafo 18-20px.
                    </p>
                    <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-200">
                      <p className="text-gray-700 text-base mb-2"><strong>Por qué funciona:</strong></p>
                      <p className="text-gray-700 text-base mb-0">Legibilidad en móvil, accesibilidad, impacto visual inmediato. Los usuarios ya no toleran texto pequeño.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-indigo-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-purple-600">3</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Animaciones micro y sutiles</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Nada de efectos exagerados. Animaciones casi imperceptibles que guían la atención.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-6">
                        <p className="font-bold text-green-900 mb-2">✓ Animaciones que funcionan en 2026:</p>
                        <ul className="space-y-2 text-gray-700 text-base">
                          <li>• Fade-in suave al hacer scroll</li>
                          <li>• Hover en botones (cambio de color + ligero movimiento)</li>
                          <li>• Carga de imágenes progresiva (blur-up)</li>
                          <li>• Transiciones de página (200-300ms máximo)</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-6">
                        <p className="font-bold text-red-900 mb-2">❌ Animaciones que molestan:</p>
                        <ul className="space-y-2 text-gray-700 text-base">
                          <li>• Parallax exagerado</li>
                          <li>• Elementos que "explotan" al entrar</li>
                          <li>• Animaciones que bloquean la interacción</li>
                          <li>• Carruseles automáticos (nadie los usa)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-indigo-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-blue-600">4</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Modo oscuro (ya no es opcional)</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      El 82% de usuarios prefiere modo oscuro en móvil. Si tu web no lo tiene, estás perdiendo engagement.
                    </p>
                    <div className="bg-gray-900 text-white rounded-2xl p-8">
                      <p className="text-lg mb-4">Implementación sencilla:</p>
                      <ul className="space-y-2 text-gray-300 text-base">
                        <li>• Toggle visible en navbar</li>
                        <li>• Guarda preferencia del usuario</li>
                        <li>• Transición suave entre modos</li>
                        <li>• Contraste adecuado en ambos</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-indigo-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-cyan-600">5</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Velocidad obsesiva (menos de 1.5 segundos)</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      En 2026, si tu web tarda más de 1.5 segundos, los usuarios se van. Google también te penaliza.
                    </p>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8">
                      <h4 className="font-bold text-gray-900 mb-4 text-lg">Cómo conseguir webs ultra-rápidas:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <p className="font-bold text-green-900 text-base">Técnicas esenciales:</p>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Imágenes en WebP/AVIF</li>
                            <li>• Lazy loading</li>
                            <li>• CDN global</li>
                            <li>• Caché agresivo</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <p className="font-bold text-green-900 text-base">Frameworks modernos:</p>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Next.js 16</li>
                            <li>• Astro</li>
                            <li>• SvelteKit</li>
                            <li>• (WordPress cada vez menos)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-indigo-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-emerald-600">6</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Scroll infinito para landing pages</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Adiós menús complicados. Una página larga y bien estructurada funciona mejor que 10 páginas dispersas.
                    </p>
                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                      <p className="text-gray-700 text-base"><strong>Estructura típica 2026:</strong></p>
                      <p className="text-gray-700 text-base mb-0">Hero → Beneficios → Cómo funciona → Testimonios → Precios → CTA → FAQ → Footer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-indigo-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-orange-600">7</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Layouts asimétricos y Bento Grids</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Adiós al diseño de 3 columnas iguales. Grids irregulares, tamaños diferentes, layouts creativos pero funcionales.
                    </p>
                    <p className="text-gray-700 text-base">Inspiración: Apple.com, Linear.app, Vercel.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-indigo-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-pink-600">8</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Botones grandes y llamativos</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Los botones pequeños están muertos. CTAs grandes (mínimo 48x48px), con degradados o colores vibrantes que contrastan.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow">
                        Botón moderno →
                      </button>
                      <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-lg shadow-lg hover:bg-gray-800 transition-colors">
                        Alternativa minimalista
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-indigo-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-teal-600">9</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Glassmorphism (efecto cristal)</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Tarjetas con blur de fondo, semitransparentes. Efecto elegante y moderno.
                    </p>
                    <div className="relative h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 p-8">
                      <div className="absolute inset-4 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 flex items-center justify-center">
                        <p className="text-white font-bold text-lg">Glassmorphism ✨</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-indigo-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-red-600">10</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Accesibilidad como prioridad</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Ya no es opcional. Google prioriza webs accesibles. Usuarios exigen usabilidad.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-6">
                      <h4 className="font-bold text-green-900 mb-3">Checklist de accesibilidad 2026:</h4>
                      <ul className="space-y-2 text-gray-700 text-base">
                        <li>✓ Contraste mínimo 4.5:1</li>
                        <li>✓ Navegación por teclado funcional</li>
                        <li>✓ Alt text en todas las imágenes</li>
                        <li>✓ Labels en formularios</li>
                        <li>✓ Tamaño de fuente ajustable</li>
                        <li>✓ Sin videos con autoplay y sonido</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2>Lo que ya NO funciona en 2026</h2>

            <div className="not-prose space-y-4 my-10">
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-6">
                <p className="text-gray-800 text-base"><strong>❌ Sliders/Carruseles automáticos:</strong> Nadie los mira. Convierte menos del 1%.</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-6">
                <p className="text-gray-800 text-base"><strong>❌ Popups agresivos:</strong> "Suscríbete ahora" a los 3 segundos. Molestos e ineficaces.</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-6">
                <p className="text-gray-800 text-base"><strong>❌ Fotos de stock genéricas:</strong> Mujer con auriculares sonriendo. Todo el mundo las reconoce.</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-6">
                <p className="text-gray-800 text-base"><strong>❌ Menús mega complicados:</strong> 20 opciones en el menú principal. Simplifica.</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-6">
                <p className="text-gray-800 text-base"><strong>❌ "Bienvenido a nuestra web":</strong> Nadie lee eso. Ve directo al valor.</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-6">
                <p className="text-gray-800 text-base"><strong>❌ Páginas "En construcción":</strong> Si no está listo, no lo publiques.</p>
              </div>
            </div>

            <h2>El patrón ganador de 2026</h2>
            <p>
              Si tuviera que resumir el diseño web perfecto de 2026 en una frase:
            </p>
            <div className="not-prose bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-3xl p-10 my-10 text-center">
              <p className="text-3xl font-bold mb-6">
                "Tan simple que parece obvio, tan rápido que parece magia, tan claro que no necesita explicación"
              </p>
            </div>

            <h2>Herramientas para diseñar como en 2026</h2>

            <div className="not-prose grid md:grid-cols-3 gap-6 my-10">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">Diseño:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Figma</li>
                  <li>• Framer</li>
                  <li>• Adobe XD</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">Desarrollo:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Next.js 16</li>
                  <li>• Tailwind CSS</li>
                  <li>• Framer Motion</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">Inspiración:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Awwwards.com</li>
                  <li>• Dribbble.com</li>
                  <li>• Godly.website</li>
                </ul>
              </div>
            </div>

            <h2>Conclusión: Menos es el nuevo más</h2>
            <p>
              El diseño web ha madurado. Ya no se trata de impresionar con efectos. Se trata de <strong>servir al usuario</strong>: claridad, velocidad, funcionalidad.
            </p>
            <p>
              Las webs que ganan en 2026 son las que se olvidan de sí mismas y se centran en lo que el usuario vino a buscar.
            </p>
            <p className="text-2xl font-bold text-gray-900">
              Diseña para humanos, no para premios de diseño.
            </p>

            <div className="not-prose bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 mt-12 text-white">
              <h3 className="text-2xl font-bold mb-3">¿Quieres una web con diseño 2026?</h3>
              <p className="mb-6 text-indigo-50 leading-relaxed">
                En AVGG diseñamos webs modernas, rápidas y efectivas usando las últimas tecnologías y tendencias. Sin efectos innecesarios, solo resultados.
              </p>
              <Link href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors font-bold">
                Solicitar diseño moderno →
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
