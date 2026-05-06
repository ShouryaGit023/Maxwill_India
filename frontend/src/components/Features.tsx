import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Globe } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    { icon: Shield, title: 'Uncompromising Quality', desc: 'Crafted with premium materials for longevity and peak performance.' },
    { icon: Award, title: 'Professional Grade', desc: 'Equipment trusted by championship-level athletes and elite clubs.' },
    { icon: Users, title: 'Elite Community', desc: 'Join a network of individuals committed to excellence in sport.' },
    { icon: Globe, title: 'Global Standards', desc: 'Bringing world-class pickleball infrastructure to India.' },
  ];

  return (
    <section className="section-padding bg-[var(--primary)] text-white overflow-hidden relative">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 border border-[var(--secondary)]/30 text-[var(--secondary)]">
                <f.icon size={32} />
              </div>
              <h3 className="text-xl font-headline mb-4 tracking-tight">{f.title}</h3>
              <p className="text-sm opacity-70 font-body leading-relaxed px-4">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-headline font-bold opacity-[0.03] select-none pointer-events-none whitespace-nowrap tracking-tighter">
        HERITAGE PERFORMANCE
      </div>
    </section>
  );
};

export default Features;
