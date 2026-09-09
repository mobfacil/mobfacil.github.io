import clsx from 'clsx';
import Link from 'next/link';

/**
 * A component meant to be used as a child of LandingHeader.
 * It represents a single navigation item, which can be a link or a button.
 */
export const LandingHeaderMenuItem = ({
  href = '#',
  label = '',
  type = 'link',
  variant = 'primary',
  external = false,
  className,
  children,
}: {
  href?: string;
  label?: string | React.ReactNode;
  type?: 'button' | 'link' | 'icon-button';
  variant?: 'primary' | 'secondary' | 'ghost';
  external?: boolean;
  className?: string;
  children?: React.ReactNode;
}) => {
  const externalProps = external
    ? { target: '_blank' as const, rel: 'noopener noreferrer' }
    : {};

  if (type === 'button' || type === 'icon-button') {
    return (
        <Link href={href} {...externalProps}>{label}</Link>
    );
  }

  return (
    <Link
      href={href}
      {...externalProps}
      className={clsx(
        'transition-colors font-medium',
        variant === 'primary'
          ? 'text-foreground/80 hover:text-primary-600 dark:hover:text-primary-400'
          : 'text-foreground/80 hover:text-secondary-600 dark:hover:text-secondary-400',
        className,
      )}
    >
      {children || label}
    </Link>
  );
};
