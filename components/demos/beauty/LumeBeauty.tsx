import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { LumeNav } from "./LumeNav";
import { WhatsAppFloat } from "./WhatsAppFloat";
import {
  DEMO_PHONE,
  DEMO_WHATSAPP,
  experienceSteps,
  feature,
  galleryItems,
  navItems,
  services,
  specialists,
  testimonials,
} from "./data";

function LumeFooter() {
  return (
    <footer className="border-t border-[#f6f1e9]/10 bg-[#231f1b] px-5 py-10 text-[#d8cfc2] sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-base font-medium tracking-[0.2em] text-[#f6f1e9]">
            LUMÉ<span className="ml-2 text-[0.6em] font-normal tracking-[0.3em] text-[#c9ab83]">BEAUTY STUDIO</span>
          </p>
          <p className="mt-2 text-sm text-[#a79b8a]">Belleza que se siente como tú.</p>
        </div>

        <nav aria-label="Navegación del pie de página" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {navItems.map(([href, label]) => (
            <Link key={href} href={href} className="hover:text-[#f6f1e9] focus-visible:outline-2 focus-visible:outline-[#c9ab83]">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#f6f1e9] focus-visible:outline-2 focus-visible:outline-[#c9ab83]">
            Instagram · demo
          </a>
          <a href={DEMO_WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-[#f6f1e9] focus-visible:outline-2 focus-visible:outline-[#c9ab83]">
            WhatsApp · demo
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-1 border-t border-[#f6f1e9]/10 pt-6 text-xs text-[#897d6c] sm:flex-row sm:items-center sm:justify-between">
        <p>Todos los datos de esta demo son ficticios.</p>
        <Link href="/" className="text-[#a79b8a] underline-offset-4 transition-colors hover:text-[#c9ab83] hover:underline focus-visible:outline-2 focus-visible:outline-[#c9ab83]">
          Digital experience by BRAN. ↗
        </Link>
      </div>
    </footer>
  );
}

export function LumeBeauty() {
  return (
    <div className="demo-scope min-h-screen bg-[#f6f1e9] text-[#231f1b] selection:bg-[#a9824f] selection:text-[#fbf7ef]">
      <LumeNav />

      <main id="contenido">
        {/* HERO — fotografía local bajo el tratamiento editorial existente */}
        <section id="inicio" className="relative isolate flex min-h-[640px] items-center overflow-hidden sm:min-h-[740px] lg:min-h-[820px]">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20"
            style={{ backgroundImage: "linear-gradient(160deg, #f8f3e8 0%, #f1e7d3 46%, #e6d3ad 100%)" }}
          />
          <Image src="/demos/beauty/hero.webp" alt="Lavado de cabello en un estudio de belleza" fill priority sizes="100vw" className="z-0 object-cover opacity-50 mix-blend-multiply" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-40 -z-10 h-[560px] w-[620px] rounded-full opacity-70 blur-3xl"
            style={{ backgroundImage: "radial-gradient(circle, rgba(169,130,79,0.28) 0%, rgba(169,130,79,0.05) 60%, transparent 75%)" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-[420px] w-[460px] rounded-full opacity-60 blur-3xl"
            style={{ backgroundImage: "radial-gradient(circle, rgba(201,171,131,0.3) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-[148px] sm:px-8 sm:pb-20 sm:pt-[164px] lg:px-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.27em] text-[#8c6a3c]">Beauty studio · Bello, Antioquia</p>
              <h1 className="mt-6 text-[46px] font-light leading-[1.02] tracking-tight text-[#231f1b] sm:text-6xl lg:text-7xl">
                <span className="block">Belleza que</span>
                <span className="block">se siente</span>
                <span className="block font-medium text-[#a9824f]">como tú.</span>
              </h1>
              <p className="mt-7 max-w-md text-base leading-7 text-[#5b5146] sm:text-lg">
                Un espacio dedicado a resaltar tu estilo, cuidar cada detalle y convertir cada visita en una experiencia.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={DEMO_WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#a9824f] px-7 py-3.5 text-sm font-semibold text-[#fbf7ef] transition hover:bg-[#8c6a3c] motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#231f1b]"
                >
                  Reservar cita
                </a>
                <Link
                  href="#servicios"
                  className="rounded-full border border-[#231f1b]/25 px-7 py-3.5 text-sm font-medium text-[#231f1b] transition hover:bg-[#231f1b]/5 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#a9824f]"
                >
                  Descubrir servicios
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="#servicios"
            aria-label="Desplázate para ver más"
            className="absolute inset-x-0 bottom-6 z-10 hidden flex-col items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#8c6a3c]/80 transition-colors hover:text-[#231f1b] focus-visible:outline-2 focus-visible:outline-[#a9824f] sm:flex"
          >
            Desplázate
            <span className="flex h-8 w-5 items-start justify-center rounded-full border border-[#231f1b]/25 p-1">
              <span aria-hidden="true" className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#a9824f]" />
            </span>
          </Link>
        </section>

        {/* FRANJA DE DATOS RÁPIDOS */}
        <section aria-label="Información de demostración" className="border-b border-[#231f1b]/8 bg-[#efe6d6] px-5 py-5 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-4 text-sm sm:grid-cols-3 sm:items-center">
            <p><span className="block text-[10px] uppercase tracking-[0.18em] text-[#8a7f6f]">Ubicación · demo</span><span className="mt-1 block">Bello, Antioquia</span></p>
            <p><span className="block text-[10px] uppercase tracking-[0.18em] text-[#8a7f6f]">Horario · demo</span><span className="mt-1 block">Lun — Sáb · 9:00 AM — 7:00 PM</span></p>
            <p><span className="block text-[10px] uppercase tracking-[0.18em] text-[#8a7f6f]">WhatsApp · demo</span><span className="mt-1 block">{DEMO_PHONE}</span></p>
          </div>
        </section>

        {/* INTRO EDITORIAL */}
        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
              <Reveal>
                <h2 className="text-4xl font-light leading-[1.02] tracking-tight text-[#231f1b] sm:text-6xl lg:text-7xl">
                  Tu ritual.<br />Tu momento.
                </h2>
              </Reveal>
              <Reveal delay={100} className="flex flex-col gap-8">
                <p className="max-w-md text-base leading-7 text-[#5b5146] sm:text-lg">
                  Cuidarte no es un lujo ocasional, es un ritual. En LUMÉ cada cita se piensa al detalle:
                  técnica depurada, productos cuidados y tiempo real para desconectar, para que salgas
                  sintiéndote exactamente como quieres sentirte.
                </p>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[#231f1b]/10 pt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a7f6f]">
                  <div>Autocuidado</div>
                  <div>Técnica</div>
                  <div>Detalle</div>
                  <div>Experiencia</div>
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="scroll-mt-28 border-t border-[#231f1b]/8 bg-[#efe6d6] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8c6a3c]">Nuestros servicios</p>
              <h2 className="mt-4 text-3xl font-light tracking-tight text-[#231f1b] sm:text-5xl">Servicios</h2>
              <p className="mt-4 leading-7 text-[#5b5146]">Técnica, cuidado y presencia en cada cita.</p>
            </Reveal>

            <div className="mt-10 divide-y divide-[#231f1b]/10 border-y border-[#231f1b]/10">
              {services.map((service, index) => (
                <Reveal
                  as="article"
                  key={service.name}
                  delay={index * 70}
                  className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                >
                  <div className="flex gap-5 sm:gap-6">
                    <span className="pt-1 font-mono text-xs text-[#a89b85]">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-lg font-medium uppercase tracking-wide text-[#231f1b]">{service.name}</h3>
                      <p className="mt-1 max-w-md text-sm text-[#5b5146]">{service.description}</p>
                    </div>
                  </div>
                  <p className="pl-10 text-sm font-medium text-[#8c6a3c] sm:pl-0">
                    {service.price} <span className="ml-1 text-[10px] font-normal uppercase tracking-widest text-[#8a7f6f]">COP · precio demo</span>
                  </p>
                </Reveal>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-[#8a7f6f]">Precios ficticios para esta demostración.</p>
              <a
                href={DEMO_WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#a9824f] px-6 py-3 text-sm font-semibold text-[#fbf7ef] transition hover:bg-[#8c6a3c] motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#231f1b]"
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
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8c6a3c]">El estudio</p>
              <h2 className="mt-4 text-3xl font-light text-[#231f1b] sm:text-5xl">Cada detalle, cuidado.</h2>
            </Reveal>

            <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
              {galleryItems.map((item, index) => (
                <Reveal key={item.label} delay={index * 60} className="mb-4 block break-inside-avoid">
                  <div className={`${item.aspect} group relative overflow-hidden rounded-xl`}>
                    <Image src={item.image} alt={item.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-bran group-hover:scale-[1.03]" />
                    <span className="absolute bottom-3 left-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white drop-shadow">{item.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-4 text-xs text-[#8a7f6f]">Imágenes conceptuales de esta demostración; no representan un establecimiento real.</p>
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section className="border-y border-[#231f1b]/8 bg-[#efe6d6] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8c6a3c]">Así se siente</p>
              <h2 className="mt-4 text-3xl font-light text-[#231f1b] sm:text-5xl">Mucho más que un servicio.</h2>
            </Reveal>

            <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              <div aria-hidden="true" className="absolute left-0 right-0 top-[38px] hidden h-px bg-[#231f1b]/10 lg:block" />
              {experienceSteps.map((step, index) => (
                <Reveal as="li" key={step.number} delay={index * 90} className="relative flex flex-col gap-4">
                  <span className="relative z-10 flex size-[76px] items-center justify-center rounded-full border border-[#a9824f]/35 bg-[#efe6d6] font-display text-xl font-light text-[#8c6a3c]">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-medium text-[#231f1b]">{step.title}</h3>
                  <p className="text-sm leading-6 text-[#5b5146]">{step.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ESPECIALISTAS */}
        <section id="especialistas" className="scroll-mt-28 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8c6a3c]">Manos expertas</p>
              <h2 className="mt-4 text-3xl font-light text-[#231f1b] sm:text-5xl">Nuestras especialistas</h2>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {specialists.map((specialist, index) => (
                <Reveal as="article" key={specialist.name} delay={index * 90} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl transition-transform duration-700 ease-bran group-hover:scale-[1.02]">
                    <Image src={specialist.image} alt={specialist.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-[#231f1b]">{specialist.name}</h3>
                  <p className="mt-1 text-sm text-[#8c6a3c]">{specialist.role}</p>
                  <span
                    aria-hidden="true"
                    className="mt-3 block h-px w-8 bg-[#a9824f]/60 transition-[width] duration-500 ease-bran group-hover:w-16"
                  />
                  <p className="mt-3 text-[10px] uppercase tracking-wider text-[#8a7f6f]">Perfil ficticio de demostración</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section className="scroll-mt-28 border-t border-[#231f1b]/8 bg-[#efe6d6] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8c6a3c]">Lo que cuentan</p>
              <h2 className="mt-4 text-3xl font-light text-[#231f1b] sm:text-5xl">Testimonios</h2>
            </Reveal>

            <div className="mt-12 divide-y divide-[#231f1b]/10 border-t border-[#231f1b]/10">
              {testimonials.map((testimonial, index) => (
                <Reveal
                  key={testimonial.quote}
                  delay={index * 80}
                  className="flex flex-col gap-4 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10"
                >
                  <blockquote className="max-w-2xl text-xl font-light leading-[1.4] text-[#231f1b] sm:text-2xl">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="shrink-0 text-xs uppercase tracking-[0.18em] text-[#8a7f6f]">{testimonial.name}</figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROMOCIÓN / FEATURE — único respiro oscuro de la página, para dar ritmo editorial */}
        <section className="bg-[#231f1b] px-5 py-20 text-[#f6f1e9] sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src="/demos/beauty/beauty-03.webp" alt="Aplicación de maquillaje profesional" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c9ab83]">{feature.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-light text-[#f6f1e9] sm:text-5xl">{feature.name}</h2>
              <p className="mt-5 max-w-md text-base leading-7 text-[#c9bfae]">{feature.description}</p>
              <p className="mt-6 text-2xl font-medium text-[#f6f1e9]">
                {feature.price} <span className="ml-1 text-xs font-normal uppercase tracking-widest text-[#a79b8a]">COP · precio demo</span>
              </p>
              <a
                href={DEMO_WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex rounded-full bg-[#c9ab83] px-7 py-3.5 text-sm font-semibold text-[#231f1b] transition hover:bg-[#dcc49e] motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#f6f1e9]"
              >
                Quiero reservar
              </a>
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="cta-final" className="relative overflow-hidden px-5 py-24 text-center sm:px-8 sm:py-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 bg-[radial-gradient(circle_at_50%_0%,rgba(169,130,79,0.18)_0%,rgba(169,130,79,0.05)_42%,transparent_70%)]"
          />
          <Reveal className="relative mx-auto max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8c6a3c]">Listo cuando tú estés</p>
            <h2 className="mt-4 text-4xl font-light leading-[1.1] text-[#231f1b] sm:text-6xl">
              Haz de tu próxima cita<br />un momento para ti.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-[#5b5146]">
              Reserva tu espacio y deja que nuestro equipo se encargue del resto. El contacto es ficticio y solo funciona como demostración.
            </p>
            <a
              href={DEMO_WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex rounded-full bg-[#a9824f] px-8 py-4 text-sm font-semibold text-[#fbf7ef] transition hover:bg-[#8c6a3c] motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#231f1b]"
            >
              Reservar por WhatsApp
            </a>
          </Reveal>
        </section>

        {/* UBICACIÓN */}
        <section id="contacto" className="scroll-mt-28 border-y border-[#231f1b]/8 bg-[#efe6d6] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8c6a3c]">Encuéntranos</p>
              <h2 className="mt-4 text-3xl font-light text-[#231f1b] sm:text-4xl">Encuéntranos</h2>
              <p className="mt-6 text-lg text-[#231f1b]">Bello, Antioquia — demo</p>
              <p className="mt-2 text-sm text-[#5b5146]">Lunes — Sábado · 9:00 AM — 7:00 PM</p>
              <p className="mt-2 text-sm text-[#5b5146]">WhatsApp demo · {DEMO_PHONE}</p>
              <p className="mt-4 text-xs text-[#8a7f6f]">Ubicación, horario y contacto ficticios para esta demostración.</p>
            </Reveal>
            <Reveal delay={100}>
              <div
                role="img"
                aria-label="Mapa conceptual, ubicación ficticia en Bello, Antioquia"
                className="relative flex min-h-56 items-center justify-center overflow-hidden rounded-xl border border-[#231f1b]/10 bg-[#f3ecdd]"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(32deg,transparent 48%,#c9ab83 49%,#c9ab83 50%,transparent 51%),linear-gradient(145deg,transparent 38%,#ddc89e 39%,#ddc89e 40%,transparent 41%),linear-gradient(90deg,transparent 69%,#c9ab83 70%,#c9ab83 71%,transparent 72%)",
                    backgroundSize: "140px 110px,170px 130px,120px 150px",
                  }}
                />
                <span className="relative rounded-full border border-[#a9824f]/50 bg-[#a9824f]/15 px-4 py-2 text-xs font-medium text-[#8c6a3c]">
                  LUMÉ BEAUTY STUDIO · Mapa ilustrativo
                </span>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <LumeFooter />
      <WhatsAppFloat />
    </div>
  );
}
