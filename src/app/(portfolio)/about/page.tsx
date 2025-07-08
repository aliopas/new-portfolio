import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSettings } from "@/services/settings";

export default async function AboutPage() {
  const settings = await getSettings();
  const skillsList = settings.skills.split(',').map(skill => skill.trim());

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col items-center">
        <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg border-4 border-primary">
          <Image
            src="https://placehold.co/256x256.png"
            alt={settings.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint="professional portrait"
          />
        </div>
        <h1 className="font-headline text-4xl font-bold mt-6 text-center">{settings.name}</h1>
        <p className="text-foreground/80 text-lg text-center">{settings.jobTitle}</p>

        <Card className="max-w-3xl w-full mt-12">
          <CardHeader>
            <CardTitle className="font-headline text-3xl text-center">👨‍💻 About Me</CardTitle>
          </CardHeader>
          <CardContent className="text-base md:text-lg text-foreground/90 space-y-6">
            <p>
              {settings.aboutParagraph1}
            </p>
            <p>
              {settings.aboutParagraph2}
            </p>

            <div className="pt-4">
              <h3 className="font-headline text-2xl font-semibold">🧠 My Skills:</h3>
              <ul className="list-disc list-inside space-y-2 mt-4">
                {skillsList.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
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
