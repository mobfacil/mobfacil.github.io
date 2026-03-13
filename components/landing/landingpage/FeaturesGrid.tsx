import React from 'react';
import { LucideIcon, Rocket, ShieldCheck, Smartphone } from 'lucide-react';
import { Button } from '@/components/shared/ui/button';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';

import image from '@/src/images/image_16.png';

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FeaturesGridProps {
  features: Feature[];
}

const iconClasses = "w-8 h-8 text-primary-500 mb-4";

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ features }) => {
  const keyPoints = [
    {
      title: 'Consulta de dados públicos',
      description:
        'Pague apenas o que usar. Sem mensalidades, sem surpresas. Acesse dados públicos essenciais para avaliação de crédito.',
    },
    {
      title: 'Motor de análise de crédito',
      description:
        'Avaliação de risco de crédito em segundos. Nossos algoritmos avançados analisam dados públicos para fornecer insights precisos e confiáveis.',
    },
    {
      title: 'Suporte',
      description:
        'Suporte 24/7. Estamos aqui para ajudá-lo a qualquer momento do dia. Basta perguntar.',
    },
  ];

  return (
    <LandingProductFeature
      title="Nossos serviços"
      descriptionComponent={
        <>
          <LandingProductFeatureKeyPoints keyPoints={keyPoints} className=''/>

          <Button className="mt-8" asChild>
            <a href="#">Experimente agora gratuitamente</a>
          </Button>

          <p className="text-sm">Suporte incluso</p>
        </>
      }
      imageSrc={image}
      imageAlt="Screenshot of the product"
      imagePosition="left"
      imagePerspective="right"
    />
  );
};

export default FeaturesGrid;
