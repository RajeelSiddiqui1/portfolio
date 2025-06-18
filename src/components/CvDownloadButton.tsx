
"use client";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Download } from "lucide-react";

export function CvDownloadButton(props: ButtonProps) {
  return (
    <Button asChild {...props}>
      <a href="/RajeelSiddiqui.pdf" download="Astra_Portfolio_CV.pdf">
        <Download className="mr-2 h-4 w-4" />
        Download CV
      </a>
    </Button>
  );
}
