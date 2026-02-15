// Helper para convertir datos de cities.ts al formato del componente
export function convertCityData(cityData: any) {
  return {
    city: cityData.city,
    province: cityData.province,
    population: cityData.population,
    heroSubtitle: cityData.heroSubtitle,
    services: [
      { title: 'Diseño web profesional', description: `Páginas web a medida para empresas de ${cityData.city}. Diseño moderno, intuitivo y optimizado para conversión.` },
      { title: 'Tiendas online', description: 'E-commerce completo con pasarela de pago, gestión de stock y envíos. Vende 24/7 desde tu ciudad.' },
      { title: 'SEO local', description: `Posiciona tu negocio en Google cuando busquen servicios en ${cityData.city} y ${cityData.province}. Tráfico orgánico de calidad.` },
      { title: 'Mantenimiento web', description: 'Actualizaciones, seguridad y soporte técnico continuo. Tu web siempre actualizada y protegida.' },
    ],
    benefits: cityData.benefits,
    faqs: cityData.faqs,
    nearCities: cityData.nearCities.filter((c: any) => !c.isSpain),
    metadata: {
      title: `Diseño Web en ${cityData.city} | Agencia Web ${cityData.province} - AVGG`,
      description: `Diseño y desarrollo de páginas web en ${cityData.city}, ${cityData.province}. Agencia especializada en webs profesionales, tiendas online y SEO para empresas.`,
      keywords: [`diseño web ${cityData.city.toLowerCase()}`, `desarrollo web ${cityData.city.toLowerCase()}`, `páginas web ${cityData.province.toLowerCase()}`],
    },
  };
}
