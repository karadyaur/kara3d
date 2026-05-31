"use client";

import { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

// Figma: rounded-[12px], p-3, h-[180px], bg-neutral-darkest-5 / bg-white-10

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  alternate?: boolean;
}

export function Textarea({ alternate = false, className, placeholder, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "w-full h-[180px] rounded-[12px] border border-transparent p-3",
        "font-sans font-normal text-regular leading-[1.5] resize-y outline-none",
        alternate
          ? "bg-white-10 text-white placeholder:text-white-60"
          : "bg-neutral-darkest-5 text-neutral-darkest placeholder:text-neutral-darkest-60",
        className,
      )}
      placeholder={placeholder ?? "Type your message..."}
      {...props}
    />
  );
}
