interface ImagePlaceholderProps {
  alt: string;
  aspect?: "square" | "video" | "portrait" | "wide";
  className?: string;
}

const ASPECT_CLASSES: Record<NonNullable<ImagePlaceholderProps["aspect"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/7]",
};

/**
 * Stand-in for real photography. Renders a styled solid-color block in
 * brand navy so layouts read correctly before real images are dropped
 * in. `alt` is not rendered visually (there is no <img>), but it is
 * exposed to assistive tech via aria-label plus a visually-hidden span,
 * so screen reader users still get a description of what will be there.
 *
 * TODO(phase 2): swap this component out for next/image + real
 * photography/graphics once assets exist. Callers should keep passing
 * the same `alt` prop so the swap is a drop-in change.
 */
export default function ImagePlaceholder({ alt, aspect = "video", className = "" }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex items-center justify-center overflow-hidden rounded-vm bg-navy-100 ${ASPECT_CLASSES[aspect]} ${className}`.trim()}
    >
      <span className="sr-only">{alt}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-8 w-8 text-navy-300"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5-9 9" />
      </svg>
    </div>
  );
}
