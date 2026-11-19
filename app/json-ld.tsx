import { services } from "@/lib/content";
import { contact, site, siteUrl, socialProfiles } from "@/lib/site";

/**
 * Datos estructurados.
 *
 * Solo se emite lo que es real: nombre, descripción, fundador, país y la
 * escalera de servicios (sin precios). Teléfono, dirección y
 * correo se omiten mientras sean placeholders — no se publica un dato
 * de contacto inventado en el schema.
 */
export function JsonLd() {
  if (!siteUrl) return null;
  // Sin precios: el manual de marca no los define y no se inventan.
  const offers = services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: `${service.extension} — ${service.name}`,
      description: service.summary,
    },
  }));

  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#organizacion`,
    name: site.name,
    legalName: site.legalName,
    url: siteUrl,
    slogan: site.tagline,
    description: site.description,
    inLanguage: "es",
    areaServed: { "@type": "Country", name: site.country },
    founder: {
      "@type": "Person",
      name: site.founder,
      jobTitle: site.founderRole,
    },
    knowsAbout: [
      "Desarrollo web",
      "Desarrollo de aplicaciones",
      "Sistemas de ventas e inventario",
      "Digitalización de procesos",
      "Seguridad de datos para negocios",
    ],
    ...(socialProfiles.length > 0 ? { sameAs: socialProfiles } : {}),
    ...(contact.email.href
      ? { email: contact.email.label }
      : {}),
    ...(contact.phone.isPlaceholder ? {} : { telephone: contact.phone.label }),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de BRAN.",
      itemListElement: offers,
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#sitio`,
    url: siteUrl,
    name: site.name,
    inLanguage: "es",
    publisher: { "@id": `${siteUrl}/#organizacion` },
  };

  return (
    <script
      type="application/ld+json"
      // El contenido es estático y controlado por nosotros.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([organization, website]),
      }}
    />
  );
}
