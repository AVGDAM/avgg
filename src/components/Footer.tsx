import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const contact = {
  address: "C/ Rualasal 11, 1 Dcha. Santander",
  phone: "+34 649 493 778",
  email: "info@nataliachiva.com",
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-slate-700 dark:bg-slate-900/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-navy dark:text-slate-300">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm text-muted dark:text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-gray" aria-hidden />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-blue-gray" aria-hidden />
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-navy dark:hover:text-blue-gray-light hover:underline">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 shrink-0 text-[#25D366]" aria-hidden />
                <a href="https://wa.me/34649493778" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] hover:underline">
                  {contact.phone} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-blue-gray" aria-hidden />
                <a href={`mailto:${contact.email}`} className="hover:text-navy dark:hover:text-blue-gray-light hover:underline">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-navy dark:text-slate-300">
              Enlaces
            </h3>
            <ul className="space-y-2 text-sm text-muted dark:text-slate-400">
              <li>
                <Link href="/" className="hover:text-navy dark:hover:text-blue-gray-light hover:underline">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/terapia" className="hover:text-navy dark:hover:text-blue-gray-light hover:underline">
                  Terapia
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-navy dark:hover:text-blue-gray-light hover:underline">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-navy dark:text-slate-300">
              Servicios en Santander
            </h3>
            <ul className="space-y-2 text-sm text-muted dark:text-slate-400">
              <li>
                <Link href="/psicologo-ansiedad-santander" className="hover:text-navy dark:hover:text-blue-gray-light hover:underline">
                  Psicólogo Ansiedad
                </Link>
              </li>
              <li>
                <Link href="/terapia-pareja-santander" className="hover:text-navy dark:hover:text-blue-gray-light hover:underline">
                  Terapia de Pareja
                </Link>
              </li>
              <li>
                <Link href="/psicologo-infantil-santander" className="hover:text-navy dark:hover:text-blue-gray-light hover:underline">
                  Psicólogo Infantil
                </Link>
              </li>
              <li>
                <Link href="/psicologo-online-santander" className="hover:text-navy dark:hover:text-blue-gray-light hover:underline">
                  Psicólogo Online
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-navy dark:text-slate-300">
              Legales
            </h3>
            <ul className="space-y-2 text-sm text-muted dark:text-slate-400">
              <li>
                <Link href="/aviso-legal" className="hover:text-navy dark:hover:text-blue-gray-light hover:underline">
                  Aviso legal
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="hover:text-navy dark:hover:text-blue-gray-light hover:underline">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-navy dark:hover:text-blue-gray-light hover:underline">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-slate-700">
          <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-navy dark:text-slate-300">
            Terapia Online por Ciudades
          </h3>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-muted dark:text-slate-400 mb-6">
            <Link href="/terapia-online-madrid" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Madrid</Link>
            <span>•</span>
            <Link href="/terapia-online-barcelona" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Barcelona</Link>
            <span>•</span>
            <Link href="/terapia-online-valencia" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Valencia</Link>
            <span>•</span>
            <Link href="/terapia-online-sevilla" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Sevilla</Link>
            <span>•</span>
            <Link href="/terapia-online-zaragoza" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Zaragoza</Link>
            <span>•</span>
            <Link href="/terapia-online-malaga" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Málaga</Link>
            <span>•</span>
            <Link href="/terapia-online-murcia" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Murcia</Link>
            <span>•</span>
            <Link href="/terapia-online-palma" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Palma</Link>
            <span>•</span>
            <Link href="/terapia-online-bilbao" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Bilbao</Link>
            <span>•</span>
            <Link href="/terapia-online-alicante" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Alicante</Link>
            <span>•</span>
            <Link href="/terapia-online-cordoba" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Córdoba</Link>
            <span>•</span>
            <Link href="/terapia-online-valladolid" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Valladolid</Link>
            <span>•</span>
            <Link href="/terapia-online-vigo" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Vigo</Link>
            <span>•</span>
            <Link href="/terapia-online-gijon" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Gijón</Link>
            <span>•</span>
            <Link href="/terapia-online-granada" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Granada</Link>
            <span>•</span>
            <Link href="/terapia-online-a-coruna" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online A Coruña</Link>
            <span>•</span>
            <Link href="/terapia-online-vitoria" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Vitoria</Link>
            <span>•</span>
            <Link href="/terapia-online-oviedo" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Oviedo</Link>
            <span>•</span>
            <Link href="/terapia-online-pamplona" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Pamplona</Link>
            <span>•</span>
            <Link href="/terapia-online-salamanca" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Salamanca</Link>
            <span>•</span>
            <Link href="/terapia-online-logrono" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Logroño</Link>
            <span>•</span>
            <Link href="/terapia-online-burgos" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Burgos</Link>
            <span>•</span>
            <Link href="/terapia-online-albacete" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Albacete</Link>
            <span>•</span>
            <Link href="/terapia-online-santander" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Santander</Link>
            <span>•</span>
            <Link href="/terapia-online-castellon" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Castellón</Link>
            <span>•</span>
            <Link href="/terapia-online-leon" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online León</Link>
            <span>•</span>
            <Link href="/terapia-online-cadiz" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Cádiz</Link>
            <span>•</span>
            <Link href="/terapia-online-huelva" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Huelva</Link>
            <span>•</span>
            <Link href="/terapia-online-badajoz" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Badajoz</Link>
            <span>•</span>
            <Link href="/terapia-online-tarragona" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Terapia Online Tarragona</Link>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 dark:border-slate-700">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-navy dark:text-slate-300">
            Recursos Gratuitos de Psicología
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Tests Psicológicos */}
            <div>
              <p className="text-center text-xs font-semibold text-navy dark:text-slate-300 mb-3">Tests Psicológicos</p>
              <ul className="space-y-2 text-xs text-muted dark:text-slate-400">
                <li className="text-center">
                  <Link href="/test-ansiedad" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Test de Ansiedad</Link>
                </li>
                <li className="text-center">
                  <Link href="/test-depresion" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Test de Depresión</Link>
                </li>
                <li className="text-center">
                  <Link href="/test-autoestima" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Test de Autoestima</Link>
                </li>
                <li className="text-center">
                  <Link href="/test-estres-laboral" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Test de Estrés Laboral</Link>
                </li>
                <li className="text-center">
                  <Link href="/test-salud-mental" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Test de Salud Mental</Link>
                </li>
                <li className="text-center">
                  <Link href="/test-pareja" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Test de Pareja</Link>
                </li>
                <li className="text-center pt-2 border-t border-gray-200 dark:border-slate-700">
                  <Link href="/tests-psicologicos" className="font-semibold text-beige dark:text-blue-gray hover:underline">Ver todos →</Link>
                </li>
              </ul>
            </div>

            {/* Calculadoras */}
            <div>
              <p className="text-center text-xs font-semibold text-navy dark:text-slate-300 mb-3">Calculadoras</p>
              <ul className="space-y-2 text-xs text-muted dark:text-slate-400">
                <li className="text-center">
                  <Link href="/calculadora-burnout" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Calculadora de Burnout</Link>
                </li>
                <li className="text-center">
                  <Link href="/medidor-estres" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Medidor de Estrés</Link>
                </li>
                <li className="text-center">
                  <Link href="/evaluador-relacion" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Evaluador de Relación</Link>
                </li>
                <li className="text-center pt-2 border-t border-gray-200 dark:border-slate-700">
                  <Link href="/calculadoras-psicologicas" className="font-semibold text-beige dark:text-blue-gray hover:underline">Ver todas →</Link>
                </li>
              </ul>
            </div>

            {/* Guías Interactivas */}
            <div>
              <p className="text-center text-xs font-semibold text-navy dark:text-slate-300 mb-3">Guías Interactivas</p>
              <ul className="space-y-2 text-xs text-muted dark:text-slate-400">
                <li className="text-center">
                  <Link href="/guia-5-dias-ansiedad" className="hover:text-beige dark:hover:text-blue-gray hover:underline">5 Días Reducir Ansiedad</Link>
                </li>
                <li className="text-center">
                  <Link href="/plan-7-dias-autoestima" className="hover:text-beige dark:hover:text-blue-gray hover:underline">7 Días Mejorar Autoestima</Link>
                </li>
                <li className="text-center">
                  <Link href="/ejercicios-respiracion" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Ejercicios de Respiración</Link>
                </li>
                <li className="text-center">
                  <Link href="/relajacion-progresiva" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Relajación Progresiva</Link>
                </li>
                <li className="text-center pt-2 border-t border-gray-200 dark:border-slate-700">
                  <Link href="/guias-interactivas" className="font-semibold text-beige dark:text-blue-gray hover:underline">Ver todas →</Link>
                </li>
              </ul>
            </div>

            {/* Recursos de Autoayuda */}
            <div>
              <p className="text-center text-xs font-semibold text-navy dark:text-slate-300 mb-3">Recursos de Autoayuda</p>
              <ul className="space-y-2 text-xs text-muted dark:text-slate-400">
                <li className="text-center">
                  <Link href="/diario-emociones" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Diario de Emociones</Link>
                </li>
                <li className="text-center">
                  <Link href="/registro-pensamientos" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Registro de Pensamientos</Link>
                </li>
                <li className="text-center">
                  <Link href="/mindfulness-guiado" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Mindfulness Guiado</Link>
                </li>
                <li className="text-center">
                  <Link href="/tecnicas-afrontamiento" className="hover:text-beige dark:hover:text-blue-gray hover:underline">Técnicas de Afrontamiento</Link>
                </li>
                <li className="text-center pt-2 border-t border-gray-200 dark:border-slate-700">
                  <Link href="/recursos-autoayuda" className="font-semibold text-beige dark:text-blue-gray hover:underline">Ver todos →</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 dark:border-slate-700">
          <p className="text-center text-xs text-muted dark:text-slate-400 flex items-center justify-center gap-2 flex-wrap">
            <span>© 2026 Natalia Chiva. Psicóloga Sanitaria en Santander.</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Hecho con
              <svg className="h-3 w-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              y
              <svg className="h-3.5 w-3.5 text-amber-700 dark:text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 2a2 2 0 00-2 2v2a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zM2 10v6a2 2 0 002 2h12a2 2 0 002-2v-6H2z" />
              </svg>
              por
              <a
                href="https://avgg.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-beige dark:text-blue-gray hover:underline font-medium"
              >
                avgg
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
