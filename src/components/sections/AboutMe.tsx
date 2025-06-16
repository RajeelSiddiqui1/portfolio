
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AboutMe() {
  return (
    <Section id="about" title="About Me" subtitle="A little bit about my journey and passion for technology.">
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
          <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-primary shadow-lg animate-in fade-in zoom-in-90 duration-500 ease-out">
            <AvatarImage src="https://placehold.co/256x256.png" alt="Astra" data-ai-hint="professional portrait" />
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
        </div>
        <div className="md:col-span-2">
          <Card className="bg-card/80 backdrop-blur-sm shadow-xl animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out delay-200">
            <CardContent className="p-6 md:p-8">
              <h3 className="font-headline text-2xl font-semibold mb-4 text-primary">Hello, I&apos;m Astra!</h3>
              <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
                I am a passionate and results-oriented Web Developer with a strong foundation in modern web technologies. My journey in tech started with a fascination for how websites are built, and it has grown into a full-fledged passion for creating elegant, efficient, and user-friendly digital experiences.
              </p>
              <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
                With expertise in front-end and back-end development, I enjoy tackling complex challenges and transforming innovative ideas into reality. I am a lifelong learner, constantly exploring new tools and techniques to stay at the forefront of web development.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                When I&apos;m not coding, you can find me exploring new hiking trails, reading sci-fi novels, or contributing to open-source projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
