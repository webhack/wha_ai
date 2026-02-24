import { Logo } from './LogoComponent';

export function Navbar() {
  return (
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6 md:px-16 bg-white/60 backdrop-blur-md">
      <Logo />

      <div className="hidden items-center gap-8 rounded-full bg-white px-8 py-3 shadow-sm md:flex">
          <a href="/about" className="font-medium text-[#0A1945] transition-colors hover:text-blue-600">About Us</a>
          <a href="#" className="font-medium text-[#0A1945] transition-colors hover:text-blue-600">Portfolio</a>
        <a href="#" className="font-medium text-[#0A1945] transition-colors hover:text-blue-600">Services</a>
        <a href="#" className="font-medium text-[#0A1945] transition-colors hover:text-blue-600">Blog</a>
        <button className="rounded-full bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700">
          Get in touch
        </button>
      </div>
    </nav>
  );
}
