import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { VoltNav } from "./VoltNav";
import { WhatsAppFloat } from "./WhatsAppFloat";
import {
  DEMO_PHONE,
  DEMO_WHATSAPP,
  coaches,
  experienceSteps,
  facilityItems,
  footerNavItems,
  metrics,
  methodPrinciples,
  navItems,
  plans,
  schedule,
  testimonials,
} from "./data";

function VoltFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] px-5 py-10 text-[#aeb0b3] sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-base font-extrabold uppercase tracking-[0.1em] text-white">
            VOLT<span className="ml-1.5 font-normal tracking-[0.14em] text-[#c6ff1f]">ATHLETICS</span>
          </p>
          <p className="mt-2 text-sm uppercase tracking-wide text-[#7d8085]">Train with purpose.</p>
        </div>

        <nav aria-label="Navegación del pie de página" className="flex flex-wrap gap-x-6 gap-y-2 text-sm uppercase tracking-wide">
          {footerNavItems.map(([href, label]) => (
            <Link key={href} href={href} className="hover:text-white focus-visible:outline-2 focus-visible:outline-[#c6ff1f]">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white focus-visible:outline-2 focus-visible:outline-[#c6ff1f]">
            Instagram · demo
          </a>
          <a href={DEMO_WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-white focus-visible:outline-2 focus-visible:outline-[#c6ff1f]">
            WhatsApp · demo
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-1 border-t border-white/10 pt-6 text-xs text-[#6b6e72] sm:flex-row sm:items-center sm:justify-between">
        <p>Todos los datos de esta demo son ficticios.</p>
        <Link href="/" className="text-[#aeb0b3] underline-offset-4 transition-colors hover:text-[#c6ff1f] hover:underline focus-visible:outline-2 focus-visible:outline-[#c6ff1f]">
          Digital experience by BRAN. ↗
        </Link>
      </div>
    </footer>
  );
}

export function VoltAthletics() {
  return (
    <div className="demo-scope min-h-screen bg-[#0a0a0a] text-white selection:bg-[#c6ff1f] selection:text-[#0a0a0a]">
      <VoltNav />

      <main id="contenido">
        {/* HERO — fotografía local con el tratamiento oscuro VOLT */}
        <section id="inicio" className="relative isolate flex min-h-[640px] items-center overflow-hidden sm:min-h-[740px] lg:min-h-[820px]">
          <div aria-hidden="true" className="absolute inset-0 -z-20" style={{ backgroundImage: "linear-gradient(160deg, #1d1f22 0%, #101112 55%, #060606 100%)" }} />
          <Image src="/demos/fitness/training-03.webp" alt="Atleta entrenando con pesas en un gimnasio" fill priority sizes="100vw" className="z-0 object-cover opacity-55" />
          <div
            aria-hidden="true"
            className="absolute inset-0 z-10 opacity-70"
            style={{
              backgroundImage:
                "linear-gradient(115deg, transparent 15%, rgba(198,255,31,0.1) 15%, rgba(198,255,31,0.1) 16%, transparent 16%), linear-gradient(115deg, transparent 60%, rgba(255,255,255,0.05) 60%, rgba(255,255,255,0.05) 62%, transparent 62%), linear-gradient(115deg, transparent 82%, rgba(255,255,255,0.04) 82%, rgba(255,255,255,0.04) 85%, transparent 85%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-24 -z-10 h-[520px] w-[560px] rounded-full opacity-60 blur-3xl"
            style={{ backgroundImage: "radial-gradient(circle, rgba(198,255,31,0.22) 0%, rgba(198,255,31,0.04) 60%, transparent 75%)" }}
          />

          <div className="relative z-20 mx-auto w-full max-w-7xl px-5 pb-16 pt-[148px] sm:px-8 sm:pb-20 sm:pt-[164px] lg:px-12">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.27em] text-[#c6ff1f]">Bello, Antioquia · Performance Training</p>
              <h1 className="mt-6 text-[48px] font-extrabold uppercase leading-[0.96] tracking-tight text-white sm:text-7xl lg:text-8xl">
                <span className="block">Train</span>
                <span className="block">with</span>
                <span className="block text-[#c6ff1f]">purpose.</span>
              </h1>
              <p className="mt-7 max-w-md text-base leading-7 text-[#c4c6c9] sm:text-lg">
                Un espacio diseñado para quienes no entrenan solamente para verse mejor,
                sino para convertirse en una versión más fuerte de sí mismos.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={DEMO_WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-[#c6ff1f] px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-[#0a0a0a] transition hover:bg-[#dcff6b] motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
                >
                  Empezar ahora
                </a>
                <Link
                  href="#planes"
                  className="rounded-md border border-white/25 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c6ff1f]"
                >
                  Ver planes
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="#entrenamiento"
            aria-label="Desplázate para ver más"
            className="absolute inset-x-0 bottom-6 z-20 hidden flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a8d91] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-[#c6ff1f] sm:flex"
          >
            Desplázate
            <span className="flex h-8 w-5 items-start justify-center rounded-full border border-white/25 p-1">
              <span aria-hidden="true" className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#c6ff1f]" />
            </span>
          </Link>
        </section>

        {/* FRANJA DE DATOS RÁPIDOS */}
        <section aria-label="Información de demostración" className="border-b border-white/10 bg-[#121314] px-5 py-5 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-4 text-sm sm:grid-cols-3 sm:items-center">
            <p><span className="block text-[10px] uppercase tracking-[0.18em] text-[#7d8085]">Ubicación · demo</span><span className="mt-1 block">Bello, Antioquia</span></p>
            <p><span className="block text-[10px] uppercase tracking-[0.18em] text-[#7d8085]">Servicio · demo</span><span className="mt-1 block">Performance Training</span></p>
            <p><span className="block text-[10px] uppercase tracking-[0.18em] text-[#7d8085]">WhatsApp · demo</span><span className="mt-1 block">{DEMO_PHONE}</span></p>
          </div>
        </section>

        {/* INTRO EDITORIAL */}
        <section id="entrenamiento" className="scroll-mt-28 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
              <Reveal>
                <h2 className="text-4xl font-extrabold uppercase leading-[0.96] tracking-tight sm:text-6xl lg:text-7xl">
                  No entrenamos<br />por entrenar.
                </h2>
              </Reveal>
              <Reveal delay={100} className="flex flex-col gap-8">
                <p className="max-w-md text-base leading-7 text-[#c4c6c9] sm:text-lg">
                  Cada sesión tiene un propósito. Cada repetición construye algo. Cada día
                  es una oportunidad para avanzar.
                </p>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#7d8085]">
                  <div>Energía</div>
                  <div>Disciplina</div>
                  <div>Progreso</div>
                  <div>Comunidad</div>
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        {/* THE VOLT METHOD */}
        <section className="border-y border-white/10 bg-[#121314] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c6ff1f]">Metodología</p>
              <h2 className="mt-4 text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">The Volt Method</h2>
            </Reveal>

            <ol className="mt-14 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4 lg:gap-8">
              {methodPrinciples.map((principle, index) => (
                <Reveal as="li" key={principle.number} delay={index * 80} className="flex flex-col gap-4">
                  <span className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-[0.1em] text-[#7d8085]">
                    {principle.number}
                    <span aria-hidden="true" className="h-px w-5 bg-[#c6ff1f]" />
                  </span>
                  <h3 className="text-lg font-extrabold uppercase tracking-wide">{principle.title}</h3>
                  <p className="text-sm leading-6 text-[#c4c6c9]">{principle.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* PLANES */}
        <section id="planes" className="scroll-mt-28 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c6ff1f]">Membresías</p>
              <h2 className="mt-4 text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">Elige tu nivel.</h2>
            </Reveal>

            <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-3 lg:gap-10">
              {plans.map((plan, index) => (
                <Reveal
                  as="article"
                  key={plan.name}
                  delay={index * 90}
                  className={plan.featured ? "flex flex-col lg:-mt-4" : "flex flex-col"}
                >
                  {plan.featured ? (
                    <p className="mb-3 inline-flex w-fit items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#c6ff1f]">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#c6ff1f]" />
                      Más elegido
                    </p>
                  ) : (
                    <p className="mb-3 h-[14px]" aria-hidden="true" />
                  )}
                  <h3 className="text-xl font-extrabold uppercase tracking-wide">{plan.name}</h3>
                  <p className="mt-3 text-4xl font-extrabold">
                    {plan.price}
                    <span className="ml-1 text-sm font-medium text-[#7d8085]">/ mes</span>
                  </p>
                  <ul className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-[#c4c6c9]">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span aria-hidden="true" className="mt-[9px] h-px w-3 shrink-0 bg-[#c6ff1f]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={DEMO_WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className={
                      plan.featured
                        ? "mt-8 inline-flex items-center justify-center rounded-md bg-[#c6ff1f] px-6 py-3.5 text-sm font-extrabold uppercase tracking-wide text-[#0a0a0a] transition hover:bg-[#dcff6b] motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
                        : "mt-8 inline-flex items-center justify-center rounded-md border border-white/25 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c6ff1f]"
                    }
                  >
                    Quiero empezar
                  </a>
                </Reveal>
              ))}
            </div>
            <p className="mt-10 text-xs text-[#6b6e72]">Precios ficticios para esta demostración. No se procesan pagos ni membresías reales.</p>
          </div>
        </section>

        {/* INSTALACIONES */}
        <section className="border-y border-white/10 bg-[#121314] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c6ff1f]">El espacio</p>
              <h2 className="mt-4 text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">Entrena en serio.</h2>
            </Reveal>

            <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
              {facilityItems.map((item, index) => (
                <Reveal key={item.label} delay={index * 60} className="mb-4 block break-inside-avoid">
                  <div className={`${item.aspect} group relative overflow-hidden rounded-lg`}>
                    <Image src={item.image} alt={item.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-bran group-hover:scale-[1.03]" />
                    <span className="absolute bottom-3 left-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white drop-shadow">{item.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-4 text-xs text-[#6b6e72]">Imágenes conceptuales de esta demostración; no representan un establecimiento real.</p>
          </div>
        </section>

        {/* COACHES */}
        <section id="coaches" className="scroll-mt-28 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c6ff1f]">El equipo</p>
              <h2 className="mt-4 text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">Coaches</h2>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {coaches.map((coach, index) => (
                <Reveal as="article" key={coach.name} delay={index * 90} className="group">
                  <MediaPlaceholder label={coach.role} tint={coach.tint} aspect="aspect-[3/4]" showLabel={false} />
                  <h3 className="mt-4 text-lg font-extrabold uppercase tracking-wide">{coach.name}</h3>
                  <p className="mt-1 text-sm uppercase tracking-wide text-[#c6ff1f]">{coach.role}</p>
                  <span
                    aria-hidden="true"
                    className="mt-3 block h-px w-8 bg-[#c6ff1f]/60 transition-[width] duration-500 ease-bran group-hover:w-16"
                  />
                  <p className="mt-3 text-[10px] uppercase tracking-wider text-[#6b6e72]">Perfil ficticio de demostración</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTADOS */}
        <section id="resultados" className="scroll-mt-28 border-y border-white/10 bg-[#121314] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c6ff1f]">Métricas demo</p>
              <h2 className="mt-4 text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">El progreso se mide.</h2>
            </Reveal>

            <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-3">
              {metrics.map((metric, index) => (
                <Reveal key={metric.label} delay={index * 90} className="flex flex-col gap-2">
                  <span className="text-5xl font-extrabold text-[#c6ff1f] sm:text-6xl">{metric.value}</span>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#7d8085]">{metric.label}</span>
                </Reveal>
              ))}
            </div>
            <p className="mt-10 text-xs text-[#6b6e72]">
              Indicadores visuales de demostración. No representan datos científicos ni resultados garantizados.
            </p>
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c6ff1f]">Así empieza</p>
              <h2 className="mt-4 text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">Tu primer día.</h2>
            </Reveal>

            <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              <div aria-hidden="true" className="absolute left-0 right-0 top-[38px] hidden h-px bg-white/10 lg:block" />
              {experienceSteps.map((step, index) => (
                <Reveal as="li" key={step.number} delay={index * 90} className="relative flex flex-col gap-4">
                  <span className="relative z-10 flex size-[76px] items-center justify-center rounded-md border border-[#c6ff1f]/40 bg-[#0a0a0a] font-mono text-xl font-bold text-[#c6ff1f]">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-extrabold uppercase tracking-wide">{step.title}</h3>
                  <p className="text-sm leading-6 text-[#c4c6c9]">{step.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section className="border-t border-white/10 bg-[#121314] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c6ff1f]">La comunidad</p>
              <h2 className="mt-4 text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">Testimonios</h2>
            </Reveal>

            <div className="mt-12 divide-y divide-white/10 border-t border-white/10">
              {testimonials.map((testimonial, index) => (
                <Reveal
                  key={testimonial.quote}
                  delay={index * 80}
                  className="flex flex-col gap-4 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10"
                >
                  <blockquote className="max-w-2xl text-xl font-medium leading-[1.4] text-white sm:text-2xl">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="shrink-0 text-xs font-bold uppercase tracking-[0.18em] text-[#7d8085]">{testimonial.name}</figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="cta-final" className="relative isolate overflow-hidden px-5 py-24 text-center sm:px-8 sm:py-32">
          <div aria-hidden="true" className="absolute inset-0 -z-20" style={{ backgroundImage: "linear-gradient(160deg, #1d1f22 0%, #101112 55%, #060606 100%)" }} />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 bg-[radial-gradient(circle_at_50%_0%,rgba(198,255,31,0.2)_0%,rgba(198,255,31,0.05)_42%,transparent_70%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(115deg, transparent 20%, rgba(198,255,31,0.08) 20%, rgba(198,255,31,0.08) 21%, transparent 21%), linear-gradient(115deg, transparent 65%, rgba(255,255,255,0.04) 65%, rgba(255,255,255,0.04) 67%, transparent 67%)",
            }}
          />
          <Reveal className="relative mx-auto max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c6ff1f]">¿Listo?</p>
            <h2 className="mt-4 text-4xl font-extrabold uppercase leading-[1.02] text-white sm:text-6xl">
              Ready to move?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-[#c4c6c9]">
              Tu próximo nivel empieza con una decisión.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={DEMO_WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-md bg-[#c6ff1f] px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-[#0a0a0a] transition hover:bg-[#dcff6b] motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
              >
                Hablar por WhatsApp
              </a>
              <Link
                href="#planes"
                className="inline-flex rounded-md border border-white/25 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c6ff1f]"
              >
                Ver planes
              </Link>
            </div>
          </Reveal>
        </section>

        {/* UBICACIÓN */}
        <section id="contacto" className="scroll-mt-28 border-b border-white/10 bg-[#121314] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c6ff1f]">Encuéntranos</p>
              <h2 className="mt-4 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">Volt Athletics</h2>
              <p className="mt-6 text-lg">Bello, Antioquia — demo</p>
              <dl className="mt-4 flex flex-col gap-2">
                {schedule.map((row) => (
                  <div key={row.label} className="flex items-baseline justify-between gap-4 text-sm sm:max-w-xs">
                    <dt className="text-white">{row.label}</dt>
                    <dd className="text-[#c4c6c9]">{row.hours}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm text-[#c4c6c9]">WhatsApp demo · {DEMO_PHONE}</p>
              <p className="mt-4 text-xs text-[#6b6e72]">Ubicación, horario y contacto ficticios para esta demostración.</p>
            </Reveal>
            <Reveal delay={100}>
              <div
                role="img"
                aria-label="Mapa conceptual, ubicación ficticia en Bello, Antioquia"
                className="relative flex min-h-56 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-[#0a0a0a]"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(32deg,transparent 48%,#c6ff1f 49%,#c6ff1f 50%,transparent 51%),linear-gradient(145deg,transparent 38%,#3a3d41 39%,#3a3d41 40%,transparent 41%),linear-gradient(90deg,transparent 69%,#c6ff1f 70%,#c6ff1f 71%,transparent 72%)",
                    backgroundSize: "140px 110px,170px 130px,120px 150px",
                  }}
                />
                <span className="relative rounded-md border border-[#c6ff1f]/40 bg-[#c6ff1f]/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#c6ff1f]">
                  VOLT ATHLETICS · Mapa ilustrativo
                </span>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <VoltFooter />
      <WhatsAppFloat />
    </div>
  );
}
