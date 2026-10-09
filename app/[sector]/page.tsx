import SectorPage, { sectorMetadata } from "../../components/sector-page";
import { sectors } from "../../lib/projects-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return sectors.map(({ slug }) => ({ sector: slug }));
}

export function generateMetadata({ params }: { params: { sector: string } }) {
  return sectorMetadata(params.sector);
}

export default function Page({ params }: { params: { sector: string } }) {
  return <SectorPage slug={params.sector} />;
}
