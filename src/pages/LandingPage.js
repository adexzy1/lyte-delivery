import React from 'react';
import HeroSection from '../components/HeroSection';
import RequestQuote from '../components/RequestQuote';
import Reviews from '../components/Reviews';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <RequestQuote />
      <WhyChooseUs />
      <Reviews />
    </div>
  );
};

export default LandingPage;
