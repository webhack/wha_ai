import { motion } from 'motion/react';
import { Award, CheckCircle, Users, GitMerge, LineChart, Handshake } from 'lucide-react';

const features = [
  {
    icon: <Award className="h-8 w-8 text-blue-600" />,
    title: 'Expertise & Experience',
    description: 'We are a team of professionals with deep technical and design expertise. We develop websites and digital solutions that help businesses grow, maintaining a balance between aesthetics, functionality, and performance.',
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
    title: 'Quality You Can Rely On',
    description: 'Every project undergoes a thorough quality check — from structure to the smallest button. We care about stability, speed, and a flawless appearance across all devices.',
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: 'Human-Centered Design',
    description: 'At the heart of our work is the user. We create interfaces that look modern but, above all, are intuitive, user-friendly, and effective for business.',
  },
  {
    icon: <GitMerge className="h-8 w-8 text-blue-600" />,
    title: 'Flexibility & Transparency',
    description: 'We work openly and flexibly. All details are agreed upon before the start, we keep our promises, and build cooperation based on trust.',
  },
  {
    icon: <LineChart className="h-8 w-8 text-blue-600" />,
    title: 'SEO & Performance',
    description: 'We optimize websites for high speed, visibility, and better ranking. Technical excellence is the foundation of long-term success.',
  },
  {
    icon: <Handshake className="h-8 w-8 text-blue-600" />,
    title: 'Long-Term Partnership',
    description: "We don't just build websites — we become your digital partner. We support our clients after launch, helping projects grow and scale.",
  },
];

export function Features() {
  return (
    <section className="bg-gradient-to-b from-[#E6F0FF] to-[#C2D6FF] px-8 py-32 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-600 bg-white px-4 py-1 text-sm font-medium text-blue-600">
            <span className="h-2 w-2 rounded-full bg-blue-600"></span>
            Why clients trust us
          </div>
          <h2 
          className="mb-20 text-[#0A1945]"
          style={{ fontFamily: 'SF Pro, sans-serif', fontWeight: 510, fontSize: '36px', lineHeight: '120%' }}
        >
          We are proud of the results we create together with our clients. They inspire us to improve and remain a reliable partner in the digital world.
        </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col rounded-2xl bg-white p-10 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
                {feature.icon}
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-[#0A1945]">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
