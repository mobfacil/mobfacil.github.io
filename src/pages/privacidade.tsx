import React from 'react';

const PrivacyPage = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-wide text-primary-500">Atualizado em março de 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold">Política de Privacidade</h1>
          <p className="text-gray-400">
            Explicamos quais dados coletamos, como usamos, com quem compartilhamos e quais são os seus direitos
            em relação às suas informações.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Dados que coletamos</h2>
          <p className="text-gray-300">Coletamos informações fornecidas por você e dados técnicos necessários para operar nossos serviços.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Como usamos os dados</h2>
          <p className="text-gray-300">Utilizamos os dados para prover, melhorar e proteger nossos produtos, além de cumprir obrigações legais.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Compartilhamento</h2>
          <p className="text-gray-300">Compartilhamos apenas com parceiros necessários à operação, sempre seguindo requisitos de segurança.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Seus direitos</h2>
          <p className="text-gray-300">Você pode solicitar acesso, correção ou exclusão dos seus dados e revogar consentimentos quando aplicável.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Contato</h2>
          <p className="text-gray-300">Dúvidas sobre privacidade? Envie um e-mail para nossa equipe de proteção de dados.</p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPage;
