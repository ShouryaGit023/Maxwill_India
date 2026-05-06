import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.png" 
          alt="Maxwill Hero" 
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl text-white"
        >
          <span className="text-gold tracking-widest uppercase mb-4 block font-bold font-body text-xs">
            Heritage Performance
          </span>
          <h1 className="text-6xl md:text-8xl font-headline font-bold leading-tight mb-6 tracking-tighter">
            Elevate Your <br /> 
            <span className="italic text-gold">Game.</span>
          </h1>
          <p className="font-body mb-8 opacity-90 leading-relaxed text-lg">
            Experience the pinnacle of competitive play with Maxwill India. 
            Meticulously crafted gear and world-class facilities designed for the elite athlete.
          </p>
          <div className="flex gap-6">
            <button className="btn-primary">
              Explore Collection
            </button>
            <button className="btn-outline">
              Book a Court
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
