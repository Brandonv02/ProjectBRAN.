import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ElevaMark } from "@/components/ui/Logo";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { contact } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Demos comerciales",
  description: "Experiencias digitales diseñadas para convertir visitas en clientes.",
};

/**
 * Showcase comercial de ELEVA: el enlace que se envía a un cliente potencial
 * cuando pide ejemplos. Identidad 100% ELEVA (Navbar/Footer reales, sistema
 * de diseño del home) — las marcas de cada demo son las protagonistas solo
 * dentro de su propia preview, nunca del resto de la página.
 */

type ShowcaseDemo = {
  number: string;
  name: string;
  category: string;
  description: string;
  href: string;
  preview: "barber" | "lume" | "noma" | "volt";
};

const showcaseDemos: ShowcaseDemo[] = [
  {
    number: "01",
    name: "NERO BARBER",
    category: "Barber / Grooming",
    description: "Corte, estilo y presencia llevados a una experiencia digital premium.",
    href: "/demos/barber",
    preview: "barber",
  },
  {
    number: "02",
    name: "LUMÉ BEAUTY STUDIO",
    category: "Beauty / Wellness",
    description: "Una experiencia editorial diseñada alrededor de belleza, detalle y sofisticación.",
    href: "/demos/beauty",
    preview: "lume",
  },
  {
    number: "03",
    name: "CASA NOMA",
    category: "Restaurant / Hospitality",
    description:
      "Una experiencia gastronómica digital construida alrededor del sabor, la atmósfera y los momentos que se comparten alrededor de una mesa.",
    href: "/demos/restaurant",
    preview: "noma",
  },
  {
    number: "04",
    name: "VOLT ATHLETICS",
    category: "Fitness / Performance",
    description: "Una experiencia deportiva enfocada en energía, entrenamiento y progreso.",
    href: "/demos/fitness",
    preview: "volt",
  },
];

const valueConcepts = [
  { title: "Diseño", body: "Interfaces pensadas para representar la identidad de cada marca." },
  { title: "Desarrollo", body: "Experiencias rápidas, responsive y construidas para funcionar en cualquier dispositivo." },
  { title: "Conversión", body: "Cada sección tiene un propósito: informar, generar confianza y facilitar el contacto." },
  { title: "Escalabilidad", body: "Una base digital preparada para crecer junto al negocio." },
];

function DemoPreview({ demo }: { demo: ShowcaseDemo }) {
  if (demo.preview === "barber") {
    return (
      <Image
        src="/demos/nero/hero.webp"
        alt="Barbero trabajando en un corte, de la demo conceptual NERO BARBER"
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-[58%_center] transition duration-700 ease-eleva group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
    );
  }

  if (demo.preview === "lume") {
    return (
      <Image src="/demos/beauty/hero.webp" alt="Servicio de cuidado capilar de LUMÉ BEAUTY STUDIO" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center transition duration-700 ease-eleva group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
    );
  }

  if (demo.preview === "volt") {
    return (
      <Image src="/demos/fitness/training-03.webp" alt="Entrenamiento de fuerza de VOLT ATHLETICS" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center transition duration-700 ease-eleva group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
    );
  }

  if (demo.preview === "noma") {
    return (
      <Image src="/demos/restaurant/hero.webp" alt="Plato de pasta de la demo CASA NOMA" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center transition duration-700 ease-eleva group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
    );
  }

  return null;
}

