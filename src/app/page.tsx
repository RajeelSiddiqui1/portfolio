
import { Navbar } from "@/components/layout/Navbar";
import { AboutMe } from "@/components/sections/AboutMe";
import { SkillsShowcase } from "@/components/sections/SkillsShowcase";
import { Education } from "@/components/sections/Education";
import { GitHubProjects } from "@/components/sections/GitHubProjects";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AboutMe />
        <SkillsShowcase />
        <Education />
        <GitHubProjects />
      </main>
      <Footer />
    </div>
  );
}
