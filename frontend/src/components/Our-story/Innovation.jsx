const Innovation = () => {
    return (
        <>
            <div className="w-full h-48 bg-gradient-to-b from-surface to-inverse-surface"></div>
            <section className="py-48 bg-inverse-surface relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-container via-inverse-surface to-inverse-surface pointer-events-none"></div>
                <div className="max-w-container-max mx-auto px-margin-desktop mb-16 relative z-10">
                    <h2 className="font-headline-lg text-headline-lg text-surface-bright mb-4">
                        At the Innovation Forefront
                    </h2>
                    <p className="font-body-lg text-body-lg text-secondary-fixed-dim max-w-2xl">
                        We are actively involved in the pickleball community. We sponsor events and collaborate with top athletes to make best-in-class equipment. As pickleball thrives globally, MAXWILL remains dedicated to providing the best equipment.
                    </p>
                </div>
                
                <div className="flex overflow-x-auto gap-gutter px-margin-desktop pb-12 snap-x snap-mandatory no-scrollbar relative z-10">
                    <div className="flex-none w-[85vw] md:w-[60vw] lg:w-[40vw] aspect-[4/3] relative rounded-xl overflow-hidden snap-center group">
                        <img
                            alt="Carbon fiber detail"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvRgDLG2_Dys9MbAm2Dp-APG_wCvwgkzYZHAu8TO42oejPKQyNvBE8clPJP3y-Lp1kPx9om9__aOHbM66uFSmcPJ_23mxcDHfmsK_abcbTEdHtDPm1l6q13oT0ym6Fk7YNtTVDEEu9eq4KxDAZPKuwawsRWBuYcfIT7FcIHuWEYTyDUNEVO9ErAJyiyJ3AvIajRl6NvltYTjN-4ix_RIp4ymRsgof6EA_rGdJs-86AUXu0ueCkl5TgnGf1cYFCpKtR0HgTr95l8f5E"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/20 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8">
                            <span className="font-technical-data text-technical-data text-primary-fixed mb-2 block">
                                T-700 AEROSPACE CARBON
                            </span>
                            <h3 className="font-headline-md text-headline-md text-surface-bright">
                                Structural Integrity
                            </h3>
                        </div>
                    </div>
                    
                    <div className="flex-none w-[85vw] md:w-[60vw] lg:w-[40vw] aspect-[4/3] relative rounded-xl overflow-hidden snap-center group">
                        <img
                            alt="Grip detail"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-JlxcCRd6XDuVlG3zVIdvbornOotkDxV1nepiLLlh8mx7efykPcE88PUeELHOT2HvZqDG0-bzjORv71MzkUAHWpYns84evw9UxaDpkXaP2XVPoXLa-ut_RujZeARq9zu12mmg1xba0syHcHC7r003UnvZD3WXzcVAozPJiHSpI7-1pz_laoyQFThKi7QiWolZmZRzDdkhx97zRDonNWv1yVvNq1xQaEEnhVd_b4lokXq7vgtJAhiFAmDFRuuP6JIixbwNLZPBr5fe"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/20 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8">
                            <span className="font-technical-data text-technical-data text-primary-fixed mb-2 block">
                                MICRO-CELLULAR CORE
                            </span>
                            <h3 className="font-headline-md text-headline-md text-surface-bright">
                                Kinetic Absorption
                            </h3>
                        </div>
                    </div>
                    
                    <div className="flex-none w-[85vw] md:w-[60vw] lg:w-[40vw] aspect-[4/3] relative rounded-xl overflow-hidden snap-center group">
                        <div className="w-full h-full bg-surface-tint/10 flex items-center justify-center border border-outline-variant/10">
                            <div className="text-center p-8">
                                <span className="material-symbols-outlined text-6xl text-primary-fixed mb-6 block" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
                                    architecture
                                </span>
                                <h3 className="font-headline-md text-headline-md text-surface-bright mb-4">
                                    The Lab
                                </h3>
                                <p className="font-body-md text-body-md text-secondary-fixed-dim">
                                    Explore our testing methodologies and patent-pending technologies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Innovation;
