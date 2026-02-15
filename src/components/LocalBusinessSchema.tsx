export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    "name": "Natalia Chiva Montoya - Psicóloga Sanitaria",
    "image": "https://www.nataliachiva.com/natalia-chiva.png",
    "description": "Psicóloga General Sanitaria en Santander especializada en ansiedad, depresión, terapia de pareja y familia. Consulta presencial y online.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "C/ Rualasal 11, 1 Dcha",
      "addressLocality": "Santander",
      "addressRegion": "Cantabria",
      "postalCode": "39001",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.4631089",
      "longitude": "-3.8062189"
    },
    "url": "https://www.nataliachiva.com",
    "telephone": "+34649493778",
    "email": "info@nataliachiva.com",
    "priceRange": "60€ - 75€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "20:00"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Santander"
      },
      {
        "@type": "Country",
        "name": "España"
      }
    ],
    "serviceType": [
      "Terapia Individual",
      "Terapia de Pareja",
      "Terapia Familiar",
      "Consulta Online",
      "Tratamiento de Ansiedad",
      "Tratamiento de Depresión",
      "Terapia de Estrés",
      "Terapia de Duelo"
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Psicóloga General Sanitaria",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Colegio Oficial de Psicología de Cantabria"
      },
      "identifier": "CA00989"
    },
    "memberOf": {
      "@type": "Organization",
      "name": "Colegio Oficial de Psicología de Cantabria"
    },
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Universidad de Salamanca"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "Universidad Pontificia de Comillas"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/in/natalia-chiva-montoya",
      "https://www.mundoctor.com/psicologia/santander/natalia-chiva-montoya"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
