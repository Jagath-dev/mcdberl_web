import SectorPage, { sectorMetadata } from "../../components/sector-page";
import { sectors } from "../../lib/projects-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return sectors.map(({ slug }) => ({ sector: slug }));
}

type Props = { params: Promise<{ sector: string }> };

export async function generateMetadata({ params }: Props) {
  const { sector } = await params;
  return sectorMetadata(sector);
}

export default async function Page({ params }: Props) {
  const { sector } = await params;
  return <SectorPage slug={sector} />;
}
