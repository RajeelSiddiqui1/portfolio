
"use client";

import { useEffect } from 'react';
import { useTheme } from '@/hooks/use-theme';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize the theme hook to apply the theme on mount
  useTheme(); 

  return <>{children}</>;
}
