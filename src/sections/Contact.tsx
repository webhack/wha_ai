import { ArrowRight, Paperclip, Facebook, Linkedin, Instagram, Twitter, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section className="bg-[#F8F9FA] px-8 py-32 md:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <h2 className="mb-16 text-5xl font-bold leading-tight text-[#0A1945] md:text-6xl">
            Leave a request and get the best solution for your business
          </h2>
          
          <div className="mb-8 text-3xl font-semibold text-[#0A1945]">Contact us</div>
          
          <div className="mb-4 text-2xl text-[#0A1945]">+38 (098) 47 485 83</div>
          <div className="mb-12 text-xl text-blue-600">oleksandr@webhelpagency.com</div>
          
          <div className="flex gap-4">
            {[Facebook, Linkedin, Instagram, Twitter, Mail].map((Icon, i) => (
              <a key={i} href="#" className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0A1945] text-[#0A1945] transition-colors hover:bg-[#0A1945] hover:text-white">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="Full name*"
                className="rounded-xl border border-blue-200 bg-transparent px-6 py-4 text-[#0A1945] outline-none focus:border-blue-600"
              />
              <input
                type="email"
                placeholder="Email*"
                className="rounded-xl border border-blue-200 bg-transparent px-6 py-4 text-[#0A1945] outline-none focus:border-blue-600"
              />
            </div>
            
            <div className="flex gap-6">
              <input
                type="tel"
                placeholder="Phone*"
                className="w-full rounded-xl border border-blue-200 bg-transparent px-6 py-4 text-[#0A1945] outline-none focus:border-blue-600"
              />
              <button type="button" className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-xl border border-blue-200 text-blue-600 transition-colors hover:bg-blue-50">
                <Paperclip className="h-6 w-6" />
              </button>
            </div>
            
            <textarea
              placeholder="About project*"
              rows={4}
              className="rounded-xl border border-blue-200 bg-transparent px-6 py-4 text-[#0A1945] outline-none focus:border-blue-600"
            ></textarea>
            
            <div className="mt-4">
              <div className="mb-4 font-semibold text-[#0A1945]">Addition</div>
              <div className="flex flex-wrap gap-3">
                {['Web Development', 'UI/UX Design', 'IT Staff Augmentation', 'Application Development', 'Website Maintenance Services', 'Dedicated Development Team'].map((tag, i) => (
                  <label key={i} className="cursor-pointer">
                    <input type="checkbox" className="peer sr-only" defaultChecked={i === 0 || i === 4} />
                    <div className="rounded-full border border-blue-200 px-6 py-2 text-sm font-medium text-blue-600 transition-colors peer-checked:bg-blue-400 peer-checked:text-white peer-checked:border-blue-400 hover:bg-blue-50">
                      {i === 0 || i === 4 ? '✓ ' : ''}{tag}
                    </div>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <button type="submit" className="flex items-center gap-2 rounded-full bg-[#FFD659] px-10 py-4 font-semibold text-[#0A1945] transition-transform hover:scale-105">
                Send <ArrowRight className="h-5 w-5" />
              </button>
              
              <label className="flex cursor-pointer items-start gap-3">
                <input type="checkbox" className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600" defaultChecked />
                <span className="text-sm text-gray-600">
                  I agree to have Web Help Agency contact me<br />via email, phone, messengers.
                </span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
