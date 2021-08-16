
const PROJECTS = [ {
    title: "Self-timing application",
    image: <img src="/projects/clock.jpg" alt="Clock"/>,
    description: "Web application useful for timing activities, statistics included",
    technologies: "React",
    herokuLink: "https://self-timing-app.herokuapp.com/",
    githubLink: "https://github.com/FratilaDaniel/ActivityTimer",
}, {
    title: "Mona Divsa",
    image: <img src="/projects/monalisa.jpg" alt="Mona Divsa"/>,
    description: "Web application that transforms a given image into a series of DIVs",
    technologies: "React",
    herokuLink: "https://mona-divsa.herokuapp.com/",
    githubLink: "https://github.com/FratilaDaniel/MonaDivsa",
}, {
    title: "Snake",
    image: <img src="/projects/snake.jpg" alt="Snake"/>,
    description: "A simple game of snake",
    technologies: "React",
    herokuLink: "https://singleplayer-snake.herokuapp.com/",
    githubLink: "https://github.com/FratilaDaniel/SinglePlayersSneks",
}, {
    title: "Ines Simonica Landing Page",
    image: <img src="/projects/lion.jpg" alt="Lion"/>,
    description: "CV page for 3D artist Ines Simonica",
    technologies: "React, Threejs",
    herokuLink: "https://ines-simonica.herokuapp.com/",
    githubLink: "https://github.com/FratilaDaniel/CV-Ines",
}
];

function ProjectsSection(){
    return (
        <div className="projects-section" id="projects">
            {PROJECTS.map( (project, index) => {
                return (
                    <div className="project-container" key={index}>
                        <h3>{project.title}</h3>
                        <div className={index % 2 ? "project-container-content" : "project-container-content-reverse"}>
                            {project.image}
                            <div>
                                <p>{project.description}</p>
                                <p>Technologies used: <span className="used-tech-span">{project.technologies}</span></p>
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
