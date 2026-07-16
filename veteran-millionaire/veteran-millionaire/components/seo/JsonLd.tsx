interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Renders a single JSON-LD <script> tag for structured data / SEO.
 * Pass any schema.org-shaped plain object; this component only handles
 * serialization, so callers stay in control of the schema shape.
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    // eslint-disable-next-line react/no-danger
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
