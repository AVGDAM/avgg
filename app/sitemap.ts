import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://avgg.es';
  
  // Páginas principales
  const mainPages = [
    '',
    '/proyectos',
    '/contacto',
    '/blog',
  ];

  // Ciudades de Cantabria
  const cantabriaCities = [
    'santander',
    'torrelavega',
    'castro-urdiales',
    'laredo',
    'santona',
    'camargo',
    'pielagos',
    'el-astillero',
    'suances',
    'comillas',
  ];

  // Ciudades de España
  const spainCities = [
    'madrid',
    'barcelona',
    'valencia',
    'sevilla',
    'zaragoza',
    'malaga',
    'murcia',
    'palma-de-mallorca',
    'bilbao',
    'alicante',
    'cordoba',
    'valladolid',
    'vigo',
    'gijon',
    'granada',
  ];

  // Sectores
  const sectors = [
    'diseno-web-restaurantes',
    'diseno-web-hoteles',
    'diseno-web-clinicas',
    'diseno-web-dentistas',
    'diseno-web-abogados',
    'diseno-web-tiendas',
    'diseno-web-inmobiliarias',
    'diseno-web-gimnasios',
    'diseno-web-peluquerias',
    'diseno-web-constructoras',
    'diseno-web-psicologos',
    'diseno-web-asesorias',
  ];

  // Blog posts
  const blogPosts = [
    'cuanto-cuesta-crear-pagina-web-santander',
    'que-es-programmatic-seo',
    'que-es-geo-seo',
    'mejores-practicas-diseno-web-2026',
    'como-elegir-agencia-diseno-web',
    'diferencia-pagina-web-tienda-online',
    'importancia-diseno-responsive',
    'como-mejorar-velocidad-web',
    'seo-local-negocios-santander',
  ];

  // Generar URLs de páginas principales
  const mainUrls = mainPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: (page === '' || page === '/blog' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: page === '' ? 1 : 0.8,
  }));

  // Generar URLs de ciudades
  const cityUrls = [...cantabriaCities, ...spainCities].map(city => ({
    url: `${baseUrl}/${city}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Generar URLs de sectores
  const sectorUrls = sectors.map(sector => ({
    url: `${baseUrl}/${sector}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Generar URLs de blog
  const blogUrls = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...mainUrls, ...cityUrls, ...sectorUrls, ...blogUrls];
}
