"use client";

import { cn } from "@/lib/utils";

// Figma: horizontal pill group, active item = filled bg, inactive = transparent
// Active: bg=foreground, font-medium; Inactive: font-regular, transparent
// Padding per item: px-4 py-2.5, rounded-full

interface FilterItem {
  label: string;
  value: string;
}

interface FiltersProps {
  items: FilterItem[];
  active?: string;
  onChange?: (value: string) => void;
  alternate?: boolean;
  className?: string;
}

export function Filters({ items, active, onChange, alternate = false, className }: FiltersProps) {
  return (
    <div className={cn("flex items-center", className)}>
      {items.map((item) => {
        const isActive = item.value === active;
        return (
          <button
            key={item.value}
            onClick={() => onChange?.(item.value)}
            className={cn(
              "flex items-center justify-center px-4 py-2.5 rounded-full transition-colors whitespace-nowrap",
              "font-sans text-regular leading-[1.5]",
              isActive
                ? alternate
                  ? "bg-white text-neutral-darkest font-medium"
                  : "bg-neutral-darkest text-white font-medium"
                : alternate
                  ? "text-white font-normal"
                  : "text-neutral-darkest font-normal",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
