"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { DEMO_WHATSAPP, navItems } from "./data";

/**
 * Cabecera fija de la demo VOLT: misma mecánica que las otras demos
 * (franja de aviso + navegación que se contrae al hacer scroll), en clave
 * grafito/negro con acento lima — tipografía en mayúsculas, trazo más duro.
 */
export function VoltNav() {
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
      <div className="border-b border-[#c6ff1f]/20 bg-[#c6ff1f]/10 px-4 py-1.5 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-[#c6ff1f] sm:text-xs">
        Demo comercial · Negocio, equipo y contenido ficticios
      </div>

      <div
        className={cn(
          "transition-[background-color,border-color,backdrop-filter] duration-300 ease-eleva",
          scrolled
            ? "border-b border-white/10 bg-[#0a0a0a]/92 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Navegación VOLT ATHLETICS"
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-5 transition-[height] duration-300 ease-eleva sm:px-8 lg:px-12",
            scrolled ? "h-[64px]" : "h-[84px] lg:h-[92px]",
          )}
        >
          <Link
            href="#inicio"
            className="shrink-0 text-base font-extrabold uppercase tracking-[0.1em] text-white focus-visible:outline-2 focus-visible:outline-[#c6ff1f] sm:text-lg"
          >
            VOLT<span className="ml-1.5 font-normal tracking-[0.14em] text-[#c6ff1f]">ATHLETICS</span>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium uppercase tracking-[0.04em] text-[#a8aaad] transition-colors duration-200 ease-eleva hover:text-white focus-visible:outline-2 focus-visible:outline-[#c6ff1f]"
              >
                {label}
              </Link>
            ))}
            <a
              href={DEMO_WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-[#c6ff1f] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wide text-[#0a0a0a] transition-colors duration-200 ease-eleva hover:bg-[#dcff6b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Únete ahora
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <a
              href={DEMO_WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-[#c6ff1f] px-3.5 py-2.5 text-xs font-extrabold uppercase text-[#0a0a0a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Únete
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="menu-volt"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="flex size-10 items-center justify-center rounded-md border border-white/15 text-white transition-colors duration-200 ease-eleva hover:border-[#c6ff1f]/60 focus-visible:outline-2 focus-visible:outline-[#c6ff1f]"
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
        id="menu-volt"
        className={cn(
          "grid overflow-hidden border-b border-white/10 bg-[#0a0a0a] transition-[grid-template-rows] duration-300 ease-eleva lg:hidden",
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
                className="rounded-md px-3 py-3.5 text-base font-semibold uppercase tracking-wide text-white transition-colors duration-150 ease-eleva hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-[#c6ff1f]"
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
