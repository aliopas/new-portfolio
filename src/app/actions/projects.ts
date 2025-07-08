'use server';

import { revalidatePath } from 'next/cache';
import * as projectService from '@/services/projects';
import type { Project } from '@/lib/types';

export async function addProjectAction(data: Omit<Project, 'id'>) {
  try {
    await projectService.addProject(data);
    revalidatePath('/dashboard/projects');
    revalidatePath('/projects');
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return { success: false, error: errorMessage };
  }
}

export async function updateProjectAction(id: string, data: Partial<Project>) {
  try {
    await projectService.updateProject(id, data);
    revalidatePath('/dashboard/projects');
    revalidatePath('/projects');
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return { success: false, error: errorMessage };
  }
}

export async function deleteProjectAction(id: string) {
  try {
    await projectService.deleteProject(id);
    revalidatePath('/dashboard/projects');
    revalidatePath('/projects');
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return { success: false, error: errorMessage };
  }
}
