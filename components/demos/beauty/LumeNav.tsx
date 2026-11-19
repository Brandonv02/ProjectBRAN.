"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { DEMO_WHATSAPP, navItems } from "./data";

/**
 * Cabecera fija de la demo LUMÉ: misma mecánica que BarberNav (franja de
 * aviso + navegación que se contrae al hacer scroll), pero en clave clara
 * — texto oscuro sobre marfil, sin el cristal negro de NERO BARBER.
 */
export function LumeNav() {
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
      <div className="border-b border-[#a9824f]/20 bg-[#a9824f]/10 px-4 py-1.5 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8c6a3c] sm:text-xs">
        Demo comercial · Negocio, equipo y contenido ficticios
      </div>

      <div
        className={cn(
          "transition-[background-color,border-color,backdrop-filter] duration-300 ease-bran",
          scrolled
            ? "border-b border-[#231f1b]/10 bg-[#f6f1e9]/90 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Navegación LUMÉ BEAUTY STUDIO"
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-5 transition-[height] duration-300 ease-bran sm:px-8 lg:px-12",
            scrolled ? "h-[64px]" : "h-[84px] lg:h-[92px]",
          )}
        >
          <Link
            href="#inicio"
            className="shrink-0 text-base font-medium tracking-[0.2em] text-[#231f1b] focus-visible:outline-2 focus-visible:outline-[#a9824f] sm:text-lg"
          >
            LUMÉ<span className="ml-2 text-[0.6em] font-normal tracking-[0.3em] text-[#8c6a3c]">BEAUTY STUDIO</span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-[#5b5146] transition-colors duration-200 ease-bran hover:text-[#231f1b] focus-visible:outline-2 focus-visible:outline-[#a9824f]"
              >
                {label}
              </Link>
            ))}
            <a
              href={DEMO_WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#a9824f] px-5 py-2.5 text-xs font-semibold tracking-wide text-[#fbf7ef] transition-colors duration-200 ease-bran hover:bg-[#8c6a3c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#231f1b]"
            >
              Reservar cita
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <a
              href={DEMO_WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#a9824f] px-3.5 py-2.5 text-xs font-semibold text-[#fbf7ef] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#231f1b]"
            >
              Cita
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="menu-lume"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="flex size-10 items-center justify-center rounded-full border border-[#231f1b]/15 text-[#231f1b] transition-colors duration-200 ease-bran hover:border-[#a9824f]/60 focus-visible:outline-2 focus-visible:outline-[#a9824f]"
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
          "fixed inset-0 -z-10 bg-[#231f1b]/50 transition-opacity duration-300 ease-bran lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <div
        id="menu-lume"
        className={cn(
          "grid overflow-hidden border-b border-[#231f1b]/10 bg-[#f6f1e9] transition-[grid-template-rows] duration-300 ease-bran lg:hidden",
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
                className="rounded-lg px-3 py-3.5 text-base font-medium text-[#231f1b] transition-colors duration-150 ease-bran hover:bg-[#231f1b]/5 focus-visible:outline-2 focus-visible:outline-[#a9824f]"
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
