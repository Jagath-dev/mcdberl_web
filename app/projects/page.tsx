import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components/site-chrome";
import { projects } from "../../lib/site-data";

export const metadata = { title: "Projects | McD BERL", description: "Explore selected McD BERL projects across education, workplaces, mixed-use, industrial and civic environments." };

export default function ProjectsPage() {
  return <><SiteHeader /><main className="inner-page"><section className="inner-hero"><p className="eyebrow">Selected work</p><h1>Projects with<br />a point of view.</h1><p>Every project is a chance to leave the world better than we found it—through clear thinking, precise engineering and measurable performance.</p></section><section className="project-index page-shell"><div className="project-index-head"><p className="eyebrow">Portfolio</p><span>{projects.length} projects</span></div><div className="project-grid">{projects.map((project) => <Link className="project-tile" href={`/projects/${project.slug}/`} key={project.slug}><div className="project-tile-image"><Image src={`/assets/${project.image}`} alt={project.title} fill sizes="(max-width: 700px) 100vw, 50vw" /></div><div className="project-tile-meta"><div><h2>{project.title}</h2><p>{project.location}</p></div><span>↗</span></div></Link>)}</div></section></main><SiteFooter /></>;
}
