import React from 'react';
import Head from 'next/head';
import { LegalLayout, LegalSection } from '@/components/legal/LegalLayout';

const sections: LegalSection[] = [
  {
    id: 'o-que-sao',
    title: 'O que são cookies',
    content: (
      <p>
        Cookies são pequenos arquivos que um site pode salvar no seu navegador para lembrar preferências ou manter
        sessões ativas. Este site também usa uma tecnologia semelhante — o <code>localStorage</code> do navegador —
        para uma única finalidade, descrita abaixo.
      </p>
    ),
  },
  {
    id: 'o-que-usamos',
    title: 'O que usamos hoje',
    content: (
      <>
        <p>
          Hoje este site não utiliza cookies de rastreamento, publicidade ou análise de audiência (como Google
          Analytics ou pixels de redes sociais). O único dado salvo no seu navegador é a sua preferência de tema,
          claro ou escuro, guardada via <code>localStorage</code>.
        </p>
        <ul>
          <li>Fica só no seu dispositivo;</li>
          <li>Não é enviada aos nossos servidores;</li>
          <li>Não identifica você nem é usada para rastreamento;</li>
          <li>Desaparece se você limpar os dados de navegação deste site.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'o-que-nao-fazemos',
    title: 'O que não fazemos',
    content: (
      <p>
        Não usamos cookies de terceiros para publicidade direcionada, não vendemos dados de navegação e não temos
        pixels de rastreamento de redes sociais instalados neste site.
      </p>
    ),
  },
  {
    id: 'gerenciar',
    title: 'Como gerenciar',
    content: (
      <p>
        Como não dependemos de cookies para o funcionamento do site, você não precisa configurar nada. Se quiser
        redefinir a preferência de tema salva, basta limpar os dados de navegação deste domínio no seu navegador.
      </p>
    ),
  },
  {
    id: 'mudancas-futuras',
    title: 'Se isso mudar',
    content: (
      <p>
        Caso passemos a usar cookies analíticos ou de marketing no futuro, atualizaremos esta política com o
        detalhamento de cada cookie e, quando exigido por lei, solicitaremos o seu consentimento por meio de um
        aviso no próprio site.
      </p>
    ),
  },
  {
    id: 'atualizacoes-cookies',
    title: 'Atualizações desta política',
    content: <p>A data no topo da página indica a versão mais recente deste texto.</p>,
  },
  {
    id: 'contato-cookies',
    title: 'Contato',
    content: (
      <p>
        Dúvidas sobre cookies? Escreva para <a href="mailto:contato@mobfacil.com.br">contato@mobfacil.com.br</a>.
      </p>
    ),
  },
];

const CookiesPage = () => {
  return (
    <>
      <Head>
        <title>Política de Cookies | MobFácil</title>
        <meta name="description" content="Quais cookies e tecnologias de armazenamento local o site da MobFácil utiliza." />
      </Head>
      <LegalLayout
        eyebrow="Cookies"
        title="Política de Cookies"
        updatedLabel="Atualizado em setembro de 2026"
        intro={<p>Explicamos, com transparência, o que este site salva no seu navegador — e o que ele não faz.</p>}
        sections={sections}
      />
    </>
  );
};

export default CookiesPage;
