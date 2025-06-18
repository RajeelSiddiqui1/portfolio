
import { Section } from "@/components/layout/Section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, Award, CalendarDays } from "lucide-react";

interface EducationItem {
  type: "education" | "certification";
  title: string;
  institution: string;
  date: string;
  description?: string;
}

const educationItems: EducationItem[] = [
  {
    type: "education",
    title: "Diploma in Web Development",
    institution: "Aptech",
    date: "2024 - Present",
    description: "Currently pursuing a comprehensive program focused on modern web development technologies, including HTML, CSS, JavaScript, and full-stack frameworks.",
  },
  {
    type: "education",
    title: "Agentic (Artificial Intelligence) Course",
    institution: "PIAIC (Presidential Initiative for Artificial Intelligence and Computing)",
    date: "2024 - Present",
    description: "Enrolled in a 6-quarter program, with 1 quarter completed and currently in the second quarter, learning AI concepts and practical applications.",
  },
  {
    type: "education",
    title: "Intermediate in Computer Science (ICS)",
    institution: "Board of Intermediate Education, Karachi",
    date: "2023 - 2025",
    description: "Completed the second year of Intermediate studies with a focus on computer science fundamentals.",
  },
  {
    type: "education",
    title: "Matriculation",
    institution: "Alkamran Public School",
    date: "2021 - 2022",
    description: "Completed secondary education with a strong academic foundation, preparing for further studies in technology.",
  },
  {
    type: "education",
    title: "Hifz-ul-Quran",
    institution: "Local Islamic Institute",
    date: "Completed 2021",
    description: "Memorized the Quran, demonstrating discipline and dedication to learning.",
  },
];
export function Education() {
  return (
    <Section id="education" title="Education & Certifications" subtitle="My academic background and professional qualifications.">
      <div className="space-y-8">
        {educationItems.map((item, index) => (
          <Card 
            key={index} 
            className="overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out bg-card/80 backdrop-blur-sm animate-in fade-in slide-in-from-left-8 duration-700 ease-out"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="flex flex-row items-start gap-4 p-6 bg-muted/30">
              <div className="bg-primary text-primary-foreground p-3 rounded-full">
                {item.type === "education" ? <GraduationCap className="h-6 w-6" /> : <Award className="h-6 w-6" />}
              </div>
              <div>
                <CardTitle className="font-headline text-xl text-primary">{item.title}</CardTitle>
                <CardDescription className="text-md text-foreground/80">{item.institution}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <CalendarDays className="h-4 w-4 mr-2" />
                <span>{item.date}</span>
              </div>
              {item.description && <p className="text-foreground/90 leading-relaxed">{item.description}</p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
