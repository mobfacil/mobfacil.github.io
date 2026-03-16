import React from 'react';

const CookiesPage = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-wide text-primary-500">Atualizado em março de 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold">Política de Cookies</h1>
          <p className="text-gray-400">
            Explicamos como utilizamos cookies e tecnologias semelhantes para melhorar sua experiência e medir desempenho.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. O que são cookies</h2>
          <p className="text-gray-300">Pequenos arquivos armazenados no seu dispositivo para lembrar preferências e manter sessões.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Tipos que usamos</h2>
          <p className="text-gray-300">Cookies essenciais para funcionamento, analíticos para métricas e opcionais para personalização.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Gestão de cookies</h2>
          <p className="text-gray-300">Você pode gerenciar preferências no navegador ou ajustar consentimentos quando oferecidos.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Atualizações</h2>
          <p className="text-gray-300">Podemos atualizar esta política para refletir mudanças legais ou de produto.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Contato</h2>
          <p className="text-gray-300">Se tiver dúvidas sobre cookies, fale com nossa equipe.</p>
        </section>
      </div>
    </main>
  );
};

export default CookiesPage;
