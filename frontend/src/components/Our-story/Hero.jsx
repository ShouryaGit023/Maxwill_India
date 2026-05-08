const Hero = () => {
    return (
        <section className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden bg-on-background">
            <div className="absolute inset-0 z-0">
                <img
                    alt="Athlete swinging"
                    className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9sIUGvJT0bKjNtX9E9ug2jiMwW4wJ5v636zeIs8eDMqa9i59D42-0479-Y4L2GKwxGI4SGByJR8OpSLO5KMdFtsF8fbHxDknB4GJqPKqXGwomc6mDFUHuPea8tFF3gCyNxlT83pKh37Jjq_D3JCFQ3sNUbDL7UWRvrwAJSRc0KZwNukvXLghMETO99cso6cld1AnzvImMoAfduBr6Vpc-rUoGDEJ8R1qBfias_GclPQo2Kp8cjh1-sRkQZ7bchyucmx1KUKOMuohs"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10 h-full w-full"></div>
            </div>
            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-20">
                <span className="font-label-caps text-label-caps text-primary-fixed tracking-widest uppercase mb-8 block opacity-80">
                    The Maxwill Genesis
                </span>
                <h1 className="font-display-xl text-display-xl text-surface-bright max-w-4xl mx-auto drop-shadow-2xl">
                    Every racket swing is a step forward.
                </h1>
            </div>
        </section>
    );
};

export default Hero;
