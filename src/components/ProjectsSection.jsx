
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
                        <div className={index % 2 ? "project-container-content" : "project-container-content-reverse"}>
                            <img src="/technologies/c.png" alt=""/>
                            <div>
                                <p>{project.description}</p>
                                <p>Technologies used: <strong>{project.technologies}</strong></p>
                                <p>View this application deployed on <a href={project.herokuLink}>Heroku</a></p>
                                <p>View this application's code on <a href={project.githubLink}>Github</a></p>
                            </div>
                        </div>

                        
                    </div>
                );
            })}
        </div>
    );
}

export default ProjectsSection;
