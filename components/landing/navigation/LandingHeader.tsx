'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, OrbitIcon } from 'lucide-react';
import { Button } from '@/components/shared/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/shared/ui/sheet';
import { LandingFooterLink } from '@/components/landing/footer/LandingFooterLink';
import clsx from 'clsx';

import logo from '@/src/images/logo_mobfacil.svg';
import logoWhite from '@/src/images/logo_mobfacil_branco.svg';

const LandingHeaderLogo = ({ className }: { className?: string }) => (
  <div className={clsx('relative flex items-center overflow-hidden', className)}>
    <img src={logo.src} alt="MobFácil" className="h-full w-full object-contain dark:hidden" />
    <img
      src={logoWhite.src}
      alt="MobFácil"
      className="hidden h-full w-full object-contain dark:block"
    />
  </div>
);

/**
 * A component that renders the navigation bar for the landing page.
 * It includes a logo and a list of navigation items. On mobile, it collapses into a burger + side sheet.
 */
export const LandingHeader = ({
  logoComponent,
  children,
  rightSlot,
  withBackground = false,
  variant = 'primary',
  fixed = false,
  className,
  sheetClassName,
}: {
  logoComponent?: React.ReactNode;
  children: React.ReactNode;
  rightSlot?: React.ReactNode;
  withBackground?: boolean;
  variant?: 'primary' | 'secondary';
  fixed?: boolean;
  className?: string;
  sheetClassName?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={clsx(
        'z-50 w-full',
        fixed
          ? 'fixed top-0 inset-x-0 bg-background/80 dark:bg-black/40 backdrop-blur-xl border-b border-border'
          : '',
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            <div className="flex items-center gap-3 justify-between">
              {logoComponent || <LandingHeaderLogo className="flex h-8 w-32" />}
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-6">{children}</div>

          {rightSlot}

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="px-3">
                  <MenuIcon className="h-6 w-6 mr-2" />
                  Menu
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className={sheetClassName}>
                <div className="flex items-center gap-3 mb-6">
                  <Link href="/" className="flex items-center gap-3">
                    <LandingHeaderLogo className="h-10 w-32 shrink-0" />
                  </Link>
                </div>

                <nav className="flex flex-col gap-4 mt-2 text-lg">{children}</nav>

                <div className="mt-8 pt-6 border-t border-border flex flex-col gap-3 text-sm text-muted-foreground">
                  <LandingFooterLink href="/privacidade" className="text-muted-foreground hover:text-foreground">
                    Privacidade
                  </LandingFooterLink>
                  <LandingFooterLink href="/termos" className="text-muted-foreground hover:text-foreground">
                    Termos de Uso
                  </LandingFooterLink>
                  <LandingFooterLink href="/cookies" className="text-muted-foreground hover:text-foreground">
                    Cookies
                  </LandingFooterLink>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
