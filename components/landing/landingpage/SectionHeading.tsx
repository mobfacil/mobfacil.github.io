import React from 'react';
import { cn } from '@/lib/utils';

export const SectionHeading: React.FC<{
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}> = ({ eyebrow, title, description, align = 'center', className }) => (
  <div className={cn('mb-10 max-w-2xl', align === 'center' ? 'mx-auto text-center' : 'text-left', className)}>
    {eyebrow && (
      <span className="mb-2 block text-sm font-semibold uppercase tracking-wide text-primary-500">
        {eyebrow}
      </span>
    )}
    <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-muted-foreground">{description}</p>}
  </div>
);
