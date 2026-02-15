export default function ReviewSchema({ rating, reviewCount }: { rating: number; reviewCount: number }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Natalia Chiva - Psicóloga Sanitaria",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating.toString(),
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": reviewCount.toString()
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
