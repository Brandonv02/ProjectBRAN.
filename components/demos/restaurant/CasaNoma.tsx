import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { CasaNomaNav } from "./CasaNomaNav";
import { MenuTabs } from "./MenuTabs";
import { WhatsAppFloat } from "./WhatsAppFloat";
import {
  DEMO_PHONE,
  DEMO_WHATSAPP,
  experienceSteps,
  featuredDish,
  footerNavItems,
  galleryItems,
  menuCategories,
  navItems,
  reservationHours,
  testimonials,
} from "./data";

function CasaNomaFooter() {
  return (
    <footer className="border-t border-[#f6efe4]/10 bg-[#241c15] px-5 py-10 text-[#d8c9b5] sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-base font-semibold tracking-[0.18em] text-[#f6efe4]">
            CASA<span className="ml-1.5 font-light tracking-[0.14em] text-[#d9895f]">NOMA</span>
          </p>
          <p className="mt-2 text-sm text-[#a79279]">Sabores que cuentan historias.</p>
        </div>

        <nav aria-label="Navegación del pie de página" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {footerNavItems.map(([href, label]) => (
            <Link key={href} href={href} className="hover:text-[#f6efe4] focus-visible:outline-2 focus-visible:outline-[#d9895f]">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#f6efe4] focus-visible:outline-2 focus-visible:outline-[#d9895f]">
            Instagram · demo
          </a>
          <a href={DEMO_WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-[#f6efe4] focus-visible:outline-2 focus-visible:outline-[#d9895f]">
            WhatsApp · demo
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-1 border-t border-[#f6efe4]/10 pt-6 text-xs text-[#8a7461] sm:flex-row sm:items-center sm:justify-between">
        <p>Todos los datos de esta demo son ficticios.</p>
        <Link href="/" className="text-[#a79279] underline-offset-4 transition-colors hover:text-[#d9895f] hover:underline focus-visible:outline-2 focus-visible:outline-[#d9895f]">
          Digital experience by BRAN. ↗
        </Link>
      </div>
    </footer>
  );
}

export function CasaNoma() {
  return (
    <div className="demo-scope min-h-screen bg-[#f3ead9] text-[#241c15] selection:bg-[#c1603c] selection:text-[#f6efe4]">
      <CasaNomaNav />

      <main id="contenido">
        {/* HERO — fotografía gastronómica local bajo el tratamiento oscuro editorial */}
        <section id="inicio" className="relative isolate flex min-h-[640px] items-center overflow-hidden sm:min-h-[740px] lg:min-h-[820px]">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20"
            style={{ backgroundImage: "linear-gradient(160deg, #3a2f26 0%, #271e17 50%, #1a140f 100%)" }}
          />
          <Image src="/demos/restaurant/hero.webp" alt="Plato de pasta servido en un restaurante" fill priority sizes="100vw" className="z-0 object-cover object-center opacity-55 md:object-[center_70%]" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 -top-32 -z-10 h-[560px] w-[620px] rounded-full opacity-70 blur-3xl"
            style={{ backgroundImage: "radial-gradient(circle, rgba(193,96,60,0.4) 0%, rgba(193,96,60,0.08) 60%, transparent 75%)" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 bottom-0 -z-10 h-[420px] w-[460px] rounded-full opacity-50 blur-3xl"
            style={{ backgroundImage: "radial-gradient(circle, rgba(217,137,95,0.28) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-[148px] sm:px-8 sm:pb-20 sm:pt-[164px] lg:px-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.27em] text-[#d9895f]">Bello, Antioquia</p>
              <h1 className="mt-6 text-[46px] font-medium leading-[1.04] tracking-tight text-[#f6efe4] sm:text-6xl lg:text-7xl">
                <span className="block">Sabores que</span>
                <span className="block">cuentan</span>
                <span className="block text-[#d9895f]">historias.</span>
              </h1>
              <p className="mt-7 max-w-md text-base leading-7 text-[#d8c9b5] sm:text-lg">
                Cocina contemporánea inspirada en ingredientes, memoria y momentos para compartir.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="#menu"
                  className="rounded-full bg-[#c1603c] px-7 py-3.5 text-sm font-semibold text-[#f6efe4] transition hover:bg-[#9c4a2e] motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#f6efe4]"
                >
                  Ver menú
                </Link>
                <a
                  href={DEMO_WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#f6efe4]/30 px-7 py-3.5 text-sm font-medium text-[#f6efe4] transition hover:bg-[#f6efe4]/10 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#d9895f]"
                >
                  Reservar mesa
                </a>
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-[#a79279]">Cena · Café · Experiencias</p>
            </div>
          </div>

          <Link
            href="#menu"
            aria-label="Desplázate para ver más"
            className="absolute inset-x-0 bottom-6 z-10 hidden flex-col items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#d8c9b5]/70 transition-colors hover:text-[#f6efe4] focus-visible:outline-2 focus-visible:outline-[#d9895f] sm:flex"
          >
            Desplázate
            <span className="flex h-8 w-5 items-start justify-center rounded-full border border-[#f6efe4]/30 p-1">
              <span aria-hidden="true" className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#d9895f]" />
            </span>
          </Link>
        </section>

        {/* FRANJA DE DATOS RÁPIDOS */}
        <section aria-label="Información de demostración" className="border-b border-[#241c15]/8 bg-[#ece0c9] px-5 py-5 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-4 text-sm sm:grid-cols-3 sm:items-center">
            <p><span className="block text-[10px] uppercase tracking-[0.18em] text-[#8a7461]">Ubicación · demo</span><span className="mt-1 block">Bello, Antioquia</span></p>
            <p><span className="block text-[10px] uppercase tracking-[0.18em] text-[#8a7461]">Servicio · demo</span><span className="mt-1 block">Cena · Café · Experiencias</span></p>
            <p><span className="block text-[10px] uppercase tracking-[0.18em] text-[#8a7461]">WhatsApp · demo</span><span className="mt-1 block">{DEMO_PHONE}</span></p>
          </div>
        </section>

        {/* INTRO EDITORIAL */}
        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
              <Reveal>
                <h2 className="text-4xl font-medium leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
                  Una mesa.<br />Muchas historias.
                </h2>
                <p className="mt-7 max-w-md text-base leading-7 text-[#5c4b3a] sm:text-lg">
                  Creemos que comer bien no se trata solamente del plato. Se trata de las
                  personas, las conversaciones y los momentos que ocurren alrededor de él.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image src="/demos/restaurant/interior.webp" alt="Interior cálido de un restaurante" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PLATO DESTACADO */}
        <section className="border-y border-[#241c15]/8 bg-[#ece0c9] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
              <Reveal>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image src="/demos/restaurant/dish-02.webp" alt="Plato de pasta artesanal" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                </div>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9c4a2e]">{featuredDish.eyebrow}</p>
                <h2 className="mt-4 text-3xl font-medium sm:text-5xl">{featuredDish.name}</h2>
                <p className="mt-3 max-w-sm text-base leading-7 text-[#5c4b3a] sm:text-lg">{featuredDish.description}</p>
                <p className="mt-6 text-2xl font-medium">
                  {featuredDish.price} <span className="ml-1 text-xs font-normal uppercase tracking-widest text-[#8a7461]">COP · precio demo</span>
                </p>
                <Link
                  href="#menu"
                  className="mt-7 inline-flex rounded-full bg-[#c1603c] px-7 py-3.5 text-sm font-semibold text-[#f6efe4] transition hover:bg-[#9c4a2e] motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#241c15]"
                >
                  Ver menú
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* MENÚ */}
        <section id="menu" className="scroll-mt-28 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9c4a2e]">Nuestra carta</p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-5xl">El menú</h2>
              <p className="mt-4 leading-7 text-[#5c4b3a]">Ingredientes de temporada, trabajados con técnica y calma.</p>
            </Reveal>

            <Reveal delay={80} className="mt-10">
              <MenuTabs categories={menuCategories} />
            </Reveal>
            <p className="mt-6 text-xs text-[#8a7461]">Precios ficticios para esta demostración.</p>
          </div>
        </section>

        {/* RESERVAS */}
        <section className="border-y border-[#241c15]/8 bg-[#ece0c9] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9c4a2e]">Horario</p>
              <h2 className="mt-4 text-3xl font-medium sm:text-5xl">Tu mesa te espera.</h2>
              <dl className="mt-8 flex flex-col gap-4 border-t border-[#241c15]/10 pt-6">
                {reservationHours.map((row) => (
                  <div key={row.label} className="flex items-baseline justify-between gap-4 text-sm sm:text-base">
                    <dt className="text-[#241c15]">{row.label}</dt>
                    <dd className="text-[#5c4b3a]">{row.hours}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={100} className="flex flex-col items-start gap-4 lg:items-end lg:text-right">
              <p className="max-w-sm text-base leading-7 text-[#5c4b3a]">
                Cuéntanos cuántos son y a qué hora llegan. El resto lo preparamos nosotros.
              </p>
              <a
                href={DEMO_WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-[#c1603c] px-7 py-3.5 text-sm font-semibold text-[#f6efe4] transition hover:bg-[#9c4a2e] motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#241c15]"
              >
                Reservar por WhatsApp
              </a>
            </Reveal>
          </div>
        </section>

        {/* NUESTRA HISTORIA */}
        <section id="historia" className="scroll-mt-28 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9c4a2e]">Detrás de Casa Noma</p>
              <h2 className="mt-4 text-3xl font-medium sm:text-5xl">Nuestra historia</h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#5c4b3a] sm:text-lg">
                Casa Noma nació de ingredientes honestos y una cocina sin prisa. Cada plato cruza
                tradición y creatividad, trabajado por manos que conocen el oficio. Más que un
                restaurante, es un punto de encuentro para la comunidad que lo rodea.
              </p>
            </Reveal>
          </div>
        </section>

        {/* GALERÍA */}
        <section id="galeria" className="scroll-mt-28 border-t border-[#241c15]/8 bg-[#ece0c9] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9c4a2e]">La cocina</p>
              <h2 className="mt-4 text-3xl font-medium sm:text-5xl">Cada detalle, con cuidado.</h2>
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
            <p className="mt-4 text-xs text-[#8a7461]">Imágenes conceptuales de esta demostración; no representan un establecimiento real.</p>
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9c4a2e]">Así se siente</p>
              <h2 className="mt-4 text-3xl font-medium sm:text-5xl">No solo venimos a comer.</h2>
            </Reveal>

            <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              <div aria-hidden="true" className="absolute left-0 right-0 top-[38px] hidden h-px bg-[#241c15]/10 lg:block" />
              {experienceSteps.map((step, index) => (
                <Reveal as="li" key={step.number} delay={index * 90} className="relative flex flex-col gap-4">
                  <span className="relative z-10 flex size-[76px] items-center justify-center rounded-full border border-[#c1603c]/35 bg-[#f3ead9] font-display text-xl font-medium text-[#9c4a2e]">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-medium">{step.title}</h3>
                  <p className="text-sm leading-6 text-[#5c4b3a]">{step.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section className="scroll-mt-28 border-t border-[#241c15]/8 bg-[#ece0c9] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9c4a2e]">Lo que cuentan</p>
              <h2 className="mt-4 text-3xl font-medium sm:text-5xl">Testimonios</h2>
            </Reveal>

            <div className="mt-12 divide-y divide-[#241c15]/10 border-t border-[#241c15]/10">
              {testimonials.map((testimonial, index) => (
                <Reveal
                  key={testimonial.quote}
                  delay={index * 80}
                  className="flex flex-col gap-4 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10"
                >
                  <blockquote className="max-w-2xl text-xl font-medium leading-[1.4] text-[#241c15] sm:text-2xl">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="shrink-0 text-xs uppercase tracking-[0.18em] text-[#8a7461]">{testimonial.name}</figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL — segundo momento oscuro, en eco con el hero */}
        <section id="cta-final" className="relative isolate overflow-hidden px-5 py-24 text-center sm:px-8 sm:py-32">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20"
            style={{ backgroundImage: "linear-gradient(160deg, #3a2f26 0%, #271e17 50%, #1a140f 100%)" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 bg-[radial-gradient(circle_at_50%_0%,rgba(193,96,60,0.32)_0%,rgba(193,96,60,0.08)_42%,transparent_70%)]"
          />
          <Reveal className="relative mx-auto max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d9895f]">Listo cuando tú estés</p>
            <h2 className="mt-4 text-4xl font-medium leading-[1.1] text-[#f6efe4] sm:text-6xl">
              Haz de esta noche<br />una historia.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-[#d8c9b5]">
              Reserva tu mesa y ven a compartir un momento diferente.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={DEMO_WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-[#c1603c] px-8 py-4 text-sm font-semibold text-[#f6efe4] transition hover:bg-[#9c4a2e] motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#f6efe4]"
              >
                Reservar mesa
              </a>
              <Link
                href="#menu"
                className="inline-flex rounded-full border border-[#f6efe4]/30 px-8 py-4 text-sm font-medium text-[#f6efe4] transition hover:bg-[#f6efe4]/10 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#d9895f]"
              >
                Ver menú
              </Link>
            </div>
          </Reveal>
        </section>

        {/* UBICACIÓN */}
        <section id="contacto" className="scroll-mt-28 border-b border-[#241c15]/8 bg-[#ece0c9] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9c4a2e]">Encuéntranos</p>
              <h2 className="mt-4 text-3xl font-medium sm:text-4xl">Casa Noma</h2>
              <p className="mt-6 text-lg">Bello, Antioquia — demo</p>
              <p className="mt-2 text-sm text-[#5c4b3a]">Lunes — Domingo</p>
              <p className="mt-2 text-sm text-[#5c4b3a]">WhatsApp demo · {DEMO_PHONE}</p>
              <p className="mt-4 text-xs text-[#8a7461]">Ubicación, horario y contacto ficticios para esta demostración.</p>
            </Reveal>
            <Reveal delay={100}>
              <div
                role="img"
                aria-label="Mapa conceptual, ubicación ficticia en Bello, Antioquia"
                className="relative flex min-h-56 items-center justify-center overflow-hidden rounded-xl border border-[#241c15]/10 bg-[#f3ead9]"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(32deg,transparent 48%,#d9895f 49%,#d9895f 50%,transparent 51%),linear-gradient(145deg,transparent 38%,#e8c9ba 39%,#e8c9ba 40%,transparent 41%),linear-gradient(90deg,transparent 69%,#d9895f 70%,#d9895f 71%,transparent 72%)",
                    backgroundSize: "140px 110px,170px 130px,120px 150px",
                  }}
                />
                <span className="relative rounded-full border border-[#c1603c]/50 bg-[#c1603c]/15 px-4 py-2 text-xs font-medium text-[#9c4a2e]">
                  CASA NOMA · Mapa ilustrativo
                </span>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <CasaNomaFooter />
      <WhatsAppFloat />
    </div>
  );
}
