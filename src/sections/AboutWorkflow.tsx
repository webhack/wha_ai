import { ArrowRight } from 'lucide-react';

const steps = [
    {
        number: '01',
        title: 'Share Your Request',
        description: 'Tell us about your project — goals, timeline, and ideas. We\'ll listen carefully and ask the right questions.',
    },
    {
        number: '02',
        title: 'Strategy & Planning',
        description: 'We analyse your business, competitors, and audience to build a clear roadmap and project plan.',
    },
    {
        number: '03',
        title: 'Design & Development',
        description: 'Our team creates the design and builds the product iteratively, with regular demos and your feedback.',
    },
    {
        number: '04',
        title: 'Launch & Support',
        description: 'We launch your project and stay available for support, improvements, and scaling.',
    },
];

export function AboutWorkflow() {
    return (
        <section className="bg-[#F5F5F5] px-8 py-24 md:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
                    <div>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-600 px-4 py-1 text-sm font-medium text-blue-600">
                            <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                            How We Work
                        </div>
                        <h2 className="text-5xl font-bold leading-tight text-[#0A1945]">
                            Our workflow is designed to make collaboration smooth, clear, and efficient — from the first message to the final launch.
                        </h2>
                    </div>
                    <div className="flex justify-end">
                        <a
                            href="#contact"
                            className="flex w-fit items-center gap-2 rounded-full bg-[#FFD659] px-8 py-4 font-semibold text-[#0A1945] transition-transform hover:scale-105"
                        >
                            Share Your Request <ArrowRight className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, i) => (
                        <div key={i} className="rounded-2xl bg-white p-8 shadow-sm">
                            <div className="mb-6 text-4xl font-bold text-blue-100">{step.number}</div>
                            <h3 className="mb-3 text-xl font-semibold text-[#0A1945]">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}