import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { BranMark, LightLine, Ring } from "@/components/ui/Logo";
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
 * Showcase comercial de BRAN.: el enlace que se envía a un cliente potencial
 * cuando pide ejemplos. Identidad 100% BRAN. (Navbar/Footer reales, sistema
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
        className="object-cover object-[58%_center] transition duration-700 ease-bran group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
    );
  }

  if (demo.preview === "lume") {
    return (
      <Image src="/demos/beauty/hero.webp" alt="Servicio de cuidado capilar de LUMÉ BEAUTY STUDIO" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center transition duration-700 ease-bran group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
    );
  }

  if (demo.preview === "volt") {
    return (
      <Image src="/demos/fitness/training-03.webp" alt="Entrenamiento de fuerza de VOLT ATHLETICS" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center transition duration-700 ease-bran group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
    );
  }

  if (demo.preview === "noma") {
    return (
      <Image src="/demos/restaurant/hero.webp" alt="Plato de pasta de la demo CASA NOMA" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center transition duration-700 ease-bran group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
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
          <LightLine className="-right-24 -top-10 h-[420px] w-[520px] opacity-80 lg:right-0 lg:top-4 lg:h-[560px] lg:w-[700px]" />

          <Container className="relative">
            <Reveal>
              <p className="font-label text-[11px] uppercase tracking-[0.24em] text-accent-bright sm:text-xs">
                BRAN. · Conceptos digitales
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="mt-6 max-w-[17ch] text-[40px] leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl xl:text-[64px] xl:leading-[1.03]">
                Ejemplos de lo que puedo construir para tu negocio.
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 max-w-[540px] text-base leading-[1.7] text-silver xl:text-[19px]">
                Conceptos digitales pensados para que un negocio se vea profesional y sea
                fácil de usar, para sus clientes y para quien lo atiende.
              </p>
            </Reveal>

            <Reveal delay={180} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#conceptos" size="lg">
                Ver demos
                <Icon name="arrowRight" size={18} strokeWidth={2} />
              </Button>
              <Button href={contact.whatsapp.href} variant="ghost" size="lg">
                Hablar con Brandon
              </Button>
            </Reveal>
          </Container>
        </section>

        {/* CONCEPTOS / SHOWCASE */}
        <Section id="conceptos" rhythm="wide" bordered>
          <Container>
            <Reveal>
              <Eyebrow tone="accent" className="mb-14 lg:mb-18">
                Conceptos digitales
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
                      <p className="font-label text-xs text-muted">{demo.number}</p>
                      <Eyebrow tone="accent" className="mt-3">
                        {demo.category}
                      </Eyebrow>
                      <h2 className="mt-3 text-3xl text-ink sm:text-[40px] sm:leading-[1.1]">{demo.name}</h2>
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
              <Eyebrow tone="paper">Cómo trabajo</Eyebrow>
              <h2 id="valor-titulo" className="mt-4 text-[30px] leading-[1.12] text-paper-ink sm:text-4xl xl:text-[40px] xl:leading-[1.1]">
                No hago páginas. Hago herramientas que se usan.
              </h2>
              <p className="mt-5 text-base leading-[1.75] text-paper-muted lg:text-[17px]">
                Cada proyecto parte de entender tu negocio, y se construye a tu medida,
                claro, seguro y fácil de usar.
              </p>
            </Reveal>

            <ol className="mt-14 grid gap-10 border-t border-paper-line pt-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-18 lg:grid-cols-4 lg:gap-8">
              {valueConcepts.map((concept, index) => (
                <Reveal as="li" key={concept.title} delay={index * 80} className="flex flex-col gap-4">
                  <span className="font-label text-xs tracking-[0.1em] text-paper-ink">
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
            <div className="relative overflow-hidden rounded-block border border-line bg-surface px-6 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
              <Ring className="-right-24 -top-24 size-72 opacity-95 lg:-right-16 lg:-top-20 lg:size-96" />

              <Reveal className="relative flex flex-col items-center gap-6 text-center">
                <BranMark size={44} />

                <h2
                  id="demos-cta-titulo"
                  className="max-w-[720px] text-[32px] leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl xl:text-[56px] xl:leading-[1.05]"
                >
                  ¿Y si el próximo fuera tu negocio?
                </h2>

                <p className="max-w-[560px] text-base leading-[1.7] text-silver xl:text-[19px]">
                  Cuéntame qué haces y te explico fácil cómo llevarlo a una
                  herramienta digital.
                </p>

                <Button href={contact.whatsapp.href} size="lg" className="mt-2 w-full sm:w-auto">
                  Hablar con Brandon
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
