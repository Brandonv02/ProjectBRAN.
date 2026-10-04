"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { DEMO_WHATSAPP } from "./data";

/**
 * Botón flotante de WhatsApp. Aparece al salir del hero y se oculta mientras
 * el CTA final está en pantalla, para no duplicar la misma acción.
 * Mismo patrón que components/demos/barber/WhatsAppFloat.tsx, en clave cálida.
 */
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    const ctaFinal = document.getElementById("cta-final");
    if (!hero || !("IntersectionObserver" in window)) return;

    let heroOut = false;
    let ctaIn = false;
    const sync = () => setVisible(heroOut && !ctaIn);

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroOut = !!entry && !entry.isIntersecting;
        sync();
      },
      { threshold: 0 },
    );
    heroObserver.observe(hero);

    let ctaObserver: IntersectionObserver | undefined;
    if (ctaFinal) {
      ctaObserver = new IntersectionObserver(
        ([entry]) => {
          ctaIn = !!entry && entry.isIntersecting;
          sync();
        },
        { threshold: 0 },
      );
      ctaObserver.observe(ctaFinal);
    }

    return () => {
      heroObserver.disconnect();
      ctaObserver?.disconnect();
    };
  }, []);

  return (
    <a
      href={DEMO_WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      aria-label="Reservar por WhatsApp — número de demostración"
      className={cn(
        "fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#c1603c] text-[#f6efe4]",
        "shadow-[0_18px_40px_-16px_rgba(36,28,21,0.55)] transition-[opacity,transform] duration-300 ease-eleva",
        "hover:-translate-y-0.5 hover:bg-[#9c4a2e] motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#241c15]",
        visible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <Icon name="whatsapp" size={24} />
    </a>
  );
}
