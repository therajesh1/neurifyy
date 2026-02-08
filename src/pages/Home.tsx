import React from 'react';
import { Hero } from '@/components/home/Hero';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { Process } from '@/components/home/Process';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { Portfolio } from '@/components/home/Portfolio';
import { ContactSection } from '@/components/home/ContactSection';

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ServicesGrid />
      <Process />
      <WhyChooseUs />
      <Portfolio />
      <ContactSection />
    </div>
  );
};
