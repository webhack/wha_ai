import { ArrowRight } from 'lucide-react';
import { HorizontalScroll } from '../components/HorizontalScroll';

const projects = [
    {
        id: 1,
        title: 'One platform for all marketplace needs',
        image: 'https://picsum.photos/seed/proj1/800/600',
        tags: ['SaaS', 'eCommerce', 'eCommerce', 'eCommerce', 'eCommerce', 'eCommerce'],
    },
    {
        id: 2,
        title: 'One platform for all marketplace needs',
        image: 'https://picsum.photos/seed/proj2/800/600',
        tags: ['SaaS', 'eCommerce', 'eCommerce', 'eCommerce', 'eCommerce', 'eCommerce'],
    },
    {
        id: 3,
        title: 'One platform for all marketplace needs',
        image: 'https://picsum.photos/seed/proj3/800/600',
        tags: ['SaaS', 'eCommerce', 'eCommerce', 'eCommerce', 'eCommerce', 'eCommerce'],
    },
];

export function Projects() {
    return (
        <div className="bg-white py-32 ">

            <HorizontalScroll
                badge="Portfolio"
                title={<>Explore our<br />Recent Projects</>}
                description="Recognizing the uniqueness of each site, we work closely as a team to ensure a truly user-friendly and selling site"
                viewMoreLink="/projects"
            >

            {projects.map((project) => (
                    <div key={project.id} className="w-[80vw] max-w-[800px] shrink-0">
                        <div className="mb-6 overflow-hidden rounded-3xl bg-gray-100">
                            <img src={project.image} alt={project.title} className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105" referrerPolicy="no-referrer" />
                        </div>
                        <h3 className="mb-6 text-3xl font-semibold text-[#0A1945]">{project.title}</h3>
                        <div className="flex flex-wrap gap-3">
                            {project.tags.map((tag, index) => (
                                <span key={index} className="rounded-full border border-blue-200 px-4 py-1.5 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50">
                  {tag}
                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </HorizontalScroll>
        </div>
    );
}