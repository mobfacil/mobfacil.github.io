import React from 'react';
import { Linkedin } from 'lucide-react';
import { useLocale } from '@/src/i18n/LocaleContext';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/mobf%C3%A1cil/', label: 'LinkedIn' },
];

const Footer: React.FC = () => {
  const { t } = useLocale();

  const legalLinks = [
    { label: t.footer.privacy, href: '/privacidade' },
    { label: t.footer.terms, href: '/termos' },
    { label: t.footer.cookies, href: '/cookies' },
  ];

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto mb-8 flex max-w-7xl flex-col items-center px-6">
        <p className="mb-4 text-sm text-muted-foreground">{t.footer.tagline}</p>
        <h4 className="mb-4 text-center text-lg font-semibold text-foreground">{t.footer.legalTitle}</h4>
        <ul className="flex flex-wrap justify-center gap-4">
          {legalLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-muted-foreground transition-colors hover:text-primary-500">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4 flex justify-center gap-6">
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="text-muted-foreground transition-colors hover:text-primary-500"
          >
            <s.icon className="h-8 w-8" />
          </a>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} MobFácil. {t.footer.rights}
      </p>
    </footer>
  );
};

export default Footer;
