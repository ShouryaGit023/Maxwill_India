import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--surface-container)] pt-24 pb-12 border-t border-[var(--outline)]/10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-1">
            <h3 className="font-headline text-3xl font-bold tracking-tighter text-[var(--primary)] mb-8 uppercase">
              Maxwill
            </h3>
            <p className="text-sm text-[var(--on-surface-variant)] leading-relaxed font-body">
              Defining the future of heritage performance in India. Elite gear, 
              prestigious tournaments, and a community of excellence.
            </p>
          </div>
          
          <div>
            <h4 className="font-headline text-lg mb-8 text-[var(--primary)]">Collections</h4>
            <ul className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-[var(--on-surface-variant)] list-none">
              <li><Link to="/shop" className="hover:text-gold transition-colors">Pro Paddles</Link></li>
              <li><Link to="/shop" className="hover:text-gold transition-colors">Elite Apparel</Link></li>
              <li><Link to="/shop" className="hover:text-gold transition-colors">Footwear</Link></li>
              <li><Link to="/shop" className="hover:text-gold transition-colors">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-lg mb-8 text-[var(--primary)]">Experience</h4>
            <ul className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-[var(--on-surface-variant)] list-none">
              <li><Link to="/facilities" className="hover:text-gold transition-colors">Court Booking</Link></li>
              <li><Link to="/membership" className="hover:text-gold transition-colors">Private Club</Link></li>
              <li><Link to="/tournaments" className="hover:text-gold transition-colors">Tournaments</Link></li>
              <li><Link to="/coaching" className="hover:text-gold transition-colors">Coaching</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-lg mb-8 text-[var(--primary)]">Contact</h4>
            <ul className="flex flex-col gap-4 text-sm text-[var(--on-surface-variant)] font-body list-none">
              <li>New Delhi, India</li>
              <li>support@maxwillindia.com</li>
              <li>+91 123 456 7890</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-[var(--outline)]/10 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--on-surface-variant)] opacity-60">
          <p>© 2024 MAXWILL INDIA. HERITAGE PERFORMANCE DEFINED.</p>
          <div className="flex gap-12 mt-6 md:mt-0">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
            <Link to="/sustainability" className="hover:text-gold transition-colors">Sustainability</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
