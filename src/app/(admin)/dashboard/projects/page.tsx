import { ProjectsTable } from "@/components/admin/projects-table";
import { getProjects } from "@/services/projects";

export default async function ProjectsPage() {
    const projects = await getProjects();
    return (
        <ProjectsTable initialProjects={projects} />
    )
}
