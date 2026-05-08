const reviews = [
  {
    initials: "EC",
    name: "Emily Chen",
    title: "Lightweight and Durable!",
    content: "The Aurus X is light, durable, and perfect for improving my Pickleball game! Highly recommend!"
  },
  {
    initials: "CE",
    name: "Chris Evans",
    title: "Perfect for All Players!",
    content: "Whether you’re a beginner or pro, The Victory PRO paddle feels amazing and performs beautifully!"
  },
  {
    initials: "SD",
    name: "Sophia Davis",
    title: "Amazing Grip and Balance!",
    content: "The Powerserve paddle’s grip and balance improved my control and precision. Love it on the court!"
  }
]

const Testimonials = () => {
    return (
        <section className="py-48 bg-surface-container-lowest">
            <div className="max-w-container-max mx-auto px-margin-desktop">
                <div className="text-center mb-16">
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">
                        What Players Say
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                    {reviews.map((review, index) => (
                        <div 
                            key={index} 
                            className="bg-surface-container-low p-8 rounded-2xl flex flex-col gap-6 border border-outline-variant/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="flex text-[#ffcb69] gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                                        star
                                    </span>
                                ))}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-headline-md text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
                                    {review.title}
                                </h3>
                                <p className="font-body-md text-secondary leading-relaxed italic">
                                    "{review.content}"
                                </p>
                            </div>
                            <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/5">
                                <div className="w-12 h-12 rounded-full bg-primary-fixed-dim flex items-center justify-center font-bold text-on-primary-fixed shadow-inner">
                                    {review.initials}
                                </div>
                                <span className="font-label-caps text-on-surface font-semibold tracking-wide uppercase">
                                    {review.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
