import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import HeroSplit from '@/components/HeroSplit';
import Marquee from '@/components/Marquee';
import BentoServices from '@/components/BentoServices';
import BigText from '@/components/BigText';
import CaseStudies from '@/components/CaseStudies';
import HowWeWork from '@/components/HowWeWork';
import ContactCTA from '@/components/ContactCTA';
import SiteFooter from '@/components/SiteFooter';
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'AVGG - Diseño Web en Santander | Agencia Digital Profesional',
  description: 'Agencia de diseño y desarrollo web en Santander, Cantabria. Creamos páginas web profesionales, tiendas online y estrategias SEO para empresas. +25 proyectos entregados con 100% de satisfacción.',
  keywords: ['diseño web santander', 'desarrollo web cantabria', 'páginas web santander', 'agencia digital santander', 'tienda online santander', 'seo santander', 'crear página web', 'diseño web profesional'],
  openGraph: {
    title: 'AVGG - Diseño Web en Santander | Agencia Digital Profesional',
    description: 'Creamos páginas web profesionales para empresas en Santander y toda España. Diseño moderno, SEO optimizado y resultados garantizados.',
    type: 'website',
    url: 'https://avgg.es',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AVGG - Diseño Web en Santander',
    description: 'Agencia de diseño web profesional en Santander. Páginas web, tiendas online y SEO.',
  },
  alternates: {
    canonical: 'https://avgg.es',
  },
};

export default function Home() {
  const breadcrumbItems = [
    { name: 'Inicio', url: 'https://avgg.es' },
  ];

  return (
    <>
      <LocalBusinessSchema />
      <ServiceSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Nav />
      <HeroSplit />
      <Marquee />
      <BentoServices />
      <BigText />
      <CaseStudies />
      <HowWeWork />
      <ContactCTA />
      <SiteFooter />
    </>
  );
}
