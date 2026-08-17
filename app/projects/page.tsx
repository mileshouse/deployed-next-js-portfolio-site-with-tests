import { getProjects } from "@/lib/content";

/** Lists all projects sourced from content/projects/*.mdx */
export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
      <ul className="mt-8 space-y-6">
        {projects.map((project) => (
          <li key={project.slug}>
            <a
              href={project.url ?? "#"}
              className="text-base font-medium hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {project.title}
            </a>
            <p className="mt-1 text-sm text-gray-600">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
