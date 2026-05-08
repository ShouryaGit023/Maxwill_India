import { useState } from 'react';
import { Side } from './Side';
import { Grid } from './Grid';

export const Prod = () => {
  const [cat, setCat] = useState('PADDLES');

  const tabs = ['PADDLES', 'TOPS', 'BOTTOMS', 'SHOES'];

  return (
    <main className="pt-32 pb-section-padding px-margin-desktop max-w-container-max mx-auto flex-grow w-full">
      <div className="mb-16">
        <h1 className="font-display-xl text-display-xl mb-8 capitalize">{cat.toLowerCase()}</h1>
        <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
          <div className="flex gap-12">
            {tabs.map(t => (
              <button 
                key={t}
                onClick={() => setCat(t)}
                className={`font-label-caps text-label-caps transition-all -mb-[18px] pb-4 ${cat === t ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <span className="font-technical-data text-technical-data text-on-surface-variant">SORT BY</span>
            <select className="bg-transparent font-technical-data text-technical-data border-none focus:outline-none focus:ring-0 cursor-pointer">
              <option>NEWEST ARRIVALS</option>
              <option>PRICE: LOW TO HIGH</option>
              <option>PRICE: HIGH TO LOW</option>
              <option>PERFORMANCE RANK</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex gap-gutter">
        <Side />
        <Grid cat={cat} />
      </div>
    </main>
  );
};
