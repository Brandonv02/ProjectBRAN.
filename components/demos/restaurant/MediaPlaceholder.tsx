import { cn } from "@/lib/utils";

/** Fallback visual opcional para contenido conceptual sin fotografía. */

type Tint = "crema" | "terracota" | "marron" | "carbon";

const backgrounds: Record<Tint, string> = {
  crema: "linear-gradient(135deg, #f3ead9 0%, #ecdfc4 55%, #ddc6a0 100%)",
  terracota: "linear-gradient(135deg, #d98a62 0%, #c1603c 55%, #9c4a2e 100%)",
  marron: "linear-gradient(135deg, #5a4531 0%, #43321f 55%, #2f2217 100%)",
  carbon: "linear-gradient(135deg, #3a2f26 0%, #271e17 55%, #1a140f 100%)",
};

const markColor: Record<Tint, string> = {
  crema: "rgba(36,28,21,0.3)",
  terracota: "rgba(36,28,21,0.3)",
  marron: "rgba(246,239,228,0.3)",
  carbon: "rgba(246,239,228,0.3)",
};

const labelColor: Record<Tint, string> = {
  crema: "rgba(36,28,21,0.72)",
  terracota: "rgba(36,28,21,0.78)",
  marron: "rgba(246,239,228,0.85)",
  carbon: "rgba(246,239,228,0.85)",
};

const dotColor: Record<Tint, string> = {
  crema: "#241c15",
  terracota: "#241c15",
  marron: "#f6efe4",
  carbon: "#f6efe4",
};

function UtensilsMark({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 2v6M5.5 2v3.2a1.5 1.5 0 0 0 3 0V2M7 8v14" />
      <path d="M15.5 2c-1.4 0-2.5 1.7-2.5 3.8s1.1 3.8 2.5 3.8M15.5 2v20" />
    </svg>
  );
}

export function MediaPlaceholder({
  label,
  tint = "crema",
  aspect,
  className,
  showLabel = true,
}: {
  label: string;
  tint?: Tint;
  aspect: string;
  className?: string;
  showLabel?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={`${label} — imagen conceptual de esta demostración`}
      className={cn(aspect, "group relative overflow-hidden rounded-xl", className)}
      style={{ backgroundImage: backgrounds[tint] }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.1] transition-opacity duration-500 ease-eleva group-hover:opacity-[0.16]"
        style={{
          backgroundImage: `radial-gradient(${dotColor[tint]} 1px, transparent 1.4px)`,
          backgroundSize: "15px 15px",
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
        <span
          className="flex size-14 items-center justify-center rounded-full border transition-transform duration-500 ease-eleva group-hover:scale-105"
          style={{ borderColor: markColor[tint] }}
        >
          <UtensilsMark color={markColor[tint]} />
        </span>
      </div>
      {showLabel ? (
        <span
          className="absolute bottom-3 left-4 text-[10px] font-semibold uppercase tracking-[0.18em]"
          style={{ color: labelColor[tint] }}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
}
