import React from 'react';
import Head from 'next/head';
import { LegalLayout, LegalSection } from '@/components/legal/LegalLayout';

const sections: LegalSection[] = [
  {
    id: 'quem-somos',
    title: 'Quem somos',
    content: (
      <>
        <p>
          Este site é mantido pela <strong className="text-foreground">MOBFACIL SOLUCOES TECNOLOGICAS E DE
          MOBILIDADE LTDA</strong>, CNPJ 28.134.422/0001-79 (&quot;MobFácil&quot;, &quot;nós&quot;).
        </p>
        <p>
          Usamos este site para apresentar o MobCred, nosso motor de decisão de crédito, a empresas interessadas em
          conhecer a solução. Esta política descreve apenas os dados coletados durante a navegação neste site
          institucional — ela não descreve o tratamento de dados realizado dentro da plataforma MobCred, que é
          definido em contrato específico entre a MobFácil e cada empresa cliente (banco, fintech, financeira etc.)
          que a utiliza.
        </p>
      </>
    ),
  },
  {
    id: 'dados-que-coletamos',
    title: 'Quais dados coletamos',
    content: (
      <ul>
        <li>
          <strong className="text-foreground">Preferência de tema (claro/escuro):</strong> salva no seu navegador
          via <code>localStorage</code>. Não sai do seu dispositivo, não nos identifica e não é acessada por nós.
        </li>
        <li>
          <strong className="text-foreground">Dados técnicos de acesso:</strong> nossa hospedagem (GitHub Pages)
          pode registrar automaticamente informações como endereço IP, tipo de navegador e páginas acessadas, para
          fins de segurança e funcionamento da infraestrutura.
        </li>
        <li>
          <strong className="text-foreground">Dados de contato que você decide nos enviar:</strong> ao clicar em
          &quot;Vamos conversar&quot; ou &quot;Falar com a MobFácil&quot;, seu aplicativo de e-mail ou WhatsApp é
          aberto para você nos escrever diretamente. Este site não tem formulário próprio e não armazena o
          conteúdo dessa conversa em nenhum banco de dados nosso.
        </li>
        <li>
          Não usamos cookies de rastreamento, pixels de publicidade nem ferramentas de analytics — veja detalhes na
          nossa <a href="/cookies">Política de Cookies</a>.
        </li>
      </ul>
    ),
  },
  {
    id: 'uso-dos-dados',
    title: 'Como usamos os dados',
    content: (
      <>
        <ul>
          <li>Responder aos contatos comerciais recebidos por e-mail, telefone ou WhatsApp;</li>
          <li>Manter o site no ar, com segurança e bom funcionamento;</li>
          <li>Cumprir obrigações legais e regulatórias aplicáveis.</li>
        </ul>
        <p>Não usamos dados de navegação para publicidade direcionada nem os vendemos a terceiros.</p>
      </>
    ),
  },
  {
    id: 'compartilhamento',
    title: 'Com quem compartilhamos',
    content: (
      <ul>
        <li>
          <strong className="text-foreground">Hospedagem do site:</strong> GitHub Pages, que processa apenas os
          dados técnicos de acesso necessários para entregar as páginas.
        </li>
        <li>
          <strong className="text-foreground">Comunicação direta:</strong> se você nos escreve por e-mail ou
          WhatsApp, essa troca acontece nos serviços que você e nossa equipe já utilizam, fora de qualquer banco de
          dados operado por nós neste site.
        </li>
        <li>Não compartilhamos, vendemos ou alugamos dados de visitantes para fins de marketing de terceiros.</li>
      </ul>
    ),
  },
  {
    id: 'seus-direitos',
    title: 'Seus direitos (LGPD)',
    content: (
      <p>
        Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode solicitar a qualquer momento:
        confirmação de que tratamos seus dados, acesso, correção, anonimização ou eliminação de dados
        desnecessários, portabilidade, informação sobre com quem compartilhamos seus dados e revogação de
        consentimento. Para exercer qualquer um desses direitos, escreva para{' '}
        <a href="mailto:contato@mobfacil.com.br">contato@mobfacil.com.br</a>.
      </p>
    ),
  },
  {
    id: 'seguranca',
    title: 'Segurança',
    content: (
      <p>
        Adotamos medidas técnicas e administrativas razoáveis para proteger as informações que tratamos, incluindo
        conexão criptografada (HTTPS) em todo o site.
      </p>
    ),
  },
  {
    id: 'retencao',
    title: 'Por quanto tempo guardamos',
    content: (
      <p>
        Como não operamos um formulário ou banco de dados de leads neste site, os únicos dados pessoais que chegam
        até nós são os que você mesmo envia por e-mail, telefone ou WhatsApp. Eles ficam guardados apenas na sua
        troca com a nossa equipe, pelo tempo necessário para o atendimento comercial e para cumprir eventuais
        obrigações legais ou contratuais.
      </p>
    ),
  },
  {
    id: 'alteracoes',
    title: 'Alterações desta política',
    content: (
      <p>
        Podemos atualizar este texto para refletir mudanças legais, tecnológicas ou no próprio site. A data no
        topo da página indica a versão mais recente.
      </p>
    ),
  },
  {
    id: 'contato',
    title: 'Fale com a gente',
    content: (
      <p>
        Dúvidas sobre esta política ou sobre o tratamento dos seus dados? Escreva para{' '}
        <a href="mailto:contato@mobfacil.com.br">contato@mobfacil.com.br</a>.
      </p>
    ),
  },
];

const PrivacyPage = () => {
  return (
    <>
      <Head>
        <title>Política de Privacidade | MobFácil</title>
        <meta
          name="description"
          content="Como a MobFácil coleta, usa e protege dados no site institucional do MobCred."
        />
      </Head>
      <LegalLayout
        eyebrow="Privacidade"
        title="Política de Privacidade"
        updatedLabel="Atualizado em setembro de 2026"
        intro={
          <p>
            Explicamos, de forma direta, quais dados este site coleta, como os usamos e quais são os seus direitos
            em relação a eles.
          </p>
        }
        sections={sections}
      />
    </>
  );
};

export default PrivacyPage;
