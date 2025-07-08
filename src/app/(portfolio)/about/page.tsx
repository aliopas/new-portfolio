import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col items-center">
        <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg border-4 border-primary">
          <Image
            src="https://placehold.co/256x256.png"
            alt="Ali Alaa"
            layout="fill"
            objectFit="cover"
            data-ai-hint="professional portrait"
          />
        </div>
        <h1 className="font-headline text-4xl font-bold mt-6 text-center">Ali Alaa</h1>
        <p className="text-foreground/80 text-lg text-center">Full-Stack Developer</p>

        <Card className="max-w-3xl w-full mt-12">
          <CardHeader>
            <CardTitle className="font-headline text-3xl text-center">👨‍💻 About Me</CardTitle>
          </CardHeader>
          <CardContent className="text-base md:text-lg text-foreground/90 space-y-6">
            <p>
              I’m a creative and performance-focused Full Stack Developer who believes great products aren't just built — they’re crafted with vibe.
            </p>
            <p>
              I combine solid technical skills with a strong sense of design and user experience. Whether I'm building dynamic web apps, integrating AI-powered features, or managing complex backends, I follow the Vibe Coding approach — development that feels as good as it functions.
            </p>
            <p>
              From Node.js, Express, MySQL, and Firebase on the backend, to React, Next.js, Tailwind, and modern UI tools on the frontend, I deliver smart, scalable solutions with clean code and great energy.
            </p>
            <p>
              I also work with Firebase Studio and Cursor to streamline the dev process, build faster, and bring ideas to life with clarity and creativity.
            </p>

            <div className="pt-4">
              <h3 className="font-headline text-2xl font-semibold">🧠 I specialize in:</h3>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Responsive & smart web apps</li>
                <li>AI-enhanced features (chatbots, smart search, recommendations)</li>
                <li>Full-stack MVPs and dashboards</li>
                <li>Clean, animated, and intuitive user interfaces</li>
                <li>Fast, scalable, and vibe-driven code</li>
              </ul>
            </div>
            
            <p className="pt-6 font-semibold text-center">
              If you’re into clean code, great UX, and digital experiences that feel right — you’re in the right place. 🚀
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
