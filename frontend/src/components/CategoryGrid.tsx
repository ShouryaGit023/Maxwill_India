import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Professional Paddles',
    image: '/paddle.png',
    tag: 'Innovation',
    price: '₹12,999'
  },
  {
    title: 'Club Apparel',
    image: '/apparel.png',
    tag: 'Prestige',
    price: '₹4,499'
  },
  {
    title: 'Performance Footwear',
    image: '/footwear.png',
    tag: 'Precision',
    price: '₹8,999'
  }
];

const CategoryGrid: React.FC = () => {
  return (
    <section className="section-padding bg-[var(--surface)]">
      <div className="container">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-gold font-bold uppercase tracking-widest text-xs font-body">Curated Selection</span>
            <h2 className="text-4xl font-headline mt-2 text-[var(--primary)]">The Collection</h2>
          </div>
          <a href="#" className="text-sm font-bold border-b border-[var(--primary)] pb-1 hover:text-gold hover:border-gold transition-all font-body text-[var(--primary)] uppercase tracking-widest">
            View All Categories
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="category-card group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 tag">
                  {cat.tag}
                </div>
              </div>
              <h3 className="text-xl font-headline text-[var(--on-surface)] group-hover:text-gold transition-colors">
                {cat.title}
              </h3>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-[var(--on-surface-variant)] uppercase tracking-widest font-bold font-body">
                  Shop Now →
                </p>
                <p className="text-lg font-headline text-[var(--on-surface)] font-bold">
                  {cat.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
