import React from 'react';
// import '../../styles/Mystyles.css';
import Project from '../structure/Project'
import image from '../../images/weatherApp.png';
import image2 from '../../images/teamGenerator.png';
import image3 from '../../images/scheduler.jpeg';
import image4 from '../../images/textEditor.png';
import image5 from '../../images/NewsHound.png';

function portfolio() {
    const projects = [
        {
            name: 'Weather Dashboard',
            description: 'An app that uses OpenWeather API to display weather conditions at the specified location',
            img: image,
            githubURL: 'https://github.com/NelsonD93/Weather-App',
        },
        {
            name: 'Team Profile Generator' ,
            description: 'An application that generates a very basic HTML page depending on input. Designed to manage teams/departments.',
            img: image2,
            githubURL: 'https://github.com/NelsonD93/Team-Profile-Generator',
        },
        {
            name: 'Workday Scheduler',
            description: 'A simple workday planner that updates the time and color codes the columns based on if that time has past.',
            img: image3,
            githubURL: 'https://github.com/NelsonD93/Workday-Schedule',
        },
        {
            name: 'Text Editor',
            description: 'A text editor that can be used for simple notetaking. The key part of this application is that it can be installed and used offline.',
            img: image4,
            githubURL: 'https://github.com/NelsonD93/Text-Editor',
        },
        {
            name: 'NewsHound',
            description: 'A news source that utilizes databases, sessions, that be customized based on your news source preferences. We utilized an RSS parser to get data from different news sources.',
            img: image5,
            githubURL: 'https://github.com/alextheordinary/news-hound',
            },
    ]

    return (
        <div>
            <h1>Portfolio Page</h1>
            <p>Here are 4 solo projects and 1 collaborative project I have worked on. NewsHound is the collaborative project, while the remaining four are examples of solo projects. You can click on the github link to view the repos and my profile in general, which has more examples of my work.</p>

            {projects.map(project => { return <Project key={project.name} name={project.name} description={project.description} img={project.img} githubURL ={project.githubURL}></Project>})}
        </div>
    )
}

export default portfolio;


