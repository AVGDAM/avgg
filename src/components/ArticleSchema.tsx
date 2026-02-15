export default function ArticleSchema({ 
  title, 
  description, 
  datePublished, 
  dateModified,
  url,
  image,
  category
}: { 
  title: string; 
  description: string; 
  datePublished: string;
  dateModified?: string;
  url: string;
  image?: string;
  category?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image || "https://www.nataliachiva.com/natalia-chiva.png",
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": "Natalia Chiva Montoya",
      "url": "https://www.nataliachiva.com",
      "jobTitle": "Psicóloga General Sanitaria",
      "worksFor": {
        "@type": "Organization",
        "name": "Centro Rualasal"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Natalia Chiva - Psicóloga Sanitaria",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.nataliachiva.com/logo-natalia-chiva.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "articleSection": category || "Psicología",
    "inLanguage": "es-ES"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
