import { cn } from "@/lib/utils";

// Figma: p-[12px], rounded-full, bg = foreground color of current scheme
// Default: bg-neutral-darkest, border slightly lighter

interface SliderArrowProps {
  direction?: "left" | "right";
  onClick?: () => void;
  alternate?: boolean;
  className?: string;
}

export function SliderArrow({ direction = "left", onClick, alternate = false, className }: SliderArrowProps) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Previous" : "Next"}
      className={cn(
        "flex items-center justify-center p-3 rounded-full border transition-opacity",
        "hover:opacity-80 active:opacity-65 disabled:opacity-40",
        alternate
          ? "bg-white border-neutral-darkest-15 text-neutral-darkest"
          : "bg-neutral-darkest border-neutral-darker text-white",
        className,
      )}
    >
      {direction === "left" ? (
        <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>
      ) : (
        <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
        </svg>
      )}
    </button>
  );
}
