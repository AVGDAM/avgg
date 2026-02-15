import Script from 'next/script';

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AVGG',
    url: 'https://avgg.es',
    logo: 'https://avgg.es/og-image.jpg',
    description: 'Agencia de diseño y desarrollo web en Santander, Cantabria. Páginas web profesionales, tiendas online y SEO para empresas.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rualasal 11, 1D',
      addressLocality: 'Santander',
      addressRegion: 'Cantabria',
      postalCode: '39007',
      addressCountry: 'ES',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+34-658-873-627',
      contactType: 'customer service',
      email: 'info@avgg.es',
      availableLanguage: ['Spanish'],
    },
    sameAs: [
      // Aquí puedes agregar redes sociales cuando las tengas
      // 'https://www.facebook.com/avgg',
      // 'https://www.linkedin.com/company/avgg',
      // 'https://twitter.com/avgg',
    ],
    foundingDate: '2019',
    areaServed: {
      '@type': 'Place',
      name: 'España',
    },
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://avgg.es',
    name: 'AVGG - Diseño Web Santander',
    image: 'https://avgg.es/og-image.jpg',
    description: 'Agencia de diseño y desarrollo web profesional en Santander. Creamos páginas web, tiendas online y estrategias SEO para empresas en Cantabria y toda España.',
    url: 'https://avgg.es',
    telephone: '+34658873627',
    email: 'info@avgg.es',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rualasal 11, 1D',
      addressLocality: 'Santander',
      addressRegion: 'Cantabria',
      postalCode: '39007',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.4623,
      longitude: -3.8099,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      // Redes sociales
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '25',
    },
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AVGG',
    url: 'https://avgg.es',
    description: 'Agencia de diseño y desarrollo web en Santander',
    publisher: {
      '@type': 'Organization',
      name: 'AVGG',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://avgg.es/blog?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Diseño y Desarrollo Web',
    provider: {
      '@type': 'LocalBusiness',
      name: 'AVGG',
      url: 'https://avgg.es',
    },
    areaServed: {
      '@type': 'Place',
      name: 'España',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Diseño Web',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Diseño Web Profesional',
            description: 'Páginas web corporativas a medida para empresas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tiendas Online',
            description: 'E-commerce completo con pasarela de pago y gestión de stock',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO y Marketing Digital',
            description: 'Posicionamiento en buscadores y estrategias de marketing online',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mantenimiento Web',
            description: 'Actualizaciones, seguridad y soporte técnico continuo',
          },
        },
      ],
    },
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
