import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import SiteFooter from '@/components/SiteFooter';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, CheckCircle2, AlertTriangle, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cómo elegir una agencia de diseño web en Santander (sin morir en el intento) | AVGG',
  description: 'No todas las agencias web son iguales. Checklist definitivo para contratar diseñadores web en Cantabria y evitar problemas, retrasos y sobrecostes.',
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
              <span className="px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full font-medium">Diseño Web</span>
              <span className="flex items-center gap-1.5"><Calendar size={16} /> 28 Ene 2026</span>
              <span className="flex items-center gap-1.5"><Clock size={16} /> 10 min de lectura</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-8">
              Cómo elegir una agencia de diseño web en Santander (sin morir en el intento)
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              No todas las agencias web son iguales. Checklist definitivo para contratar diseñadores web en Cantabria y evitar problemas, retrasos y sobrecostes.
            </p>
          </header>

          <div className="relative w-full h-[450px] rounded-3xl overflow-hidden mb-12 shadow-xl">
            <Image
              src="/blog/blog-elegir-agencia.jpg"
              alt="Cómo elegir agencia de diseño web"
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
            
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-600 p-8 rounded-r-2xl my-10 shadow-sm">
              <p className="text-xl text-gray-800 font-medium mb-0 leading-relaxed">
                <strong>Aviso importante:</strong> El 60% de proyectos web terminan con retrasos, sobrecostes o resultados decepcionantes. Este artículo te ayudará a estar en el 40% que sale bien.
              </p>
            </div>

            <h2>La decisión de 3.000€ que puede salir mal</h2>
            <p>
              Contratar una agencia web es una inversión importante. Entre 1.500€ y 5.000€ o más. Y como cualquier inversión, puede salir muy bien... o muy mal.
            </p>
            <p>
              He visto proyectos que empezaron con ilusión y terminaron en pesadilla: <strong>webs que nunca se terminaron, presupuestos que se duplicaron, diseños que no se parecían en nada a lo prometido.</strong>
            </p>
            <p>
              Esta guía es para que no seas tú quien cuente esa historia.
            </p>

            <h2 className="flex items-center gap-3">
              <FileCheck className="text-teal-600" size={36} />
              Checklist: 12 preguntas que DEBES hacer
            </h2>

            <div className="not-prose space-y-6 my-10">
              <div className="bg-white border-2 border-teal-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-teal-600">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">"¿Puedo ver vuestro portfolio de webs reales?"</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      No mockups. No diseños en Figma. <strong>Webs reales, online, funcionando.</strong>
                    </p>
                    <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-6 mb-4">
                      <h4 className="font-bold text-red-900 mb-2">🚩 Señal de alarma:</h4>
                      <p className="text-gray-700 text-base mb-0">Solo tienen imágenes bonitas pero no URLs reales de proyectos. O las webs que muestran son de hace 5 años.</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-6">
                      <h4 className="font-bold text-green-900 mb-2">✓ Buena señal:</h4>
                      <p className="text-gray-700 text-base mb-0">Te envían 5-10 URLs de webs recientes (último año) en tu sector o similares.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-teal-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-teal-600">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">"¿Cuánto tiempo lleváis haciendo webs?"</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      No contrates a alguien que lleva 3 meses. Busca al menos 2-3 años de experiencia.
                    </p>
                    <div className="bg-amber-50 border-l-4 border-amber-600 rounded-r-xl p-6">
                      <h4 className="font-bold text-amber-900 mb-2">Pregunta de seguimiento:</h4>
                      <p className="text-gray-700 text-base mb-0">"¿Cuántas webs habéis entregado en el último año?" (Respuesta aceptable: mínimo 10)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-teal-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-teal-600">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">"¿La web será mía o me la alquiláis?"</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      <strong>CRÍTICO.</strong> Algunas agencias te "alquilan" la web. Pagas mensualmente y si dejas de pagar, pierdes la web.
                    </p>
                    <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-6 mb-4">
                      <h4 className="font-bold text-red-900 mb-2">🚩 Huye si dicen:</h4>
                      <ul className="space-y-2 text-gray-700 text-base">
                        <li>• "Tienes que pagar X€/mes para siempre"</li>
                        <li>• "Si dejas de pagar, perdemos la web"</li>
                        <li>• "No puedes llevarte el código a otra agencia"</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-6">
                      <h4 className="font-bold text-green-900 mb-2">✓ Respuesta correcta:</h4>
                      <p className="text-gray-700 text-base mb-0">"Pagas una vez, la web es tuya. Hosting y mantenimiento son opcionales."</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-teal-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-teal-600">4</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">"¿Qué pasa si no me gusta el diseño?"</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Debe haber revisiones incluidas. Mínimo 2-3 rondas.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-6">
                      <h4 className="font-bold text-green-900 mb-2">✓ Lo que debe estar claro:</h4>
                      <ul className="space-y-2 text-gray-700 text-base">
                        <li>• Cuántas revisiones de diseño están incluidas</li>
                        <li>• Qué pasa si quieres cambios después de aprobar</li>
                        <li>• Coste de revisiones adicionales</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-teal-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-teal-600">5</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">"¿Cuál es el plazo de entrega realista?"</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Desconfía de plazos muy cortos ("en 1 semana") o muy largos ("4-6 meses" para una web básica).
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6">
                      <h4 className="font-bold text-blue-900 mb-2">Plazos normales:</h4>
                      <ul className="space-y-2 text-gray-700 text-base">
                        <li>• Web básica (5-7 páginas): 3-4 semanas</li>
                        <li>• Web con CMS y blog: 4-6 semanas</li>
                        <li>• Tienda online: 6-8 semanas</li>
                        <li>• Web a medida compleja: 8-12 semanas</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-teal-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-teal-600">6</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">"¿Incluye SEO o es aparte?"</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Una web sin SEO básico es una web invisible en Google.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-6">
                      <h4 className="font-bold text-green-900 mb-2">SEO básico que DEBE estar incluido:</h4>
                      <ul className="space-y-2 text-gray-700 text-base">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Títulos y descripciones optimizadas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                          <span>URLs amigables</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Sitemap XML</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Robots.txt</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Integración Google Search Console</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-teal-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-teal-600">7</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">"¿Quién será mi contacto durante el proyecto?"</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Necesitas un punto de contacto claro. No 5 personas diferentes cada vez.
                    </p>
                    <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-6">
                      <h4 className="font-bold text-red-900 mb-2">🚩 Señal de alarma:</h4>
                      <p className="text-gray-700 text-base mb-0">"Depende, te responde quien esté disponible." (Caos asegurado)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-teal-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-teal-600">8</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">"¿Qué soporte tendré después del lanzamiento?"</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Lanzar la web no es el final. Es el principio. Necesitas soporte.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-6">
                      <h4 className="font-bold text-green-900 mb-2">✓ Mínimo aceptable:</h4>
                      <ul className="space-y-2 text-gray-700 text-base">
                        <li>• 1 mes de soporte gratuito post-lanzamiento</li>
                        <li>• Corrección de errores sin coste</li>
                        <li>• Formación para gestionar contenidos</li>
                        <li>• Opción de contratar mantenimiento mensual</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2>Señales de alarma: Huye de estas agencias</h2>

            <div className="not-prose space-y-4 my-10">
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-8">
                <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="text-red-600" size={24} />
                  🚩 No tienen web propia (o es horrible)
                </h4>
                <p className="text-gray-700 mb-0">Si no pueden hacer una web decente para ellos, ¿cómo van a hacerla para ti?</p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-8">
                <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="text-red-600" size={24} />
                  🚩 Prometen primera página de Google en 1 mes
                </h4>
                <p className="text-gray-700 mb-0">Mentira. El SEO lleva tiempo. Nadie puede prometer eso.</p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-8">
                <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="text-red-600" size={24} />
                  🚩 Presupuesto verbal sin nada por escrito
                </h4>
                <p className="text-gray-700 mb-0">TODO debe estar por escrito. Precio, plazos, qué incluye, revisiones.</p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-8">
                <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="text-red-600" size={24} />
                  🚩 Piden 100% por adelantado
                </h4>
                <p className="text-gray-700 mb-0">Pago normal: 50% al inicio, 50% al finalizar. Nunca 100% adelantado.</p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-8">
                <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="text-red-600" size={24} />
                  🚩 No responden en 48-72h a emails
                </h4>
                <p className="text-gray-700 mb-0">Si tardan días en responder ANTES de contratarles, imagina después.</p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-8">
                <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="text-red-600" size={24} />
                  🚩 "Usamos plantillas de WordPress" (sin personalizarlas)
                </h4>
                <p className="text-gray-700 mb-0">Tu web va a parecer a 1.000 más. Paga a alguien que diseñe DE VERDAD.</p>
              </div>
            </div>

            <h2>Precios: ¿Cuánto es razonable pagar?</h2>

            <div className="not-prose bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-3xl p-10 my-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Rangos de precio justos en Santander (2026)</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 text-center border border-teal-200">
                  <div className="text-3xl font-bold text-teal-600 mb-2">1.500€ - 2.500€</div>
                  <div className="text-sm text-gray-700 mb-2">Web básica</div>
                  <div className="text-xs text-gray-500">5-7 páginas, responsive, formulario</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center border border-teal-200">
                  <div className="text-3xl font-bold text-teal-600 mb-2">2.500€ - 5.000€</div>
                  <div className="text-sm text-gray-700 mb-2">Web profesional con CMS</div>
                  <div className="text-xs text-gray-500">Blog, admin panel, SEO avanzado</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center border border-teal-200">
                  <div className="text-3xl font-bold text-teal-600 mb-2">3.500€ - 8.000€</div>
                  <div className="text-sm text-gray-700 mb-2">Tienda online</div>
                  <div className="text-xs text-gray-500">E-commerce completo, pagos, gestión</div>
                </div>
              </div>
              <p className="text-gray-700 mt-6 mb-0 text-center">
                <strong>Si te cobran mucho menos:</strong> Desconfía. <strong>Si te cobran el doble:</strong> Pide justificación detallada.
              </p>
            </div>

            <h2>La pregunta final que lo revela todo</h2>
            <p>
              Antes de decidir, haz esta pregunta:
            </p>
            <div className="not-prose bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-3xl p-10 my-10 text-center">
              <p className="text-3xl font-bold mb-6">"¿Puedo hablar con algún cliente vuestro?"</p>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Si dudan, mal. Si te ponen en contacto con 2-3 clientes reales y todos están contentos, confía.
              </p>
            </div>

            <h2>Conclusión: No elijas por precio, elige por confianza</h2>
            <p>
              La agencia más barata no es la mejor opción. Ni la más cara. <strong>La mejor es la que te genera confianza, tiene experiencia demostrable y comunica claramente.</strong>
            </p>
            <p>
              Usa este checklist. Haz las preguntas incómodas. Pide TODO por escrito. Y si algo no te cuadra, busca otra opción.
            </p>
            <p className="text-2xl font-bold text-gray-900">
              Tu web es una inversión de años. Tómate 2 semanas extra para elegir bien.
            </p>

            <div className="not-prose bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl p-8 mt-12 text-white">
              <h3 className="text-2xl font-bold mb-3">¿Quieres trabajar con transparencia?</h3>
              <p className="mb-6 text-teal-50 leading-relaxed">
                En AVGG respondemos a todas estas preguntas por escrito. Portfolio real, plazos claros, web es tuya, sin letra pequeña. Así trabajamos desde 2019.
              </p>
              <Link href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 rounded-full hover:bg-teal-50 transition-colors font-bold">
                Solicitar presupuesto transparente →
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
