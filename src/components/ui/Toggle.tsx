"use client";

import { cn } from "@/lib/utils";

// Figma: track w-[40px], p-[4px], rounded-[500px], thumb size-[16px] rounded-full
// Unselected light: bg-neutral-darkest-15, thumb bg-white, items-start
// Selected light:   bg-neutral-darkest, thumb bg-white, items-end
// Unselected dark:  bg-white-10, thumb bg-white, items-start
// Selected dark:    bg-white, thumb bg-neutral-darkest, items-end

interface ToggleSwitchProps {
  checked: boolean;
  alternate?: boolean;
}

function ToggleSwitch({ checked, alternate = false }: ToggleSwitchProps) {
  return (
    <div
      className={cn(
        // Figma: w-[40px], p-[4px], flex-col, justify-center, rounded-[500px]
        "w-10 flex flex-col justify-center p-1 rounded-full shrink-0 transition-colors",
        checked
          ? alternate ? "bg-white items-end" : "bg-neutral-darkest items-end"
          : alternate ? "bg-white-10 items-start" : "bg-neutral-darkest-15 items-start",
      )}
    >
      <div
        className={cn(
          "size-4 rounded-full transition-colors",
          checked && alternate ? "bg-neutral-darkest" : "bg-white",
        )}
      />
    </div>
  );
}

// ─── Simple toggle ────────────────────────────────────────────────────────────
interface ToggleProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  alternate?: boolean;
  className?: string;
}

export function Toggle({ label, checked = false, onChange, alternate = false, className }: ToggleProps) {
  return (
    <label
      className={cn("inline-flex items-center gap-2 cursor-pointer select-none", className)}
      onClick={() => onChange?.(!checked)}
    >
      <ToggleSwitch checked={checked} alternate={alternate} />
      {label && (
        <span
          className={cn(
            "font-sans font-normal text-regular leading-[1.5] whitespace-nowrap",
            alternate ? "text-white" : "text-neutral-darkest",
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
}

// ─── Toggle with description ───────────────────────────────────────────────────
// Figma: w-[480px], gap-[24px], text block on left, switch on right
interface ToggleWithDescriptionProps {
  title?: string;
  description?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  alternate?: boolean;
  className?: string;
}

export function ToggleWithDescription({
  title = "Toggle checkbox",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.",
  checked = false,
  onChange,
  alternate = false,
  className,
}: ToggleWithDescriptionProps) {
  return (
    <div
      className={cn("flex items-start gap-6 cursor-pointer select-none", className)}
      onClick={() => onChange?.(!checked)}
    >
      <div
        className={cn(
          "flex-1 min-w-0 flex flex-col leading-[1.5]",
          alternate ? "text-white" : "text-neutral-darkest",
        )}
      >
        <p className="font-semibold text-regular truncate">{title}</p>
        <p className="font-normal text-regular">{description}</p>
      </div>
      <ToggleSwitch checked={checked} alternate={alternate} />
    </div>
  );
}
