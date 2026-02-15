import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nataliachiva.com"),
  title: {
    default: "Psicóloga en Santander - Natalia Chiva | Terapia Individual y de Pareja",
    template: "%s | Natalia Chiva - Psicóloga Santander",
  },
  description: "Psicóloga sanitaria en Santander. Especialista en ansiedad, depresión, terapia de pareja y familia. Consulta presencial y online. ☎️ 649 493 778",
  keywords: ["psicóloga Santander", "psicólogo Santander", "terapia ansiedad Santander", "terapia pareja Santander", "psicóloga online", "Centro Rualasal", "Natalia Chiva"],
  authors: [{ name: "Natalia Chiva Montoya" }],
  creator: "Natalia Chiva Montoya",
  publisher: "Natalia Chiva - Psicóloga Sanitaria",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.nataliachiva.com",
    siteName: "Natalia Chiva - Psicóloga Santander",
    title: "Psicóloga en Santander - Natalia Chiva | Terapia Individual y de Pareja",
    description: "Psicóloga sanitaria en Santander. Especialista en ansiedad, depresión, terapia de pareja y familia. Consulta presencial y online.",
    images: [
      {
        url: "/natalia-chiva.png",
        width: 800,
        height: 600,
        alt: "Natalia Chiva - Psicóloga Sanitaria en Santander",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicóloga en Santander - Natalia Chiva",
    description: "Psicóloga sanitaria en Santander. Especialista en ansiedad, depresión y terapia de pareja.",
    images: ["/natalia-chiva.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.nataliachiva.com",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
