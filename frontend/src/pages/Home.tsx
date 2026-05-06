import React from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import Features from '../components/Features';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <CategoryGrid />
      <Features />
    </main>
  );
};

export default Home;
