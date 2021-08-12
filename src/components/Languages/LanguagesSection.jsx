import "./languages.css";
import ProficiencyBar from "../ProficiencyBar";
import {SizeMe} from "react-sizeme";

const LANGUAGES_SPOKEN = [{
    language: "english",
    alternative: <img className="language-flag-img" src="/languages/en.png" alt="EN"/>,
    proficiency: "90%"
},{
    language: "french",
    alternative: <img className="language-flag-img" src="/languages/fr.png" alt="FR"/>,
    proficiency: "45%"
},{
    language: "greek",
    alternative: <img className="language-flag-img" src="/languages/gr.jpg" alt="GR"/>,
    proficiency: "25%"
},{
    language: "romanian",
    alternative: <img className="language-flag-img" src="/languages/ro.png" alt="RO"/>,
    proficiency: "100%"
}];

const PROFICIENCY_LEGEND = [{
    level: "Basic",
    alternative: <img className="language-level-img" src="/levels/low.png" alt="v"/>
}, {
    level: "Intermediate",
    alternative: <img className="language-level-img" src="/levels/tilda.png" alt="~"/>
}, { 
    level: "Advanced",
    alternative: <img className="language-level-img" src="/levels/high.png" alt="^"/>
}, {
    level: "Proficient",
    alternative: <img className="language-level-img" src="/levels/star.png" alt="/\"/>
}];

const BREAK_WIDTH = 350;

function LanguagesSection(){
    return (
        <SizeMe>{({size}) => { 
            return <div className="language-section-container">            
                <div className={size.width < BREAK_WIDTH ? "language-bar-legend" : "language-bar-legend-wide"}>
                    {PROFICIENCY_LEGEND.map((element, index) => {
                        return (
                            <span key={index}>
                                {size.width < BREAK_WIDTH ? element.alternative : element.level}
                            </span>
                        );
                    })}
                </div>      

                {LANGUAGES_SPOKEN.map( (element, index) => {
                    return (
                        <div key={index} className="grid-language" style={{gridRow: index + 2}}>
                            {size.width < BREAK_WIDTH? element.alternative :element.language} 
                        </div>
                    );
                })}
                {LANGUAGES_SPOKEN.map( (element, index) => {
                    return (
                        <div key={index} className="grid-proficiency" style={{gridRow: index + 2}}>
                            <ProficiencyBar proficiencyPercentage={element.proficiency}/> 
                        </div>
                    );
                })}
            </div>
            }}
        </SizeMe>
    );
}

export default LanguagesSection;
