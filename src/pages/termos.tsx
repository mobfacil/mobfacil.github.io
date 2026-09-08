import React from 'react';
import Head from 'next/head';
import { LegalLayout, LegalSection } from '@/components/legal/LegalLayout';

const sections: LegalSection[] = [
  {
    id: 'aceitacao',
    title: 'Aceitação dos termos',
    content: (
      <p>
        Estes Termos de Uso regulam o acesso e a navegação no site institucional da MOBFACIL SOLUCOES TECNOLOGICAS
        E DE MOBILIDADE LTDA (CNPJ 28.134.422/0001-79), disponível em{' '}
        <a href="https://www.mobfacil.com.br">www.mobfacil.com.br</a>. Ao acessar este site, você concorda com
        estas condições; se não concordar, pedimos que não o utilize.
      </p>
    ),
  },
  {
    id: 'sobre-o-site',
    title: 'Sobre este site',
    content: (
      <p>
        Este é um site institucional com finalidade informativa e comercial: apresentamos aqui o MobCred, motor de
        decisão de crédito da MobFácil, voltado a empresas como bancos, fintechs, financeiras, seguradoras,
        indústria, varejo e saúde. As informações publicadas têm caráter geral e não constituem oferta, proposta de
        crédito ou vínculo contratual automático — a contratação do MobCred é sempre formalizada em contrato
        comercial específico entre a MobFácil e a empresa cliente.
      </p>
    ),
  },
  {
    id: 'propriedade-intelectual',
    title: 'Propriedade intelectual',
    content: (
      <p>
        As marcas &quot;MobFácil&quot; e &quot;MobCred&quot;, assim como textos, layout, imagens e demais conteúdos
        deste site, pertencem à MobFácil ou são utilizados sob licença. Não é permitido copiar, reproduzir ou
        distribuir esse conteúdo sem autorização prévia por escrito.
      </p>
    ),
  },
  {
    id: 'uso-permitido',
    title: 'Uso permitido',
    content: (
      <p>
        Você pode navegar livremente pelo site para conhecer nossos produtos e entrar em contato conosco. Não é
        permitido utilizar o site para fins ilícitos, tentar acessar áreas restritas, extrair conteúdo em massa
        (scraping) ou interferir no funcionamento normal da página.
      </p>
    ),
  },
  {
    id: 'links-externos',
    title: 'Links e redes sociais',
    content: (
      <p>
        O site pode conter links para canais externos, como o nosso perfil no LinkedIn, ou permitir contato via
        e-mail, telefone e WhatsApp. Não somos responsáveis pelo conteúdo ou pelas práticas de privacidade desses
        serviços de terceiros.
      </p>
    ),
  },
  {
    id: 'disponibilidade',
    title: 'Disponibilidade do site',
    content: (
      <p>
        O site é hospedado em infraestrutura de terceiro (GitHub Pages) e é fornecido &quot;como está&quot;.
        Podemos realizar manutenções, atualizações ou enfrentar instabilidades pontuais sem aviso prévio, sem que
        isso gere direito a indenização.
      </p>
    ),
  },
  {
    id: 'responsabilidade',
    title: 'Limitação de responsabilidade',
    content: (
      <p>
        As informações deste site têm caráter informativo sobre a MobFácil e o MobCred. Não nos responsabilizamos
        por decisões tomadas exclusivamente com base no conteúdo aqui publicado; recomendamos sempre falar com
        nossa equipe comercial para informações atualizadas e específicas ao seu negócio.
      </p>
    ),
  },
  {
    id: 'alteracoes-termos',
    title: 'Alterações destes termos',
    content: (
      <p>
        Podemos atualizar estes Termos de Uso a qualquer momento; a data no topo da página indica a versão
        vigente.
      </p>
    ),
  },
  {
    id: 'lei-foro',
    title: 'Lei aplicável e foro',
    content: (
      <p>
        Estes termos são regidos pelas leis brasileiras. Fica eleito o foro da comarca de Curitiba/PR para dirimir
        eventuais controvérsias, com renúncia a qualquer outro, por mais privilegiado que seja.
      </p>
    ),
  },
  {
    id: 'contato-termos',
    title: 'Contato',
    content: (
      <p>
        Dúvidas sobre estes termos? Escreva para <a href="mailto:contato@mobfacil.com.br">contato@mobfacil.com.br</a>.
      </p>
    ),
  },
];

const TermsPage = () => {
  return (
    <>
      <Head>
        <title>Termos de Uso | MobFácil</title>
        <meta name="description" content="Condições de uso do site institucional do MobCred, produto da MobFácil." />
      </Head>
      <LegalLayout
        eyebrow="Termos"
        title="Termos de Uso"
        updatedLabel="Atualizado em setembro de 2026"
        intro={
          <p>
            Estas são as condições para navegar neste site e conhecer o MobCred, incluindo responsabilidades e
            limites de uso.
          </p>
        }
        sections={sections}
      />
    </>
  );
};

export default TermsPage;
