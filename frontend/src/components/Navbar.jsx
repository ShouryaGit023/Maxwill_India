import { Link } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About Maxwill', href: '#' },
]

export default function Navbar() {
  const [cartCount] = useState(2)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-black/5">
        <nav className="flex justify-between items-center h-20 px-6 md:px-16 lg:px-24 w-full transition-all duration-500 ease-in-out">
          
          {/* Left section: Hamburger (Mobile) + Logo */}
          <div className="flex items-center gap-4 lg:gap-8">
            <button 
              className="md:hidden text-[#0e1d25] hover:text-[#a93800] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-[28px]">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
            <Link to="/" className="font-headline-md font-bold tracking-tighter text-[#a93800] decoration-none hover:scale-105 transition-transform text-2xl md:text-3xl">MAXWILL</Link>
          </div>
          
          {/* Middle section: Links (Desktop) */}
          <div className="hidden md:flex gap-8 lg:gap-12 absolute left-1/2 -translate-x-1/2">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                className="font-technical-data uppercase text-[#0e1d25] hover:text-[#a93800] transition-all duration-300 hover:opacity-100 opacity-70 tracking-widest text-xs lg:text-sm"
              >
                {l.label}
              </Link>
            ))}
          </div>
          
          {/* Right section: Icons (Both Mobile & Desktop) */}
          <div className="flex items-center gap-4 lg:gap-8">
            <button className="text-[#0e1d25] hover:text-[#a93800] transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100">
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 0" }}>person</span>
            </button>
            <button className="text-[#0e1d25] hover:text-[#a93800] transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100">
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 0" }}>favorite</span>
            </button>
            <button className="text-[#0e1d25] hover:text-[#a93800] transition-all duration-300 hover:scale-110 relative opacity-80 hover:opacity-100">
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 0" }}>shopping_bag</span>
              <span className="absolute -top-1 -right-1 bg-[#a93800] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm">
                {cartCount}
              </span>
            </button>
          </div>

        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md pt-24 px-6 md:hidden flex flex-col items-center justify-center gap-8 overflow-y-auto pb-8">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className="font-technical-data uppercase text-[#0e1d25] hover:text-[#a93800] transition-all duration-300 text-xl tracking-widest text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
