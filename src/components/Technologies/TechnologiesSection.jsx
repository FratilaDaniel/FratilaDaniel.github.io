import "./technologies.css";

const TECH_FOLDER_NAME = "./LandingPage/technologies/";

function TechnologiesSection(){
    return (
        <div id="technologies-section">
            <h3>Specialized in</h3>
            <div className="tech-display">
                <div className="tech-image-container"><img src={TECH_FOLDER_NAME + "html5.png"} alt="HTML5"/></div>
                <div className="tech-image-container"><img src={TECH_FOLDER_NAME + "css3.png"} alt="CSS3"/></div>
                <div className="tech-image-container"><img src={TECH_FOLDER_NAME + "js.png"} alt="Javascript"/></div>
                <div className="tech-image-container"><img src={TECH_FOLDER_NAME + "react.png"} alt="React"/></div>
           </div>
        
            <h3>Interested in</h3>
            <div className="tech-display">
                <div className="tech-image-container"><img src={TECH_FOLDER_NAME + "threejs.png"} alt="Three JS"/></div>
                <div className="tech-image-container"><img src={TECH_FOLDER_NAME + "rtl.png"} alt="React testing library"/></div>    
 
                <div className="tech-image-container"><img src={TECH_FOLDER_NAME + "django.png"} alt="Django"/></div>
                <div className="tech-image-container"><img src={TECH_FOLDER_NAME + "node.png"} alt="Node"/></div>    
                
                <div className="tech-image-container"><img src={TECH_FOLDER_NAME + "python.png"} alt="Python"/></div>
                {/* <div className="tech-image-container"><img src="/technologies/c++.png" alt="C++"/></div>
                <div className="tech-image-container"><img src="/technologies/c.png" alt="C"/></div> */}
                
                <div className="tech-image-container"><img src={TECH_FOLDER_NAME + "mysql.png"} alt="MySQL"/></div>
                <div className="tech-image-container"><img src={TECH_FOLDER_NAME + "mongo.png"} alt="MongoDB"/></div>    
            </div>

            <h3>Helpful tools</h3>
            <div className="tech-display">
                <div className="tech-image-container"><img src={TECH_FOLDER_NAME + "figma.png"} alt="Figma"/></div>    
                <div className="tech-image-container"><img src={TECH_FOLDER_NAME + "docker.png"} alt="Docker"/></div>    
                <div className="tech-image-container"><img src={TECH_FOLDER_NAME + "git.png"} alt="Git"/></div>    
            </div>

        </div>
    );
}

export default TechnologiesSection;
