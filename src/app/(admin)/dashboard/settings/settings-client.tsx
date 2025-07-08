"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useTransition } from "react"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GlowingButton } from "@/components/public/glowing-button"
import type { Settings } from "@/lib/types"
import { updateSettingsAction } from "@/app/actions/settings"

const settingsFormSchema = z.object({
  aboutParagraph1: z.string().min(10, "This field is required."),
  aboutParagraph2: z.string().min(10, "This field is required."),
  skills: z.string().min(2, "This field is required."),
})

export function SettingsClient({ initialSettings }: { initialSettings: Settings }) {
  const { toast } = useToast()
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof settingsFormSchema>>({
    resolver: zodResolver(settingsFormSchema),
    defaultValues: initialSettings,
  })

  function onSubmit(values: z.infer<typeof settingsFormSchema>) {
    startTransition(async () => {
      const result = await updateSettingsAction(values);
      if (result.success) {
        toast({
          title: "Settings Saved",
          description: "Your 'About Me' information has been updated.",
        })
      } else {
        toast({
          title: "Error Saving Settings",
          description: result.error,
          variant: "destructive",
        })
      }
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>About Me Section</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="aboutParagraph1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>About Me - Paragraph 1</FormLabel>
                  <FormControl>
                    <Textarea rows={6} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="aboutParagraph2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>About Me - Paragraph 2</FormLabel>
                  <FormControl>
                    <Textarea rows={6} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>My Skills</FormLabel>
                  <FormControl>
                    <Textarea rows={4} {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter your skills, separated by commas.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <GlowingButton type="submit" disabled={isPending}>
              {isPending ? "Saving..." : "Save Changes"}
            </GlowingButton>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
