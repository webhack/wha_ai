import { useState } from 'react';

const awardsList = [
  { id: 1, name: 'GoodFirms' },
  { id: 2, name: 'Clutch' },
  { id: 3, name: 'Clutch' },
  { id: 4, name: 'Clutch' },
  { id: 5, name: 'Clutch' },
  { id: 6, name: 'DesignRush' },
  { id: 7, name: 'Clutch' },
  { id: 8, name: 'GoodFirms' },
  { id: 9, name: 'Best Places' },
  { id: 10, name: 'Host Review' },
];

const Badge = ({ name, active }: { name: string; active: boolean }) => (
  <svg viewBox="0 0 120 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full drop-shadow-sm transition-all duration-300">
    <path d="M60 5L110 30V90L60 115L10 90V30L60 5Z" stroke={active ? "#1540D9" : "#E5E7EB"} strokeWidth="3" fill={active ? "#F8FAFC" : "transparent"} className="transition-colors duration-300"/>
    <path d="M60 12L102 33V87L60 108L18 87V33L60 12Z" fill={active ? "white" : "#F3F4F6"} className="transition-colors duration-300"/>
    <rect x="25" y="50" width="70" height="24" fill={active ? "#0A1945" : "#9CA3AF"} className="transition-colors duration-300" />
    <text x="60" y="66" fontSize="13" fill="white" textAnchor="middle" fontWeight="bold" fontFamily="SF Pro, sans-serif">{name}</text>
    <text x="60" y="40" fontSize="7" fill={active ? "#64748B" : "#9CA3AF"} textAnchor="middle" fontFamily="SF Pro, sans-serif" fontWeight="bold" letterSpacing="0.05em">TOP COMPANY</text>
    <text x="60" y="92" fontSize="8" fill={active ? "#64748B" : "#9CA3AF"} textAnchor="middle" fontFamily="SF Pro, sans-serif" fontWeight="bold">2025</text>
  </svg>
);

export function Awards() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="bg-white px-8 py-32 md:px-16 border-t border-gray-200">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#1540D9] px-4 py-1.5 text-sm font-medium text-[#1540D9]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="4.5" height="4.5" rx="1" fill="currentColor"/>
                <rect x="9.5" y="2" width="4.5" height="4.5" rx="1" fill="currentColor"/>
                <rect x="2" y="9.5" width="4.5" height="4.5" rx="1" fill="currentColor"/>
                <rect x="9.5" y="9.5" width="4.5" height="4.5" rx="1" fill="currentColor"/>
              </svg>
              Achievements
            </div>
            <h2 
              className="text-[#0A1945]"
              style={{ fontFamily: 'SF Pro, sans-serif', fontWeight: 700, fontSize: '48px', lineHeight: '120%' }}
            >
              Awards and recognitions<br />that highlight our expertise
            </h2>
          </div>
          <div className="max-w-md lg:mt-20">
            <p 
              className="text-[#4B5563]"
              style={{ fontFamily: 'SF Pro, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '130%' }}
            >
              Our work has been acknowledged by respected industry platforms and award communities. These achievements reflect our commitment to quality, innovation, and consistently strong results across every project.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {awardsList.map((award) => (
            <div 
              key={award.id} 
              className={`flex aspect-square cursor-pointer items-center justify-center rounded-2xl p-8 transition-colors duration-300 ${hoveredId === award.id ? 'bg-[#F4F5F7]' : 'bg-transparent'}`}
              onMouseEnter={() => setHoveredId(award.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="h-full w-full max-w-[120px]">
                <Badge name={award.name} active={hoveredId === award.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
