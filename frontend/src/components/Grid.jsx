import { Card } from './Card';

const data = {
  PADDLES: [
    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVBuLga2URC1DfSICt5w_SpkZXMXgGXcHenNViecFJYiTPEnOEFuSK3ayCrF7NlEintOvrYIQFzZy-vRDimCuoqHV26XqEJ8W0d-924oOa3dg67TNSV94YJ7GVPh2kgtFvfJ7aHNS0XkOSAH0VCHv9eqo1bPG0O9rJtVoDSjKj0N25etliHa0fMlyZnE3GUof9BsUvqS8F-yrpElZqVVP1omO25rSlNDrYIMJxUa2MRm9LnsLXYVI268buBHPzJBB_YJMivIiOGlip', tag: 'NEW SEASON', tagStyle: 'bg-surface-container-lowest/80 backdrop-blur-md text-primary', title: 'VORTEX PRO C1', sub: 'CARBON FIBER REINFORCED', price: '$249.00' },
    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABn6IRKOxxoh-LwYRbeMwJnKl-YQijYWONjVmU2ktBkj_LnGFckiLCZkcUo013juIZKo_flttb1RWnrTEiVEOw1_P7H3uUnFoCwZOQ-rZYrtpsldOIe-bS4yIFhLCBwnzURRrB8gWc5qo-wwyzdZII4f-OovM9jy2gLMi-GPTb0wW6xjz-_NIE5GWHoCS-ibzQsv6g-8ueR5OVrpuPnxL5IZ0KWe9qGv0hEJSXpl30dIe90ve13c8VhEE_PUriC9Xm6Z8MAGntHMfD', title: 'ONYX ELITE X', sub: 'LIMITLESS SPIN TECHNOLOGY', price: '$285.00' },
    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_hkEKrrMi0o_HkrryK77KL_cHCO8AVTZQ76M0oYFqYidAoOfVSA-i1San1a-6FwT6Fh9oabH8A4Dez5HC3bPzkxqgAGfnzFPKqY2MP9rI6MXgGTEW7H_YG8KRYWicxE-7IYyP_OETg6p_flyPyz9Rad9aXa6q8alHz72WhYEQt291dz0LLpL8uPXLZaZlwS66GH6BxaY4PSigYFOZ_bFfVrfWC6GbRqPqEhVFju4WhDNqmjLBi9dHmJZjA3s30Pp6UPjw7X5VKZG8', tag: 'LIMITED EDITION', tagStyle: 'bg-primary text-on-primary', title: 'AURUM SERIES VII', sub: "COLLECTOR'S RELEASE", price: '$320.00' },
    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAizjdPMlF-URs0JrVRqyQmtejdn5bR0JmejVE2baFi-C5Oa4HXhZcKa42_lcQbjNbbb7qRjg66EQVFbATbEA_bk2Snsh4r0BbhyquV2KWcIf0dQzuVDmN4mPw9JsBQZ2Nxq1j062gQLXWCFE1UGuP9Gn0OKteJp9RjdrN8Jg1ACbVsWn7CVXYrmWh5HnglEaF1qxiLOFbXLaE5Srm3J5KCfgVpLF_JXvRtzDuQvQ6NxSeJ0tnGdSVHDvCn7jVXAfz_k_DnPJegN9QD', title: 'KINETIC CORE Z', sub: 'SHOCK ABSORPTION FOAM', price: '$195.00' },
  ],
  TOPS: [
    { img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=600&fit=crop', tag: 'NEW', tagStyle: 'bg-primary text-on-primary', title: 'AERO TECH TEE', sub: 'MOISTURE WICKING', price: '$65.00' },
    { img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop', title: 'COMPRESSION PULLOVER', sub: 'THERMAL FLEECE', price: '$110.00' },
  ],
  BOTTOMS: [
    { img: 'https://images.unsplash.com/photo-1551854838-212c50b4c184?w=600&h=600&fit=crop', tag: 'BEST SELLER', tagStyle: 'bg-surface-container-lowest/80 text-primary', title: 'PRO STRIDE LEGGINGS', sub: '4-WAY STRETCH', price: '$85.00' },
  ],
  SHOES: [
    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoHegtS5VKgx6PsmehlmNGhcUPxfYvoM8IGYYJedNO4HZS2xFQn6cW3Cmv6two_Bx-XgSH-MKFTg917_n0OnbtttfsPk2BIx7CRi30ka06A875h1Hm-KhDnkz6KSEGjLl02cx9UuF318pb5eF8ijHQgeZC7JbOmgfEQ89PBY8aa-JTEunjbkEnW9TjxZdrb0vKc-oY1DDHEiB4ONeAEdHsxCTnHaZZcA0KwyUi1-tiYWP8XdtWfPw5mxh3I0arJIRNwK_xA3iddA7S', title: 'ACE COURT MASTER', sub: 'MULTI-DIRECTIONAL GRIP', price: '$165.00' },
    { img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop', tag: 'LIMITED', tagStyle: 'bg-primary text-on-primary', title: 'VELOCITY PRO X', sub: 'CARBON PLATE', price: '$210.00' },
    { img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop', title: 'COURT ELITE', sub: 'SHOCK ABSORPTION', price: '$180.00' },
  ]
};

export const Grid = ({ cat }) => {
  const items = data[cat] || [];
  
  return (
    <div className="flex-grow">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-gutter gap-y-16">
        {items.map((i, k) => <Card key={k} {...i} />)}
      </div>
      <div className="mt-24 flex flex-col items-center gap-8">
        <button className="px-12 py-4 border border-outline-variant text-on-surface font-label-caps text-label-caps tracking-widest hover:bg-surface-variant transition-colors cursor-pointer">LOAD MORE PRODUCTS</button>
        <div className="flex gap-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-on-primary font-technical-data cursor-pointer">1</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors font-technical-data cursor-pointer">2</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors font-technical-data cursor-pointer">3</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors font-technical-data cursor-pointer">4</button>
        </div>
      </div>
    </div>
  );
};