export default function DemosPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-line-soft pb-20 pt-32 sm:pb-24 sm:pt-40 xl:pb-28 xl:pt-48">
          <div className="grid-bg absolute inset-0 opacity-55" aria-hidden="true" />
          <div
            aria-hidden="true"
            className="animate-glow pointer-events-none absolute -right-40 -top-60 h-[820px] w-[1000px] bg-[radial-gradient(circle_at_50%_50%,rgba(91,107,255,0.24)_0%,rgba(91,107,255,0.06)_42%,rgba(13,15,20,0)_68%)]"
          />

          <Container className="relative">
            <Reveal>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/10 py-2 pl-2.5 pr-3.5">
                <span className="size-1.5 rounded-full bg-accent-bright" />
                <span className="font-mono text-[9.5px] font-medium uppercase tracking-[0.14em] text-accent-ice sm:text-[11px]">
                  ELEVA · Conceptos digitales
                </span>
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="mt-6 max-w-[17ch] text-[40px] leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl xl:text-[64px] xl:leading-[1.03]">
                Diseñamos experiencias digitales que elevan negocios.
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 max-w-[540px] text-base leading-[1.7] text-silver xl:text-[19px]">
                Explora algunos conceptos digitales creados para convertir la presencia
                online de un negocio en una experiencia profesional.
              </p>
            </Reveal>

            <Reveal delay={180} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#conceptos" size="lg">
                Ver demos
                <Icon name="arrowRight" size={18} strokeWidth={2} />
              </Button>
              <Button href={contact.whatsapp.href} variant="ghost" size="lg">
                Hablar con ELEVA
              </Button>
            </Reveal>
          </Container>
        </section>

        {/* CONCEPTOS / SHOWCASE */}
        <Section id="conceptos" rhythm="wide" bordered>
          <Container>
            <Reveal>
              <Eyebrow tone="accent" className="mb-14 lg:mb-18">
                Nuestros conceptos digitales
              </Eyebrow>
            </Reveal>

            <div className="flex flex-col gap-20 lg:gap-28">
              {showcaseDemos.map((demo, index) => {
                const reversed = index % 2 === 1;
                return (
                  <Reveal
                    as="article"
                    key={demo.name}
                    delay={index * 80}
                    className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
                  >
                    <div
                      className={cn(
                        "group relative aspect-[4/3] overflow-hidden rounded-block border border-line",
                        reversed && "lg:order-2",
                      )}
                    >
                      <DemoPreview demo={demo} />
                    </div>

                    <div className={reversed ? "lg:order-1" : undefined}>
                      <p className="font-mono text-xs text-muted">{demo.number}</p>
                      <Eyebrow tone="accent" className="mt-3">
                        {demo.category}
                      </Eyebrow>
                      <h2 className="mt-3 text-3xl text-white sm:text-[40px] sm:leading-[1.1]">{demo.name}</h2>
                      <p className="mt-4 max-w-md text-base leading-[1.7] text-silver xl:text-[17px]">
                        {demo.description}
                      </p>
                      <Button href={demo.href} variant="ghost" className="mt-8">
                        Ver experiencia
                        <Icon name="arrowRight" size={17} strokeWidth={2} />
                      </Button>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* VALOR */}
        <Section labelledBy="valor-titulo" tone="paper" rhythm="roomy" bordered>
          <Container>
            <Reveal className="max-w-[720px]">
              <Eyebrow tone="paper">Cómo trabajamos</Eyebrow>
              <h2 id="valor-titulo" className="mt-4 text-[30px] leading-[1.12] text-paper-ink sm:text-4xl xl:text-[40px] xl:leading-[1.1]">
                No hacemos páginas. Creamos experiencias.
              </h2>
              <p className="mt-5 text-base leading-[1.75] text-paper-muted lg:text-[17px]">
                Cada proyecto combina estrategia, diseño y desarrollo para crear una
                presencia digital que represente realmente al negocio.
              </p>
            </Reveal>

            <ol className="mt-14 grid gap-10 border-t border-paper-line pt-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-18 lg:grid-cols-4 lg:gap-8">
              {valueConcepts.map((concept, index) => (
                <Reveal as="li" key={concept.title} delay={index * 80} className="flex flex-col gap-4">
                  <span className="font-mono text-xs font-medium tracking-[0.1em] text-accent">
                    0{index + 1}
                  </span>
                  <h3 className="text-[17.5px] text-paper-ink xl:text-[19px]">{concept.title}</h3>
                  <p className="text-sm leading-[1.7] text-paper-muted xl:text-[14.5px]">{concept.body}</p>
                </Reveal>
              ))}
            </ol>
          </Container>
        </Section>

        {/* CTA FINAL */}
        <Section id="hablemos" labelledBy="demos-cta-titulo" rhythm="wide">
          <Container>
            <div className="relative overflow-hidden rounded-block border border-line bg-surface-alt px-6 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
              <div className="grid-bg absolute inset-0 opacity-60" aria-hidden="true" />
              <div
                aria-hidden="true"
                className="animate-glow pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[900px] max-w-none -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_50%_50%,rgba(91,107,255,0.26)_0%,rgba(91,107,255,0.05)_45%,rgba(13,15,20,0)_70%)]"
              />

              <Reveal className="relative flex flex-col items-center gap-6 text-center">
                <ElevaMark size={40} />

                <h2
                  id="demos-cta-titulo"
                  className="max-w-[720px] text-[32px] leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl xl:text-[56px] xl:leading-[1.05]"
                >
                  ¿Y si el próximo fuera tu negocio?
                </h2>

                <p className="max-w-[560px] text-base leading-[1.7] text-silver xl:text-[19px]">
                  Cuéntanos qué haces. Nosotros nos encargamos de convertirlo en una
                  experiencia digital.
                </p>

                <Button href={contact.whatsapp.href} size="lg" className="mt-2 w-full sm:w-auto">
                  Hablar con ELEVA
                  <Icon name="arrowRight" size={18} strokeWidth={2} />
                </Button>
              </Reveal>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
