"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Figma has 3 checkbox variants:
// 1. Simple   — box + label inline
// 2. Card     — box with icon, title, description (370px card)
// 3. Chip     — pill-shaped toggle (px-4 py-2)

// ─── Simple ───────────────────────────────────────────────────────────────────
interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  alternate?: boolean;
  className?: string;
}

export function Checkbox({ label, checked = false, onChange, alternate = false, className }: CheckboxProps) {
  return (
    <label className={cn("inline-flex items-center gap-2 cursor-pointer select-none", className)}>
      <span
        role="checkbox"
        aria-checked={checked}
        onClick={() => onChange?.(!checked)}
        className={cn(
          // Figma: 18x18, rounded-[4px]
          "relative shrink-0 size-[18px] rounded-[4px] flex items-center justify-center transition-colors",
          checked
            ? alternate
              ? "bg-white"
              : "bg-neutral-darkest"
            : alternate
              ? "bg-white-10"
              : "bg-neutral-darkest-5",
        )}
      >
        {checked && (
          <svg
            viewBox="0 0 18 18"
            fill="none"
            className={cn("size-3", alternate ? "text-neutral-darkest" : "text-white")}
          >
            <path
              d="M4 9L7.5 12.5L14 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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
interface CheckboxCardProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  alternate?: boolean;
  className?: string;
}

export function CheckboxCard({
  title = "Checkbox",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  icon,
  checked = false,
  onChange,
  alternate = false,
  className,
}: CheckboxCardProps) {
  return (
    <div
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange?.(!checked)}
      className={cn(
        // Figma: w-[370px], p-6, border transparent
        "flex items-start gap-4 p-6 border border-transparent cursor-pointer select-none transition-colors",
        alternate ? "bg-white-10" : "bg-neutral-darkest-5",
        className,
      )}
    >
      {/* Icon area */}
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

      {/* Text */}
      <div
        className={cn(
          "flex-1 min-w-0 flex flex-col gap-1",
          alternate ? "text-white" : "text-neutral-darkest",
        )}
      >
        <p className="font-semibold text-medium-body leading-[1.5] truncate">{title}</p>
        <p className="font-normal text-regular leading-[1.5]">{description}</p>
      </div>

      {/* Checkbox indicator */}
      <span
        className={cn(
          "relative shrink-0 size-[18px] rounded-[4px] flex items-center justify-center",
          checked
            ? alternate ? "bg-white" : "bg-neutral-darkest"
            : alternate ? "bg-white-10" : "bg-neutral-darkest-5",
        )}
      >
        {checked && (
          <svg
            viewBox="0 0 18 18"
            fill="none"
            className={cn("size-3", alternate ? "text-neutral-darkest" : "text-white")}
          >
            <path
              d="M4 9L7.5 12.5L14 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
    </div>
  );
}

// ─── Chip ─────────────────────────────────────────────────────────────────────
interface CheckboxChipProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  alternate?: boolean;
  className?: string;
}

// Figma: px-4 py-2, rounded-[100px] pill, filled when selected
export function CheckboxChip({
  label = "Option one",
  checked = false,
  onChange,
  alternate = false,
  className,
}: CheckboxChipProps) {
  return (
    <button
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange?.(!checked)}
      className={cn(
        "flex items-center justify-center px-4 py-2 rounded-full border transition-colors",
        "font-sans font-normal text-regular leading-[1.5] cursor-pointer select-none whitespace-nowrap",
        checked
          ? alternate
            ? "bg-white border-white text-neutral-darkest"
            : "bg-neutral-darkest border-neutral-darkest text-white"
          : alternate
            ? "border-transparent text-white"
            : "bg-neutral-darkest-5 border-transparent text-neutral-darkest",
        className,
      )}
    >
      {label}
    </button>
  );
}
