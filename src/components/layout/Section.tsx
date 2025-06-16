
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export function Section({ children, title, subtitle, className, id, ...props }: SectionProps) {
  return (
    <section id={id} className={cn('relative pt-20', className)} {...props}> {/* Added pt-20 for fixed navbar */}
      <Container>
        {title && (
          <div className="mb-12 text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary animate-in fade-in slide-in-from-top-5 duration-500 ease-out">
              {title}
            </h2>
            {subtitle && (
               <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto animate-in fade-in slide-in-from-top-5 duration-500 ease-out delay-100">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
