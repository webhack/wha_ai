import { Logo } from '../components/LogoComponent';

export function Footer() {
  return (
    <footer className="bg-[#F8F9FA] px-8 py-16 md:px-16">
      <div className="mx-auto max-w-7xl border-t border-blue-200 pt-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <Logo />
            </div>
          </div>
          
          <div>
            <h4 className="mb-6 font-semibold text-blue-400">Services</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-[#0A1945]">
              <li><a href="#" className="hover:text-blue-600">Website Development</a></li>
              <li><a href="#" className="hover:text-blue-600">Website Promotion</a></li>
              <li><a href="#" className="hover:text-blue-600">Contextual Advertising</a></li>
              <li><a href="#" className="hover:text-blue-600">Web Design Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-6 font-semibold text-blue-400">Company</h4>
            <div className="grid grid-cols-2 gap-4 text-sm font-medium text-[#0A1945]">
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600">Themes</a></li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="hover:text-blue-600">Portfolio</a></li>
                <li><a href="#" className="hover:text-blue-600">SEO</a></li>
                <li><a href="#" className="hover:text-blue-600">Reviews</a></li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="mb-6 font-semibold text-blue-400">Office</h4>
            <div className="text-sm font-medium leading-relaxed text-[#0A1945]">
              Kotlyarevs'koho St, 1/27<br />
              4th, Poltava
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col items-center justify-between border-t border-blue-200 pt-8 text-sm font-medium text-[#0A1945] md:flex-row">
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-600">Cookie Policy</a>
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
          </div>
          <div className="mt-4 md:mt-0">
            © 2015 - 2025 Web Help Agency. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
