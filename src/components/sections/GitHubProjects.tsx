
import { Section } from "@/components/layout/Section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Star, GitFork as GitForkIcon, ExternalLink } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language?: string;
  stargazers_count?: number;
  forks_count?: number;
  image_url?: string;
  live_demo_url?: string;
}

// Mock data for GitHub projects
const mockProjects: Project[] = [
  {
    id: 1,
    name: "Astra Portfolio (This Site!)",
    description: "My personal portfolio website built with Next.js, Tailwind CSS, and ShadCN UI. Showcasing my skills and projects.",
    html_url: "https://github.com/yourusername/astra-portfolio",
    language: "TypeScript",
    stargazers_count: 15,
    forks_count: 3,
    image_url: "https://placehold.co/600x400.png",
    live_demo_url: "#", // Link to current site
  },
  {
    id: 2,
    name: "E-commerce Platform",
    description: "A full-stack e-commerce application featuring product listings, shopping cart, user authentication, and payment integration.",
    html_url: "https://github.com/yourusername/ecommerce-platform",
    language: "JavaScript",
    stargazers_count: 42,
    forks_count: 12,
    image_url: "https://placehold.co/600x400.png",
    live_demo_url: "#",
  },
  {
    id: 3,
    name: "Task Management App",
    description: "A Kanban-style task management tool with drag-and-drop functionality, real-time collaboration, and deadline tracking.",
    html_url: "https://github.com/yourusername/task-manager",
    language: "Python",
    stargazers_count: 28,
    forks_count: 7,
    image_url: "https://placehold.co/600x400.png",
  },
   {
    id: 4,
    name: "AI Powered Blog Generator",
    description: "A Next.js application that uses AI to generate blog post ideas and content, with a rich text editor and SEO optimization tools.",
    html_url: "https://github.com/yourusername/ai-blog-generator",
    language: "TypeScript",
    stargazers_count: 55,
    forks_count: 10,
    image_url: "https://placehold.co/600x400.png",
    live_demo_url: "#",
  },
];

export function GitHubProjects() {
  // In a real app, you would fetch this data from the GitHub API
  // For example, using useEffect and useState if this were a client component,
  // or directly in a Server Component.
  const projects = mockProjects;

  return (
    <Section id="projects" title="My Projects" subtitle="A selection of projects I've worked on. More on my GitHub!">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <Card 
            key={project.id} 
            className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out bg-card/80 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {project.image_url && (
              <div className="aspect-video overflow-hidden">
                <Image 
                  src={project.image_url} 
                  alt={project.name} 
                  width={600} 
                  height={400} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint="abstract code"
                />
              </div>
            )}
            <CardHeader className="p-6">
              <CardTitle className="font-headline text-2xl text-primary">{project.name}</CardTitle>
              <CardDescription className="text-foreground/80 mt-2 h-20 overflow-y-auto">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 flex-grow">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                {project.language && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/20 text-accent-foreground">
                    {project.language}
                  </span>
                )}
                {project.stargazers_count !== undefined && (
                  <span className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" /> {project.stargazers_count}
                  </span>
                )}
                {project.forks_count !== undefined && (
                  <span className="flex items-center">
                    <GitForkIcon className="h-4 w-4 mr-1" /> {project.forks_count}
                  </span>
                )}
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 border-t border-border/50 mt-auto">
              <div className="flex w-full justify-between items-center">
                <Button variant="outline" asChild className="transition-all hover:bg-primary hover:text-primary-foreground">
                  <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                  </a>
                </Button>
                {project.live_demo_url && (
                   <Button variant="default" asChild className="transition-all">
                    <a href={project.live_demo_url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button size="lg" asChild className="transition-all duration-300 hover:scale-105 animate-in fade-in zoom-in-95 duration-500 ease-out delay-300">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
             <Github className="mr-2 h-5 w-5" /> Visit My GitHub
          </a>
        </Button>
      </div>
    </Section>
  );
}
