"use client";

import { SelectHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

// Figma: rounded-[12px], px-3 py-2, gap-4 (default) / gap-2 (with left icon)
// Has chevron on right, optional icon on left

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  alternate?: boolean;
  iconLeft?: ReactNode;
}

export function Select({ alternate = false, iconLeft, className, children, ...props }: SelectProps) {
  return (
    <div
      className={cn(
        "flex items-center rounded-[12px] border border-transparent px-3 py-2 gap-2",
        alternate ? "bg-white-10 text-white" : "bg-neutral-darkest-5 text-neutral-darkest",
      )}
    >
      {iconLeft && (
        <span className="shrink-0 size-6 flex items-center justify-center">{iconLeft}</span>
      )}
      <select
        className={cn(
          "flex-1 min-w-0 bg-transparent outline-none appearance-none",
          "font-sans font-normal text-regular leading-[1.5] cursor-pointer",
          alternate ? "text-white" : "text-neutral-darkest",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      {/* Chevron */}
      <svg
        className={cn("shrink-0 size-6", alternate ? "text-white" : "text-neutral-darkest")}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
      </svg>
    </div>
  );
}
