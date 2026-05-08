import { Search, User, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Nav = () => (
  <header className="fixed top-0 w-full bg-surface/80 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm flex justify-between items-center h-20 px-margin-desktop z-50">
    <Link to="/" className="font-headline-md text-headline-md font-bold tracking-tighter text-primary">MAXWILL</Link>
    <nav className="hidden md:flex gap-10">
      <Link to="/products" className="font-label-caps text-label-caps text-primary border-b-2 border-primary pb-1">Paddles</Link>
      <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Activewear</a>
      <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Footwear</a>
      <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Gear</a>
      <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Accessories</a>
      <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Engineering</a>
    </nav>
    <div className="flex items-center gap-6">
      <div className="relative group">
        <Search className="text-on-surface-variant group-hover:text-primary cursor-pointer transition-colors w-6 h-6" />
      </div>
      <div className="relative group">
        <User className="text-on-surface-variant group-hover:text-primary cursor-pointer transition-colors w-6 h-6" />
      </div>
      <div className="relative group">
        <ShoppingBag className="text-on-surface-variant group-hover:text-primary cursor-pointer transition-colors w-6 h-6" />
        <span className="absolute -top-2 -right-2 bg-primary-container text-on-primary-container text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">3</span>
      </div>
    </div>
  </header>
);
