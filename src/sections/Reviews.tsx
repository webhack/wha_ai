import { HorizontalScroll } from '../components/HorizontalScroll';
import { Star } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: 'Halyna Vyliika',
        role: 'Owner, Web Consulting Firm',
        rating: 5.0,
        text: '"Since Web Help Agency came on board, the client has successfully completed more than 50 projects on time. The team shows tremendous dedication to the client\'s project and business. They also establish a smooth workflow through their strong communication and project management skills."',
    },
    {
        id: 2,
        name: 'Halyna Vyliika',
        role: 'Owner, Web Consulting Firm',
        rating: 5.0,
        text: '"Since Web Help Agency came on board, the client has successfully completed more than 50 projects on time. The team shows tremendous dedication to the client\'s project and business. They also establish a smooth workflow through their strong communication and project management skills."',
    },
    {
        id: 3,
        name: 'Halyna Vyliika',
        role: 'Owner, Web Consulting Firm',
        rating: 5.0,
        text: '"Since Web Help Agency came on board, the client has successfully completed more than 50 projects on time. The team shows tremendous dedication to the client\'s project and business. They also establish a smooth workflow through their strong communication and project management skills."',
    },
];

export function Reviews() {
    return (
        <div className="bg-[#F8F9FA] py-32">
            <HorizontalScroll
                badge="Reviews"
                title="We sincerely appreciate our clients for their continued trust"
            >
                {reviews.map((review) => (

                    <div key={review.id} className="w-[80vw] max-w-[500px] shrink-0 rounded-3xl bg-white p-10 shadow-sm">
                        <div className="mb-8 font-bold text-2xl tracking-tight text-[#0A1945]">Clutch</div>
                        <div className="mb-2 text-lg font-semibold text-[#0A1945]">{review.name}</div>
                        <div className="mb-6 text-sm text-gray-500">{review.role}</div>
                        <div className="mb-6 flex items-center gap-2">
                            <span className="font-bold text-[#0A1945]">{review.rating.toFixed(1)}</span>
                            <div className="flex text-[#FFD659]">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                ))}
                            </div>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-700">{review.text}</p>
                    </div>
                ))}
            </HorizontalScroll>
        </div>
    );
}