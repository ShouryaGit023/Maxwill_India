export const Card = ({ img, tag, tagStyle, title, sub, price }) => (
  <div className="group product-card-hover">
    <div className="relative aspect-square overflow-hidden bg-surface-container-low mb-6 rounded-xl">
      <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={img} alt={title} />
      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] add-to-cart translate-y-4 opacity-0 transition-all duration-300">
        <button className="w-full bg-primary-container text-on-primary-container py-3 font-label-caps text-label-caps tracking-widest shadow-xl cursor-pointer">QUICK VIEW</button>
      </div>
      {tag && (
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full ${tagStyle}`}>
          <span className="font-technical-data text-[10px]">{tag}</span>
        </div>
      )}
    </div>
    <div className="flex justify-between items-start">
      <div className="space-y-1">
        <h2 className="font-headline-md text-body-lg font-bold tracking-tight">{title}</h2>
        <p className="font-technical-data text-technical-data text-on-surface-variant uppercase">{sub}</p>
      </div>
      <p className="font-headline-md text-body-lg">{price}</p>
    </div>
  </div>
);
