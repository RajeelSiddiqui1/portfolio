
import { Section } from "@/components/layout/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Palette, Wind, GitFork, Server, Layers, Globe, MonitorSmartphone, DraftingCompass, Database } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  icon: LucideIcon;
  level?: string; // e.g., "Advanced", "Intermediate"
}

const skills: Skill[] = [
  
  { name: "HTML5 & CSS3", icon: Palette, level: "Advanced" },
  { name: "JavaScript (ES6+)", icon: Code2, level: "Advanced" },
  { name: "React.js", icon: Layers, level: "Advanced" },
  { name: "Next.js", icon: Layers, level: "Intermediate" },
  { name: "Bootstrap", icon: Palette, level: "Advanced" },
  { name: "Tailwind CSS", icon: Wind, level: "Advanced" },
  { name: "Django", icon: Server, level: "Intermediate" },
  { name: "Node.js & Express", icon: Server, level: "Intermediate" },
  { name: "MySQL", icon: Database, level: "Intermediate" },
  { name: "MongoDB", icon: Database, level: "Intermediate" },
  { name: "Git & GitHub", icon: GitFork, level: "Advanced" },
  { name: "Python", icon: Code2, level: "Intermediate" },
  { name: "RESTful APIs", icon: Globe, level: "Intermediate" },
  { name: "UI/UX Design", icon: DraftingCompass, level: "Intermediate" }

];

export function SkillsShowcase() {
  return (
    <Section id="skills" title="My Skills" subtitle="A glimpse into my technical toolkit and expertise.">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <Card 
            key={skill.name} 
            className="text-center hover:shadow-xl transition-shadow duration-300 ease-in-out group bg-card/80 backdrop-blur-sm animate-in fade-in zoom-in-95 duration-500 ease-out"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <CardHeader className="p-4 pb-2">
              <skill.icon className="mx-auto h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <CardTitle className="text-sm font-medium font-body group-hover:text-primary transition-colors">{skill.name}</CardTitle>
              {skill.level && <p className="text-xs text-muted-foreground mt-1">{skill.level}</p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
