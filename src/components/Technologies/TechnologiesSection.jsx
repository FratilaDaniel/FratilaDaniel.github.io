import "./technologies.css";

function TechnologiesSection(){
    return (
        <div id="technologies-section">
            <h3>Specialized in</h3>
            <div className="tech-display">
                <div className="tech-image-container"><img src="/technologies/html5.png" alt="HTML5"/></div>
                <div className="tech-image-container"><img src="/technologies/css3.png" alt="CSS3"/></div>
                <div className="tech-image-container"><img src="/technologies/js.png" alt="Javascript"/></div>
                <div className="tech-image-container"><img src="/technologies/react.png" alt="React"/></div>
                <div className="tech-image-container"><img src="/technologies/threejs.png" alt="Three JS"/></div>
                <div className="tech-image-container"><img src="/technologies/rtl.png" alt="React testing library"/></div>    
            </div>
        
            <h3>Interested in</h3>
            <div className="tech-display">
                <div className="tech-image-container"><img src="/technologies/django.png" alt="Django"/></div>
                <div className="tech-image-container"><img src="/technologies/node.png" alt="Node"/></div>    
                
                <div className="tech-image-container"><img src="/technologies/python.png" alt="Python"/></div>
                <div className="tech-image-container"><img src="/technologies/c++.png" alt="C++"/></div>
                <div className="tech-image-container"><img src="/technologies/c.png" alt="C"/></div>
                
                <div className="tech-image-container"><img src="/technologies/mysql.png" alt="MySQL"/></div>
                <div className="tech-image-container"><img src="/technologies/mongo.png" alt="MongoDB"/></div>    
            </div>

            <h3>Helpful tools</h3>
            <div className="tech-display">
                <div className="tech-image-container"><img src="/technologies/figma.png" alt="Figma"/></div>    
                <div className="tech-image-container"><img src="/technologies/docker.png" alt="Docker"/></div>    
                <div className="tech-image-container"><img src="/technologies/git.png" alt="Git"/></div>    
            </div>

        </div>
    );
}

export default TechnologiesSection;
