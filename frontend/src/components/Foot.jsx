import { ArrowRight } from 'lucide-react';

export const Foot = () => (
  <footer className="bg-surface-container-lowest w-full py-section-padding border-t border-outline-variant mt-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop max-w-container-max mx-auto">
      <div className="col-span-1 md:col-span-1">
        <div className="font-headline-md text-headline-md text-primary mb-6">MAXWILL</div>
        <p className="font-body-md text-on-surface-variant pr-8">Redefining performance through architectural precision and high-tech engineering.</p>
      </div>
      <div className="space-y-6">
        <h4 className="font-label-caps text-label-caps text-primary">SHOP</h4>
        <ul className="space-y-3 font-body-md text-on-surface-variant">
          <li><a className="hover:text-primary transition-colors" href="#">All Products</a></li>
          <li><a className="hover:text-primary transition-colors" href="#">Performance Gear</a></li>
          <li><a className="hover:text-primary transition-colors" href="#">Limited Editions</a></li>
          <li><a className="hover:text-primary transition-colors" href="#">Store Locator</a></li>
        </ul>
      </div>
      <div className="space-y-6">
        <h4 className="font-label-caps text-label-caps text-primary">SUPPORT</h4>
        <ul className="space-y-3 font-body-md text-on-surface-variant">
          <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
          <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
          <li><a className="hover:text-primary transition-colors" href="#">Shipping &amp; Returns</a></li>
          <li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="space-y-6">
        <h4 className="font-label-caps text-label-caps text-primary">NEWSLETTER</h4>
        <p className="font-body-md text-on-surface-variant">Subscribe for exclusive performance insights.</p>
        <div className="flex border-b border-outline">
          <input className="bg-transparent border-none focus:outline-none focus:ring-0 w-full font-label-caps text-[10px] py-2" placeholder="EMAIL ADDRESS" type="email" />
          <button className="text-primary hover:opacity-70 transition-opacity">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
    <div className="mt-20 text-center px-margin-desktop border-t border-outline-variant/10 pt-8">
      <p className="font-body-md text-on-surface-variant text-[12px] tracking-widest opacity-60">© 2024 MAXWILL SPORTS. ENGINEERED PRECISION.</p>
    </div>
  </footer>
);
