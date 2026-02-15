import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import SiteFooter from '@/components/SiteFooter';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, XCircle, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: '7 errores que matan tu página web (y espantan clientes) | AVGG',
  description: 'Tu web puede estar ahuyentando clientes sin que lo sepas. Descubre los 7 errores más comunes en diseño web y cómo solucionarlos hoy mismo.',
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
              <span className="px-4 py-1.5 bg-rose-100 text-rose-700 rounded-full font-medium">Diseño Web</span>
              <span className="flex items-center gap-1.5"><Calendar size={16} /> 5 Feb 2026</span>
              <span className="flex items-center gap-1.5"><Clock size={16} /> 9 min de lectura</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-8">
              7 errores que matan tu página web (y espantan clientes)
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Tu web puede estar ahuyentando clientes sin que lo sepas. Descubre los 7 errores más comunes en diseño web y cómo solucionarlos hoy mismo.
            </p>
          </header>

          <div className="relative w-full h-[450px] rounded-3xl overflow-hidden mb-12 shadow-xl">
            <Image
              src="/blog/blog-errores-web.jpg"
              alt="Errores comunes en diseño web"
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
            
            <div className="bg-gradient-to-r from-rose-50 to-red-50 border-l-4 border-rose-600 p-8 rounded-r-2xl my-10 shadow-sm">
              <p className="text-xl text-gray-800 font-medium mb-0 leading-relaxed">
                <strong>Dato alarmante:</strong> El 88% de los usuarios no vuelve a una web después de una mala experiencia. Estos 7 errores están costándote clientes cada día.
              </p>
            </div>

            <h2>Tu web te está costando dinero (y ni lo sabes)</h2>
            <p>
              Tienes una web. Bien. Pero si no te trae clientes, es peor que no tenerla. Porque estás pagando hosting, dominio y mantenimiento para... nada.
            </p>
            <p>
              Estos son los 7 errores que veo CADA SEMANA en webs de empresas de Santander. Y todos tienen solución.
            </p>

            <div className="not-prose space-y-8 my-12">
              <div className="bg-white border-2 border-red-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <XCircle className="text-red-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Error #1</h3>
                    <h4 className="text-2xl font-bold text-rose-600 mb-4">Carga lenta (más de 3 segundos)</h4>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Si tu web tarda más de 3 segundos en cargar, el 40% de usuarios se van. No esperan. Se van a tu competencia.
                </p>
                <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-600 mb-6">
                  <h5 className="font-bold text-gray-900 mb-3">Por qué pasa:</h5>
                  <ul className="space-y-2 text-gray-700 text-base">
                    <li>• Imágenes sin optimizar (fotos de 5MB)</li>
                    <li>• Hosting barato y lento</li>
                    <li>• Demasiados plugins o scripts</li>
                    <li>• No usar caché</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-600">
                  <h5 className="font-bold text-green-900 mb-3">✓ Cómo solucionarlo:</h5>
                  <ul className="space-y-2 text-gray-700 text-base">
                    <li>• Comprime todas las imágenes (usa TinyPNG o similar)</li>
                    <li>• Cambia a un hosting decente (mínimo SSD)</li>
                    <li>• Usa lazy loading para imágenes</li>
                    <li>• Activa caché y CDN</li>
                    <li>• Objetivo: menos de 2 segundos de carga</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border-2 border-red-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <XCircle className="text-red-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Error #2</h3>
                    <h4 className="text-2xl font-bold text-rose-600 mb-4">No está optimizada para móvil</h4>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  El 70% del tráfico web es desde móvil. Si tu web no se ve bien en móvil, pierdes el 70% de clientes potenciales.
                </p>
                <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-600 mb-6">
                  <h5 className="font-bold text-gray-900 mb-3">Señales de que tu web NO es móvil-friendly:</h5>
                  <ul className="space-y-2 text-gray-700 text-base">
                    <li>• Texto demasiado pequeño para leer</li>
                    <li>• Botones imposibles de pulsar</li>
                    <li>• Hay que hacer zoom para ver contenido</li>
                    <li>• Elementos se solapan o salen del marco</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-600">
                  <h5 className="font-bold text-green-900 mb-3">✓ Cómo solucionarlo:</h5>
                  <ul className="space-y-2 text-gray-700 text-base">
                    <li>• Usa diseño responsive (que se adapte automáticamente)</li>
                    <li>• Tamaño de fuente mínimo: 16px</li>
                    <li>• Botones de mínimo 44x44 píxeles</li>
                    <li>• Prueba tu web en móvil ANTES de publicar</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border-2 border-red-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <XCircle className="text-red-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Error #3</h3>
                    <h4 className="text-2xl font-bold text-rose-600 mb-4">No queda claro qué haces</h4>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Tienes 5 segundos para que el usuario entienda qué ofreces. Si no lo entiende, se va.
                </p>
                <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-600 mb-6">
                  <h5 className="font-bold text-gray-900 mb-3">Errores típicos:</h5>
                  <ul className="space-y-2 text-gray-700 text-base">
                    <li>• Título genérico: "Bienvenido a nuestra web"</li>
                    <li>• Textos vagos: "Soluciones innovadoras para tu negocio"</li>
                    <li>• No se ve el beneficio principal</li>
                    <li>• Demasiado texto, poca claridad</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-600">
                  <h5 className="font-bold text-green-900 mb-3">✓ Cómo solucionarlo:</h5>
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold text-gray-900 mb-2">Malo:</p>
                      <p className="text-gray-600 italic text-base">"Innovación y excelencia para tu empresa"</p>
                    </div>
                    <div>
                      <p className="font-bold text-green-900 mb-2">Bueno:</p>
                      <p className="text-gray-700 font-semibold text-base">"Diseñamos páginas web que te traen clientes. Desde 1.500€"</p>
                    </div>
                    <p className="text-gray-700 text-base pt-4 border-t border-green-200">
                      <strong>Fórmula:</strong> [Qué haces] + [Para quién] + [Beneficio claro]
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-red-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <XCircle className="text-red-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Error #4</h3>
                    <h4 className="text-2xl font-bold text-rose-600 mb-4">Formulario de contacto roto o inexistente</h4>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Tienes visitas, pero nadie te contacta. El problema: tu formulario no funciona o es imposible de encontrar.
                </p>
                <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-600 mb-6">
                  <h5 className="font-bold text-gray-900 mb-3">Problemas comunes:</h5>
                  <ul className="space-y-2 text-gray-700 text-base">
                    <li>• El formulario no envía emails (mal configurado)</li>
                    <li>• Pide demasiados datos (nombre, apellidos, empresa, NIF, teléfono, email...)</li>
                    <li>• Está escondido en una página secundaria</li>
                    <li>• No hay confirmación de envío</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-600">
                  <h5 className="font-bold text-green-900 mb-3">✓ Cómo solucionarlo:</h5>
                  <ul className="space-y-2 text-gray-700 text-base">
                    <li>• Prueba TÚ MISMO el formulario cada mes</li>
                    <li>• Pide solo lo esencial: nombre, email, mensaje</li>
                    <li>• Pon el formulario en la página principal</li>
                    <li>• Añade tu WhatsApp y teléfono como alternativa</li>
                    <li>• Mensaje de confirmación claro: "Te responderemos en 24h"</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border-2 border-red-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <XCircle className="text-red-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Error #5</h3>
                    <h4 className="text-2xl font-bold text-rose-600 mb-4">Diseño anticuado (parece de 2010)</h4>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Si tu web parece de hace 15 años, transmites que tu negocio también lo es. Primera impresión = última impresión.
                </p>
                <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-600 mb-6">
                  <h5 className="font-bold text-gray-900 mb-3">Señales de web anticuada:</h5>
                  <ul className="space-y-2 text-gray-700 text-base">
                    <li>• Fuentes Comic Sans o Times New Roman</li>
                    <li>• Colores chillones o degradados del 2000</li>
                    <li>• Gifs animados y banners parpadeantes</li>
                    <li>• Música de fondo automática (!)</li>
                    <li>• Contador de visitas visible</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-600">
                  <h5 className="font-bold text-green-900 mb-3">✓ Tendencias 2026:</h5>
                  <ul className="space-y-2 text-gray-700 text-base">
                    <li>• Diseño minimalista y limpio</li>
                    <li>• Mucho espacio en blanco</li>
                    <li>• Tipografías modernas y legibles</li>
                    <li>• Animaciones sutiles (no exageradas)</li>
                    <li>• Imágenes profesionales (no de bancos de fotos obviamente falsos)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border-2 border-red-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <XCircle className="text-red-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Error #6</h3>
                    <h4 className="text-2xl font-bold text-rose-600 mb-4">SEO inexistente (Google no te encuentra)</h4>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Tienes una web bonita pero nadie la encuentra en Google. Porque nunca se optimizó para buscadores.
                </p>
                <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-600 mb-6">
                  <h5 className="font-bold text-gray-900 mb-3">Síntomas de mal SEO:</h5>
                  <ul className="space-y-2 text-gray-700 text-base">
                    <li>• Todas las páginas se llaman "Inicio", "Página 1", "Untitled"</li>
                    <li>• No hay descripciones en Google</li>
                    <li>• Títulos genéricos sin keywords</li>
                    <li>• Contenido duplicado o vacío</li>
                    <li>• No hay blog ni contenido actualizado</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-600">
                  <h5 className="font-bold text-green-900 mb-3">✓ SEO básico que DEBES tener:</h5>
                  <ul className="space-y-2 text-gray-700 text-base">
                    <li>• Títulos descriptivos con keywords: "Fontanero en Santander - Reparaciones 24h"</li>
                    <li>• Descripciones únicas por página</li>
                    <li>• URLs limpias: tuweb.com/fontanero-santander</li>
                    <li>• Imágenes con texto alternativo (alt text)</li>
                    <li>• Google Business Profile configurado</li>
                    <li>• Al menos 10 páginas de contenido útil</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border-2 border-red-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <XCircle className="text-red-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Error #7</h3>
                    <h4 className="text-2xl font-bold text-rose-600 mb-4">No hay llamadas a la acción claras</h4>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  El usuario llega a tu web... ¿y ahora qué? Si no le dices qué hacer, no hará nada. Se irá.
                </p>
                <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-600 mb-6">
                  <h5 className="font-bold text-gray-900 mb-3">Error típico:</h5>
                  <p className="text-gray-700 text-base">
                    Web con mucha información pero sin botones claros de "Llámanos", "Pide presupuesto", "Contáctanos". El usuario se pierde y abandona.
                  </p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-600">
                  <h5 className="font-bold text-green-900 mb-3">✓ Cómo solucionarlo:</h5>
                  <ul className="space-y-2 text-gray-700 text-base">
                    <li>• Botón visible en cada página: "Pide presupuesto gratis"</li>
                    <li>• Usa verbos de acción: "Llama ahora", "Reserva cita", "Descarga guía"</li>
                    <li>• Colores que destaquen (contraste con el resto)</li>
                    <li>• Repite la llamada a la acción al final de cada página</li>
                    <li>• Añade urgencia cuando sea real: "Últimas plazas", "Oferta hasta..."</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Test rápido: ¿Cuántos errores tiene tu web?</h2>
            <p>
              Revisa tu web AHORA con estos 7 puntos. Sé honesto:
            </p>

            <div className="not-prose bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-10 my-10">
              <div className="space-y-4">
                <label className="flex items-start gap-4 cursor-pointer">
                  <input type="checkbox" className="w-6 h-6 mt-1 rounded border-2 border-gray-600" />
                  <span className="text-lg">¿Carga en menos de 3 segundos?</span>
                </label>
                <label className="flex items-start gap-4 cursor-pointer">
                  <input type="checkbox" className="w-6 h-6 mt-1 rounded border-2 border-gray-600" />
                  <span className="text-lg">¿Se ve bien en móvil?</span>
                </label>
                <label className="flex items-start gap-4 cursor-pointer">
                  <input type="checkbox" className="w-6 h-6 mt-1 rounded border-2 border-gray-600" />
                  <span className="text-lg">¿Queda claro qué ofreces en 5 segundos?</span>
                </label>
                <label className="flex items-start gap-4 cursor-pointer">
                  <input type="checkbox" className="w-6 h-6 mt-1 rounded border-2 border-gray-600" />
                  <span className="text-lg">¿El formulario funciona y es fácil?</span>
                </label>
                <label className="flex items-start gap-4 cursor-pointer">
                  <input type="checkbox" className="w-6 h-6 mt-1 rounded border-2 border-gray-600" />
                  <span className="text-lg">¿El diseño parece moderno y profesional?</span>
                </label>
                <label className="flex items-start gap-4 cursor-pointer">
                  <input type="checkbox" className="w-6 h-6 mt-1 rounded border-2 border-gray-600" />
                  <span className="text-lg">¿Apareces en Google al buscar tu servicio + ciudad?</span>
                </label>
                <label className="flex items-start gap-4 cursor-pointer">
                  <input type="checkbox" className="w-6 h-6 mt-1 rounded border-2 border-gray-600" />
                  <span className="text-lg">¿Hay botones claros de "Contactar" o "Pedir presupuesto"?</span>
                </label>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-yellow-400 font-bold text-xl">
                  Si has marcado menos de 5, tu web está perdiendo clientes cada día.
                </p>
              </div>
            </div>

            <h2>Conclusión: Soluciona esto ANTES de hacer marketing</h2>
            <p>
              Antes de gastarte dinero en anuncios de Google o Facebook, arregla estos errores. Porque de nada sirve traer tráfico a una web que no convierte.
            </p>
            <p className="text-2xl font-bold text-gray-900">
              Una web bien hecha no necesita ser perfecta. Solo necesita ser clara, rápida y útil.
            </p>

            <div className="not-prose bg-gradient-to-br from-rose-600 to-red-600 rounded-2xl p-8 mt-12 text-white">
              <h3 className="text-2xl font-bold mb-3">¿Tu web tiene alguno de estos errores?</h3>
              <p className="mb-6 text-rose-50 leading-relaxed">
                En AVGG hacemos auditorías gratuitas de webs. Te decimos qué está fallando y cómo arreglarlo. Sin compromiso.
              </p>
              <Link href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rose-600 rounded-full hover:bg-rose-50 transition-colors font-bold">
                Solicitar auditoría gratuita →
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
