import { cn } from "@/lib/utils";

/** Fallback visual opcional para contenido conceptual sin fotografía. */

type Tint = "ivory" | "beige" | "champagne" | "dark";

const backgrounds: Record<Tint, string> = {
  ivory: "linear-gradient(135deg, #f3ecdd 0%, #e9dcc0 55%, #ddc89e 100%)",
  beige: "linear-gradient(135deg, #e9dcc0 0%, #ddc89e 55%, #c9ab83 100%)",
  champagne: "linear-gradient(135deg, #e3d2ab 0%, #cdab79 55%, #a9824f 100%)",
  dark: "linear-gradient(135deg, #332c24 0%, #221e1a 60%, #161310 100%)",
};

const markColor: Record<Tint, string> = {
  ivory: "rgba(35,31,27,0.24)",
  beige: "rgba(35,31,27,0.24)",
  champagne: "rgba(35,31,27,0.28)",
  dark: "rgba(246,241,233,0.26)",
};

const labelColor: Record<Tint, string> = {
  ivory: "rgba(35,31,27,0.68)",
  beige: "rgba(35,31,27,0.68)",
  champagne: "rgba(35,31,27,0.72)",
  dark: "rgba(246,241,233,0.82)",
};

export function MediaPlaceholder({
  label,
  tint = "ivory",
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
        className="absolute inset-0 opacity-[0.08] transition-opacity duration-500 ease-bran group-hover:opacity-[0.12]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #231f1b 0px, #231f1b 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
        <span
          className="flex size-14 items-center justify-center rounded-full border font-display text-lg font-medium transition-transform duration-500 ease-bran group-hover:scale-105"
          style={{ borderColor: markColor[tint], color: markColor[tint] }}
        >
          L
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
