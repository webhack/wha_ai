export function AboutMission() {
    return (
        <section className="bg-white px-8 py-24 md:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
                    <p className="text-2xl font-medium leading-relaxed text-[#0A1945] lg:text-3xl">
                        We believe that close collaboration, transparency, and trust — are not just words, but the foundation of every project we take on.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { icon: '🎯', title: 'Mission', text: 'To help businesses grow through powerful digital products and honest partnerships.' },
                            { icon: '👁️', title: 'Vision', text: 'To be the most trusted digital agency for companies that value quality and reliability.' },
                            { icon: '⚡', title: 'Speed', text: 'We deliver on time without sacrificing quality — every single time.' },
                            { icon: '🤝', title: 'Support', text: 'We stay by your side after launch — your success is our long-term goal.' },
                        ].map((item, i) => (
                            <div key={i} className="rounded-2xl bg-[#F8F9FA] p-6">
                                <div className="mb-3 text-3xl">{item.icon}</div>
                                <div className="mb-2 font-semibold text-[#0A1945]">{item.title}</div>
                                <p className="text-sm leading-relaxed text-gray-600">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}