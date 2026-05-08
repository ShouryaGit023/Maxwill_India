import { ChevronLeft, ChevronRight } from "lucide-react";

const FeaturedSlider = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-surface">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-20 blur-xl">
                <img alt="Blurred background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHNShUgyKbDsP1iqnX03DRbBeBbCl4uttehACfAZXw6woFOD7YfDwVRfAzE8QsjW4GrUJW02-ED4NS0GJARRs_yWK-wT-6Uceecel_xQb9ZmFUbIBVBaOnf2ocK-1rj2-I-sx5BZjtqHe3nKI-99IIrJ_UyHscs5s5vjZ633p1DwDWyx-GpuGUx5YVHJ_07n1lZ_cxJUbSMktHzqtMm2HidxgiV32FpWipgerRMhX26spFoelnoeQdiZA2o2zMayR6teqZdpYQfNaS" />
            </div>
            
            <div className="container mx-auto px-margin-desktop relative z-10">
                <div className="relative max-w-5xl mx-auto h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] group">
                    <img alt="Precision in Motion" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvjtXWCAR0hN8yVUSiKFSB96SoI4HPdhodsHYkWlWzArwNfYuHkrsavPE1D0TYhbR-6VdebUjmIC6vN0EaL1HR227fpmrLHEZIt4f9OrFE7JlpvvePJqgpZ0aUJx7kShwHEzm63eZu8Ga8ptAvXFGkPufwdI-65N5UpPLpUX1891Vm8OmF5heYaaDsp-roimAr9HejG8cwa8GByZuf6nCBdMTEEcOPrD80Y4wPeoBC1k6hZ9rYR3cJ97Yhn5oFcFQcP1eHzVe9y4kZ" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 p-12 w-full">
                        <h2 className="text-5xl font-display-xl font-bold text-white mb-4 drop-shadow-lg">PRECISION IN MOTION</h2>
                        <p className="text-surface-container-highest font-body-lg text-lg">The new standard for elite court dynamics.</p>
                    </div>
                </div>

                <div className="flex items-center justify-center mt-12 gap-8">
                    <button className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface hover:text-primary hover:border-primary transition-colors bg-surface-container-lowest shadow-sm hover:shadow-md">
                        <ChevronLeft size={24} />
                    </button>
                    <div className="w-80 h-1.5 bg-surface-container-high rounded-full relative overflow-visible">
                        <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary-container w-1/3 rounded-full relative">
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-surface-container-lowest border-2 border-primary rounded-full shadow-[0_0_15px_rgba(255,95,21,0.4)]"></div>
                        </div>
                    </div>
                    <button className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface hover:text-primary hover:border-primary transition-colors bg-surface-container-lowest shadow-sm hover:shadow-md">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedSlider;
