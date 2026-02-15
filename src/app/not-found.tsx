import Link from "next/link";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-800/30 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-beige dark:text-blue-gray mb-4">404</h1>
          <div className="h-1 w-32 bg-gradient-to-r from-beige to-blue-gray dark:from-blue-gray to-beige mx-auto rounded-full mb-8"></div>
        </div>

        {/* Message */}
        <h2 className="text-3xl sm:text-4xl font-bold text-navy dark:text-slate-100 mb-4">
          Página no encontrada
        </h2>
        <p className="text-lg text-muted dark:text-slate-300 mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-beige dark:bg-blue-gray text-white px-6 py-3 rounded-lg font-semibold hover:bg-beige-dark dark:hover:bg-blue-gray-light transition shadow-lg"
          >
            <Home className="h-5 w-5" />
            Volver al Inicio
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-gray-200 dark:bg-slate-700 text-navy dark:text-slate-100 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-600 transition"
          >
            <Search className="h-5 w-5" />
            Ver el Blog
          </Link>
        </div>

        {/* Popular Links */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-muted dark:text-slate-400 uppercase tracking-wider mb-4">
            Páginas populares
          </h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/terapia" className="text-beige dark:text-blue-gray hover:underline">
              Terapia
            </Link>
            <span className="text-muted dark:text-slate-400">•</span>
            <Link href="/tests-psicologicos" className="text-beige dark:text-blue-gray hover:underline">
              Tests Psicológicos
            </Link>
            <span className="text-muted dark:text-slate-400">•</span>
            <Link href="/aprende" className="text-beige dark:text-blue-gray hover:underline">
              Aprende
            </Link>
            <span className="text-muted dark:text-slate-400">•</span>
            <Link href="/contacto" className="text-beige dark:text-blue-gray hover:underline">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
