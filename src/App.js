import './App.css';
import LanguagesSection from './components/LanguagesSection';
import SectionContainer from './components/SectionContainer';
import EducationSection from './components/EducationSection';

const SECTIONS = [{
    title: "Languages",
    content: <LanguagesSection/> 
},{
    title: "Education",
    content: <EducationSection/> 
},
];

function App() {
    return (
        <div className="general-container">
            {SECTIONS.map( (section, index) => {
                return (
                    <SectionContainer
                        key={index}
                        title={section.title}
                        content={section.content}
                    />);
            })}
        </div>
    );
}

export default App;
