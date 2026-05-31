import { cn } from "@/lib/utils";

// Figma: Plus Jakarta Sans ExtraBold ~25px, h-[48px] w-[112px]
// Adapted to project font: Sora SemiBold (display), same sizing intent

interface CompanyLogoProps {
  alternate?: boolean;
  className?: string;
}

export function CompanyLogo({ alternate = false, className }: CompanyLogoProps) {
  return (
    <span
      className={cn(
        "font-display font-semibold text-[1.55rem] leading-none tracking-[-0.01em] whitespace-nowrap",
        alternate ? "text-white" : "text-neutral-darkest",
        className,
      )}
    >
      kara3d
    </span>
  );
}
