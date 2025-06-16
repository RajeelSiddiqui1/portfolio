
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
    title: "Master of Science in Computer Science",
    institution: "University of Advanced Technology",
    date: "2020 - 2022",
    description: "Specialized in Web Development and Software Engineering. Thesis on scalable frontend architectures.",
  },
  {
    type: "education",
    title: "Bachelor of Science in Information Technology",
    institution: "Tech State University",
    date: "2016 - 2020",
    description: "Graduated with honors. Focus on software development fundamentals and database management.",
  },
  {
    type: "certification",
    title: "Certified Next.js Developer",
    institution: "Vercel Academy",
    date: "Issued Jan 2023",
    description: "Completed comprehensive training and examination on Next.js development practices.",
  },
  {
    type: "certification",
    title: "Professional Scrum Master™ I (PSM I)",
    institution: "Scrum.org",
    date: "Issued Mar 2022",
    description: "Demonstrated a fundamental level of Scrum mastery.",
  },
];

export function Education() {
  return (
    <Section id="education" title="Education & Certifications" subtitle="My academic background and professional qualifications.">
      <div className="space-y-8">
        {educationItems.map((item, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out bg-card/80 backdrop-blur-sm">
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
