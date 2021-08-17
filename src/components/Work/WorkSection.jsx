import "./work.css";

function WorkSection(){
    return (
        <div className="work-container">
            <div className="workplace-container">
                <img src="./LandingPage/bosch.png" alt="Robert Bosch GMBH"/>
                <p>June 2018 - June 2021</p>
                <p>Software Engineer - Radar team</p>
                <p>Multi-sensor fusion research and development team</p>
                <p>Radar development team</p>
                <p>Tooling</p>
                <p>Main technologies used: <span className="used-tech-span">C++, Python3, Git</span></p>
            </div>

            <div className="workplace-container">
                <img src="./LandingPage/bcr.png" alt="BCR"/>
                <p>July 2017 - September 2017</p>
                <p>Intern - Data analyst</p>
                <p>Data analysis and reporting</p>
                <p>Main technologies used: <span className="used-tech-span">MySQL, Excel</span></p>
            </div>
        </div>
    );
}

export default WorkSection;
