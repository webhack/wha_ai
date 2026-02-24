import { Navbar } from './components/Navbar';
import { AboutHero } from './sections/AboutHero';
import {AboutAuthorMessage} from './sections/AboutAuthorMessage';
import { Stats } from './sections/Stats';
import { AboutMission } from './sections/AboutMission';
import { AboutTimeline } from './sections/AboutTimeline';
import { AboutTeamGrid } from './sections/AboutTeamGrid';
import { Projects } from './sections/Projects';
import { AboutWorkflow } from './sections/AboutWorkflow';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#F5F5F5] font-sans selection:bg-blue-200 selection:text-blue-900">
            <Navbar />
            <AboutHero />
            <AboutAuthorMessage />
            <Stats />
            <AboutMission />
            <AboutTimeline />
            <AboutTeamGrid />
            <Projects />
            <AboutWorkflow />
            <Contact />
            <Footer />
        </div>
    );
}