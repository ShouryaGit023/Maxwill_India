const masonryItems = [
    {
        title: "Engineered Grip",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvBz0N6fXQ6-sA41loUbP03X6tgZsO36pONnNPPG6NA7nDFiu5mvIbRYmvEq4-KtY27somxDrCyx7YW-GFMNCY-N7Jg_1YrBu2JTpVxDxaVlQ8bAQpo6cihKoMBPZY_R6vjf2NnBSFH8b6GVjYffeH-hgB7Fl3y3k6ZfKowpK9ghYiknlxbEnXf6CpFsMAz8zXhKXt17tsBFFv80n4uF_lW-iVl0sSjIzc2TUhHqogGuJNU39jyLrcJprNzjy9iVaeA43wzRc1Q8rG"
    },
    {
        title: "Match Point Focus",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPh1uEUYLqZwaQlM1G3lsWVDd_FzbibyEA9xkspKHKrfHikzMqc7RQtA_HOH9QzN6Rgw5hDhri4sbrrzEmp_ZvBGCJSqen6C6Y3RegOpaG0BFO4Hfigxlj1c7Ctw6ftzMOgjnAR6TFLQb7N8DhhWXkhtaWD1CozzrsdAY0_TahUXx7iJAkFmxk_8nm4wQqKPBPlwNWuHH4P9ZWLXyb9uAKWYwhCcIoxPaDb93ZhqvD4PSfFMpNkUY_PdcxYcbALPTmj_sA-XsIhmwy"
    },
    {
        title: "Architectural Lines",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRaH1ff1DZPtpstlM-Dplzf_q6hNBUQ_eK-MwtLNSmSSFpVWRoSEnanukpUTMu44MAih8BA14eyB_ZFZHRPqG-wYNy3oWeVnh0rJPlcjFRAf5N21qC0t6gUlJHln_QENPc5JtquveAUEyERwjYDyTWHeke0B2Jk0Hq7YHf3MsVF0gcY3G6LmaeSuUVMktI2aLx1wng_1IJVjxyh22-OOXBKrMYr1zNCjAu6rL9sjPoYtzw9xLdhGUxD3H5PCrBZRjqlS7uHAotgJKb"
    },
    {
        title: "Footwear Detail",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkM3lUbfvQsBEJZAAku-cLUAiRYxScHfIAVhiPGS0tu0zH77AlB7IY9a5e1_3sUWFCFZz7K6AajdEI6rWlNqV3d7Q6t-X1zu_jpT1e4biRhm2hIAzK1E8gCmve0Cb1t11Ae1w9zlCs-zWVHAeFtjXUm8RufuCxFR7SyO4Nu_dStLfhMP9zW03pk0CfkywHQmPSbiY5zOs5ygKb9CbyO_K6ycsRL8BJpCvJTRM8nUtES5O72KHZLZmvDC8Jauvx9B3Qeln8PNyo8qEG"
    },
    {
        title: "Court Action",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiGkEVsalNh3AC2T8_t6_3Ax0XVVsKhEu2Kes0kW5tW9u8NoaXeHMICz1EkWKth6ZM3o9kd2KeU7qCdFKwFhHeSwlGn_uiOiFIJoqirPwpctXGDw5DPDBmOdGR9rhBnaE7BJ6TFftgOPVCpY1NcS5tuvY2ejlAHU9GFg0eqwsZ1Gtfrx5pWBrThqU2YJPcLmGCM-DRYB5zKpPczXbTnGrxs0XQEUT9SFUMkWPHAYwkmFqr4m8mjwiM1QosikrPAhmE9Tp3su9sZYP3"
    },
    {
        title: "Shadow Play",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0ccO3qsemotKVeujMvQPDVfazyov3siCYZWZEDOXI828bd2BU6rW4Vkj1oBQaGqbpNcQfemUmQXhi6XwZ463BBNPsHkLZUlbP1gTjdV06-3HHtGTV5Y5xCbQymRUYUs6xy0dPRyxGn45P3JEo4gNNWHmvZB8Hw0a9rq5vc3u8O6XLhEca5cV7t9052_Bt_PQO3nxIZiugr6prbLAksl8o3M5DViFb_tf-bg_0VBmKT0ZRnVGWEz_UQ_PhU7-pbXPwoSl2flAbWEHD"
    },
    {
        title: "Precision Equipment",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTbB0U6LGhTki1YCLge2JaSkgBpaWnKusWtu6dCJ6RAVnRyWp-Y1g-SeCb3sFKMgRfq4CrqyED_5vuwcR4-6ctBNsK_w-gcMddCOzccv02iL1gssqIwV6f2XcLsleaHPS-5ilslg2JuepikSZifbf6Gi6XWYlCID0f0ErqT2KFxeyPeK3J3JU_JkA5bUdmS23DydT6K4iQbNCEzy8jNzjWA0w4GjlcusC3_AUO5f60VtHGEq1b4ZjH0mpxVmDOHTI0BgAKbEar_iK4"
    }
];

const MasonryGrid = () => {
    return (
        <section className="container mx-auto px-margin-desktop py-32 bg-background">
            <h2 className="text-4xl font-display-xl font-bold uppercase tracking-widest mb-16 text-on-surface">Court Aesthetics & Action</h2>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-8 space-y-8">
                {masonryItems.map((item, index) => (
                    <div key={index} className="relative overflow-hidden rounded-2xl shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] group break-inside-avoid border border-outline-variant/10 transition-all duration-500">
                        <img 
                            alt={item.title} 
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                            src={item.image} 
                            loading="lazy"
                        />
                        <div className="absolute bottom-0 w-full bg-gradient-to-t from-on-surface via-on-surface/80 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <p className="text-primary font-label-caps tracking-widest uppercase">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MasonryGrid;
