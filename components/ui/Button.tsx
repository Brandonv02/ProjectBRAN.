import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Botón del sistema. Altura 48 por defecto, redondo (manual: nada cuadrado), transición 250ms.
 * Objetivo táctil mínimo 48×48 en móvil (size "sm" solo en escritorio).
 */

type Variant = "primary" | "ghost" | "inverse";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full border font-semibold leading-none " +
  "transition-[transform,box-shadow,background-color,border-color,color] duration-[250ms] ease-bran " +
  "select-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "border-transparent bg-accent-solid text-carbon shadow-[0_16px_40px_-14px_rgba(255,95,26,0.8)] " +
    "hover:bg-accent-bright hover:-translate-y-0.5 hover:shadow-[0_24px_52px_-14px_rgba(255,95,26,0.95)] " +
    "active:translate-y-0 active:bg-accent-deep",
  ghost:
    "border-line-strong bg-transparent text-ink " +
    "hover:border-line-hover hover:bg-surface hover:text-ink hover:-translate-y-0.5 " +
    "active:translate-y-0",
  inverse:
    "border-transparent bg-white text-carbon " +
    "hover:-translate-y-0.5 hover:bg-paper active:translate-y-0",
};

const sizes: Record<Size, string> = {
  sm: "h-11 px-5 text-sm",
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-7 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & {
    href?: never;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof CommonProps | "href"> & {
    /** `null` = el dato de contacto aún no está configurado. */
    href: string | null;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className,
  );

  if ("href" in rest) {
    const { href, ...anchorProps } = rest as ButtonAsLink;

    // Sin dato de contacto todavía: se mantiene la maqueta pero el
    // enlace no navega y queda marcado para auditoría.
    if (!href) {
      return (
        <span
          {...(anchorProps as ComponentPropsWithoutRef<"span">)}
          role="link"
          aria-disabled="true"
          data-bran-placeholder="contacto"
          className={cn(classes, "cursor-not-allowed")}
        >
          {children}
        </span>
      );
    }

    const isExternal = href.startsWith("http");

    return (
      <a
        href={href}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...anchorProps}
        className={classes}
      >
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = rest as ButtonAsButton;

  return (
    <button type={type} {...buttonProps} className={classes}>
      {children}
    </button>
  );
}
