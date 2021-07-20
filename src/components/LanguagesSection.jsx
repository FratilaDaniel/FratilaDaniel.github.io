import ProficiencyBar from "./ProficiencyBar";

const LANGUAGES_SPOKEN = [{
    language: "english",
    proficiency: "90%"
},{
    language: "french",
    proficiency: "45%"
},{
    language: "greek",
    proficiency: "25%"
},{
    language: "romanian",
    proficiency: "100%"
}];

const PROFICIENCY_LEGEND = ["Basic", "Intermediate", "Advanced", "Proficient"];

function LanguagesSection(){
    return (
        <div className="language-section-container">
            <div className="language-bar-legend">
                {PROFICIENCY_LEGEND.map((element, index) => {
                    return (
                        <span key={index}>
                            {element}
                        </span>
                    );
                })}
            </div>      

            {LANGUAGES_SPOKEN.map( (element, index) => {
                return (
                    <div key={index} className="grid-language" style={{gridRow: index + 2}}>
                        {element.language} 
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
