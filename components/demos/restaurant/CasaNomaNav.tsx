"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { DEMO_WHATSAPP, navItems } from "./data";

/**
 * Cabecera fija de la demo CASA NOMA: misma mecánica que BarberNav/LumeNav
 * (franja de aviso + navegación que se contrae al hacer scroll), en clave
 * cálida — crema con texto carbón y acento terracota.
 */
export function CasaNomaNav() {
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
      <div className="border-b border-[#c1603c]/25 bg-[#c1603c]/10 px-4 py-1.5 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9c4a2e] sm:text-xs">
        Demo comercial · Negocio, equipo y contenido ficticios
      </div>

      <div
        className={cn(
          "transition-[background-color,border-color,backdrop-filter] duration-300 ease-eleva",
          scrolled
            ? "border-b border-[#241c15]/10 bg-[#f3ead9]/92 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Navegación CASA NOMA"
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-5 transition-[height] duration-300 ease-eleva sm:px-8 lg:px-12",
            scrolled ? "h-[64px]" : "h-[84px] lg:h-[92px]",
          )}
        >
          <Link
            href="#inicio"
            className={cn(
              "shrink-0 text-base font-semibold tracking-[0.18em] transition-colors duration-300 ease-eleva focus-visible:outline-2 focus-visible:outline-[#c1603c] sm:text-lg",
              scrolled ? "text-[#241c15]" : "text-[#f6efe4]",
            )}
          >
            CASA<span className="ml-1.5 font-light tracking-[0.14em] text-[#c1603c]">NOMA</span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm transition-colors duration-300 ease-eleva focus-visible:outline-2 focus-visible:outline-[#c1603c]",
                  scrolled ? "text-[#5c4b3a] hover:text-[#241c15]" : "text-[#f6efe4]/85 hover:text-[#f6efe4]",
                )}
              >
                {label}
              </Link>
            ))}
            <a
              href={DEMO_WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#c1603c] px-5 py-2.5 text-xs font-semibold tracking-wide text-[#f6efe4] transition-colors duration-200 ease-eleva hover:bg-[#9c4a2e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#241c15]"
            >
              Reservar mesa
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <a
              href={DEMO_WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#c1603c] px-3.5 py-2.5 text-xs font-semibold text-[#f6efe4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#241c15]"
            >
              Mesa
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="menu-noma"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className={cn(
                "flex size-10 items-center justify-center rounded-full border transition-colors duration-300 ease-eleva hover:border-[#c1603c]/60 focus-visible:outline-2 focus-visible:outline-[#c1603c]",
                scrolled ? "border-[#241c15]/15 text-[#241c15]" : "border-[#f6efe4]/40 text-[#f6efe4]",
              )}
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
          "fixed inset-0 -z-10 bg-[#241c15]/50 transition-opacity duration-300 ease-eleva lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <div
        id="menu-noma"
        className={cn(
          "grid overflow-hidden border-b border-[#241c15]/10 bg-[#f3ead9] transition-[grid-template-rows] duration-300 ease-eleva lg:hidden",
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
                className="rounded-lg px-3 py-3.5 text-base font-medium text-[#241c15] transition-colors duration-150 ease-eleva hover:bg-[#241c15]/5 focus-visible:outline-2 focus-visible:outline-[#c1603c]"
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
