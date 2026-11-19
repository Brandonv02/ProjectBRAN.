import { cn } from "@/lib/utils";

/** Fallback visual opcional para contenido conceptual sin fotografía. */

type Tint = "graphite" | "carbon" | "lime";

const backgrounds: Record<Tint, string> = {
  graphite: "linear-gradient(135deg, #2a2c30 0%, #1a1b1d 55%, #0e0f10 100%)",
  carbon: "linear-gradient(135deg, #1a1b1d 0%, #101112 55%, #060606 100%)",
  lime: "linear-gradient(135deg, #22261a 0%, #15170f 55%, #0a0b07 100%)",
};

const speedLines = [
  "linear-gradient(115deg, transparent 8%, rgba(255,255,255,0.1) 8%, rgba(255,255,255,0.1) 10%, transparent 10%)",
  "linear-gradient(115deg, transparent 28%, rgba(255,255,255,0.06) 28%, rgba(255,255,255,0.06) 33%, transparent 33%)",
  "linear-gradient(115deg, transparent 52%, rgba(198,255,31,0.22) 52%, rgba(198,255,31,0.22) 54%, transparent 54%)",
  "linear-gradient(115deg, transparent 70%, rgba(255,255,255,0.05) 70%, rgba(255,255,255,0.05) 76%, transparent 76%)",
].join(", ");

const markColor: Record<Tint, string> = {
  graphite: "rgba(245,245,245,0.75)",
  carbon: "rgba(245,245,245,0.75)",
  lime: "#c6ff1f",
};

const labelColor: Record<Tint, string> = {
  graphite: "rgba(245,245,245,0.78)",
  carbon: "rgba(245,245,245,0.78)",
  lime: "rgba(198,255,31,0.9)",
};

function BoltMark({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill={color} aria-hidden="true">
      <path d="M13 2 4.5 14h5.8l-1.1 8L18.5 10h-5.8l1.1-8Z" />
    </svg>
  );
}

export function MediaPlaceholder({
  label,
  tint = "graphite",
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
      className={cn(aspect, "group relative overflow-hidden rounded-lg", className)}
      style={{ backgroundImage: backgrounds[tint] }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-90 transition-opacity duration-500 ease-bran group-hover:opacity-100"
        style={{ backgroundImage: speedLines }}
      />
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
        <span
          className="flex size-14 items-center justify-center rounded-md border transition-transform duration-500 ease-bran group-hover:scale-105"
          style={{ borderColor: `${markColor[tint]}55` }}
        >
          <BoltMark color={markColor[tint]} />
        </span>
      </div>
      {showLabel ? (
        <span
          className="absolute bottom-3 left-4 text-[10px] font-bold uppercase tracking-[0.18em]"
          style={{ color: labelColor[tint] }}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
}
