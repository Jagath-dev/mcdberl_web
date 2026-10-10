import { readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { ogImageSources } from "../../../lib/og-images";

// Built once at build time: LinkedIn, WhatsApp and others want a JPEG around 1200x630,
// while the site's own images are large WebP/AVIF files.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(ogImageSources).map((name) => ({ image: `${name}.jpg` }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ image: string }> }) {
  const { image } = await params;
  const source = ogImageSources[image.replace(/\.jpg$/, "")];
  if (!source) return new Response("Not found", { status: 404 });

  const input = await readFile(path.join(process.cwd(), "public", source));
  const jpeg = await sharp(input).resize(1200, 630, { fit: "cover", position: "attention" }).jpeg({ quality: 80, mozjpeg: true }).toBuffer();

  return new Response(new Uint8Array(jpeg), {
    headers: { "Content-Type": "image/jpeg", "Cache-Control": "public, max-age=604800, stale-while-revalidate=2592000" },
  });
}
