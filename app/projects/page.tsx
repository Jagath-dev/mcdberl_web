import { SiteFooter, SiteHeader } from "../../components/site-chrome";
import ProjectsClient from "./projects-client";

export const metadata = {
  title: "Projects | McD BERL",
  description:
    "McD BERL showcases diverse projects across sectors like Advanced Manufacturing, Arts and Culture, Cities, and Commercial Property.",
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="projects-page">
        <ProjectsClient />
      </main>
      <SiteFooter />
    </>
  );
}
