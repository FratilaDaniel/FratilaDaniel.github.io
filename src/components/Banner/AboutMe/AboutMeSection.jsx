import "./aboutme.css";

function AboutMeSection(){

    function handleClick(location){
        document.querySelector(location).scrollIntoView();
    }

    return (
        <section id="about-me-section">
                <h2 className="about-me-title">About me</h2>
                <p className="about-me-p">Hello! I am a web developer specialized in frontend technologies. I am also interested in learning backend and deployment in the near future. My passions are playing the guitar, cooking, entrepreneurship and coding.</p>    
                <p className="about-me-p">You can check out some of my <button onClick={() => handleClick("#projects")}>projects</button> and you can <button onClick={() => handleClick("#contact")}>contact</button> me anytime.</p>    
        </section>
    );
}

export default AboutMeSection;
