const Community = () => {
    return (
        <section className="py-section-padding bg-surface-container-low overflow-hidden">
            <div className="max-w-container-max mx-auto px-margin-desktop">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">
                            Growing the Global Pickleball Community
                        </h2>
                        <p className="font-body-lg text-body-lg text-secondary">
                            Maxwill is dedicated to expanding the reach of pickleball, making it accessible and enjoyable for players around the world. By focusing on quality, performance, and player satisfaction, we aim to foster a global community that shares our passion for the sport. Every product in the Maxwill lineup is crafted to support athletes in realizing their full potential on the court, empowering both new and seasoned players to experience the joy of pickleball to the fullest.
                        </p>
                    </div>
                    <div className="order-1 lg:order-2 relative">
                        <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                            <img
                                alt="Female pickleball player on court"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbkCdoy4QAhCzbPNBpK4mX5WFhoL0iyeWUPnSx8Kvb_ddWnAGVSKaBkOBlhK0N0mhKbKhrR5Fus9TefZOZlghdp7bATZi_c9JvSmOen4y2G7S_Km-yMv-JfRrd9xigAnkubeNFU_zsY5n0kcz8tocS1C9Ly9oyABD0riQVER6FaErG7HjcxY187m8wGCBpiB_01w9VrKVs_lvP77Dt2vpw13uYYfuw4-PtDVzA5qlgC4WHFbFw4Sb1hYLEEMdHEucKFbOxtf_hSHaH"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Community;
