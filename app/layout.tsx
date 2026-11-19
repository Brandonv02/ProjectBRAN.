import type { Metadata, Viewport } from "next";
import { Anta, Manrope, Sora } from "next/font/google";
import { site, siteUrl, siteUrlIsPlaceholder } from "@/lib/site";
import "./globals.css";

// Tipografía del manual (pág. 10): Sora titulares, Manrope textos, Anta firma y etiquetas.
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anta",
  display: "swap",
});

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: site.title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.founder }],
  creator: site.founder,
  publisher: site.name,
  keywords: [
    "desarrollo web Colombia",
    "sistema de ventas e inventario",
    "app a la medida",
    "página web para negocios",
    "digitalizar un negocio",
    "datos seguros para negocios",
    "BRAN.",
  ],
  category: "technology",
  ...(!siteUrl ? {} : { alternates: { canonical: "/" } }),
  openGraph: {
    type: "website",
    locale: site.locale,
    ...(siteUrl ? { url: "/" } : {}),
    siteName: site.name,
    title: site.title,
    description: site.description,
    ...(siteUrl ? { images: ["/opengraph-image"] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    ...(siteUrl ? { images: ["/opengraph-image"] } : {}),
  },
  robots: siteUrlIsPlaceholder
    ? { index: false, follow: false }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  ...(site.googleVerification
    ? { verification: { google: site.googleVerification } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${sora.variable} ${manrope.variable} ${anta.variable}`} suppressHydrationWarning>
      <head>
        {/* Marca que hay JavaScript antes del primer pintado. Las entradas
            al scroll solo se ocultan si esta clase existe, así que sin JS
            la página se ve completa. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="bg-carbon text-ink antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-control focus:bg-accent-solid focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-carbon"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
