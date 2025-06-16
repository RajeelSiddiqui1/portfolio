
"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || theme === undefined) {
    // Render a placeholder or null until theme is determined client-side
    return <div style={{ width: '2.5rem', height: '2.5rem' }} />; // Same size as button
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      className="rounded-full text-foreground hover:bg-accent/20 focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0"
    >
      {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </Button>
  );
}
