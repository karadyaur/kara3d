import { cn } from "@/lib/utils";

// Figma: h-[56px] w-[140px], two logo variants with icon + name
// Image assets replaced with inline SVG to avoid 7-day expiry

interface PlaceholderLogoProps {
  logo?: "1" | "2";
  alternate?: boolean;
  className?: string;
}

function CubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 1.5 2 5.9v8.2l8 4.4 8-4.4V5.9L10 1.5zm0 2.3 5.4 3-5.4 3-5.4-3 5.4-3zM3.5 9.2l5.8 3.2v5.1L3.5 14.3V9.2zm7.2 8.3v-5.1l5.8-3.2v5.1l-5.8 3.2z" />
    </svg>
  );
}

function FlowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M2 4h2.4l2.3 8.6 2.1-6.1h2.4l2.1 6.1L15.6 4H18l-3.3 12h-2.4l-2.3-6.6-2.3 6.6H5.3L2 4z" />
    </svg>
  );
}

export function PlaceholderLogo({ logo = "1", alternate = false, className }: PlaceholderLogoProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 h-14",
        alternate ? "text-white" : "text-neutral-darkest",
        className,
      )}
    >
      {logo === "1" ? (
        <>
          <CubeIcon className="size-5 shrink-0" />
          <span className="font-sans font-semibold text-regular leading-none whitespace-nowrap">
            Relume
          </span>
        </>
      ) : (
        <>
          <FlowIcon className="size-5 shrink-0" />
          <span className="font-sans font-semibold text-regular leading-none whitespace-nowrap">
            Webflow
          </span>
        </>
      )}
    </div>
  );
}
