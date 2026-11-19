import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BarberDemo } from "@/components/demos/barber/BarberDemo";
import { LumeBeauty } from "@/components/demos/beauty/LumeBeauty";
import { CasaNoma } from "@/components/demos/restaurant/CasaNoma";
import { VoltAthletics } from "@/components/demos/fitness/VoltAthletics";
import { siteUrl } from "@/lib/site";

type ActiveSlug = "barber" | "beauty" | "restaurant" | "fitness";

const activeMetadata: Record<ActiveSlug, { title: string; description: string; path: string; images?: string[] }> = {
  barber: {
    title: "NERO BARBER — Corte. Estilo. Presencia. | BRAN.",
    description: "Experiencia web premium para NERO BARBER. Demo comercial desarrollada por BRAN..",
    path: "/demos/barber",
    images: ["/demos/nero/hero.webp"],
  },
  beauty: {
    title: "LUMÉ BEAUTY STUDIO — Belleza que se siente como tú. | BRAN.",
    description: "Experiencia web premium para LUMÉ BEAUTY STUDIO. Demo comercial desarrollada por BRAN..",
    path: "/demos/beauty",
  },
  restaurant: {
    title: "CASA NOMA — Sabores que cuentan historias. | BRAN.",
    description: "Experiencia web premium para CASA NOMA. Demo comercial desarrollada por BRAN..",
    path: "/demos/restaurant",
  },
  fitness: {
    title: "VOLT ATHLETICS — Train With Purpose. | BRAN.",
    description: "Experiencia web premium para VOLT ATHLETICS. Demo comercial desarrollada por BRAN..",
    path: "/demos/fitness",
  },
};

export const dynamicParams = false;
export function generateStaticParams() {
  return ["barber", "beauty", "restaurant", "fitness"].map((slug) => ({ slug }));
}

function isActiveSlug(slug: string): slug is ActiveSlug {
  return slug === "barber" || slug === "beauty" || slug === "restaurant" || slug === "fitness";
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!isActiveSlug(slug)) notFound();

  const { title, description, path, images } = activeMetadata[slug];
  return {
    title: { absolute: title },
    description,
    ...(siteUrl ? { alternates: { canonical: path } } : {}),
    openGraph: { type: "website", locale: "es_CO", siteName: "BRAN.", title, description, ...(siteUrl && images ? { url: path, images } : {}) },
    twitter: { card: "summary_large_image", title, description, ...(siteUrl && images ? { images } : {}) },
  };
}

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isActiveSlug(slug)) notFound();
  if (slug === "barber") return <BarberDemo />;
  if (slug === "beauty") return <LumeBeauty />;
  if (slug === "restaurant") return <CasaNoma />;
  return <VoltAthletics />;
}
