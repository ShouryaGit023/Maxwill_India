const Genesis = () => {
    return (
        <section className="relative py-48 bg-surface">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-container/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center relative z-10">
                <div className="lg:col-span-6 relative -mt-32 lg:-mt-48 z-20">
                    <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(169,56,0,0.1)]">
                        <img
                            alt="Design studio"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu6w-dm_d2HSH9aHNeBD5jzfMQB2ySD9j5K8Q07M9bj2o-rtK7H4z3MhStP4CDNMEubDihU6Hr0FPMQhLQ23S8qKeKEXUXSPicGQbttYAV-HSZkozXwJbN6OZKd3i3pOg-V_mDd5pdJI-FunR6RwoHnTzlTdgdjMyx8Jgrk1ZdmkxznKJUx-PM0Z-7zm6pUGSLUiRL9L4SS5SUkuVzfYUActOwGT2G5tdialvj9AuqPQHF9w7XDAco-chpDDW7JyTk294V79MTnvjL"
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-outline-variant/30 rounded-xl pointer-events-none"></div>
                    </div>
                </div>
                <div className="lg:col-span-5 lg:col-start-8 py-12">
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 relative">
                        <span className="absolute -left-12 top-0 text-primary/20 text-8xl font-serif leading-none select-none">
                            "
                        </span>
                        Our Story
                    </h2>
                    <p className="font-body-lg text-body-lg text-secondary mb-10">
                        In 2023, MAXWILL was founded by a group of passionate designers and athletes in the field of pickleball. Noticing the sport's global rise and the lack of high-performance, player-focused equipment, they established MAXWILL to offer the best sports experience.
                    </p>
                    <div className="flex gap-4">
                        <span className="inline-flex items-center px-4 py-2 bg-surface-container-lowest rounded-full font-label-caps text-label-caps text-on-surface-variant shadow-sm border border-outline-variant/50">
                            Precision Engineering
                        </span>
                        <span className="inline-flex items-center px-4 py-2 bg-surface-container-lowest rounded-full font-label-caps text-label-caps text-on-surface-variant shadow-sm border border-outline-variant/50">
                            Aesthetic Restraint
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Genesis;
