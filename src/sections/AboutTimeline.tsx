const events = [
    {
        year: '2015',
        title: 'Founded',
        description: 'Web Help Agency was founded in Poltava with a small but dedicated team of 3 people.',
    },
    {
        year: '2017',
        title: 'First 50 Projects',
        description: 'We reached our first milestone of 50 completed projects across various industries.',
    },
    {
        year: '2019',
        title: 'International Clients',
        description: 'Started working with clients from Europe and the USA, expanding our reach globally.',
    },
    {
        year: '2020–2021',
        title: 'Growth & Awards',
        description: 'Despite global challenges, we grew our team, earned Clutch recognition, and delivered 100+ projects.',
    },
    {
        year: '2023',
        title: '350+ Projects',
        description: 'Surpassed 350 completed projects and became a recognised top-rated agency on GoodFirms and Clutch.',
    },
    {
        year: '2025',
        title: 'Today',
        description: 'A team of 15+ professionals, trusted by 150+ clients worldwide, continuing to shape digital futures.',
    },
];

export function AboutTimeline() {
    return (
        <section className="bg-[#F8F9FA] px-8 py-24 md:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-600 px-4 py-1 text-sm font-medium text-blue-600">
                        <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                        Our Journey
                    </div>
                    <h2 className="text-5xl font-bold leading-tight text-[#0A1945]">
                        How we've grown<br />over the years
                    </h2>
                </div>

                <div className="relative">
                    {/* vertical line */}
                    <div className="absolute left-0 top-0 h-full w-px bg-blue-200 lg:left-1/2" />

                    <div className="flex flex-col gap-12">
                        {events.map((event, i) => (
                            <div
                                key={i}
                                className={`relative flex flex-col gap-4 pl-8 lg:w-1/2 lg:pl-0 ${
                                    i % 2 === 0 ? 'lg:self-start lg:pr-16 lg:text-right' : 'lg:self-end lg:pl-16 lg:ml-auto'
                                }`}
                            >
                                {/* dot */}
                                <div
                                    className={`absolute top-1 h-4 w-4 rounded-full border-2 border-blue-600 bg-white lg:top-2 ${
                                        i % 2 === 0
                                            ? '-left-2 lg:-right-2 lg:left-auto'
                                            : '-left-2 lg:-left-2'
                                    }`}
                                />
                                <div className="text-sm font-bold uppercase tracking-widest text-blue-600">{event.year}</div>
                                <div className="text-xl font-semibold text-[#0A1945]">{event.title}</div>
                                <p className="text-gray-600 leading-relaxed">{event.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}