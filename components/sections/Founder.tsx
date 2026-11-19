import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ContactLink } from "@/components/ui/ContactLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Ring } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { contact, site } from "@/lib/site";

const socials = [
  { link: contact.instagram, icon: "instagram" as const, label: "Instagram de BRAN." },
  { link: contact.linkedin, icon: "linkedin" as const, label: "LinkedIn de BRAN." },
].filter(({ link }) => !link.isPlaceholder && Boolean(link.href));

export function Founder() {
  return (
    <Section
      id="nosotros"
      labelledBy="founder-titulo"
      rhythm="roomy"
      tone="darker"
      bordered
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:gap-18">
          {/* Retrato de Brandon en blanco y negro (manual pág. 11 y 13). Pendiente: recorte
          real sobre fondo naranja o gris, a veces dentro de un círculo. */}
          <Reveal>
            <div className="relative aspect-4/5 overflow-hidden rounded-[28px] border border-line bg-surface">
              <Image
                src="/images/brandon-vides.jpeg"
                alt="Retrato de Brandon Vides, desarrollador web y móvil"
                fill
                sizes="(min-width: 1024px) 440px, calc(100vw - 3rem)"
                className="object-cover object-center grayscale contrast-110"
              />
              <Ring className="-bottom-20 -right-20 size-52 border-[40px]" />
            </div>
          </Reveal>

          <Reveal delay={80} className="flex flex-col gap-5 lg:gap-6">
            <Eyebrow>Sobre mí</Eyebrow>
            <h2
              id="founder-titulo"
              className="text-[30px] leading-[1.12] text-ink sm:text-4xl xl:text-[40px] xl:leading-[1.1]"
            >
              Detrás de BRAN. hay una persona que responde.
            </h2>
            <p className="max-w-[520px] text-base leading-[1.8] text-silver lg:text-[17px]">
              Soy Brandon. Me apasiona crear todo lo que me imagino y volver la
              vida de los demás un poco más fácil. La curiosidad me trajo hasta
              aquí: querer saber cómo funciona todo.
            </p>
            <p className="max-w-[520px] text-base leading-[1.8] text-silver lg:text-[17px]">
              Creo que todos pueden crecer sin tantos peros. Por eso te explico
              fácil, te lo construyo bien y te recibo siempre con una sonrisa.
              Hablas directamente con quien programa tu proyecto.
            </p>

            <div className="mt-2 flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <div className="flex flex-col gap-1">
                <p className="font-display text-[17px] font-semibold text-ink">
                  {site.founder}
                </p>
                <p className="font-label text-[11.5px] uppercase tracking-[0.12em] text-muted">
                  {site.founderRole}
                </p>
              </div>

              <span
                aria-hidden="true"
                className="hidden h-9 w-px bg-line sm:block"
              />

              <Button href={contact.whatsapp.href} variant="ghost" size="sm">
                Escríbeme directo
                <Icon name="whatsapp" size={16} strokeWidth={1.9} />
              </Button>

              {socials.length > 0 && <ul className="flex items-center gap-2.5">
                {socials.map(({ link, icon, label }) => (
                  <li key={label}>
                    <ContactLink
                      link={link}
                      aria-label={label}
                      className="flex size-11 items-center justify-center rounded-control border border-line bg-surface text-silver transition-colors duration-150 ease-bran hover:border-line-strong hover:text-ink"
                    >
                      <Icon name={icon} size={18} />
                    </ContactLink>
                  </li>
                ))}
              </ul>}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
