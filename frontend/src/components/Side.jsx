import { useState } from 'react';
import { Check } from 'lucide-react';

export const Side = () => {
  const [cols, setCols] = useState(['Limited Edition']);
  const [price, setPrice] = useState(350);
  const [avail, setAvail] = useState('In Stock');

  const toggleCol = (c) => setCols(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);

  return (
    <aside className="w-64 flex-shrink-0 hidden lg:block pt-2">
      <div className="sticky top-32 flex flex-col gap-14">
        {/* Collections */}
        <div className="flex flex-col gap-6">
          <h3 className="font-label-caps text-[#633a2e] border-b border-[#e3bfb2]/40 pb-3 font-semibold tracking-[0.1em] text-sm uppercase">COLLECTIONS</h3>
          <div className="flex flex-col gap-4">
            {['Performance', 'Lifestyle', 'Limited Edition', 'Carbon Series'].map(c => (
              <label key={c} className="flex items-center gap-4 cursor-pointer group" onClick={(e) => { e.preventDefault(); toggleCol(c); }}>
                <div className={`w-[22px] h-[22px] rounded-md flex items-center justify-center border transition-all duration-300 ${cols.includes(c) ? 'bg-[#a93800] border-[#a93800] shadow-sm' : 'border-[#d0b3a9] bg-white group-hover:border-[#a93800]'}`}>
                  {cols.includes(c) && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
                </div>
                <span className={`text-[15px] tracking-wide transition-colors ${cols.includes(c) ? 'text-[#a93800] font-medium' : 'text-[#2c3e47] group-hover:text-[#a93800]'}`}>{c}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="flex flex-col gap-6">
          <h3 className="font-label-caps text-[#633a2e] border-b border-[#e3bfb2]/40 pb-3 font-semibold tracking-[0.1em] text-sm uppercase">PRICE RANGE</h3>
          <div className="flex flex-col gap-5 pt-1">
            <style>{`
              .custom-slider::-webkit-slider-thumb {
                appearance: none;
                width: 18px;
                height: 18px;
                background: #a93800;
                border-radius: 50%;
                cursor: pointer;
                box-shadow: 0 0 0 4px #fff, 0 2px 4px rgba(0,0,0,0.1);
                transition: transform 0.1s;
              }
              .custom-slider::-webkit-slider-thumb:hover {
                transform: scale(1.1);
              }
              .custom-slider::-moz-range-thumb {
                width: 18px;
                height: 18px;
                background: #a93800;
                border-radius: 50%;
                cursor: pointer;
                border: 4px solid #fff;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                transition: transform 0.1s;
              }
              .custom-slider::-moz-range-thumb:hover {
                transform: scale(1.1);
              }
            `}</style>
            <input 
              type="range" 
              min="100" max="500" 
              value={price} 
              onChange={e => setPrice(e.target.value)}
              className="custom-slider w-full h-[5px] bg-[#d5e5ef] rounded-full appearance-none outline-none" 
            />
            <div className="flex justify-between items-center px-1">
              <span className="font-technical-data font-bold tracking-wider text-[#2c3e47] text-sm">$100</span>
              <span className="font-technical-data font-bold tracking-wider text-[#2c3e47] text-sm">${price}</span>
            </div>
          </div>
        </div>

        {/* Availability */}
        <div className="flex flex-col gap-6">
          <h3 className="font-label-caps text-[#633a2e] border-b border-[#e3bfb2]/40 pb-3 font-semibold tracking-[0.1em] text-sm uppercase">AVAILABILITY</h3>
          <div className="flex flex-col gap-4">
            {['In Stock', 'Pre-Order'].map(a => (
              <label key={a} className="flex items-center gap-4 cursor-pointer group" onClick={(e) => { e.preventDefault(); setAvail(a); }}>
                <div className={`w-[22px] h-[22px] rounded-full flex items-center justify-center border transition-all duration-300 ${avail === a ? 'border-[#a93800] bg-white' : 'border-[#d0b3a9] bg-white group-hover:border-[#a93800]'}`}>
                  {avail === a && <div className="w-2.5 h-2.5 rounded-full bg-[#a93800] shadow-sm" />}
                </div>
                <span className={`text-[15px] tracking-wide transition-colors ${avail === a ? 'text-[#a93800] font-medium' : 'text-[#2c3e47] group-hover:text-[#a93800]'}`}>{a}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};
