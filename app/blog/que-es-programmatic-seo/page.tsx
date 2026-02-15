import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import SiteFooter from '@/components/SiteFooter';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, Zap, Target, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: '¿Qué es el Programmatic SEO y cómo multiplicar tu tráfico? | AVGG',
  description: 'Aprende cómo generar automáticamente cientos de páginas optimizadas para posicionarte en búsquedas de larga cola y captar más clientes sin crear contenido manual.',
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
              <span className="px-4 py-1.5 bg-violet-100 text-violet-700 rounded-full font-medium">SEO</span>
              <span className="flex items-center gap-1.5"><Calendar size={16} /> 12 Feb 2026</span>
              <span className="flex items-center gap-1.5"><Clock size={16} /> 10 min de lectura</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-8">
              ¿Qué es el Programmatic SEO y cómo puede multiplicar tu tráfico?
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Aprende cómo generar automáticamente cientos de páginas optimizadas para posicionarte en búsquedas de larga cola y captar más clientes sin crear contenido manual.
            </p>
          </header>

          <div className="relative w-full h-[450px] rounded-3xl overflow-hidden mb-12 shadow-xl">
            <Image
              src="/blog/blog-programmatic-seo.jpg"
              alt="Programmatic SEO - Automatización de contenido"
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
            
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 border-l-4 border-violet-600 p-8 rounded-r-2xl my-10 shadow-sm">
              <p className="text-xl text-gray-800 font-medium mb-0 leading-relaxed">
                <strong>En resumen:</strong> El Programmatic SEO te permite crear automáticamente cientos de páginas optimizadas a partir de una plantilla y una base de datos. Empresas como Idealista, TripAdvisor y Zapier lo usan para dominar sus nichos.
              </p>
            </div>

            <h2>El SEO tradicional está roto (para ciertos negocios)</h2>
            <p>
              Imagina que tienes una inmobiliaria en Cantabria. ¿Cuántas páginas necesitarías crear manualmente para posicionarte en todas estas búsquedas?
            </p>
            <ul>
              <li>"Pisos en venta en Santander"</li>
              <li>"Pisos en venta en Torrelavega"</li>
              <li>"Apartamentos en Castro Urdiales"</li>
              <li>"Chalets en Suances"</li>
              <li>...y así con <strong>102 municipios de Cantabria</strong></li>
            </ul>
            <p>
              Respuesta: <strong>cientos de páginas</strong>. Y si las creas manualmente, tardarías meses y costaría una fortuna. Ahí entra el Programmatic SEO.
            </p>

            <h2>¿Qué es exactamente el Programmatic SEO?</h2>
            <p>
              El Programmatic SEO es la <strong>generación automática de páginas web optimizadas para SEO</strong> a partir de bases de datos estructuradas. En lugar de escribir cada página manualmente, creas una plantilla y la rellenas con datos dinámicos.
            </p>

            <div className="not-prose bg-blue-50 rounded-3xl p-10 my-10 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ejemplo real: Zalando</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Zalando no tiene empleados escribiendo manualmente las páginas de "Zapatillas Nike Air Max en Madrid" o "Zapatillas Adidas en Barcelona". Tienen una plantilla que se rellena automáticamente con:
              </p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <Zap className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span>Nombre del producto (base de datos)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span>Ciudad o categoría (variable dinámica)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span>Características, precios, stock (datos actualizados)</span>
                </li>
              </ul>
            </div>

            <h2>¿Quién está usando Programmatic SEO?</h2>
            <p>
              Empresas que probablemente usas cada día:
            </p>

            <div className="not-prose grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Idealista / Fotocasa</h4>
                <p className="text-gray-600">Miles de páginas de "Pisos en [ciudad] [barrio]"</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">TripAdvisor</h4>
                <p className="text-gray-600">"Restaurantes en [ciudad]", "Hoteles en [destino]"</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Zapier</h4>
                <p className="text-gray-600">"Integración [herramienta A] + [herramienta B]"</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Canva</h4>
                <p className="text-gray-600">"Plantilla de [tipo] para [ocasión]"</p>
              </div>
            </div>

            <h2>Cómo funciona el Programmatic SEO (paso a paso)</h2>
            
            <div className="not-prose bg-white border border-gray-200 rounded-3xl p-10 my-10 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-violet-600">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Identifica oportunidades de palabras clave de larga cola</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Busca patrones repetitivos de búsquedas. Por ejemplo:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>"[Servicio] en [ciudad]" → "Fontanero en Santander"</li>
                    <li>"[Producto] para [uso]" → "Software de contabilidad para autónomos"</li>
                    <li>"Cómo [acción] en [software]" → "Cómo exportar PDF en Canva"</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="not-prose bg-white border border-gray-200 rounded-3xl p-10 my-10 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-violet-600">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Crea una base de datos</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Recopila todos los datos variables. Por ejemplo, si eres fontanero:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>Lista de ciudades de Cantabria (INE, Wikipedia)</li>
                    <li>Servicios que ofreces (reparación fugas, instalación calderas...)</li>
                    <li>Precios medios por servicio</li>
                    <li>Código postal y población de cada localidad</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="not-prose bg-white border border-gray-200 rounded-3xl p-10 my-10 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-violet-600">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Diseña la plantilla</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Crea una estructura con variables dinámicas:
                  </p>
                  <div className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                    <pre className="text-sm"><code>{`<h1>Fontanero en {ciudad}</h1>
<p>Servicios de fontanería en {ciudad}, Cantabria. 
   Atendemos a {población} habitantes.</p>
<ul>
  {servicios.map(servicio => (
    <li>{servicio.nombre} - desde {servicio.precio}€</li>
  ))}
</ul>`}</code></pre>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="flex items-center gap-3">
              <TrendingUp className="text-violet-600" size={36} />
              Ventajas del Programmatic SEO
            </h2>

            <div className="not-prose grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-green-50 border-l-4 border-green-600 rounded-r-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Escala brutal</h4>
                <p className="text-gray-700">Crea 1.000 páginas en el tiempo que tardarías en hacer 10 manuales</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 rounded-r-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Cobertura total</h4>
                <p className="text-gray-700">Capturas búsquedas de larga cola que tu competencia ignora</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 rounded-r-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Actualización automática</h4>
                <p className="text-gray-700">Cambias un dato y se actualiza en todas las páginas</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 rounded-r-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">ROI altísimo</h4>
                <p className="text-gray-700">Trabajo una vez, resultados durante años</p>
              </div>
            </div>

            <h2>Riesgos y cómo evitarlos</h2>
            
            <div className="not-prose space-y-6 my-10">
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-8">
                <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center gap-2">
                  ⚠️ Riesgo: Google te penaliza por contenido duplicado
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Solución:</strong> Asegúrate de que cada página tiene al menos 30-40% de contenido único. Usa variaciones, datos locales reales, y contenido adicional específico.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-8">
                <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center gap-2">
                  ⚠️ Riesgo: Páginas de baja calidad
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Solución:</strong> No generes páginas si no tienes suficiente información valiosa. "Fontanero en pueblo de 50 habitantes" sin datos reales es spam.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-8">
                <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center gap-2">
                  ⚠️ Riesgo: Experiencia de usuario pobre
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Solución:</strong> Las páginas generadas deben ser útiles. Si un usuario busca "abogado en Reinosa", debe encontrar información relevante, no un texto genérico.
                </p>
              </div>
            </div>

            <h2>Ejemplo práctico: Agencia de diseño web local</h2>
            <p>
              Supongamos que tienes una agencia de diseño web en Santander y quieres captar clientes en toda Cantabria. Podrías crear:
            </p>

            <div className="not-prose bg-gradient-to-br from-blue-600 to-violet-600 text-white rounded-3xl p-10 my-10">
              <div className="grid md:grid-cols-3 gap-8 mb-6">
                <div>
                  <div className="text-4xl font-bold mb-2">102</div>
                  <div className="text-blue-100">páginas "Diseño web en [ciudad]"</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">20</div>
                  <div className="text-blue-100">páginas "Diseño web para [sector]"</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">306</div>
                  <div className="text-blue-100">páginas "[Tipo web] en [ciudad]"</div>
                </div>
              </div>
              <div className="text-3xl font-bold pt-6 border-t border-white/20">
                Total: 428 páginas optimizadas
              </div>
            </div>

            <h2>Conclusión: El futuro del SEO es automatizado</h2>
            <p>
              El Programmatic SEO no es trampa, es eficiencia. Si lo haces bien —con contenido útil, datos reales y buena UX— es una estrategia ganadora.
            </p>
            <p>
              Las empresas que dominen Programmatic SEO en los próximos años tendrán una ventaja competitiva brutal. Mientras tu competencia escribe su décimo artículo de blog, tú ya tendrás 500 páginas posicionadas.
            </p>

            <div className="not-prose bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl p-8 mt-12 text-white">
              <h3 className="text-2xl font-bold mb-3">¿Quieres implementar Programmatic SEO en tu web?</h3>
              <p className="mb-6 text-violet-50 leading-relaxed">
                En AVGG diseñamos estrategias de SEO automatizado para negocios con cobertura local o nacional. Cuéntanos tu caso.
              </p>
              <Link href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-600 rounded-full hover:bg-violet-50 transition-colors font-bold">
                Hablemos de tu estrategia SEO →
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
