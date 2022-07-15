import React from 'react';

function Resume() {
    return (
        <section>
            <h2>My Resume</h2>
            <a href={require(`../../assets/resume/resume.pdf`)} rel="noreferrer" target="_blank">Download Resume</a>
            <h3>My Proficiencies</h3>
            <ul>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>MERN Stack</li>
            </ul>
        </section>
    );
}

export default Resume;