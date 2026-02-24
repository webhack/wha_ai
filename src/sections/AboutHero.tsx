
export function AboutHero() {
    return (
        <section className="bg-white px-8 pt-48 pb-24 md:px-16">
            <div className="mx-auto max-w-4xl text-center">
                <h1
                    className="mb-8 text-[#0A1945]"
                    style={{
                        fontFamily: 'SF Pro, sans-serif',
                        fontWeight: 700,
                        fontSize: '64px',
                        lineHeight: '110%',
                        letterSpacing: '0%',
                        textAlign: 'center',
                        textTransform: 'capitalize',
                    }}
                >
                    We Challenge What's Now,<br />
                    To Shape What's Next. Every Day.
                </h1>
                <p
                    className="text-gray-600"
                    style={{
                        fontFamily: 'SF Pro, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '130%',
                        letterSpacing: '0%',
                        textAlign: 'center',
                    }}
                >
                    Web Help Agency (WHA) is a technology engineering company based in Poltava, Ukraine — one of the most promising destinations for IT outsourcing. We provide cost-effective, transparent, and client-focused IT solutions for small and medium-sized businesses worldwide. From product design and development to ongoing support, we cover the entire software lifecycle.
                </p>
            </div>
        </section>
    );
}