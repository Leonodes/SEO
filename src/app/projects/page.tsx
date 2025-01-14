import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/misc/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description:
    "",
};

export default function ProjectsPage() {
  return (
    <div>
      <div className="max-w-3xl">
        <h1 className="text-4xl mt-6 font-bold tracking-tight text-zinc-800 sm:text-5xl">
          My Projects
        </h1>

        <p className="mt-6 text-base text-zinc-600 font-light">
          I’ve worked on tons of little projects over the years but these are
          the ones that I’m most proud of. Many of them are open-source, so if
          you see something that piques your interest, check out the code and
          contribute if you have ideas for how it can be improved.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-8">
        {projects.map((project, projectIndex) => (
          <ProjectCard
            key={projectIndex}
            href={project.href}
            name={project.name}
            description={project.description}
            icon={project.icon}
          />
        ))}
      </div>
    </div>
  );
}
