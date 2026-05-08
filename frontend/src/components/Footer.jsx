import { useState } from 'react'

const support = ['Privacy Policy', 'Terms of Service', 'Shipping & Returns']
const company = ['About Us', 'Contact']
const social = ['IG', 'X', 'FB']

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-[#23323a] w-full text-[#e3f3fd]" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div
        className="grid grid-cols-1 md:grid-cols-4 mx-auto"
        style={{ gap: '32px', paddingLeft: '64px', paddingRight: '64px', maxWidth: '1440px' }}
      >
        <div className="col-span-1 flex flex-col gap-6">
          <div className="font-headline-md text-[#a93800]">MAXWILL</div>
          <p className="font-body-md text-[#e3f3fd]/70 max-w-xs">
            Light luxury athletic equipment. Engineered precision for the modern competitor.
          </p>
          <p className="font-technical-data text-[#e3f3fd]/50 mt-4">infomaxwill3@gmail.com</p>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h4 className="font-label-caps text-white uppercase mb-2">Support</h4>
          {support.map((s) => (
            <a key={s} href="#" className="font-body-md text-[#e3f3fd]/70 hover:text-[#a93800] transition-colors">
              {s}
            </a>
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h4 className="font-label-caps text-white uppercase mb-2">Company</h4>
          {company.map((c) => (
            <a key={c} href="#" className="font-body-md text-[#e3f3fd]/70 hover:text-[#a93800] transition-colors">
              {c}
            </a>
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h4 className="font-label-caps text-white uppercase mb-2">Join the Club</h4>
          <p className="font-body-md text-[#e3f3fd]/70 text-sm">Sign up for 10% off your first order.</p>
          <div className="flex border-b border-[#e3f3fd]/30 pb-2 focus-within:border-[#a93800] transition-colors mt-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER EMAIL ADDRESS"
              className="bg-transparent border-none outline-none w-full font-label-caps placeholder-[#e3f3fd]/30 text-white px-0"
            />
            <button className="text-[#a93800] hover:text-[#ff5f15] transition-colors">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className="mx-auto mt-16 pt-8 border-t border-[#e3f3fd]/10 flex justify-between items-center"
        style={{ paddingLeft: '64px', paddingRight: '64px', maxWidth: '1440px' }}
      >
        <span className="font-body-md text-[#e3f3fd]/50 text-sm">© 2024 MAXWILL SPORTS. ENGINEERED PRECISION.</span>
        <div className="flex gap-4">
          {social.map((s) => (
            <div
              key={s}
              className="w-10 h-10 rounded-full border border-[#e3f3fd]/20 flex items-center justify-center text-[#e3f3fd] hover:border-[#a93800] hover:text-[#a93800] transition-colors cursor-pointer"
            >
              <span className="font-label-caps">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
