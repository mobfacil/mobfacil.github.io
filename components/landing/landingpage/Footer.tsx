import React from 'react';
import { Linkedin } from 'lucide-react';

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterProps {
  columns: FooterColumn[];
}

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/mobf%C3%A1cil/', label: 'LinkedIn' },
];

const Footer: React.FC<FooterProps> = ({ columns }) => {
  return (
    <footer className="bg-background border-t border-border py-12">
      {/* Desktop */}
      <div className="flex flex-col items-center max-w-7xl mx-auto px-6 mb-8">
        {columns.map((col, i) => (
          <div key={i}>
            <h4 className="text-lg font-semibold text-white mb-4 text-center">{col.title}</h4>
            <ul className="flex flex-wrap gap-4">
              {col.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-300 hover:text-primary-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-6 mb-4">
        {socialLinks.map((s, i) => (
          <a key={i} href={s.href} className="text-gray-300 hover:text-primary-400 transition-colors">
            <s.icon className="w-8 h-8" />
          </a>
        ))}
      </div>
      <p className="text-center text-gray-500 text-sm">© {new Date().getFullYear()} MobFacil. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
