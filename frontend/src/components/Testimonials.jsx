const reviews = [
  {
    quote: '"Game-Changing Quality. The control and power are unmatched."',
    name: 'John Miller',
    initials: 'JM',
  },
  {
    quote: '"Amazing Grip and Balance. It feels like an extension of my arm."',
    name: 'Sophia Davis',
    initials: 'SD',
  },
]

function Stars() {
  return (
    <div className="flex text-[#a93800] text-sm mt-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      className="bg-white relative overflow-hidden"
      style={{ padding: '120px 64px' }}
    >
      <div className="absolute -left-1/4 top-1/2 w-1/2 h-1/2 bg-[#daebf5] rounded-full blur-[120px] opacity-40 -translate-y-1/2" />
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((r) => (
            <div key={r.name} className="glass-panel rounded-3xl p-12 relative">
              <span
                className="material-symbols-outlined text-4xl text-[#a93800]/30 absolute top-8 left-8"
              >
                format_quote
              </span>
              <p className="font-headline-md text-[#0e1d25] mb-8 relative z-10">{r.quote}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#d5e5ef] flex items-center justify-center font-bold text-[#0e1d25]">
                  {r.initials}
                </div>
                <div>
                  <p className="font-technical-data text-[#0e1d25] uppercase">{r.name}</p>
                  <Stars />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
