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

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 w-[92%] z-50 group" style={{ maxWidth: '1440px' }}>
      <nav className="glass-pill rounded-full flex justify-between items-center h-20 px-12 transition-all duration-500 ease-in-out hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:border-white/60">
        <Link to="/" className="font-headline-md font-bold tracking-tighter text-[#a93800] decoration-none hover:scale-105 transition-transform">MAXWILL</Link>
        <div className="hidden md:flex gap-12">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className="font-technical-data uppercase text-[#0e1d25] hover:text-[#a93800] transition-all duration-300 hover:opacity-100 opacity-70 tracking-widest text-xs"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-8">
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
  )
}
