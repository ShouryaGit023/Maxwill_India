import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, ShoppingBag, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="glass sticky top-0 z-50 py-6 transition-all duration-300">
      <div className="container grid grid-cols-3 items-center">
        
        <div className="hidden md:flex gap-8 text-xs font-bold tracking-[0.1em] uppercase font-body text-[var(--on-surface)] justify-start">
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/facilities" className="nav-link">Facilities</Link>
        </div>

        <div className="flex justify-center items-center col-span-3 md:col-span-1">
          <Link to="/" className="font-headline text-3xl font-bold tracking-tight text-[var(--primary)] uppercase">
            Maxwill
          </Link>
        </div>

        <div className="hidden md:flex gap-6 text-xs font-bold tracking-[0.1em] uppercase font-body text-[var(--on-surface)] justify-end items-center">
          <Link to="/tournaments" className="nav-link">Tournaments</Link>
          <Link to="/membership" className="nav-link">Membership</Link>
          
          <div className="w-[1px] h-4 bg-[var(--outline)] opacity-20 ml-2"></div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={toggleTheme}
              className="p-2 hover:bg-[var(--surface-container)] transition-all duration-300"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={18} strokeWidth={2} /> : <Sun size={18} strokeWidth={2} />}
            </button>
            <button className="p-2 hover:bg-[var(--surface-container)] transition-all">
              <User size={18} strokeWidth={2} />
            </button>
            <button className="p-2 hover:bg-[var(--surface-container)] transition-all">
              <ShoppingBag size={18} strokeWidth={2} />
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
