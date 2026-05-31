import { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Figma: rounded-full, px-[10px] py-[4px], Inter SemiBold 14px (text-small)
// Icon: 16x16, gap-2
// textOnly: just text, no background fill

interface TagProps {
  label?: string;
  icon?: ReactNode;
  iconPosition?: "leading" | "trailing" | "none";
  textOnly?: boolean;
  alternate?: boolean;
  className?: string;
}

export function Tag({
  label = "Category",
  icon,
  iconPosition = "none",
  textOnly = false,
  alternate = false,
  className,
}: TagProps) {
  const hasIcon = !!icon && iconPosition !== "none";

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-transparent",
        "font-semibold text-small leading-[1.5] whitespace-nowrap",
        !textOnly && hasIcon && "gap-2",
        !textOnly && "px-[10px] py-1",
        !textOnly
          ? alternate
            ? "bg-white-10 text-white"
            : "bg-neutral-darkest-5 text-neutral-darkest"
          : alternate
            ? "text-white"
            : "text-neutral-darkest",
        className,
      )}
    >
      {hasIcon && iconPosition === "leading" && (
        <span className="shrink-0 size-4 flex items-center justify-center">{icon}</span>
      )}
      <span>{label}</span>
      {hasIcon && iconPosition === "trailing" && (
        <span className="shrink-0 size-4 flex items-center justify-center">{icon}</span>
      )}
    </div>
  );
}
