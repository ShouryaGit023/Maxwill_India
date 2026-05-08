import { BarChart3 } from "lucide-react";

const Hero = () => {
    return (
        <section className="container mx-auto px-margin-desktop py-32 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 bg-[radial-gradient(circle_at_70%_30%,_var(--tw-gradient-stops))] from-primary/40 to-transparent"></div>
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 z-10 space-y-8">
                    <h1 className="font-display-xl text-5xl md:text-7xl text-on-surface leading-tight">
                        THE SPIRIT OF <br />
                        <span className="bg-gradient-to-r from-on-surface to-primary bg-clip-text text-transparent">
                            MAXWILL INDIA
                        </span>
                    </h1>
                    <p className="font-body-lg text-secondary text-lg max-w-md leading-relaxed">
                        Precision engineering meets architecturalism. Experience the pinnacle of performance aesthetics on the court.
                    </p>

                    <div className="bg-surface-container/70 backdrop-blur-md rounded-2xl p-6 mt-8 max-w-sm shadow-[0_8px_32px_rgba(0,0,0,0.05)] border border-outline-variant/20 relative">
                        <div className="absolute top-4 right-4 text-primary">
                            <BarChart3 size={24} />
                        </div>
                        <h3 className="font-headline-md text-lg mb-6 text-on-surface">Performance Stats</h3>
                        <div className="flex items-center gap-6">
                            <div className="relative w-24 h-24 shrink-0">
                                <svg className="w-full h-full text-primary" viewBox="0 0 36 36">
                                    <path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                                    <path className="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="80, 100" strokeWidth="3"></path>
                                    <path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="60, 100" strokeWidth="3"></path>
                                </svg>
                            </div>
                            <div className="flex-1 space-y-4">
                                <div>
                                    <div className="flex justify-between font-technical-data text-xs mb-2 text-on-surface">
                                        <span>Power</span>
                                        <span>98</span>
                                    </div>
                                    <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-[98%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between font-technical-data text-xs mb-2 text-on-surface">
                                        <span>Precision</span>
                                        <span>95</span>
                                    </div>
                                    <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-[95%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between font-technical-data text-xs mb-2 text-on-surface">
                                        <span>Agility</span>
                                        <span>92</span>
                                    </div>
                                    <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                                        <div className="h-full bg-secondary w-[92%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 mt-16 md:mt-0 relative h-[600px] flex justify-center items-center">
                    <div className="relative w-[350px] h-[450px]">
                        <div className="absolute top-8 left-8 w-full h-full bg-surface-container-high rounded-3xl shadow-xl transform scale-95 opacity-50"></div>
                        <div className="absolute top-4 left-4 w-full h-full bg-surface-container-highest rounded-3xl shadow-xl transform scale-95 opacity-70"></div>
                        <div className="absolute top-0 left-0 w-full h-full rounded-3xl shadow-2xl overflow-hidden border border-white/20 z-10">
                            <img alt="Pickleball Player" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcxLQI5xjGmBK6yGomFf6pHdu9kKLIKyhSfka9hq7GzGOc4OYdyId9dVhYHRyHOlIxaqBbuNjlHRfe3uBw1aL9z4yyr_Ssc8O65Z-7JYmmSOvCKDwIYvexDlSPUxAeF1Xviw4QlqSPI_T1HM2vRfElmI-j6MnpWtbQ1DtU3QC5Mf5_TEZjT2v_Kubyvm4Dmdarj5R3tNb7zO6kma2cf0FDvw3PcIHMDR_hfsM-Ra2iSxlR5DIJGR2BpJIMARWQFmukREWAEQynZSS7" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
