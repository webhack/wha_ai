import React, { useState, useRef, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Website Development',
    image: 'https://picsum.photos/seed/dev/400/300',
    link: '#',
  },
  {
    id: '02',
    title: 'Website Promotion',
    image: 'https://picsum.photos/seed/promo/400/300',
  },
  {
    id: '03',
    title: 'Contextual Advertising',
    image: 'https://picsum.photos/seed/ads/400/300',
  },
  {
    id: '04',
    title: 'Web Design Services',
    image: 'https://picsum.photos/seed/design/400/300',
  },
];

function ServiceItem({ service, index }: { service: typeof services[0], index: number, key?: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <div
      className="group relative flex items-center justify-between border-b border-blue-200 py-12 transition-colors hover:border-blue-600"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="flex items-center gap-6">
        <span className="text-3xl font-medium text-[#FFD659]">{service.id}.</span>
        <h3 className="text-4xl font-semibold text-[#0A1945] transition-colors group-hover:text-blue-600">
          {service.title}
        </h3>
      </div>
      
      <div className="relative flex h-8 w-32 items-center justify-end overflow-hidden">
        <div className={`absolute right-0 flex items-center gap-2 font-medium text-blue-600 transition-all duration-300 ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
          Read more <ArrowRight className="h-5 w-5" />
        </div>
        <div className={`absolute right-0 transition-all duration-300 ${isHovered ? '-translate-x-8 opacity-0' : 'translate-x-0 opacity-100'}`}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.9777 -4.10277e-05L9.68335 7.70561L7.70345 9.68551L-0.00219726 1.97986L1.9777 -4.10277e-05Z" fill="#1540D9"/>
            <path d="M11.8409 9.86319L13.9985 12.0208L12.0186 14.0007L9.86104 11.8431L11.8409 9.86319Z" fill="#1540D9"/>
            <path d="M11.6633 5.72571L13.8208 7.88329L11.8409 9.86319L9.68335 7.70561L11.6633 5.72571Z" fill="#1540D9"/>
            <path d="M7.70345 9.68551L9.86104 11.8431L7.88114 13.823L5.72356 11.6654L7.70345 9.68551Z" fill="#1540D9"/>
            <path d="M11.4856 1.58823L13.6432 3.74581L11.6633 5.72571L9.50567 3.56813L11.4856 1.58823Z" fill="#1540D9"/>
            <path d="M3.56597 9.50783L5.72356 11.6654L3.74366 13.6453L1.58607 11.4877L3.56597 9.50783Z" fill="#1540D9"/>
          </svg>
        </div>
      </div>

      <motion.div
        style={{ x, y }}
        className="pointer-events-none absolute left-0 top-0 z-10 h-48 w-64 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl shadow-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <img src={service.image} alt={service.title} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
      </motion.div>
    </div>
  );
}

export function Services() {
  return (
    <section className="bg-white px-8 py-32 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-600 px-4 py-1 text-sm font-medium text-blue-600">
              <span className="h-2 w-2 rounded-full bg-blue-600"></span>
              Our services
            </div>
            <h2 className="text-5xl font-bold leading-tight text-[#0A1945]">
              The services<br />we provide
            </h2>
          </div>
          <p className="max-w-md text-lg text-gray-600">
            We deliver comprehensive web development solutions designed to elevate your digital presence, enhance user experience, and drive measurable business growth.
          </p>
        </div>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <ServiceItem key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
