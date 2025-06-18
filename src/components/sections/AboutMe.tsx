import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Card, CardContent } from "@/components/ui/card";

export function AboutMe() {
  return (
    <Section id="about" title="About Me" subtitle="A glimpse into my journey as a passionate web developer.">
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
          <Image
            src="/image/profile.jpeg"
            alt="Rajeel Siddiqui"
            width={256}
            height={256}
            className="border-2 border-gray-200 rounded-lg shadow-lg animate-in fade-in zoom-in-90 duration-500 ease-out object-cover"
            data-ai-hint="professional portrait"
          />
        </div>
        <div className="md:col-span-2">
          <Card className="bg-card/80 backdrop-blur-sm shadow-xl animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out delay-200">
            <CardContent className="p-6 md:p-8">
              <h3 className="font-headline text-2xl font-semibold mb-4 text-primary">Hello, I'm Rajeel Siddiqui!</h3>
              <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
                I am a dedicated Full-Stack Developer with a strong foundation in web technologies like HTML, CSS, JavaScript, React.js, and Django. My journey in tech began with a curiosity for building user-friendly interfaces, which has evolved into a passion for creating seamless, efficient, and innovative digital solutions.
              </p>
              <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
                With hands-on experience in front-end and back-end development, including Next.js, MySQL, MongoDB, and RESTful API creation, I thrive on transforming complex challenges into functional applications. My work at Genentech Solutions and Hakam Techsoul has honed my skills in building optimized, user-focused web experiences.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                When I'm not coding, you can find me playing cricket, gaming, or exploring new skills to stay ahead in the ever-evolving tech landscape. I’m also pursuing a Diploma in Web Development and an AI course with PIAIC to fuel my growth as a developer.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}