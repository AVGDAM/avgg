# Diseño Web AVGG

## 🚀 Proyecto Next.js 16 con App Router

Web de agencia digital moderna con tema "Nebula" espacial.

### Stack Tecnológico

- **Framework**: Next.js 16 (App Router)
- **React**: 19
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Fuente**: Geist Sans

### Características

✨ Diseño moderno con tema espacial (Nebula)
🎨 Glassmorphism y degradados llamativos
📱 Totalmente responsive (Mobile-first)
⚡ Server Actions para formularios
🎭 Animaciones suaves con Framer Motion
🌙 Optimizado para modo oscuro

### Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar en producción
npm start
```

### Estructura del Proyecto

```
avgg/
├── app/
│   ├── actions/
│   │   └── contact.ts       # Server Actions
│   ├── layout.tsx           # Layout principal con metadata SEO
│   ├── page.tsx             # Página home
│   └── globals.css          # Estilos globales
├── components/
│   ├── Navbar.tsx           # Navegación flotante
│   ├── HeroSection.tsx      # Hero con CTAs
│   ├── ServicesSection.tsx  # Grid de servicios
│   ├── ProcessSection.tsx   # Timeline del proceso
│   ├── PortfolioSection.tsx # Grid Bento de proyectos
│   ├── OtherAppsSection.tsx # Cross-selling
│   ├── ContactSection.tsx   # Formulario de contacto
│   └── Footer.tsx           # Footer
├── public/                  # Recursos estáticos
├── tailwind.config.ts       # Configuración Tailwind
├── next.config.ts           # Configuración Next.js
└── package.json
```

### Secciones Principales

1. **Hero**: Título principal con CTAs destacados
2. **Servicios**: Diseño Web, SEO/SEM, Marketing
3. **Proceso**: Timeline de 4 pasos
4. **Portfolio**: Proyectos destacados (Rualasal, Natalia Chiva, Carda)
5. **Otras Apps**: PrensaPro, Videoconia, Documentolegalia
6. **Contacto**: Formulario con Server Actions

### Personalización

#### Colores
Los colores personalizados están en `tailwind.config.ts`:
- `nebula`: Tonos azul/cian
- `cosmic`: Tonos violeta/púrpura

#### Metadata SEO
Configurado en `app/layout.tsx` con título, descripción y Open Graph.

#### Server Actions
El formulario de contacto usa Server Actions (Next.js 16).
Para configurar el envío de emails, edita `app/actions/contact.ts`.

### Próximos Pasos

- [ ] Añadir imágenes reales de proyectos en `/public`
- [ ] Configurar servicio de email (Resend, SendGrid, etc.)
- [ ] Añadir sección de Blog
- [ ] Implementar Analytics (Google Analytics, Vercel Analytics)
- [ ] Optimizar imágenes con Next.js Image

### Despliegue

Recomendamos Vercel para el despliegue:

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Soporte

Para consultas: info@avgg.es | 658 873 627

---

Desarrollado con ❤️ por AVGG
