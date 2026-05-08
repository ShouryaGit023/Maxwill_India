const cards = [
  {
    tag: 'Just Dropped',
    tagColor: 'text-[#a93800]',
    title: 'New Arrivals',
    hoverBg: 'group-hover:bg-[#a93800]',
    hoverText: 'group-hover:text-white',
    hoverBorder: 'group-hover:border-[#a93800]',
  },
  {
    tag: "Player's Choice",
    tagColor: 'text-[#a93800]',
    title: 'Best Seller',
    hoverBg: 'group-hover:bg-[#a93800]',
    hoverText: 'group-hover:text-white',
    hoverBorder: 'group-hover:border-[#a93800]',
  },
  {
    tag: 'Limited Time',
    tagColor: 'text-[#ba1a1a]',
    title: 'Clearance Sale',
    hoverBg: 'group-hover:bg-[#ba1a1a]',
    hoverText: 'group-hover:text-white',
    hoverBorder: 'group-hover:border-[#ba1a1a]',
  },
]

export default function CollectionHighlights() {
  return (
    <section
      className="bg-white relative overflow-hidden"
      style={{ padding: '120px 64px' }}
    >
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#daebf5] rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/4" />
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {cards.map((c) => (
          <div
            key={c.title}
            className="glass-panel rounded-2xl p-8 h-[300px] flex flex-col justify-end relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#f4faff] to-transparent opacity-50" />
            <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className={`font-label-caps uppercase mb-2 block ${c.tagColor}`}>{c.tag}</span>
              <h3 className="font-headline-md text-[#0e1d25] mb-4">{c.title}</h3>
              <div
                className={`w-10 h-10 rounded-full border border-[#e3bfb2] flex items-center justify-center text-[#0e1d25] ${c.hoverBg} ${c.hoverText} ${c.hoverBorder} transition-all`}
              >
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
