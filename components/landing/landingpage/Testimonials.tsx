import React from 'react';
import { LandingTestimonialGrid } from '../testimonial/LandingTestimonialGrid';

import senffLogo from '@/src/images/senff_logo.png';
import festcardLogo from '@/src/images/festcard_logo.svg';
import paymobiLogo from '@/src/images/paymobi_logo.svg';
import difabricaLogo from '@/src/images/difabrica_logo.jpg';
import masterMagazineLogo from '@/src/images/logo_master_magazine.avif';

const Testimonials: React.FC = () => {
  const testimonialItems = [
    { imageSrc: senffLogo, url: 'https://www.senff.com.br/' },
    { imageSrc: festcardLogo, url: 'https://www.cartaofestcard.com.br/' },
    { imageSrc: paymobiLogo, url: 'https://paymobi.com.br/' },
    { imageSrc: difabricaLogo, url: 'https://www.instagram.com/difabricacalcados/' },
    { imageSrc: masterMagazineLogo, url: 'https://www.mastermagazine.com.br/' },
  ];

  return (
    <LandingTestimonialGrid
      title="Clientes Satisfeitos"
      description=""
      testimonialItems={testimonialItems}
    />
  );
};

export default Testimonials
