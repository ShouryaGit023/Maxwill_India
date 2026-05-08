const products = [
  {
    name: 'Maxwill Victory Pro X MVP1MX Extended Paddle',
    price: '$231.20',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLL2Vj2qtd3E5ig9W-wHHfMF4kPdeytRgrHajbtIT5sWp6DwKmjefB9Tj-YtnTF6ksFZHAL17S8xakM-U6YAoL7X0_t-nEEQC4OxaxYgaRQkmOxoGvS_Oo9yyS4z13KKtj0b9tMtavlD-_KlRG7CnGm5driTpZ2JFfHPYVZYM-CP7IC9BUAVJdxICMbcmUUFmBzHnRzoqTuGwQ6ZVzlIEnFviV7t8vf5kXGsjkoyLQxL7wRcdqYVP-uskS_8wIxt1hHrlKIJJOOBA',
  },
  {
    name: 'Maxwill Aurus X MARX1F Red Power Paddle',
    price: '$108.99',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDexbrO0oeyKGK9MfJ8ipkpv5zOJGcDwr2YZj-VJNHLUpg4_mbKXmC5tgy2EgnsBkoyx8nBGfdFrgcFsuaaxPfhbdJCN8TW4eVO-dJLi-uFx_vKey-q7CrvO0rux0MuBtlsH9Ju1TqNrysNZ4mrKy9zl_jEqn5Fm_RRQiRTA4gll7M_8VWsXQEo6jC5Ye4aU623_8PVu9TLLF6VpOOuhcDd5iw1JsQ3blt3tP-qhbq84uSScqFj6C65SkJFZevqW7jXxtDEU0EayPY',
  },
  {
    name: 'Maxwill PowerServe MPS1M USAPA Paddle',
    price: '$49.99',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYWT2xOT9yknYHfigIxDzJgJ06br4WCKPuFDY_caHBnlNBmAI1yM9q8mV2kQbHlC-CQUmeszCELuK5cFuXKqWFqVtRDkBHlCqSFCm-JcYc1qfIXlw3UnH-iul0tUK1xDlArB2pHaQbT6B-Y5BUwY5Dz1om0JuGhYVpuh0dNOargep9iCFaaRL6TrNd5kQVDXvqTspvz7otjqAF5j9IsZpfooBRs-HY7QOmq6vibU_VeF5HoJP9pk3Ekogu-2zinSgupg_HZQ965C0',
  },
]

export default function TrendingProducts() {
  return (
    <section
      className="bg-[#f4faff] relative"
      style={{ padding: '120px 64px' }}
    >
      <div className="max-w-[1440px] mx-auto">
        <h2 className="font-headline-lg text-[#0e1d25] mb-12 text-center">Trending Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.name} className="glass-panel rounded-2xl p-6 group">
              <div className="relative mb-6 overflow-hidden rounded-xl bg-white flex items-center justify-center" style={{ aspectRatio: '1/1' }}>
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-3/4 h-3/4 object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#f4faff]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                  <button className="glass-pill px-6 py-2 text-[#0e1d25] font-technical-data uppercase hover:bg-white transition-colors rounded-full">
                    Quickview
                  </button>
                  <button className="bg-[#a93800] text-white px-6 py-2 font-technical-data uppercase hover:bg-[#ff5f15] transition-colors rounded-full">
                    Add to Cart
                  </button>
                </div>
              </div>
              <h3 className="font-technical-data text-[#0e1d25] mb-2">{p.name}</h3>
              <p className="font-body-lg text-[#a93800] font-bold">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
