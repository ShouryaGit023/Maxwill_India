const teamMembers = [
    {
        name: "John Chamm",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCe-ZT-AcEpH4HAsgCcaCsKJ1H-0r-V6c0mz0FzlPYGRzStdVWD6Exo1wpZuqLWBJDJZ7FUHAVmrz4jGRTtgDt_EJ3D6a9AkpzitcbkmMnIHqli1ii5tstj7M0rbTG_6KA7bULwxPhhx4Fl0Ch6ziDX_e_GtNLx-pmLNEcpfAvDEhNCeouS9hs9zZvRAIjKMaPwdrQrIPZ_evEnVYseegAPNTHqCsBj8RkSPTEEK6s9vIIm1cvCo5JTHj9GWw9hCb8ArjyA13xp88XE",
        role: "Epilogue",
        isActive: false
    },
    {
        name: "Neren Woltson",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXK-4DPbOjaZy0uJvAajWkwUT4ZDSs7XrAGJrkkhxzmzxnlZ5GaSjCw5y95B-gxbhWUg1HV8NOgAE00lNP7twYg4zuvjH298hPgBQOmiOwSZtKLAzr3ZjlHm9hi_o0kTcybft6K0q_jnZ6arfLURwfwKjvqC3T-J-fywJAYbxTdn4WArc2uPDm8cX1XDuSDqSu1u0lYc-FpKTkoK-lAt7cSN3vAgWOflitlxzHWlsUh9tZ2BEbWhp3A_pCG7NLEWgEmr0By950FFEz",
        role: "Epilogue",
        isActive: false
    },
    {
        name: "Jean Therrer",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPX2HMOeeoSX6Jn5fdcc8mMC-Fq3jf4If2c13IPETmBAv12VKZwtIvh2n7WuZ8q_o7Xyf_4qBvXxG46SZ3_I6_xeNketUsVlw1MwsLO9A1h7VYy4YOwjHmL16kP7CGhfHt_3gtEOPNFiiiz-96x-kJRDAtLGtR0UlqcIagxwYDgtQi41fA6cgmqXUkthH8f4GUqxFlArGAxGYGB70snvA9-GhkX6SxhZiROKRp5nzttFK6u9vVeLVViX16SXMHPnBfOCGq-xkS-L3v",
        role: "Epilogue",
        isActive: true
    },
    {
        name: "Kom Halidhon",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsP9VFavMQ_6mRgiO3X_gxgIRo4x9jEGqvjwe5tsjPoihYc1CaFnOwucDo9mCHGdk9tAy-mP6UKjC6DTNKU-266Tf-I4pMiUkT0LZZXWcLrQCkttRlgTvutF7pSJJl85D3QDDFG4CQr43UV0T13W_4Tx-LBnUVdDYNKaNCYWqirUZ6WqLJd5Ouh3MAQdXIriCZ3KYD2u8t4x0-A64MV83BPBgZ9V40qxfWCvgJdzV6DOZhsAi40HHij6W7R2lqU2ARd1AWe2vFvb9K",
        role: "Epilogue",
        isActive: false
    },
    {
        name: "Helen Boover",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0GHpAX6iwZYLTC0aMnATyBklvybANJqeqQgWEcrWjbaqMcJewSrC3p9XUeuI74a3MWfS63ALutBF4R_9H3L00s5RCj2gsWo-sdnFpt17lA_46UOZzPX0tSoI1uZW6ykYCoS6M9lgsq6ENHKybeX3EZgfCpYsDgxhBA-TbtqZHQbMdNn8iBFEYA3ETe6CgR6kueCKo2yadsZqcYPfBQgYCisHBPhad9AjW_YCE1Cg1YCAzhFWsGzELhdWhU3p3RiX5LzJOWjICwK04",
        role: "Epilogue",
        isActive: false
    }
];

const TeamGallery = () => {
    return (
        <section className="container mx-auto px-margin-desktop py-32 bg-surface">
            <h2 className="text-5xl font-display-xl font-bold mb-16 text-on-surface text-center">Team of Maxwill India</h2>
            
            <div className="flex flex-wrap justify-center gap-8">
                {teamMembers.map((member, index) => (
                    <div 
                        key={index} 
                        className={`w-72 rounded-3xl overflow-hidden bg-surface-container-lowest relative group transition-all duration-500 ${
                            member.isActive 
                                ? 'shadow-[0_20px_50px_rgba(169,56,0,0.15)] transform scale-105 border border-primary/30 z-10' 
                                : 'shadow-md border border-outline-variant/10 hover:shadow-xl hover:-translate-y-2'
                        }`}
                    >
                        <img 
                            alt={member.name} 
                            className={`w-full h-80 object-cover transition-all duration-500 ${
                                member.isActive ? '' : 'filter grayscale group-hover:grayscale-0'
                            }`} 
                            src={member.image} 
                        />
                        <div className={`absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t ${
                            member.isActive ? 'from-on-surface via-on-surface/80' : 'from-black/80'
                        } to-transparent text-white`}>
                            <h4 className={`font-bold ${member.isActive ? 'text-xl' : 'text-lg font-headline-md'}`}>{member.name}</h4>
                            <p className="text-xs font-label-caps tracking-widest text-surface-container-high mt-1 mb-4 opacity-80">{member.role}</p>
                            
                            {member.isActive && (
                                <button className="w-full py-3 border border-primary text-primary font-label-caps tracking-widest text-xs rounded-full hover:bg-primary hover:text-white transition-colors duration-300">
                                    VIEW PROFILE
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamGallery;
