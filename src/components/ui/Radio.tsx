"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Figma has 3 radio variants:
// 1. Simple — circle + label, gap-3
// 2. Card   — icon, title, description, radio indicator
// 3. Chip   — letter-keyed pill (e.g. "A" + label)

// ─── Simple ───────────────────────────────────────────────────────────────────
interface RadioProps {
  label?: string;
  checked?: boolean;
  onChange?: () => void;
  alternate?: boolean;
  className?: string;
}

export function Radio({ label, checked = false, onChange, alternate = false, className }: RadioProps) {
  return (
    <label className={cn("inline-flex items-center gap-3 cursor-pointer select-none", className)}>
      {/* Figma: size-[18px], rounded-full */}
      <span
        role="radio"
        aria-checked={checked}
        onClick={onChange}
        className={cn(
          "relative shrink-0 size-[18px] rounded-full flex items-center justify-center transition-colors",
          checked
            ? alternate ? "bg-white" : "bg-neutral-darkest"
            : alternate ? "bg-white-10" : "bg-neutral-darkest-5",
        )}
      >
        {checked && (
          /* Figma: inner dot size-[8px], at left-[5px] top-[5px] */
          <span
            className={cn(
              "absolute size-2 rounded-full",
              alternate ? "bg-neutral-darkest" : "bg-white",
            )}
          />
        )}
      </span>
      {label && (
        <span
          className={cn(
            "font-sans font-normal text-regular leading-[1.5]",
            alternate ? "text-white" : "text-neutral-darkest",
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────
interface RadioCardProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
  checked?: boolean;
  onChange?: () => void;
  alternate?: boolean;
  className?: string;
}

export function RadioCard({
  title = "Radio button",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  icon,
  checked = false,
  onChange,
  alternate = false,
  className,
}: RadioCardProps) {
  return (
    <div
      role="radio"
      aria-checked={checked}
      onClick={onChange}
      className={cn(
        "flex items-start gap-4 p-6 border border-transparent cursor-pointer select-none",
        alternate ? "bg-white-10" : "bg-neutral-darkest-5",
        className,
      )}
    >
      {icon && (
        <div
          className={cn(
            "shrink-0 flex items-start p-3 border",
            alternate ? "border-white-20" : "border-neutral-darkest-15",
          )}
        >
          <span className="size-8 flex items-center justify-center">{icon}</span>
        </div>
      )}

      <div
        className={cn(
          "flex-1 min-w-0 flex flex-col gap-1",
          alternate ? "text-white" : "text-neutral-darkest",
        )}
      >
        <p className="font-semibold text-medium-body leading-[1.5]">{title}</p>
        <p className="font-normal text-regular leading-[1.5]">{description}</p>
      </div>

      <span
        className={cn(
          "relative shrink-0 size-[18px] rounded-full flex items-center justify-center",
          checked
            ? alternate ? "bg-white" : "bg-neutral-darkest"
            : alternate ? "bg-white-10" : "bg-neutral-darkest-5",
        )}
      >
        {checked && (
          <span
            className={cn("absolute size-2 rounded-full", alternate ? "bg-neutral-darkest" : "bg-white")}
          />
        )}
      </span>
    </div>
  );
}

// ─── Chip ─────────────────────────────────────────────────────────────────────
// Figma: pl-2 pr-4 py-2, gap-2, left side = letter box (40px, bordered)
interface RadioChipProps {
  label?: string;
  letter?: string;
  checked?: boolean;
  onChange?: () => void;
  alternate?: boolean;
  className?: string;
}

export function RadioChip({
  label = "Website design",
  letter = "A",
  checked = false,
  onChange,
  alternate = false,
  className,
}: RadioChipProps) {
  return (
    <button
      role="radio"
      aria-checked={checked}
      onClick={onChange}
      className={cn(
        "inline-flex items-center gap-2 pl-2 pr-4 py-2 border border-transparent transition-colors",
        checked
          ? alternate
            ? "bg-white border-white"
            : "bg-neutral-darkest border-neutral-darkest"
          : alternate
            ? "bg-white-10"
            : "bg-neutral-darkest-5",
        className,
      )}
    >
      {/* Letter box: 40px wide, bordered */}
      <span
        className={cn(
          "w-10 flex items-center justify-center py-2 border font-semibold text-regular leading-[1.5]",
          alternate
            ? checked
              ? "border-neutral-darkest-15 bg-white text-neutral-darkest"
              : "border-white-20 text-white"
            : checked
              ? "border-white-20 bg-neutral-darkest text-white"
              : "border-neutral-darkest-15 text-neutral-darkest",
        )}
      >
        {letter}
      </span>
      <span
        className={cn(
          "font-normal text-regular leading-[1.5] whitespace-nowrap",
          checked
            ? alternate ? "text-neutral-darkest" : "text-white"
            : alternate ? "text-white" : "text-neutral-darkest",
        )}
      >
        {label}
      </span>
    </button>
  );
}
