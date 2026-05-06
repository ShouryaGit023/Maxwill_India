import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from backend
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[var(--background)]">
        <p className="text-[var(--primary)] uppercase tracking-widest text-sm">Loading Collection...</p>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-24 bg-[var(--background)] min-h-screen text-[var(--on-surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[var(--primary)] mb-6 font-headline tracking-tight uppercase">
            The Collection
          </h1>
          <p className="text-[var(--on-surface-variant)] max-w-2xl text-lg md:text-xl font-body">
            Heritage performance gear designed for the modern competitor. Experience the fusion of traditional prestige and technical excellence.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Link to={`/product/${product._id}`} key={product._id}>
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group cursor-pointer border border-[var(--outline)]/20 bg-[var(--surface-container)] p-4 flex flex-col h-full transition-all duration-300 hover:border-[#FFB800]"
              >
                <div className="aspect-[4/5] bg-[#111111] mb-6 overflow-hidden relative border border-[var(--outline)]/10">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain mix-blend-screen opacity-90 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg text-[var(--primary)] mb-2 font-bold font-headline uppercase tracking-wide">
                    {product.name}
                  </h3>
                  <p className="text-[var(--on-surface-variant)] text-sm mb-4 flex-grow font-body line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-end mt-auto pt-4 border-t border-[var(--outline)]/20">
                    <span className="text-[var(--primary)] tracking-widest text-sm font-semibold">
                      INR {product.price.toLocaleString('en-IN')}
                    </span>
                    <button className="text-xs uppercase tracking-widest text-[#FFB800] hover:text-[var(--primary)] transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Shop;
