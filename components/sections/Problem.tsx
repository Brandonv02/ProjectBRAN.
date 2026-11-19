import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { problems } from "@/lib/content";

export function Problem() {
  return (
    <Section id="problema" labelledBy="problema-titulo" bordered>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:gap-20 xl:gap-25">
          <Reveal className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>El problema</Eyebrow>
            <h2
              id="problema-titulo"
              className="text-[30px] leading-[1.12] text-ink sm:text-4xl xl:text-[40px] xl:leading-[1.1]"
            >
              Tu negocio crece. Tus procesos siguen a mano.
            </h2>
            <p className="text-base leading-[1.75] text-silver lg:text-[17px]">
              Si todavía llevas ventas, stock y clientes en un cuaderno o en mil
              chats, no es falta de ganas: te falta una herramienta hecha a tu
              medida.
            </p>
            <p className="mt-3 border-l-2 border-accent bg-surface px-5 py-5 text-[15.5px] leading-[1.6] text-ink xl:text-base">
              BRAN. convierte lo manual en algo claro, seguro y fácil de usar.
            </p>
          </Reveal>

          <ul className="flex flex-col">
            {problems.map((problem, index) => (
              <Reveal
                as="li"
                key={problem.title}
                delay={index * 80}
                className="flex gap-4 border-b border-line-soft py-6 last:border-b-0 sm:gap-5 lg:py-7"
              >
                <span
                  aria-hidden="true"
                  className="flex size-11 shrink-0 items-center justify-center rounded-[16px] border border-line bg-surface text-accent-bright"
                >
                  <Icon name={problem.icon} size={20} />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-[17.5px] text-ink lg:text-xl">
                    {problem.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.65] text-silver lg:text-[15.5px]">
                    {problem.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
