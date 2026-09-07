import React from 'react';
import dynamic from 'next/dynamic';

const LandingPageMock = dynamic(() => import('../../components/landing/landingpage/LandingPageMock'), { ssr: false });

export default function Home() {
  return <LandingPageMock locale="pt" />;
}
