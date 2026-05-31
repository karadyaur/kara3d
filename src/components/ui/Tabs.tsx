"use client";

import { cn } from "@/lib/utils";

// Figma: container bg=foreground (dark), p-[4px], rounded-full
// Active tab: transparent bg, px-6 py-2.5, rounded-full, font-medium
// Inactive tab: transparent, font-regular

interface TabItem {
  label: string;
  value: string;
}

interface TabsProps {
  items: TabItem[];
  active?: string;
  onChange?: (value: string) => void;
  alternate?: boolean;
  className?: string;
}

export function Tabs({ items, active, onChange, alternate = false, className }: TabsProps) {
  return (
    <div
      className={cn(
        "inline-flex items-start p-1 rounded-full",
        alternate ? "bg-white" : "bg-neutral-darkest",
        className,
      )}
    >
      {items.map((item) => {
        const isActive = item.value === active;
        return (
          <button
            key={item.value}
            onClick={() => onChange?.(item.value)}
            className={cn(
              "flex items-center justify-center px-6 py-2.5 rounded-full transition-colors whitespace-nowrap",
              "font-sans text-regular leading-[1.5]",
              isActive
                ? alternate
                  ? "bg-neutral-darkest text-white font-medium"
                  : "bg-white text-neutral-darkest font-medium"
                : alternate
                  ? "text-neutral-darkest font-normal"
                  : "text-white font-normal",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
