'use server';

import { revalidatePath } from 'next/cache';
import * as messageService from '@/services/messages';
import { z } from 'zod';

const AddMessageSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message is too short"),
});

export async function addMessageAction(values: z.infer<typeof AddMessageSchema>) {
  const validation = AddMessageSchema.safeParse(values);
  if (!validation.success) {
    return { success: false, error: "Invalid data provided." };
  }

  try {
    await messageService.addMessage(validation.data);
    revalidatePath('/dashboard/messages');
    revalidatePath('/dashboard');
    return { success: true };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return { success: false, error: errorMessage };
  }
}

export async function markMessageAsReadAction(id: string) {
  try {
    await messageService.updateMessage(id, { read: true });
    revalidatePath('/dashboard/messages');
    revalidatePath('/dashboard');
    return { success: true };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return { success: false, error: errorMessage };
  }
}

export async function deleteMessageAction(id: string) {
  try {
    await messageService.deleteMessage(id);
    revalidatePath('/dashboard/messages');
    revalidatePath('/dashboard');
    return { success: true };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return { success: false, error: errorMessage };
  }
}
