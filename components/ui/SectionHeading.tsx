interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subhead?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Reusable eyebrow + h2 + optional subhead heading block used at the top
 * of nearly every homepage/section component.
 */
export default function SectionHeading({
  eyebrow,
  heading,
  subhead,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`.trim()}>
      {eyebrow ? <p className="eyebrow-vm mb-3">{eyebrow}</p> : null}
      <h2 className="text-3xl sm:text-4xl leading-tight">{heading}</h2>
      {subhead ? <p className="mt-4 text-base sm:text-lg text-charcoal-400">{subhead}</p> : null}
    </div>
  );
}
