import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { BarberNav } from "./BarberNav";
import { WhatsAppFloat } from "./WhatsAppFloat";
import {
  DEMO_PHONE,
  DEMO_WHATSAPP,
  experienceSteps,
  galleryItems,
  navItems,
  services,
  team,
  testimonials,
} from "./data";

function BarberFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-base font-semibold tracking-[0.18em] text-[#f3f0e9]">
            NERO<span className="ml-1 font-light tracking-[0.13em] text-[#c5a477]">BARBER</span>
          </p>
          <p className="mt-2 text-sm text-[#938d82]">Corte. Estilo. Presencia.</p>
        </div>

        <nav aria-label="Navegación del pie de página" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#aaa49a]">
          {navItems.map(([href, label]) => (
            <Link key={href} href={href} className="hover:text-white focus-visible:outline-2 focus-visible:outline-[#c5a477]">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-sm text-[#aaa49a] sm:items-end">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white focus-visible:outline-2 focus-visible:outline-[#c5a477]">
            Instagram · demo
          </a>
          <a href={DEMO_WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-white focus-visible:outline-2 focus-visible:outline-[#c5a477]">
            WhatsApp · demo
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-1 border-t border-white/10 pt-6 text-xs text-[#726d64] sm:flex-row sm:items-center sm:justify-between">
        <p>Todos los datos de esta demo son ficticios.</p>
        <Link href="/" className="text-[#aaa49a] underline-offset-4 transition-colors hover:text-[#d6bd99] hover:underline focus-visible:outline-2 focus-visible:outline-[#c5a477]">
          Digital experience by BRAN. ↗
        </Link>
      </div>
    </footer>
  );
}

export function BarberDemo() {
  return (
    <div className="demo-scope min-h-screen bg-[#11100f] text-[#f3f0e9] selection:bg-[#c5a477] selection:text-[#11100f]">
      <BarberNav />

      <main id="contenido">
        {/* HERO */}
        <section id="inicio" className="relative isolate flex min-h-[640px] items-end overflow-hidden sm:min-h-[740px] lg:min-h-[860px]">
          <Image
            src="/demos/nero/hero.webp"
            alt="Barbero trabajando en un corte en un interior oscuro y elegante"
            fill
            priority
            sizes="100vw"
            className="z-0 object-cover object-[58%_center]"
          />
          <div aria-hidden="true" className="absolute inset-0 z-10 bg-gradient-to-t from-[#0b0a09] via-[#0b0a09]/55 to-[#0b0a09]/10" />
          <div aria-hidden="true" className="absolute inset-0 z-10 bg-gradient-to-r from-[#0b0a09]/85 via-[#0b0a09]/35 to-transparent" />

          <div className="relative z-20 mx-auto w-full max-w-7xl px-5 pb-16 pt-[148px] sm:px-8 sm:pb-20 sm:pt-[164px] lg:px-12 lg:pb-24">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.27em] text-[#d0ad7e]">Barbería · Bello, Antioquia</p>
              <h1 className="mt-6 text-[52px] font-medium leading-[0.94] tracking-tight text-white sm:text-7xl lg:text-8xl">
                <span className="block">Corte.</span>
                <span className="block">Estilo.</span>
                <span className="block text-[#c5a477]">Presencia.</span>
              </h1>
              <p className="mt-7 max-w-md text-base leading-7 text-[#d0cbc2] sm:text-lg">
                Barbería premium para quienes entienden que el estilo está en los detalles.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={DEMO_WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#c5a477] px-7 py-3.5 text-sm font-semibold text-[#171411] transition hover:bg-[#dfc29a] motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
                >
                  Reservar cita
                </a>
                <Link
                  href="#servicios"
                  className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/10 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c5a477]"
                >
                  Explorar servicios
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="#servicios"
            aria-label="Desplázate para ver más"
            className="absolute inset-x-0 bottom-6 z-20 hidden flex-col items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-[#c5a477] sm:flex"
          >
            Desplázate
            <span className="flex h-8 w-5 items-start justify-center rounded-full border border-white/40 p-1">
              <span aria-hidden="true" className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#c5a477]" />
            </span>
          </Link>
        </section>

        {/* FRANJA DE DATOS RÁPIDOS */}
        <section aria-label="Información de demostración" className="border-b border-white/10 bg-[#171613] px-5 py-5 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-4 text-sm sm:grid-cols-3 sm:items-center">
            <p><span className="block text-[10px] uppercase tracking-[0.18em] text-[#898278]">Ubicación · demo</span><span className="mt-1 block">Bello, Antioquia</span></p>
            <p><span className="block text-[10px] uppercase tracking-[0.18em] text-[#898278]">Horario · demo</span><span className="mt-1 block">Lun — Sáb · 9:00 AM — 8:00 PM</span></p>
            <p><span className="block text-[10px] uppercase tracking-[0.18em] text-[#898278]">WhatsApp · demo</span><span className="mt-1 block">{DEMO_PHONE}</span></p>
          </div>
        </section>

        {/* INTRO EDITORIAL */}
        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
              <Reveal>
                <h2 className="text-4xl font-medium leading-[0.96] tracking-tight sm:text-6xl lg:text-7xl">
                  No es<br />solo un<br />corte.
                </h2>
              </Reveal>
              <Reveal delay={100} className="flex flex-col gap-8">
                <p className="max-w-md text-base leading-7 text-[#b3ada2] sm:text-lg">
                  Cada visita a NERO es una conversación entre precisión y estilo. Técnica
                  depurada, herramientas cuidadas y tiempo real dedicado a cada detalle:
                  así se construye una presencia que se nota.
                </p>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#8e887e]">
                  <div>Precisión</div>
                  <div>Técnica</div>
                  <div>Experiencia</div>
                  <div>Atención al detalle</div>
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="scroll-mt-28 border-t border-white/5 bg-[#161512] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a477]">Nuestros servicios</p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-5xl">Servicios</h2>
              <p className="mt-4 leading-7 text-[#aaa49a]">Precisión, técnica y atención al detalle en cada cita.</p>
            </Reveal>

            <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {services.map((service, index) => (
                <Reveal
                  as="article"
                  key={service.name}
                  delay={index * 70}
                  className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                >
                  <div className="flex gap-5 sm:gap-6">
                    <span className="pt-1 font-mono text-xs text-[#6f695f]">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-lg font-medium uppercase tracking-wide">{service.name}</h3>
                      <p className="mt-1 max-w-md text-sm text-[#aaa49a]">{service.description}</p>
                    </div>
                  </div>
                  <p className="pl-10 text-sm font-medium text-[#d6bd99] sm:pl-0">
                    {service.price} <span className="ml-1 text-[10px] font-normal uppercase tracking-widest text-[#8e887e]">COP · precio demo</span>
                  </p>
                </Reveal>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-[#817b72]">Precios ficticios para esta demostración.</p>
              <a
                href={DEMO_WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#c5a477] px-6 py-3 text-sm font-semibold text-[#171411] transition hover:bg-[#dfc29a] motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
              >
                Reservar servicio
                <Icon name="arrowRight" size={16} strokeWidth={2} />
              </a>
            </div>
          </div>
        </section>

        {/* GALERÍA */}
        <section id="galeria" className="scroll-mt-28 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a477]">El espacio</p>
              <h2 className="mt-4 text-3xl font-medium sm:text-5xl">El resultado habla por sí solo.</h2>
            </Reveal>

            <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
              {galleryItems.map((item, index) => (
                <Reveal
                  key={`${item.src}-${item.label}`}
                  delay={index * 60}
                  className="mb-4 block break-inside-avoid"
                >
                  <div className={`group relative ${item.aspect} overflow-hidden rounded-xl bg-[#1b1915]`}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={`object-cover transition duration-700 ease-bran group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${item.position ?? ""}`}
                    />
                    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent" />
                    <span className="absolute bottom-3 left-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/85">
                      {item.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-4 text-xs text-[#817b72]">Imágenes conceptuales de esta demostración; no representan un establecimiento real.</p>
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section className="border-y border-white/5 bg-[#161512] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a477]">Así funciona</p>
              <h2 className="mt-4 text-3xl font-medium sm:text-5xl">Tu tiempo. Tu estilo.</h2>
            </Reveal>

            <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              <div aria-hidden="true" className="absolute left-0 right-0 top-[38px] hidden h-px bg-white/10 lg:block" />
              {experienceSteps.map((step, index) => (
                <Reveal as="li" key={step.number} delay={index * 90} className="relative flex flex-col gap-4">
                  <span className="relative z-10 flex size-[76px] items-center justify-center rounded-full border border-[#c5a477]/30 bg-[#161512] font-display text-xl text-[#c5a477]">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-medium">{step.title}</h3>
                  <p className="text-sm leading-6 text-[#aaa49a]">{step.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* BARBEROS */}
        <section id="equipo" className="scroll-mt-28 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a477]">Manos expertas</p>
              <h2 className="mt-4 text-3xl font-medium sm:text-5xl">Expertos en tu estilo</h2>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {team.map((member, index) => (
                <Reveal as="article" key={member.name} delay={index * 90} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#27241f]">
                    <Image
                      src={member.image}
                      alt={`Retrato conceptual de ${member.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition duration-700 ease-bran group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-[#0c0b0a]/10 to-transparent" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">{member.name}</h3>
                  <p className="mt-1 text-sm text-[#c5a477]">{member.role}</p>
                  <span
                    aria-hidden="true"
                    className="mt-3 block h-px w-8 bg-[#c5a477]/50 transition-[width] duration-500 ease-bran group-hover:w-16"
                  />
                  <p className="mt-3 text-[10px] uppercase tracking-wider text-[#817b72]">Perfil ficticio de demostración</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* RESEÑAS */}
        <section id="resenas" className="scroll-mt-28 border-t border-white/5 bg-[#161512] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a477]">Lo que cuentan</p>
              <h2 className="mt-4 text-3xl font-medium sm:text-5xl">Reseñas</h2>
            </Reveal>

            <div className="mt-12 divide-y divide-white/10 border-t border-white/10">
              {testimonials.map((testimonial, index) => (
                <Reveal
                  key={testimonial.quote}
                  delay={index * 80}
                  className="flex flex-col gap-4 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10"
                >
                  <blockquote className="max-w-2xl text-xl font-medium leading-[1.4] text-[#ece7dd] sm:text-2xl">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="shrink-0 text-xs uppercase tracking-[0.18em] text-[#8e887e]">{testimonial.name}</figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="cta-final" className="relative overflow-hidden px-5 py-24 text-center sm:px-8 sm:py-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 bg-[radial-gradient(circle_at_50%_0%,rgba(197,164,119,0.18)_0%,rgba(197,164,119,0.05)_42%,transparent_70%)]"
          />
          <Reveal className="relative mx-auto max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a477]">Listo cuando tú estés</p>
            <h2 className="mt-4 text-4xl font-medium leading-[1.05] sm:text-6xl">
              Tu próximo corte<br />empieza aquí.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-[#aaa49a]">
              Reserva tu espacio y deja que nuestros barberos hagan el resto. El contacto es ficticio y solo funciona como demostración.
            </p>
            <a
              href={DEMO_WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex rounded-full bg-[#c5a477] px-8 py-4 text-sm font-semibold text-[#171411] transition hover:bg-[#dfc29a] motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
            >
              Reservar por WhatsApp
            </a>
          </Reveal>
        </section>

        {/* UBICACIÓN */}
        <section id="contacto" className="scroll-mt-28 border-y border-white/5 bg-[#161512] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a477]">Encuéntranos</p>
              <h2 className="mt-4 text-3xl font-medium sm:text-4xl">Encuéntranos</h2>
              <p className="mt-6 text-lg">Bello, Antioquia — demo</p>
              <p className="mt-2 text-sm text-[#aaa49a]">Lunes — Sábado · 9:00 AM — 8:00 PM</p>
              <p className="mt-2 text-sm text-[#aaa49a]">WhatsApp demo · {DEMO_PHONE}</p>
              <p className="mt-4 text-xs text-[#817b72]">Ubicación, horario y contacto ficticios para esta demostración.</p>
            </Reveal>
            <Reveal delay={100}>
              <div
                aria-label="Mapa conceptual, ubicación ficticia en Bello, Antioquia"
                role="img"
                className="relative flex min-h-56 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#201f1b]"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(32deg,transparent 48%,#918a79 49%,#918a79 50%,transparent 51%),linear-gradient(145deg,transparent 38%,#777365 39%,#777365 40%,transparent 41%),linear-gradient(90deg,transparent 69%,#918a79 70%,#918a79 71%,transparent 72%)",
                    backgroundSize: "140px 110px,170px 130px,120px 150px",
                  }}
                />
                <span className="relative rounded-full border border-[#c5a477]/70 bg-[#c5a477]/20 px-4 py-2 text-xs font-medium text-[#e2c69e]">
                  NERO BARBER · Mapa ilustrativo
                </span>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <BarberFooter />
      <WhatsAppFloat />
    </div>
  );
}
