"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    author: "Cliente satisfecho",
    rating: 5,
    text: "Excelente profesional. Me ha ayudado muchísimo con mi ansiedad. Muy recomendable.",
    date: "Hace 2 meses",
  },
  {
    id: 2,
    author: "María G.",
    rating: 5,
    text: "Natalia es una psicóloga excepcional. Su trato cercano y profesional me ha ayudado a superar momentos muy difíciles.",
    date: "Hace 3 meses",
  },
  {
    id: 3,
    author: "Juan P.",
    rating: 5,
    text: "Muy buena experiencia. La terapia de pareja nos ha ayudado a mejorar nuestra comunicación enormemente.",
    date: "Hace 1 mes",
  },
];

export default function GoogleReviews() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy dark:text-slate-100 mb-4">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-muted dark:text-slate-300 max-w-2xl mx-auto">
            La satisfacción de mis pacientes es mi mayor motivación
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-6 w-6 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-lg font-semibold text-navy dark:text-slate-100">
              5.0
            </span>
            <span className="text-muted dark:text-slate-400">
              · Google Reviews
            </span>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-muted dark:text-slate-300 mb-4 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-navy dark:text-slate-100">
                  {review.author}
                </span>
                <span className="text-muted dark:text-slate-400">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.google.com/search?q=natalia+chiva"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 px-6 py-3 font-semibold text-navy dark:text-slate-100 transition hover:bg-gray-50 dark:hover:bg-slate-700"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Ver todas las reseñas en Google
          </a>
        </div>
      </div>
    </section>
  );
}
