import React from 'react';

import LogoSection from '@components/LogoSection';
import DealSection from '@components/DealSection';
import NewArrivalSection from '@components/NewArrivalSection';
import PeakyBlinderSection from '@components/PeakyBlinderSection';
import FeaturesSection from '@components/FeaturesSection';
import Gallery from '@components/Gallery';
import TestimonialSection from '@components/TestimonialSection';
import NewsletterSection from '@components/NewsletterSection';

const Home = () => {
  return (
    <div>
      <LogoSection />
      <DealSection />
      <NewArrivalSection />
      <PeakyBlinderSection />
      <FeaturesSection />
      <Gallery />
      <TestimonialSection />
      <NewsletterSection />
    </div>
  );
};

export default Home;
