import "./languages.css";
import ProficiencyBar from "./ProficiencyBar";
import {SizeMe} from "react-sizeme";

const LANG_FOLDER_NAME = "./LandingPage/";

const LANGUAGES_SPOKEN = [{
    language: "english",
    alternative: <img className="language-flag-img" src={LANG_FOLDER_NAME + "languages/en.png"} alt="EN"/>,
    proficiency: "90%"
},{
    language: "french",
    alternative: <img className="language-flag-img" src={LANG_FOLDER_NAME + "languages/fr.png"} alt="FR"/>,
    proficiency: "45%"
},{
    language: "greek",
    alternative: <img className="language-flag-img" src={LANG_FOLDER_NAME + "languages/gr.jpg"} alt="GR"/>,
    proficiency: "25%"
},{
    language: "romanian",
    alternative: <img className="language-flag-img" src={LANG_FOLDER_NAME + "languages/ro.png"} alt="RO"/>,
    proficiency: "100%"
}];

const PROFICIENCY_LEGEND = [{
    level: "Basic",
    alternative: <img className="language-level-img" src={LANG_FOLDER_NAME + "levels/low.png"} alt="v"/>
}, {
    level: "Intermediate",
    alternative: <img className="language-level-img" src={LANG_FOLDER_NAME + "levels/tilda.png"} alt="~"/>
}, { 
    level: "Advanced",
    alternative: <img className="language-level-img" src={LANG_FOLDER_NAME + "levels/high.png"} alt="^"/>
}, {
    level: "Proficient",
    alternative: <img className="language-level-img" src={LANG_FOLDER_NAME + "levels/star.png"} alt="+"/>
}];

const LEVEL_BREAK_WIDTH = 350;
const LANGUAGE_BREAK_WIDTH = 500;

function LanguagesSection(){
    return (
        <SizeMe>{({size}) => { 
            return <div className="language-section-container">        
                <div className={size.width < LEVEL_BREAK_WIDTH ? "language-bar-legend" : "language-bar-legend-wide"}>
                    {PROFICIENCY_LEGEND.map((element, index) => {
                        return (
                            <span key={index}>
                                {size.width < LEVEL_BREAK_WIDTH ? element.alternative : element.level}
                            </span>
                        );
                    })}
                </div>      

                {LANGUAGES_SPOKEN.map( (element, index) => {
                    return (
                        <div key={index} className="grid-language" style={{gridRow: index + 2}}>
                            {size.width < LANGUAGE_BREAK_WIDTH? element.alternative : element.language} 
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
