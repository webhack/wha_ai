import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const width = useTransform(scrollYProgress, [0, 1], ['45vw', '100vw']);
  const height = useTransform(scrollYProgress, [0, 1], ['60vh', '100vh']);
  const right = useTransform(scrollYProgress, [0, 1], ['32px', '0px']);
  const top = useTransform(scrollYProgress, [0, 1], ['50%', '0%']);
  const y = useTransform(scrollYProgress, [0, 1], ['-50%', '0%']);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ['24px', '0px']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden bg-[#F5F5F5]">
        <motion.div style={{ opacity }} className="absolute left-0 top-0 flex h-full w-[55%] flex-col justify-center px-8 md:px-16">
          <div className="mb-6 inline-flex items-center gap-3 text-[#1540D9]">
            <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0H12V4H8V0Z" fill="currentColor"/>
              <path d="M4 0H8V4H4V0Z" fill="currentColor"/>
              <path d="M0 4H4V8H0V4Z" fill="currentColor"/>
              <path d="M0 8H4V12H0V8Z" fill="currentColor"/>
              <path d="M0 12H4V16H0V12Z" fill="currentColor"/>
              <path d="M0 16H4V20H0V16Z" fill="currentColor"/>
              <path d="M4 20H8V24H4V20Z" fill="currentColor"/>
              <path d="M8 20H12V24H8V20Z" fill="currentColor"/>
            </svg>
            <span className="text-[16px] font-[590] leading-none tracking-normal" style={{ fontFamily: 'SF Pro, sans-serif' }}>
              Trusted by 150+ clients
            </span>
            <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
              <path d="M8 0H12V4H8V0Z" fill="currentColor"/>
              <path d="M4 0H8V4H4V0Z" fill="currentColor"/>
              <path d="M0 4H4V8H0V4Z" fill="currentColor"/>
              <path d="M0 8H4V12H0V8Z" fill="currentColor"/>
              <path d="M0 12H4V16H0V12Z" fill="currentColor"/>
              <path d="M0 16H4V20H0V16Z" fill="currentColor"/>
              <path d="M4 20H8V24H4V20Z" fill="currentColor"/>
              <path d="M8 20H12V24H8V20Z" fill="currentColor"/>
            </svg>
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-[#0A1945] lg:text-6xl">
            Building Digital Products<br />That Drive Your Growth
          </h1>
          <p className="mb-10 max-w-xl text-lg text-gray-600">
            We create high-performing, scalable websites and digital products that help businesses grow. From web design and development to integrations and e-commerce — we deliver tailored solutions with a focus on quality and results.
          </p>
          <button className="flex w-fit items-center gap-2 rounded-full bg-[#FFD659] px-8 py-4 font-semibold text-[#0A1945] transition-transform hover:scale-105">
            Let's talk <ArrowRight className="h-5 w-5" />
          </button>
        </motion.div>

        <motion.div
          style={{ width, height, right, top, y, borderRadius }}
          className="absolute overflow-hidden bg-gray-200 shadow-2xl"
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/JODVpeexrlY?autoplay=1&mute=1&controls=0&loop=1&playlist=JODVpeexrlY&playsinline=1&rel=0&showinfo=0&modestbranding=1"
              className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-[100vh] w-[100vw] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
              allow="autoplay; encrypted-media"
              frameBorder="0"
            />
          </div>
        </motion.div>

        <motion.button 
          style={{ opacity }} 
          onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border border-[#85A6FF] transition-colors hover:bg-blue-50"
        >
          <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.4 6.67793e-08L8.4 10.8974L5.6 10.8974L5.6 1.00169e-07L8.4 6.67793e-08Z" fill="#85A6FF"/>
            <path d="M8.4 13.9487L8.4 17L5.6 17L5.6 13.9487L8.4 13.9487Z" fill="#85A6FF"/>
            <path d="M11.2 10.8974L11.2 13.9487L8.4 13.9487L8.4 10.8974L11.2 10.8974Z" fill="#85A6FF"/>
            <path d="M5.6 10.8974L5.6 13.9487L2.8 13.9487L2.8 10.8974L5.6 10.8974Z" fill="#85A6FF"/>
            <path d="M14 7.84615L14 10.8974L11.2 10.8974L11.2 7.84615L14 7.84615Z" fill="#85A6FF"/>
            <path d="M2.8 7.84615L2.8 10.8974L1.29951e-07 10.8974L9.35644e-08 7.84615L2.8 7.84615Z" fill="#85A6FF"/>
          </svg>
        </motion.button>
      </div>
    </section>
  );
}
