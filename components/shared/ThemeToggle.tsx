'use client';

import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/src/theme/ThemeContext';
import { cn } from '@/lib/utils';

export const ThemeToggle: React.FC<{ label?: string; className?: string }> = ({ label, className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label || 'Toggle theme'}
      title={label || 'Toggle theme'}
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:text-primary-600 dark:hover:text-primary-400',
        className,
      )}
    >
      <Sun className="h-4 w-4 dark:hidden" />
      <Moon className="hidden h-4 w-4 dark:block" />
    </button>
  );
};
