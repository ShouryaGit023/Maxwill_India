const heroImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkrF5z-KzrUrKMbDXVjCZGR5790hJmDKqsJy32cSuttmgz3bjy9Mwd6Ap9ZvPE_wp8BptvV1bEOe8zUS57JaKL8IndZg8YQDjlhBUZQniPrG3BnkIOfGK6xtBMzBBwr-z8POaLhhjTEi5B18QFnrjFewbmB2H7unlQ6d0PIo1R04g-NgAAXkVOvY4wuuYkhfL906yjH0VEBtxDosxkCJHFQVPHe8xr7NHxMsZKemBSEW5XhlkJGfCRWbqoo95F9BcefycwSBo4UFU'

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#0e1d25]">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroImg}
          alt="Athlete in motion"
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e1d25]/40 via-transparent to-[#ffffff]/90" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        <h1 className="font-display-xl text-white uppercase mb-8 opacity-90 drop-shadow-2xl">
          EXPECT THE BEST.<br />PLAY WITH THE BEST.
        </h1>
        <p className="font-body-lg text-[#e7f6ff] max-w-2xl mx-auto mb-12 opacity-80">
          Engineered precision for the modern athlete. Discover the intersection of high-performance utility and architectural minimalism.
        </p>
        <div className="flex gap-6 justify-center">
          <button className="bg-[#a93800] text-white px-8 py-4 font-label-caps uppercase tracking-widest hover:bg-[#ff5f15] hover:text-[#551800] transition-all glow-hover shadow-[0_10px_40px_-10px_rgba(169,56,0,0.5)] rounded-full">
            Shop Now
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-label-caps text-white uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-[1px] h-12 bg-white/50" />
      </div>
    </section>
  )
}
