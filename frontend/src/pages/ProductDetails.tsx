import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  series?: string;
  image: string;
  thumbnails?: string[];
  specs?: Record<string, string>;
  limitedEdition?: boolean;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching product:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh] bg-[var(--background)]">
        <p className="text-[var(--primary)] uppercase tracking-[0.2em] text-sm font-bold">Loading Details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[70vh] bg-[var(--background)]">
        <p className="text-[var(--primary)] text-xl font-bold mb-4">Product Not Found</p>
        <Link to="/shop" className="uppercase tracking-[0.1em] text-sm border border-[var(--outline)] px-6 py-2 hover:border-[var(--primary)] transition-all">
          Return to Shop
        </Link>
      </div>
    );
  }

  const breadcrumbs = [
    { label: 'SHOP', path: '/shop' },
    { label: product.category.toUpperCase(), path: '/shop' },
    ...(product.series ? [{ label: product.series.toUpperCase(), path: '#' }] : [])
  ];

  return (
    <main className="bg-[var(--background)] min-h-screen pt-24 pb-24 text-[var(--on-surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column - Image Gallery */}
          <div className="flex flex-col">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-[#111111] border border-[var(--outline)]/20 p-8 md:p-16 mb-6 relative aspect-square flex items-center justify-center"
            >
              {product.limitedEdition && (
                <div className="absolute top-8 right-8 bg-[#FFB800] text-black text-xs font-bold uppercase tracking-widest py-1.5 px-3 z-10">
                  LIMITED EDITION
                </div>
              )}
              <img 
                src={product.thumbnails ? product.thumbnails[activeImage] : product.image} 
                alt={product.name} 
                className="w-full h-full object-contain mix-blend-screen"
              />
            </motion.div>

            {product.thumbnails && product.thumbnails.length > 0 && (
              <div className="flex gap-4">
                {product.thumbnails.map((thumb, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative w-24 h-24 bg-[#111111] p-2 overflow-hidden transition-all duration-300 ${activeImage === idx ? 'border-2 border-[#FFB800]' : 'border border-[var(--outline)]/30 hover:border-[var(--outline)]'}`}
                  >
                    <img src={thumb} alt={`Thumbnail ${idx}`} className="w-full h-full object-contain opacity-80 hover:opacity-100 mix-blend-screen" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Product Details */}
          <div className="flex flex-col py-4">
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--on-surface-variant)] mb-8">
              {breadcrumbs.map((bc, idx) => (
                <React.Fragment key={idx}>
                  <Link to={bc.path} className="hover:text-[var(--primary)] transition-colors">{bc.label}</Link>
                  {idx < breadcrumbs.length - 1 && <span>›</span>}
                </React.Fragment>
              ))}
            </div>

            {/* Title & Price */}
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 uppercase">
              {product.name}
            </h1>
            <div className="text-3xl font-bold text-[#FFB800] mb-12 uppercase tracking-wide">
              INR {product.price.toLocaleString('en-IN')}
            </div>

            {/* Specs Table */}
            {product.specs && (
              <div className="mb-12 border-t border-[var(--outline)]/20">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-4 border-b border-[var(--outline)]/20 text-sm">
                    <span className="text-[var(--on-surface-variant)]">{key}</span>
                    <span className="font-bold">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Description */}
            <p className="text-[var(--on-surface-variant)] leading-relaxed text-sm md:text-base mb-12 font-body max-w-xl">
              {product.description}
            </p>

            {/* Actions */}
            <div className="flex items-center gap-4 mb-8">
              <button className="flex-1 bg-[#8CE8A6] text-black font-bold uppercase tracking-widest text-xs py-4 px-6 hover:bg-white transition-colors flex justify-center items-center gap-2">
                ADD TO BAG
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 4H11V13H1V4Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M3.5 4V2.5C3.5 1.11929 4.61929 0 6 0C7.38071 0 8.5 1.11929 8.5 2.5V4" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </button>
              <button className="bg-transparent border border-[#8CE8A6] text-[#8CE8A6] p-4 hover:bg-[#8CE8A6] hover:text-black transition-colors">
                <Heart size={18} strokeWidth={2} />
              </button>
            </div>

            {/* Shipping Info */}
            <div className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-[0.1em] text-[var(--on-surface)]">
              <Truck size={14} />
              <span>COMPLIMENTARY SHIPPING ON ALL EQUIPMENT.</span>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
