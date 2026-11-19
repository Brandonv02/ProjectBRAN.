import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { LightLine, PauseMarks } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { DeliverableMockup } from "./DeliverableMockup";
import { heroTrust } from "@/lib/content";
import { contact, site } from "@/lib/site";

/**
 * Hero. Recursos gráficos (máximo dos por pieza, manual pág. 11):
 * marcas de pausa arriba a la izquierda y la línea de luz en la esquina,
 * lejos del texto.
 */
export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-titulo"
      className="relative overflow-hidden border-b border-line-soft pb-20 pt-28 md:pb-28 md:pt-32 xl:pb-32 xl:pt-44"
    >
      <LightLine className="hidden lg:block lg:-right-10 lg:top-4 lg:h-[560px] lg:w-[700px] opacity-80" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[560px_580px] xl:gap-15">
          <div className="flex flex-col gap-6 xl:gap-7">
            <Reveal className="flex items-center gap-4 self-start">
              <PauseMarks />
              <p className="font-label text-[11px] uppercase tracking-[0.24em] text-accent-bright sm:text-xs">
                {site.descriptor}
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h1
                id="hero-titulo"
                className="text-[42px] leading-[1.04] tracking-[-0.04em] text-ink sm:text-6xl xl:text-[72px] xl:tracking-[-0.042em]"
              >
                Tecnología a la medida, <span className="text-accent">sin peros.</span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="max-w-[520px] text-[16.5px] leading-[1.65] text-silver xl:text-[19px]">
                Convierto los procesos manuales de tu negocio en una herramienta
                digital clara, segura y fácil de usar.
              </p>
            </Reveal>

            <Reveal delay={180} className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={contact.whatsapp.href} size="lg">
                Hablemos de tu negocio
                <Icon name="arrowRight" size={18} strokeWidth={2} />
              </Button>
              <Button href="#servicios" variant="ghost" size="lg">
                Ver servicios
              </Button>
            </Reveal>

            <Reveal delay={220} className="flex items-center gap-2.5">
              <span className="size-1.5 shrink-0 rounded-full bg-accent" />
              <p className="text-[13.5px] leading-[1.5] text-silver sm:text-sm">
                Desde {site.country}, para negocios pequeños y medianos que quieren
                crecer.
              </p>
            </Reveal>

            <Reveal delay={260} className="mt-2 border-t border-line-soft pt-6">
              <ul className="flex flex-wrap gap-2">
                {heroTrust.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line-soft bg-surface-deep px-3.5 py-2 text-xs text-muted xl:text-[13px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={140} className="lg:justify-self-end">
            <DeliverableMockup />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
