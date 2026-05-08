const features = [
  {
    icon: "public",
    title: "Shipping Worldwide",
    description: "Fast and Reliable Global Delivery"
  },
  {
    icon: "package_2",
    title: "30 Days Return",
    description: "Hassle-Free Returns for Unused Products"
  },
  {
    icon: "verified_user",
    title: "Security Payment",
    description: "Secure Transactions, Peace of Mind"
  }
]

const Catalyst = () => {
    return (
        <section className="bg-on-background pt-32 pb-0 flex flex-col justify-end min-h-[700px] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/20 via-on-background to-on-background pointer-events-none opacity-60"></div>
            
            <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop mb-32 flex flex-col items-center">
                <span className="font-label-caps text-primary-fixed tracking-[0.2em] uppercase mb-8 opacity-80 animate-pulse text-center">
                    The Future of Sport
                </span>
                <h2 className="font-display-xl text-headline-lg lg:text-display-xl text-surface-bright mb-12 drop-shadow-2xl max-w-5xl leading-tight text-center mx-auto">
                    MAXWILL is your sports partner and the catalyst for your potential.
                </h2>
                <button className="group relative bg-primary-container text-on-primary-container font-label-caps text-label-caps px-10 py-5 rounded-full tracking-widest hover:bg-primary-fixed hover:text-on-primary-fixed-variant transition-all duration-500 overflow-hidden shadow-lg hover:shadow-[0_0_50px_rgba(255,95,21,0.5)]">
                    <span className="relative z-10">EXPLORE THE GEAR</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>
            </div>
            
            <div className="w-full py-20 bg-on-background/50 backdrop-blur-md border-t border-outline-variant/10">
                <div className="max-w-container-max mx-auto px-margin-desktop">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="mb-6 p-4 rounded-full bg-surface-container-highest/10 border border-outline-variant/10 group-hover:bg-primary-container/20 group-hover:border-primary/30 transition-all duration-500">
                                    <span className="material-symbols-outlined text-4xl text-primary-container group-hover:scale-110 transition-transform duration-500">
                                        {feature.icon}
                                    </span>
                                </div>
                                <h5 className="font-label-caps text-surface-bright text-lg mb-2 tracking-wide">
                                    {feature.title}
                                </h5>
                                <p className="font-technical-data text-secondary-fixed-dim max-w-[200px] leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catalyst;
