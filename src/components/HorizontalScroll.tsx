
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';


interface HorizontalScrollProps {
    children: React.ReactNode;
    badge?: string;
    title?: React.ReactNode;
    description?: string;
    viewMoreLink?: string;
}

export function HorizontalScroll({ children, badge, title, description, viewMoreLink }: HorizontalScrollProps) {
    const targetRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollWidth, setScrollWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setScrollWidth(containerRef.current.scrollWidth - window.innerWidth + 128);
            }
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, [children]);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end start'],
    });

    const x = useTransform(scrollYProgress, [0, 1], [0, -scrollWidth]);

    return (
        <section ref={targetRef} className="relative" style={{ height: `${scrollWidth + window.innerHeight}px` }}>
            <div className="sticky top-0 overflow-hidden py-8">
                {(badge || title || description) && (
                    <div className="mx-auto mb-10 max-w-7xl px-8 md:px-16">
                        {badge && (
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-600 px-4 py-1 text-sm font-medium text-blue-600">
                                <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                                {badge}
                            </div>
                        )}
                        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
                            {title && (
                                <h2 className="text-5xl font-bold leading-tight text-[#0A1945]">{title}</h2>
                            )}
                            {description && (
                                <p className="max-w-md text-lg text-gray-600">{description}</p>
                            )}
                        </div>
                    </div>
                )}
                <motion.div ref={containerRef} style={{ x }} className="flex gap-8 px-4 md:px-16">
                    {children}
                </motion.div>
                {viewMoreLink && (
                    <div className="mt-10 flex justify-center">
                        <a href={viewMoreLink} className="flex items-center gap-2 rounded-full bg-[#FFD659] px-8 py-4 font-semibold text-[#0A1945] transition-transform hover:scale-105">
                            View more <ArrowRight className="h-5 w-5" />
                        </a>
                    </div>
                )}
            </div>
        </section>

    );
}