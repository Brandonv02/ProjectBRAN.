import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services, type Service } from "@/lib/content";
import { contact } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Escalera de servicios (manual pág. 04) bajo las extensiones de marca
 * BRAN.web · BRAN.app · BRAN.data · BRAN.soporte (pág. 08).
 * Sin precios: el manual no los define.
 */
function ServiceCard({ service }: { service: Service }) {
  const { featured } = service;

  return (
    <Card
      featured={featured}
      className="flex h-full flex-col gap-6 p-8 sm:p-9"
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={cn(
            "font-label text-[34px] leading-none tracking-[0.02em]",
            featured ? "text-accent" : "text-line-hover",
          )}
          aria-hidden="true"
        >
          {service.step}
        </span>
        {featured && <Badge variant="solid">Producto estrella</Badge>}
      </div>

      <div className="flex flex-col gap-3">
        <Eyebrow tone={featured ? "accent" : "dark"}>{service.extension}</Eyebrow>
        <h3 className="text-[22px] leading-[1.2] text-ink">{service.name}</h3>
        <p className="text-[14.5px] leading-[1.65] text-silver">{service.summary}</p>
      </div>

      <Button
        href={contact.whatsapp.href}
        variant={featured ? "primary" : "ghost"}
        fullWidth
        className="mt-auto"
      >
        {service.cta}
        <Icon name="arrowRight" size={16} strokeWidth={2} />
      </Button>
    </Card>
  );
}

export function Services() {
  return (
    <Section
      id="servicios"
      labelledBy="servicios-titulo"
      rhythm="roomy"
      tone="darker"
      bordered
    >
      <Container>
        <SectionHeader
          id="servicios-titulo"
          eyebrow="Servicios"
          title="Un nombre, todas las soluciones."
          lead="Seis servicios, desde saber qué digitalizar primero hasta que todo siga funcionando. Empiezas por donde tu negocio lo necesite."
          className="mb-12 lg:mb-16"
        />

        <ul className="mx-auto grid max-w-[560px] items-stretch gap-6 md:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal as="li" key={service.id} delay={(index % 3) * 80} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </ul>

        <p className="mt-10 max-w-[560px] text-[14.5px] leading-[1.7] text-muted">
          Los valores dependen del alcance de cada negocio. Te los explico fácil
          y sin compromiso antes de empezar.
        </p>
      </Container>
    </Section>
  );
}
