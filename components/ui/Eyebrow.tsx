import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Etiqueta de sección: Anta 11px, +0.18em, mayúsculas (manual pág. 10). */
export function Eyebrow({
  tone = "dark",
  className,
  children,
}: {
  tone?: "dark" | "paper" | "accent";
  className?: string;
  children: ReactNode;
}) {
  return (
    <p
      className={cn(
        "font-label text-[11px] uppercase tracking-[0.18em]",
        tone === "dark" && "text-muted",
        tone === "paper" && "text-paper-muted",
        tone === "accent" && "text-accent-bright",
        className,
      )}
    >
      {children}
    </p>
  );
}
