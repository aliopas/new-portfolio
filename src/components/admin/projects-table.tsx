"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { MoreHorizontal, GripVertical, Trash2, Edit, PlusCircle } from "lucide-react"
import { projects as initialProjects } from "@/lib/data"
import type { Project } from "@/lib/types"
import { ProjectForm } from "./project-form"
import { useToast } from "@/hooks/use-toast"
import { PageHeader } from "./page-header"
import { GlowingButton } from "@/components/public/glowing-button"

export function ProjectsTable() {
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const { toast } = useToast()

  const handleAddClick = () => {
    setEditingProject(null)
    setIsDialogOpen(true)
  }

  const handleEditClick = (project: Project) => {
    setEditingProject(project)
    setIsDialogOpen(true)
  }
  
  const handleDeleteClick = (projectId: string) => {
    setProjects(projects.filter(p => p.id !== projectId));
    toast({ title: "Project Deleted", description: "The project has been successfully deleted." });
  }

  const handleFormSubmit = (values: Omit<Project, 'id' | 'order' | 'aiHint'> & { tags: string[] }) => {
    if (editingProject) {
      const updatedProject = { ...editingProject, ...values, aiHint: editingProject.aiHint || 'project image' };
      setProjects(projects.map(p => (p.id === editingProject.id ? updatedProject : p)))
      toast({ title: "Project Updated", description: "The project has been successfully updated." });
    } else {
      const newProject: Project = {
        id: (projects.length + 1).toString(),
        order: projects.length + 1,
        aiHint: 'project image',
        ...values,
      }
      setProjects([...projects, newProject]);
      toast({ title: "Project Added", description: "A new project has been successfully added." });
    }
    setIsDialogOpen(false)
    setEditingProject(null)
  }

  return (
    <>
      <PageHeader title="Projects" description="Manage your portfolio projects.">
        <GlowingButton onClick={handleAddClick}>
          <PlusCircle />
          Add Project
        </GlowingButton>
      </PageHeader>
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]"></TableHead>
              <TableHead className="w-[120px]">Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead className="w-[50px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.sort((a,b) => a.order - b.order).map(project => (
              <TableRow key={project.id}>
                <TableCell className="cursor-grab text-center">
                  <GripVertical className="h-5 w-5 text-muted-foreground" />
                </TableCell>
                <TableCell>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={100}
                    height={60}
                    className="rounded-md object-cover"
                  />
                </TableCell>
                <TableCell className="font-medium">{project.title}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleEditClick(project)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive" onClick={() => handleDeleteClick(project.id)}>
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>{editingProject ? "Edit Project" : "Add New Project"}</DialogTitle>
          </DialogHeader>
          <ProjectForm
            project={editingProject}
            onSubmit={handleFormSubmit}
            onClose={() => setIsDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  )
}
