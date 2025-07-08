'use server';

import { revalidatePath } from 'next/cache';
import * as settingsService from '@/services/settings';
import type { Settings } from '@/lib/types';

export async function updateSettingsAction(data: Settings) {
  try {
    await settingsService.updateSettings(data);
    revalidatePath('/dashboard/settings');
    revalidatePath('/about');
    revalidatePath('/');
    revalidatePath('/contact');
    return { success: true };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return { success: false, error: errorMessage };
  }
}
