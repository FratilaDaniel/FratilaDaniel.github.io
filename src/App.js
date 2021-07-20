import './App.css';
import LanguagesSection from './components/LanguagesSection';
import SectionContainer from './components/SectionContainer';

const SECTIONS = [{
    title: "Languages",
    content: <LanguagesSection/> 
}];

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
