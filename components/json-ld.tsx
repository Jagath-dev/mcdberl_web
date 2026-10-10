import { jsonLd } from "../lib/site";

/** Renders one or more schema.org objects as a JSON-LD script tag. */
export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(data)} />;
}
