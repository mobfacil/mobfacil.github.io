"use client";

import React, { useRef } from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/shared/ui/button';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';

import image from '@/src/images/image_16.png';
import { LandingShapesCtaBg } from '../cta-backgrounds/LandingShapesCtaBg';

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FeaturesGridProps {
  features: Feature[];
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ features: _features }) => {
  const containerRef = useRef<HTMLDivElement>(null);
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
    <div
      ref={containerRef}
      className="relative min-h-[100dvh] overflow-hidden"
    >
      <LandingShapesCtaBg
      variant='secondary'
        className="absolute inset-0 z-0 h-full w-full pointer-events-none"
      />
      <LandingProductFeature
        title="Nossos serviços"
        className="h-[100dvh]"
        descriptionComponent={
          <>
            <LandingProductFeatureKeyPoints keyPoints={keyPoints} className="" />

            <Button className="mt-8" asChild>
              <a href="#">Experimente agora gratuitamente</a>
            </Button>

            <p className="text-sm">Suporte incluso</p>
          </>
        }
        imageSrc={image.src}
        imageAlt="Screenshot of the product"
        imagePosition="left"
        imagePerspective="right"
      />
    </div>
  );
};

export default FeaturesGrid;
