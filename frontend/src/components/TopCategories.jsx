const cats = [
  {
    label: 'Paddles',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfK3qBRBo9QNNAaIsWgXzSmW2UeOaYHH6NJeGJZRe0mlCG1cEpxDtD03joS091rgfgScTdrhLY0diZ7BvE3lBERMb50hWlx_hOaPtotXQtaBTU0EtaVm_onErNeUO6YgQy61BgKvvc2Hd8Q1p1ni2iXEimvOmR7vNHMFeNNn-4fHvKd1E5tNPOM5lLOtCGvt8lDxBASgLFc7TAK8ca4ajBzWhCSN8ipmDXtxwxwSVlbb-FeHIA8q_SEjKHC97SsbNszmzWuZEQfd0',
  },
  {
    label: 'Balls',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPyoG0gdH_kHhbW90C0bu06uD-U-EA31rqfRE3GG3ZtYoL0qXceLRtP3TkprWvUjf0dD0I8uwlwb-TH884cu5ddE6OlEjUEYG4rOYxEtCiblEU9AO78JZt6PPXnFdZDCkrqAjaDHFvQrWczbdej_ILHhxzDbXgGHF3TXy--0YItA6lY_GmfCyZFS_keqv9qpQI5cGfdi9nW-dh_4i6fzjV7TXKTWk7DqqVYqOfMZWGOfvaJk4EVmQp5j8OZb3rAFIOg7QRpWwyZlg',
  },
  {
    label: 'Accessories',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4BUSgW1gyuY9s1-_uXV64W7QT8Jomoi8pYSyE2vKzT_0LeElkxDH-8migWI0V86hOCF33mpakM2Owe0d0Iudf-qQv4Kc8PRzAJxDzbLMnJjwu3dOLLrNH4NUX2pRfMA3Q8StaG134ACnyprrnVknaG8L7y50Z1kyWdGzH2gMcmcNldGgDZZm7vK8GA4Ze3msqhivqv-ZCDQMJ4_AoGqNVkBJ5JJ-SUAkB02ehIAESZHXQiQRCRD8O5FBWyg48JWFjQ0enUyK4d9A',
  },
  {
    label: 'Apparel',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTt-Pc_IuAvb9khDm4wlKN1Wj41UGNM0PJdaViP8ZMpB2wRWqqCLCN9nu6OoyKxuez4mv_wkLkDmY0MXwCoHpO3iHFYsyIKf7TOh62t7j-qbSF2ihFMIKAkNhWfq1h1rtHh5KWjfLf1RxIJICA9m7_OaM6VOHYXXUpf99DXJuKFAVpCPm4y_tEyJH-mZ1-M7xuRNOndYp5ejvvcJ8SbVHRi5ibWHncz5Ycl96GkGln-NM-YNtTHq3Yy4qoF-EWMdOgzEWYtpHFJcM',
  },
]

export default function TopCategories() {
  return (
    <section
      className="bg-[#f4faff] overflow-hidden"
      style={{ padding: '120px 64px' }}
    >
      <div className="max-w-[1440px] mx-auto">
        <h2 className="font-headline-lg text-[#0e1d25] mb-12 text-center">Top Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cats.map((c) => (
            <div
              key={c.label}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              style={{ aspectRatio: '3/4' }}
            >
              <img
                src={c.img}
                alt={c.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1d25]/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="font-headline-md text-white">{c.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
