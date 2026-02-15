"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/terapia", label: "Terapia" },
  { href: "/consultas-online", label: "Consultas Online" },
  { href: "/consultas-presenciales", label: "Consultas Presenciales" },
  { href: "/aprende", label: "Aprende" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white dark:bg-slate-900/95 dark:border-slate-700 backdrop-blur supports-[backdrop-filter]:bg-white/90 shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6" aria-label="Navegación principal">
        <Link
          href="/"
          className="text-lg font-semibold text-navy dark:text-blue-gray-light"
        >
          Natalia Chiva
        </Link>
        <ul
          className={`absolute left-0 right-0 top-full flex flex-col gap-1 border-b border-gray-200 bg-white px-4 py-4 dark:border-slate-700 dark:bg-slate-900 sm:static sm:flex sm:flex-row sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 dark:sm:bg-transparent ${
            open ? "flex" : "hidden sm:flex"
          }`}
        >
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors sm:px-4 ${
                  pathname === href
                    ? "bg-blue-gray/20 text-navy dark:text-blue-gray-light"
                    : "text-muted hover:bg-beige-light/30 hover:text-navy dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md text-muted dark:text-slate-300 sm:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
