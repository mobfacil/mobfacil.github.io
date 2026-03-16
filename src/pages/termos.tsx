import React from 'react';

const TermsPage = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-wide text-primary-500">Atualizado em março de 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold">Termos de Uso</h1>
          <p className="text-gray-400">
            Estes termos descrevem as condições para uso da nossa plataforma, incluindo responsabilidades e limitações.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Aceitação</h2>
          <p className="text-gray-300">Ao utilizar o serviço, você concorda com estes termos e políticas associadas.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Uso permitido</h2>
          <p className="text-gray-300">Utilize a plataforma de forma legal, segura e conforme as finalidades contratadas.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Conta e segurança</h2>
          <p className="text-gray-300">Mantenha credenciais em segurança e comunique acessos não autorizados imediatamente.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Limitação de responsabilidade</h2>
          <p className="text-gray-300">Fornecemos o serviço como está, respeitando os limites previstos em contrato e na lei.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Contato</h2>
          <p className="text-gray-300">Para dúvidas sobre estes termos, fale com nossa equipe de suporte.</p>
        </section>
      </div>
    </main>
  );
};

export default TermsPage;
