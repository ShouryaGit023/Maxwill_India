import { useState } from 'react'

const links = [
  { label: 'Home', href: '#' },
  { label: 'Products', href: '#' },
  { label: 'About Maxwill', href: '#' },
]

export default function Navbar() {
  const [cartCount] = useState(2)

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] z-50" style={{ maxWidth: '1440px' }}>
      <nav className="glass-pill rounded-full flex justify-between items-center h-16 px-8 transition-all duration-300 ease-in-out">
        <div className="font-headline-md font-bold tracking-tighter text-[#a93800]">MAXWILL</div>
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-technical-data uppercase text-[#0e1d25] hover:text-[#a93800] transition-colors hover:opacity-80"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <button className="text-[#0e1d25] hover:text-[#a93800] transition-colors hover:opacity-80">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>person</span>
          </button>
          <button className="text-[#0e1d25] hover:text-[#a93800] transition-colors hover:opacity-80">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>favorite</span>
          </button>
          <button className="text-[#0e1d25] hover:text-[#a93800] transition-colors hover:opacity-80 relative">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>shopping_bag</span>
            <span className="absolute -top-1 -right-1 bg-[#a93800] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          </button>
        </div>
      </nav>
    </div>
  )
}
