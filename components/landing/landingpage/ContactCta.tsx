'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { LandingSaleCtaSection } from '@/components/landing/cta/LandingSaleCta';
import { useLocale } from '@/src/i18n/LocaleContext';

const easeOut = [0.16, 1, 0.3, 1] as const;

const WhatsappIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const ContactItem: React.FC<{ icon: React.ElementType; label: string; value: string; href: string }> = ({
  icon: Icon,
  label,
  value,
  href,
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    variants={{
      hidden: { opacity: 0, y: 16 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
    }}
    className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-left shadow-[0_16px_40px_-28px_rgba(23,31,71,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-500/30 hover:shadow-[0_22px_48px_-24px_rgba(0,120,58,0.35)]"
  >
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-500/10 text-primary-600 transition-transform duration-300 group-hover:scale-110 dark:text-primary-400">
      <Icon className="h-4 w-4" />
    </span>
    <span className="flex flex-col">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">{label}</span>
      <span className="font-medium text-foreground">{value}</span>
    </span>
  </motion.a>
);

const ContactCta: React.FC = () => {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: reduce ? 0 : 0.1 } },
  };

  return (
    <LandingSaleCtaSection
      withBackground
      withBackgroundGlow
      variant="primary"
      titleComponent={
        <>
          <span className="mb-2 block text-sm font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
            {t.contact.eyebrow}
          </span>
          <h2 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">{t.contact.title}</h2>
        </>
      }
      description={t.contact.description}
      ctaLabel={t.contact.ctaLabel}
      ctaHref="mailto:danilo@mobfacil.com.br"
      footerComponent={
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-10 grid gap-4 sm:grid-cols-3"
        >
          <ContactItem icon={Mail} label={t.contact.emailLabel} value="danilo@mobfacil.com.br" href="mailto:danilo@mobfacil.com.br" />
          <ContactItem icon={Phone} label={t.contact.phoneLabel} value="+55 41 98533-1707" href="tel:+5541985331707" />
          <ContactItem icon={WhatsappIcon} label="WhatsApp" value="+55 41 98533-1707" href="https://wa.me/5541985331707" />
        </motion.div>
      }
    />
  );
};

export default ContactCta;
