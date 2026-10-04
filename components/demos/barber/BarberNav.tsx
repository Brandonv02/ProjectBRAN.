"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { DEMO_WHATSAPP, navItems } from "./data";

/**
 * Cabecera fija de la demo: franja de aviso + navegación.
 * La navegación se contrae y gana fondo al hacer scroll, igual que el
 * patrón ya usado en components/layout/Navbar.tsx para la home de ELEVA.
 */
export function BarberNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        frame = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-[#c5a477]/25 bg-[#c5a477]/10 px-4 py-1.5 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[#dec39e] sm:text-xs">
        Demo comercial · Negocio, equipo y contenido ficticios
      </div>

      <div
        className={cn(
          "transition-[background-color,border-color,backdrop-filter] duration-300 ease-eleva",
          scrolled
            ? "border-b border-white/10 bg-[#11100f]/90 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Navegación NERO BARBER"
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-5 transition-[height] duration-300 ease-eleva sm:px-8 lg:px-12",
            scrolled ? "h-[64px]" : "h-[84px] lg:h-[92px]",
          )}
        >
          <Link
            href="#inicio"
            className="shrink-0 text-base font-semibold tracking-[0.16em] focus-visible:outline-2 focus-visible:outline-[#c5a477] sm:text-lg sm:tracking-[0.2em]"
          >
            NERO<span className="ml-1 font-light tracking-[0.13em] text-[#c5a477]">BARBER</span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-[#b5afa5] transition-colors duration-200 ease-eleva hover:text-white focus-visible:outline-2 focus-visible:outline-[#c5a477]"
              >
                {label}
              </Link>
            ))}
            <a
              href={DEMO_WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#c5a477] px-5 py-2.5 text-xs font-semibold tracking-wide text-[#171411] transition-colors duration-200 ease-eleva hover:bg-[#dfc29a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Reservar cita
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <a
              href={DEMO_WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#c5a477] px-3.5 py-2.5 text-xs font-semibold text-[#171411] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Cita
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="menu-nero"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-200 ease-eleva hover:border-[#c5a477]/60 focus-visible:outline-2 focus-visible:outline-[#c5a477]"
            >
              <Icon name={open ? "close" : "menu"} size={18} />
            </button>
          </div>
        </nav>
      </div>

      <button
        type="button"
        aria-hidden="true"
        tabIndex={-1}
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 -z-10 bg-black/70 transition-opacity duration-300 ease-eleva lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <div
        id="menu-nero"
        className={cn(
          "grid overflow-hidden border-b border-white/10 bg-[#141210] transition-[grid-template-rows] duration-300 ease-eleva lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-transparent",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="flex flex-col gap-1 px-5 py-5 sm:px-8">
            {navItems.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3.5 text-base font-medium text-[#ddd6ca] transition-colors duration-150 ease-eleva hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#c5a477]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
