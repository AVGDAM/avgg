"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted/rejected cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
    // Here you can initialize analytics, etc.
    console.log("Cookies accepted");
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
    console.log("Cookies rejected");
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-800 border-t-2 border-beige dark:border-blue-gray shadow-lg">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-navy dark:text-slate-200">
              Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.{" "}
              <Link 
                href="/cookies" 
                className="text-beige dark:text-blue-gray hover:underline font-medium"
              >
                Más información
              </Link>
            </p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={rejectCookies}
              className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-navy dark:text-slate-200 border-2 border-gray-300 dark:border-slate-600 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition"
            >
              Rechazar
            </button>
            <button
              onClick={acceptCookies}
              className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-white bg-beige dark:bg-blue-gray rounded-lg hover:bg-beige-dark dark:hover:bg-blue-gray-light transition"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
