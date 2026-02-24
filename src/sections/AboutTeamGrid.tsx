const teamPhotos = [
    { seed: 'team1', span: 'col-span-2 row-span-2' },
    { seed: 'team2', span: '' },
    { seed: 'team3', span: '' },
    { seed: 'team4', span: '' },
    { seed: 'team5', span: '' },
    { seed: 'team6', span: 'col-span-2' },
];

export function AboutTeamGrid() {
    return (
        <section className="bg-white px-8 py-24 md:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-600 px-4 py-1 text-sm font-medium text-blue-600">
                            <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                            Our Team
                        </div>
                        <h2 className="text-5xl font-bold leading-tight text-[#0A1945]">
                            The people behind<br />every great project
                        </h2>
                    </div>
                    <p className="max-w-md text-lg text-gray-600">
                        15+ talented professionals united by one goal — to build digital products that truly work.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 auto-rows-[240px]">
                    {teamPhotos.map((photo, i) => (
                        <div key={i} className={`overflow-hidden rounded-3xl bg-gray-100 ${photo.span}`}>
                            <img
                                src={`https://picsum.photos/seed/${photo.seed}/800/600`}
                                alt={`Team photo ${i + 1}`}
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}