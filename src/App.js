import './App.css';
import LanguagesSection from './components/LanguagesSection';
import SectionContainer from './components/SectionContainer';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from "./components/Footer";
import WorkSection from './components/WorkSection';
import ProjectsSection from './components/ProjectsSection';
import AboutMeSection from './components/AboutMeSection';

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
}
];

function App() {
    return (
        <div className="general-container">
            <AboutMeSection/>
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
