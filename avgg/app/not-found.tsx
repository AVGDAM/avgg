import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';
import Nav from '@/components/Nav';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Página no encontrada | AVGG',
  description: 'La página que buscas no existe o ha sido movida.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-[150px] md:text-[200px] font-bold text-gray-200 leading-none select-none">
            404
          </h1>
        </div>

        {/* Message */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Página no encontrada
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto">
            Lo sentimos, la página que buscas no existe o ha sido movida. 
            Te ayudamos a encontrar lo que necesitas.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
          >
            <Home size={18} />
            Volver al inicio
          </Link>
          <Link
            href="/proyectos"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 text-gray-900 rounded-full hover:bg-gray-200 transition-colors font-medium"
          >
            <Search size={18} />
            Ver proyectos
          </Link>
        </div>

        {/* Quick Links */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Enlaces rápidos:</p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-700 transition-colors">
              Inicio
            </Link>
            <Link href="/proyectos" className="text-blue-600 hover:text-blue-700 transition-colors">
              Proyectos
            </Link>
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 transition-colors">
              Blog
            </Link>
            <Link href="/contacto" className="text-blue-600 hover:text-blue-700 transition-colors">
              Contacto
            </Link>
            <Link href="/santander" className="text-blue-600 hover:text-blue-700 transition-colors">
              Diseño web Santander
            </Link>
          </div>
        </div>
      </div>
      </div>
      <SiteFooter />
    </>
  );
}
