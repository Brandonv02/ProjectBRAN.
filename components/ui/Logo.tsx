import { cn } from "@/lib/utils";

/**
 * Firma BRAN. — Manual de marca, pág. 07–08.
 * "BRAN" en mayúsculas (Anta) y un punto redondo naranja que cierra el
 * nombre. El punto nunca es cuadrado, no lleva sombras ni degradados.
 * Sobre naranja, todo va en negro (`onAccent`).
 * Propuesta de diseño: debe vectorizarse con un diseñador y validarse
 * legalmente antes de usarse (manual pág. 08).
 */

type DotProps = {
  className?: string;
  /** Sobre naranja el punto se vuelve negro. */
  onAccent?: boolean;
};

/** El punto de la firma, dimensionado en `em` para heredar el tamaño del texto. */
export function BranDot({ className, onAccent = false }: DotProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block size-[0.24em] shrink-0 rounded-full",
        onAccent ? "bg-carbon" : "bg-accent",
        className,
      )}
    />
  );
}

type MarkProps = {
  size?: number;
  className?: string;
  /** Color de la "B". */
  tone?: string;
  /** Sobre naranja: "B" y punto en negro. */
  onAccent?: boolean;
};

/** Monograma "B." para avatar e ícono. */
export function BranMark({
  size = 28,
  className,
  tone = "#F4F5F5",
  onAccent = false,
}: MarkProps) {
  const letter = onAccent ? "#0A0A0A" : tone;
  const dot = onAccent ? "#0A0A0A" : "#FF5F1A";

  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M9 5h8a5.5 5.5 0 0 1 0 11H9m0 0h9.5a5.5 5.5 0 0 1 0 11H9M9 5v22"
        stroke={letter}
        strokeWidth="3.6"
        strokeLinejoin="round"
      />
      <circle cx="26.4" cy="25.4" r="2.6" fill={dot} />
    </svg>
  );
}

type LogoProps = {
  /** Tamaño del texto en px. */
  size?: number;
  className?: string;
  /** Muestra solo el monograma "B.". */
  markOnly?: boolean;
  /** Color del texto de la firma. */
  tone?: string;
  /** Sobre naranja: todo en negro. */
  onAccent?: boolean;
  /** Extensión de marca opcional: "web", "app", "data", "soporte", "lab". */
  extension?: string;
};

export function Logo({
  size = 28,
  className,
  markOnly = false,
  tone = "#F4F5F5",
  onAccent = false,
  extension,
}: LogoProps) {
  if (markOnly) {
    return (
      <span className={cn("inline-flex items-center", className)}>
        <BranMark size={size} tone={tone} onAccent={onAccent} />
        <span className="sr-only">BRAN.</span>
      </span>
    );
  }

  return (
    <span
      className={cn("inline-flex items-baseline font-label font-normal leading-none", className)}
      style={{ fontSize: size, color: onAccent ? "#0A0A0A" : tone }}
    >
      <span aria-hidden={extension ? undefined : "true"}>BRAN</span>
      <BranDot className="mx-[0.02em]" onAccent={onAccent} />
      {extension && (
        <span className="tracking-[0.02em] lowercase" style={{ fontSize: "0.82em" }}>
          {extension}
        </span>
      )}
      <span className="sr-only">{extension ? "" : "BRAN."}</span>
    </span>
  );
}

/* ───────────────────────────────────────────────────────────────
   Recursos gráficos (manual pág. 11). Máximo dos por pieza.
   ─────────────────────────────────────────────────────────────── */

/** 01 · El aro: el punto de BRAN. crecido, un círculo grueso que sale del borde. */
export function Ring({
  className,
  tone = "accent",
}: {
  className?: string;
  /** `accent` = naranja sobre gris/negro · `dark` = negro sobre naranja. */
  tone?: "accent" | "dark";
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full border-[clamp(28px,6vw,64px)]",
        tone === "accent" ? "border-accent" : "border-carbon",
        className,
      )}
    />
  );
}

/** 02 · Las marcas de pausa: dos barras redondeadas, como un "pause". */
export function PauseMarks({
  className,
  tone = "accent",
  single = false,
}: {
  className?: string;
  tone?: "accent" | "light" | "dark";
  /** Una sola barra cierra la pieza abajo. */
  single?: boolean;
}) {
  const color =
    tone === "accent" ? "bg-accent" : tone === "dark" ? "bg-carbon" : "bg-ink";
  return (
    <span aria-hidden="true" className={cn("inline-flex items-center gap-1.5", className)}>
      <span className={cn("h-5 w-1.5 rounded-full", color)} />
      {!single && <span className={cn("h-5 w-1.5 rounded-full", color)} />}
    </span>
  );
}

/**
 * 03 · La línea de luz: trazo curvo naranja con halo suave.
 * Solo sobre negro y nunca encima del texto: se ubica en una esquina.
 */
export function LightLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 420"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn("light-line-glow pointer-events-none absolute", className)}
    >
      <path
        d="M-10 380C110 360 160 250 250 190S430 110 530 20"
        stroke="#FF5F1A"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}
