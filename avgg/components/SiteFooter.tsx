import Link from 'next/link';

export default function SiteFooter() {
  const cantabriaCities = [
    { name: 'Santander', slug: 'santander' },
    { name: 'Torrelavega', slug: 'torrelavega' },
    { name: 'Castro Urdiales', slug: 'castro-urdiales' },
    { name: 'Laredo', slug: 'laredo' },
    { name: 'Santoña', slug: 'santona' },
    { name: 'Camargo', slug: 'camargo' },
    { name: 'Piélagos', slug: 'pielagos' },
    { name: 'El Astillero', slug: 'el-astillero' },
    { name: 'Suances', slug: 'suances' },
    { name: 'Comillas', slug: 'comillas' },
  ];

  const spainCities = [
    { name: 'Madrid', slug: 'madrid' },
    { name: 'Barcelona', slug: 'barcelona' },
    { name: 'Valencia', slug: 'valencia' },
    { name: 'Sevilla', slug: 'sevilla' },
    { name: 'Zaragoza', slug: 'zaragoza' },
    { name: 'Málaga', slug: 'malaga' },
    { name: 'Murcia', slug: 'murcia' },
    { name: 'Palma de Mallorca', slug: 'palma-de-mallorca' },
    { name: 'Bilbao', slug: 'bilbao' },
    { name: 'Alicante', slug: 'alicante' },
    { name: 'Córdoba', slug: 'cordoba' },
    { name: 'Valladolid', slug: 'valladolid' },
    { name: 'Vigo', slug: 'vigo' },
    { name: 'Gijón', slug: 'gijon' },
    { name: 'Granada', slug: 'granada' },
  ];

  return (
    <footer className="border-t border-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="text-xl font-bold mb-4">AVGG</div>
            <p className="text-gray-500 max-w-sm">
              Diseño y desarrollo web profesional en Santander. Soluciones digitales para empresas en Cantabria y toda España.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Contacto</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Santander, Cantabria</p>
              <a href="tel:+34658873627" className="block hover:text-gray-900">658 873 627</a>
              <a href="mailto:info@avgg.es" className="block hover:text-gray-900">info@avgg.es</a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Legal</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <Link href="/politica-privacidad" className="block hover:text-gray-900">Privacidad</Link>
              <Link href="/terminos" className="block hover:text-gray-900">Términos</Link>
              <Link href="/cookies" className="block hover:text-gray-900">Cookies</Link>
            </div>
          </div>
        </div>

        {/* Programmatic SEO - Cities in Cantabria */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <h4 className="text-sm font-medium text-gray-900 mb-4">Diseño Web en Cantabria</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {cantabriaCities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Diseño web {city.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Programmatic SEO - Major cities in Spain */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <h4 className="text-sm font-medium text-gray-900 mb-4">Diseño Web en España</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {spainCities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Diseño web {city.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Programmatic SEO - Sectors */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <h4 className="text-sm font-medium text-gray-900 mb-4">Diseño Web por Sectores</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {[
              { name: 'Restaurantes', slug: 'diseno-web-restaurantes' },
              { name: 'Hoteles', slug: 'diseno-web-hoteles' },
              { name: 'Clínicas', slug: 'diseno-web-clinicas' },
              { name: 'Dentistas', slug: 'diseno-web-dentistas' },
              { name: 'Abogados', slug: 'diseno-web-abogados' },
              { name: 'Tiendas', slug: 'diseno-web-tiendas' },
              { name: 'Inmobiliarias', slug: 'diseno-web-inmobiliarias' },
              { name: 'Gimnasios', slug: 'diseno-web-gimnasios' },
              { name: 'Peluquerías', slug: 'diseno-web-peluquerias' },
              { name: 'Constructoras', slug: 'diseno-web-constructoras' },
              { name: 'Psicólogos', slug: 'diseno-web-psicologos' },
              { name: 'Asesorías', slug: 'diseno-web-asesorias' },
            ].map((sector) => (
              <Link
                key={sector.slug}
                href={`/${sector.slug}`}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {sector.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} AVGG. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Hecho con <span className="text-red-500">❤️</span> y <span className="text-amber-700">☕</span> en Santander
          </p>
        </div>
      </div>
    </footer>
  );
}
