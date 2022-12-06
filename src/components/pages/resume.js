/* eslint-disable no-unused-vars */
import React from 'react';
// import '../../styles/Mystyles.css';
import pdf from '../../images/Resume2022.pdf';

function Resume() {
    return (
        <div>
            <h1> Resume & Skills</h1>
            <p> <a href={pdf}>Download my resume here</a></p>
            <h3> Front-End Skills:</h3>
            <li> HTML, CSS, Javascript</li>
            <li>Bulma</li>
            <li>Handlebars</li>
            <li>React</li>
            <br></br>
            <h3> Back-End Skills:</h3>
            <li>Node.js</li>
            <li>MVC Framework</li>
            <li>MySQL</li>
            <li>Webpack</li>
        </div>
    )
}

export default Resume;