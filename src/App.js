import './App.css';
import LanguagesSection from './components/LanguagesSection';
import SectionContainer from './components/SectionContainer';
import EducationSection from './components/Education/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from "./components/Footer";
import WorkSection from './components/WorkSection';
import ProjectsSection from './components/ProjectsSection';
import BannerSection from './components/BannerSection';
import TechnologiesSection from './components/Technologies/TechnologiesSection';

const SECTIONS = [{
    title: "Languages",
    content: <LanguagesSection/> 
}, {
    title: "Education",
    content: <EducationSection/> 
}, {
    title: "Work Experience",
    content: <WorkSection/>
}, {
    title: "Projects",
    content: <ProjectsSection/>
}, {
    title: "Technologies",
    content: <TechnologiesSection/>
}
];

function App() {
    return (
        <div className="general-container">
            <BannerSection/>
            <div className="sections-container">
                {SECTIONS.map( (section, index) => {
                    return (
                        <SectionContainer
                            key={index}
                            title={section.title}
                            content={section.content}
                        />);
                })}
            </div>
            <ContactSection/>
            <Footer/>
        </div>
    );
}

export default App;
