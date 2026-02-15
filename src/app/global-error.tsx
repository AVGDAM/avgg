"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es">
      <body className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 min-h-screen flex flex-col items-center justify-center p-6 font-sans">
        <main className="max-w-md text-center">
          <h1 className="text-xl font-bold mb-2">Algo ha ido mal</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Se ha producido un error en el servidor. Por favor, inténtalo de nuevo.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-md bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-900 px-4 py-2 text-sm font-medium hover:opacity-90"
          >
            Reintentar
          </button>
        </main>
      </body>
    </html>
  );
}
