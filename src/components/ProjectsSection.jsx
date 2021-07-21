
const PROJECTS = [{
    title: "Ines Simonica Landing Page",
    description: "CV page for 3D artist Ines Simonica",
    technologies: "React, Threejs",
    herokuLink: "/#",
    githubLink: "/#",
}, {
    title: "Self-timing application",
    description: "Web application useful for timing activities, statistics included",
    technologies: "React",
    herokuLink: "/#",
    githubLink: "/#",
}, {
    title: "OrangeHub",
    description: "Amalgamation of multiple ideas, result is similar to a social media website",
    technologies: "React, Django",
    herokuLink: "/#",
    githubLink: "/#",
}, {
    title: "Snake",
    description: "A simple game of snake",
    technologies: "React",
    herokuLink: "/#",
    githubLink: "/#",
}
];

function ProjectsSection(){
    return (
        <div className="projects-section">
            {PROJECTS.map( (project, index) => {
                return (
                    <div className="project-container" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p>Technologies used: <strong>{project.technologies}</strong></p>
                        <p>View this application deployed on <a href={project.herokuLink}>Heroku</a></p>
                        <p>View this application's code on <a href={project.githubLink}>Github</a></p>
                    </div>
                );
            })}
            {/* <img className="bkg-img-1" src="/SVG/BackgroundElement_01.svg" alt=""/> */}
            {/* <img className="bkg-img-2" src="/SVG/BackgroundElement_02.svg" alt=""/> */}
        </div>
    );
}

export default ProjectsSection;
