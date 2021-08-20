import React from 'react'

export default function Nav () {
    return (
        <div>
        <nav>
            <ul>
             <li><a href="about-me" className="links">About Me</a></li>
             <li><a href="projects" className="links">Projects</a></li>
             <li><a href="contact" className="links">Contact Me</a></li>
             {/* <li><a href="./assets/images/resume.pdf" target ="blank" class="links">Resume</a></li> */}
            </ul>
        </nav>     
        </div>
    )
}