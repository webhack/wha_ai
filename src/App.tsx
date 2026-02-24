import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Stats } from './sections/Stats';
import { Services } from './sections/Services';
import { Features } from './sections/Features';
import { Projects } from './sections/Projects';
import { Awards } from './sections/Awards';
import { Reviews } from './sections/Reviews';
import { Blog } from './sections/Blog';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import AboutPage from './AboutPage';

export default function App() {
    const isAbout = window.location.pathname === '/about';

    if (isAbout) return <AboutPage />;

    return (
        <div className="min-h-screen bg-[#F5F5F5] font-sans selection:bg-blue-200 selection:text-blue-900">
            <Navbar />
            <Hero />
            <Stats />
            <Services />
            <Features />
            <Projects />
            <Awards />
            <Reviews />
            <Blog />
            <Contact />
            <Footer />
        </div>
    );
}