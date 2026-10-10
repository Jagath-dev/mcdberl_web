import { SiteFooter, SiteHeader } from "../../components/site-chrome";
import ProjectsClient, { type ProjectsCard, type ProjectsSector } from "./projects-client";
import { sectorProjects, sectors } from "../../lib/projects-data";

const sectorList: ProjectsSector[] = sectors.map(({ slug, label, description }) => ({ slug, label, description }));
const projectCards: ProjectsCard[] = sectorProjects.map(({ title, location, image, slug, sectors, category }) => ({
  title,
  location,
  image,
  slug,
  sectors,
  category,
}));

export const metadata = {
  alternates: { canonical: "/projects/" },
  title: "Projects | McD BERL",
  description:
    "McD BERL showcases diverse projects across sectors like Advanced Manufacturing, Arts and Culture, Cities, and Commercial Property.",
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="projects-page">
        <ProjectsClient sectors={sectorList} sectorProjects={projectCards} />
      </main>
      <SiteFooter />
    </>
  );
}
