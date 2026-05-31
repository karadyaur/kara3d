"use client";

import { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

// Figma: rounded-[12px], px-3 py-2, bg-neutral-darkest-5 (light) / bg-white-10 (dark)
// Icon variants add h-12 (48px) and gap-3; default is h-10 (40px)

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  alternate?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  prefix?: ReactNode; // e.g. "http://" or currency dropdown
}

export function Input({
  alternate = false,
  iconLeft,
  iconRight,
  prefix,
  className,
  placeholder,
  ...props
}: InputProps) {
  const hasIcon = !!(iconLeft || iconRight);

  return (
    <div
      className={cn(
        "flex items-center rounded-[12px] border border-transparent text-regular font-sans",
        alternate ? "bg-white-10 text-white" : "bg-neutral-darkest-5 text-neutral-darkest",
        hasIcon ? "h-12 gap-2 px-3" : "px-3 py-2",
      )}
    >
      {prefix && (
        <>
          <div
            className={cn(
              "shrink-0 flex items-center text-regular font-normal whitespace-nowrap",
              alternate ? "text-white" : "text-neutral-darkest",
            )}
          >
            {prefix}
          </div>
          <div
            className={cn(
              "w-px self-stretch my-2",
              alternate ? "bg-white-20" : "bg-neutral-darkest-15",
            )}
          />
        </>
      )}
      {iconLeft && (
        <span className="shrink-0 size-6 flex items-center justify-center">{iconLeft}</span>
      )}
      <input
        className={cn(
          "flex-1 min-w-0 bg-transparent outline-none font-normal text-regular leading-[1.5]",
          alternate
            ? "text-white placeholder:text-white-60"
            : "text-neutral-darkest placeholder:text-neutral-darkest-60",
          className,
        )}
        placeholder={placeholder ?? "Placeholder"}
        {...props}
      />
      {iconRight && (
        <span className="shrink-0 size-6 flex items-center justify-center">{iconRight}</span>
      )}
    </div>
  );
}
