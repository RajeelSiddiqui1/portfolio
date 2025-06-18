
import { Container } from "./Container";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground py-8 border-t">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Rajeel Portfolio. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="https://github.com/RajeelSiddiqui1" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/in/rajeel-siddiqui-60532529b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            
          </div>
        </div>
      </Container>
    </footer>
  );
}
