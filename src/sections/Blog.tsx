import { ArrowRight } from 'lucide-react';
import { HorizontalScroll } from '../components/HorizontalScroll';

const posts = [
    {
        id: 1,
        title: 'Safe tool testing: spin up and cancel trials without card chaos',
        date: '20.05.2022',
        image: 'https://picsum.photos/seed/blog1/800/600',
        tags: ['SaaS', 'eCommerce', 'General', 'Woocommerce'],
    },
    {
        id: 2,
        title: 'Safe tool testing: spin up and cancel trials without card chaos',
        date: '20.05.2022',
        image: 'https://picsum.photos/seed/blog2/800/600',
        tags: ['SaaS', 'eCommerce', 'Web Developement', 'WordPress'],
    },
    {
        id: 3,
        title: 'Safe tool testing: spin up and cancel trials without card chaos',
        date: '20.05.2022',
        image: 'https://picsum.photos/seed/blog3/800/600',
        tags: ['SaaS', 'eCommerce', 'General', 'Woocommerce'],
    },
];

export function Blog() {
    return (
        <div className="bg-white py-32">
            <HorizontalScroll
                badge="Blog"
                title="Explore insights, industry trends, and expert perspectives that help businesses build smarter, faster, and more user-focused digital products."
                viewMoreLink="/blog"
            >
            {posts.map((post) => (
                    <div key={post.id} className="w-[80vw] max-w-[600px] shrink-0">
                        <div className="mb-6 overflow-hidden rounded-3xl bg-gray-100">
                            <img src={post.image} alt={post.title} className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105" referrerPolicy="no-referrer" />
                        </div>
                        <div className="mb-4 text-sm font-medium text-gray-500">{post.date}</div>
                        <h3 className="mb-6 text-3xl font-semibold leading-tight text-[#0A1945]">{post.title}</h3>
                        <div className="flex flex-wrap gap-3">
                            {post.tags.map((tag, index) => (
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