import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components/site-chrome";
import ProjectsClient, { type ProjectsCard, type ProjectsSector } from "./projects-client";
import { sectorProjects, sectors } from "../../lib/projects-data";
import { JsonLd } from "../../components/json-ld";
import { breadcrumbJsonLd } from "../../lib/site";
import { pageMetadata } from "../../lib/seo";
import { ogImage } from "../../lib/og-images";

const sectorList: ProjectsSector[] = sectors.map(({ slug, label, description }) => ({ slug, label, description }));
const projectCards: ProjectsCard[] = sectorProjects.map(({ title, location, image, slug, sectors, category }) => ({
  title,
  location,
  image,
  slug,
  sectors,
  category,
}));

export const metadata: Metadata = pageMetadata({
  title: "Sustainable Building Projects | McD BERL",
  description: "Explore McD BERL’s sustainable building projects across education, healthcare, commercial property, manufacturing, cities, water and more.",
  path: "/projects/",
  image: ogImage("projects"),
  imageAlt: "McD BERL projects",
});

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="projects-page">
        <ProjectsClient sectors={sectorList} sectorProjects={projectCards} />
      </main>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects/" }])} />
      <SiteFooter />
    </>
  );
}
