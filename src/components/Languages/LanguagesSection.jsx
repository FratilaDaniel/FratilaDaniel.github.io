import "./languages.css";
import ProficiencyBar from "../ProficiencyBar";
import { useRef, useState } from "react";

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
    alternative: "v"
}, {
    level: "Intermediate",
    alternative: "~"
}, { 
    level: "Advanced",
    alternative: "^"
}, {
    level: "Proficient",
    alternative: "/\\"
}];

function LanguagesSection(){
    const elementRef = useRef(null);
    const [width, setWidth] = useState(0);

    function handleResize(){
        if(elementRef.current){
            console.log(elementRef.current.offsetWidth);
            setWidth(elementRef.current.offsetWidth);
        }
    }

    window.addEventListener("resize", handleResize);

    return (
        <div ref={elementRef} className="language-section-container">
            <div className={width < 500 ? "language-bar-legend" : "language-bar-legend-wide"}>
                {PROFICIENCY_LEGEND.map((element, index) => {
                    return (
                        <span key={index}>
                            {width < 500 ? element.alternative : element.level}
                        </span>
                    );
                })}
            </div>      

            {LANGUAGES_SPOKEN.map( (element, index) => {
                return (
                    <div key={index} className="grid-language" style={{gridRow: index + 2}}>
                        {width < 500? element.alternative :element.language} 
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
    );
}

export default LanguagesSection;
