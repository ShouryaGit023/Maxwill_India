const teamMembers = [
  {
    name: "Shrey Surya Mishra",
    role: "PRO COLLABORATION",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpFcIU_5nTYkbUJ42IzQncwobhRTo89ufxEQ39do7b9PMcXtrYrorT6kjqrSpZn8ExRDvB67CmCJQLLW1Zj0rmHVh2JOs5askP2x1IYwhghkTfab0E04RyyqaEeI94YHs3bEimyBe3cpmro4AwAAJc9IA7b-y_xgyz15Icyy6aUytHvy1uE_xHnlOAAgpCwvJ-5vtUZXmi1MC9FoNealLwQMXUyqLZT7JpW6OAiL9YGIvz3kXxpz5plTrrLyqM4VAK6vMjxWs8OLwg",
    aspect: "aspect-square",
    offset: "lg:mt-12"
  },
  {
    name: "Mario Acuyo Osorio",
    role: "PRO COLLABORATION",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4EBCttQoREUzqtCa6Ku3rrg9rpqGH7rGtfifGpdN4q47IHnQvt6v-MagTc92Sw_1A5kHdt5S8CCUMr2inQg47ZEgbX6TuJtpfMe0tcf229W52e9nRcDhkQuZjL4HO0DNYsS2voxmov6D73KVWbzIyOwKFFiTn5fFt-AlbH-scULaaykHmVwohJZZCau1FC89u3MKmjZ6T957Fq_hVgtDfUevRD_f5M5PAKKCC07D8mloAfaW7jwlY-gu8Dknil9fSWazDaFflC_3C",
    aspect: "aspect-[4/5]",
    offset: "mt-0"
  },
  {
    name: "Zahara Miriam",
    role: "PRO COLLABORATION",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJu2MTF6El_1mWzQTCa01jTUTVvpSmuQ6vru4IjmpOXzIC0rn3GI2T45GYVrL6DsjaUlYfoiBLYRzVx9r65KrUpCSoaGaQkdWsakZ2c56OkSwCmOScVEieTgYGc5nso2mHPNwm9cKRXSi61hnIr-VtNxqtBVWsy8wcrLCtBvdovnhSAerglJjT0aqasH_0uSi_bxEl29cNS9WocSNuhmKs4l88duU-aq-TBRa92UmlMIxjm53fE3G8FhJdG3-paGfz2SQ2zRqWINXb",
    aspect: "aspect-square",
    offset: "lg:mt-24"
  },
  {
    name: "Kaitlynn Hart",
    role: "PRO COLLABORATION",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbFI9na2qbsnTUiYXrWZzmrTkildWaKAT0moHno9LbMxZfTdwXOMD_pBobY9xjvh8t3BdqKoj7QX6jMhMYHx46wH-0rVsf7wM3XV1rvmMZP-vqjlwX0tPsBdp-Rlp2-rRRXh-kk7OrVt5m-Ti_PxgmnTUlZJCBSsc-td7x1HMmvAFAovGi8syF7efAbcf3fJYGv8f8291IkrgRes2UJFt0ixG_3FrxihdDdb2tYOxfVLqXxrsbEmDBAhS54ZAHqHMrRh8YCAvHfHyD",
    aspect: "aspect-square",
    offset: ""
  },
  {
    name: "Samarth Surya Mishra",
    role: "PRO COLLABORATION",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAq1w3T1dJpnmA7DFML4tslK7pZePJJ59uPFQYMlJM9ujfyeLUoIBDAoiJjO_DsoGDfMT42xxqh1Q7EToLKbysu4TTV9ZjsPv5ue32rO5NDIrOve023ph0ebWjCmFwn9GNSx5n1wfjqJO3Kf6ydzjYSmYXepi7exB6JNCa1Xzqj6QPihElnWaZLRH8IscWsvmrVxbzC2t6gxn73R39uaQL9yu55Y1Xp-NDloRGyfNHgmbPkOv8q_2jeDziJv-SFEXtOdF3JHh8v5ERD",
    aspect: "aspect-square",
    offset: ""
  }
]

const Team = () => {
    return (
        <>
            <div className="relative w-full h-32 bg-inverse-surface overflow-hidden">
                <div className="absolute inset-0 bg-surface transform -skew-y-3 origin-bottom-left scale-110"></div>
            </div>
            <section className="py-48 bg-surface relative z-10">
                <div className="max-w-container-max mx-auto px-margin-desktop">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">
                            A Syndicate of Excellence
                        </h2>
                        <p className="font-body-lg text-body-lg text-secondary">
                            We don't just sponsor athletes; we collaborate with visionaries who demand more from their gear.
                        </p>
                    </div>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-gutter space-y-gutter">
                        {teamMembers.map((member, index) => (
                            <div 
                                key={index} 
                                className={`break-inside-avoid bg-surface-container-lowest/40 backdrop-blur-lg rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/20 hover:shadow-[0_20px_50px_rgba(169,56,0,0.12)] transition-all duration-500 group cursor-default`}
                            >
                                <div className={`relative overflow-hidden rounded-lg mb-6 ${member.aspect}`}>
                                    <img
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        src={member.image}
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                <span className="font-label-caps text-label-caps text-primary mb-2 block tracking-wider">
                                    {member.role}
                                </span>
                                <h4 className="font-headline-md text-headline-md text-on-surface mb-1 group-hover:text-primary transition-colors duration-300">
                                    {member.name}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Team;
