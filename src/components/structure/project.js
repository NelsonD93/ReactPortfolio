import React from 'react';
/* // --plump-purple: #52489C;
//  --react-logo-blue: #61dafb */
import githubImg from '../../images/Github.png';
// import '../../styles/Mystyles.css';


function Project(props) {
    return (
        <div>
            <h4>{props.name} <a href={props.githubURL} target="_blank" rel="noreferrer">
                <img src={githubImg} alt="GitHub Icon" />
            </a>
            </h4>
            <img alt={props.name} src={props.img} width="300px" />
            <p>{props.description}</p>
        </div>
    );
}

export default Project;