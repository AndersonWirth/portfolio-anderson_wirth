import { Project } from "@/app/types/project";
import Link from "next/link";
import { ProjectCard } from "./project-card";

type ProjectsLisProps = {
    projects: Project[];
}

export const ProjectsList = ({ projects }: ProjectsLisProps) => {
    return (
        <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
            {projects.map(project => (
                <Link key={project.title} href={`/projects/${project.slug}`}>
                    <ProjectCard project={project} />
                </Link>
            ))}

        </section>
    )
}