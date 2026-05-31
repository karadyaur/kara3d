"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "link";
export type ButtonSize = "default" | "small";
export type IconPosition = "none" | "leading" | "trailing" | "only";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  alternate?: boolean;
  iconPosition?: IconPosition;
  icon?: ReactNode;
}

// Figma: Primary(light)=malachite fill, Primary(dark)=neutral-darkest fill
// Secondary(light)=neutral-darkest-5 bg, Secondary(dark)=white-10 bg
// Tertiary/Link = no bg, text only
const variantStyles: Record<ButtonVariant, { default: string; alternate: string }> = {
  primary: {
    default:   "bg-malachite border border-malachite text-white",
    alternate: "bg-neutral-darkest border border-neutral-darkest text-white",
  },
  secondary: {
    default:   "bg-neutral-darkest-5 border border-transparent text-neutral-darkest",
    alternate: "bg-white-10 border border-transparent text-white",
  },
  tertiary: {
    default:   "text-neutral-darkest",
    alternate: "text-white",
  },
  link: {
    default:   "text-neutral-darkest",
    alternate: "text-white",
  },
};

// Figma: default px-6 py-2.5 (24/10px), small px-5 py-2 (20/8px), icon-only p-2.5 / p-2
const paddingStyles: Record<ButtonSize, { base: string; iconOnly: string }> = {
  default: { base: "px-6 py-2.5", iconOnly: "p-2.5" },
  small:   { base: "px-5 py-2",   iconOnly: "p-2"   },
};

export function Button({
  variant = "primary",
  size = "default",
  alternate = false,
  iconPosition = "none",
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  const isLink = variant === "link";
  const hasText = iconPosition !== "only";
  const hasIcon = iconPosition !== "none" && !!icon;
  const theme = alternate ? "alternate" : "default";

  return (
    <button
      className={cn(
        // Base
        "inline-flex items-center justify-center font-medium text-regular leading-[1.5] whitespace-nowrap",
        "transition-opacity hover:opacity-80 active:opacity-65 disabled:opacity-40 disabled:cursor-not-allowed",
        // Shape — Link/Tertiary have no pill, only rounded for focus ring
        !isLink && "rounded-full",
        // Variant colors
        variantStyles[variant][theme],
        // Padding — link has none, icon-only has square padding
        !isLink && (iconPosition === "only" ? paddingStyles[size].iconOnly : paddingStyles[size].base),
        // Gap between icon + text (12px for buttons, 8px for link)
        hasIcon && hasText && (isLink ? "gap-2" : "gap-3"),
        className,
      )}
      {...props}
    >
      {(iconPosition === "leading" || iconPosition === "only") && icon && (
        <span className="size-6 shrink-0 flex items-center justify-center">{icon}</span>
      )}
      {hasText && children}
      {iconPosition === "trailing" && icon && (
        <span className="size-6 shrink-0 flex items-center justify-center">{icon}</span>
      )}
    </button>
  );
}
