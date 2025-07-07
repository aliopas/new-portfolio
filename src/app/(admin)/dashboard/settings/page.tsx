"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { PageHeader } from "@/components/admin/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const settingsFormSchema = z.object({
  aboutParagraph1: z.string().min(10, "This field is required."),
  aboutParagraph2: z.string().min(10, "This field is required."),
  skills: z.string().min(2, "This field is required."),
})

// Mock data matching the about page
const currentSettings = {
  aboutParagraph1: "I am a passionate and results-driven Full-Stack Developer with a knack for building beautiful, functional, and scalable web applications. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life from concept to deployment.",
  aboutParagraph2: "My journey in web development started with a deep curiosity for how things work on the internet, which has evolved into a career where I continuously learn and adapt to new technologies. I thrive in collaborative environments and am always eager to take on new challenges.",
  skills: "React, Next.js, TypeScript, Node.js, GraphQL, PostgreSQL, MongoDB, Docker, Kubernetes, Tailwind CSS, Figma",
}

export default function SettingsPage() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof settingsFormSchema>>({
    resolver: zodResolver(settingsFormSchema),
    defaultValues: currentSettings,
  })

  function onSubmit(values: z.infer<typeof settingsFormSchema>) {
    console.log(values)
    toast({
      title: "Settings Saved",
      description: "Your 'About Me' information has been updated.",
    })
  }

  return (
    <>
      <PageHeader
        title="Settings"
        description="Update your personal information and skills."
      />
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
                      <Textarea rows={4} {...field} />
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
                      <Textarea rows={4} {...field} />
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
                      <Textarea rows={3} {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter your skills, separated by commas.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <button type="submit" className="btn-gradient">
                <span>Save Changes</span>
              </button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  )
}
