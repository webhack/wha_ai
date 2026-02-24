import { CountUp } from '../components/CountUp';

export function Stats() {
  return (
    <section id="stats" className="bg-white px-8 py-32 md:px-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 
          className="mb-20 text-[#0A1945]"
          style={{ fontFamily: 'SF Pro, sans-serif', fontWeight: 510, fontSize: '36px', lineHeight: '120%' }}
        >
          We are proud of the results we create together with our clients. They inspire us to improve and remain a reliable partner in the digital world.
        </h2>
      </div>
      
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center justify-center rounded-2xl bg-[#F8F9FA] p-10 text-center transition-transform hover:-translate-y-2">
          <div className="mb-2 flex items-center text-6xl font-bold text-blue-600">
            <CountUp to={9} />+
          </div>
          <div className="text-lg font-medium text-gray-800">Years on The Market</div>
        </div>
        
        <div className="flex flex-col items-center justify-center rounded-2xl bg-[#F8F9FA] p-10 text-center transition-transform hover:-translate-y-2">
          <div className="mb-2 flex items-center text-6xl font-bold text-blue-600">
            <CountUp to={15} />+
          </div>
          <div className="text-lg font-medium text-gray-800">People on The Team</div>
        </div>
        
        <div className="flex flex-col items-center justify-center rounded-2xl bg-[#F8F9FA] p-10 text-center transition-transform hover:-translate-y-2">
          <div className="mb-2 flex items-center text-6xl font-bold text-blue-600">
            <CountUp to={350} />+
          </div>
          <div className="text-lg font-medium text-gray-800">Completed Projects</div>
        </div>
        
        <div className="flex flex-col items-center justify-center rounded-2xl bg-[#F8F9FA] p-10 text-center transition-transform hover:-translate-y-2">
          <div className="mb-2 flex items-center text-6xl font-bold text-blue-600">
            UA<span className="ml-2 inline-block h-6 w-8 bg-gradient-to-b from-blue-500 to-yellow-400"></span>
          </div>
          <div className="text-lg font-medium text-gray-800">Based in Poltava</div>
        </div>
      </div>
    </section>
  );
}
