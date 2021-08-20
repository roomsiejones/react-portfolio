import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div>
        <nav>
            <ul>
             <li><Link to="/about-me" className="links">About Me</Link></li>
             <li><Link to="/projects" className="links">Projects</Link></li>
             <li><Link to="/contact" className="links">Contact Me</Link></li>
             {/* <li><a href="./assets/images/resume.pdf" target ="blank" class="links">Resume</a></li> */}
            </ul>
        </nav>     
        </div>
    )
}