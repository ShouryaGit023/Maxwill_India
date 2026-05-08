const brandImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJyA5qWO4kLbPoxo5QH1JIVISK2QTlPNBwI3-jFEfCyUxHV_NnmISj049F7LJDOgicUAYca29UvIpy7p0U7s2yKcmKQURe38QJ1vzSjemjf-9nri_dF4UYWmtAiiYPQEI-xGXOJq7mHQxc_XN137VxMpDb_m1od2l0n86Boj8l2FJMak9U_GyOSnnRiIis_kFnitUk97FO0dLW5e5P5bJ83GT61STINzwNvBBpOokX9aXrqogN983NGVEYg6bh5uzzEMLW5Xrgm7U'

export default function AboutMaxwill() {
  return (
    <section
      className="bg-white relative overflow-hidden"
      style={{ padding: '120px 64px' }}
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="font-label-caps text-[#a93800] uppercase mb-4 block">About Maxwill</span>
          <h2 className="font-headline-lg text-[#0e1d25] mb-8">Crafted for Performance and Durability</h2>
          <p className="font-body-lg text-[#5b4138] mb-8">
            We are dedicated to growing the global pickleball community by providing elite equipment that empowers players of all levels. Our relentless pursuit of perfection drives our engineering process.
          </p>
          <button className="border-b-2 border-[#a93800] text-[#a93800] pb-1 font-label-caps uppercase hover:text-[#ff5f15] hover:border-[#ff5f15] transition-colors">
            Discover Our Story
          </button>
        </div>
        <div className="relative rounded-3xl overflow-hidden" style={{ height: '600px' }}>
          <img src={brandImg} alt="Brand Story" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#a93800]/20 to-transparent mix-blend-overlay" />
        </div>
      </div>
    </section>
  )
}
