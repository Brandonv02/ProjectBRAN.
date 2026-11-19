import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ContactLink } from "@/components/ui/ContactLink";
import { Icon } from "@/components/ui/Icon";
import { BranMark, Ring } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { contact } from "@/lib/site";

/**
 * CTA final. Contenido en un panel con borde: al final de una página larga,
 * un bloque contenido se lee como destino; un halo a sangre se lee como fondo.
 * Una sola acción primaria — el correo baja a enlace de texto.
 */
export function Cta() {
  return (
    <Section id="contacto" labelledBy="cta-titulo" rhythm="wide">
      <Container>
        <div className="relative overflow-hidden rounded-block border border-line bg-surface px-6 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <Ring className="-right-24 -top-24 size-72 opacity-95 lg:-right-16 lg:-top-20 lg:size-96" />

          <Reveal className="relative flex flex-col items-center gap-6 text-center">
            <BranMark size={44} />

            <h2
              id="cta-titulo"
              className="max-w-[820px] text-[34px] leading-[1.06] tracking-[-0.04em] text-ink sm:text-5xl xl:text-[60px] xl:leading-[1.04]"
            >
              ¿Hablamos de tu negocio?
            </h2>

            <p className="max-w-[620px] text-base leading-[1.7] text-silver xl:text-[19px]">
              Cuéntame cómo llevas hoy tus ventas, tu inventario o tus clientes.
              Te explico fácil qué conviene digitalizar primero y cuánto cuesta.
              Sin compromiso.
            </p>

            <Button href={contact.whatsapp.href} size="lg" className="mt-2 w-full sm:w-auto">
              Escribir por WhatsApp
              <Icon name="arrowRight" size={18} strokeWidth={2} />
            </Button>

            {!contact.email.isPlaceholder && <p className="flex flex-col items-center gap-1 text-[15px] text-silver sm:flex-row sm:gap-2">
              <span>o escríbeme a</span>
              <ContactLink link={contact.email} className="font-semibold text-accent-bright hover:text-accent-ice" />
            </p>}

            <p className="mt-2 font-label text-[10.5px] uppercase tracking-[0.12em] text-muted sm:text-[11.5px]">
              Te respondo yo, personalmente
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
