import React from 'react'
import FeBe from '../../images/febe.GIF'
import TeamProfile from '../../images/TeamProfile.GIF'

export default function cards () {
    return (
        <div>
               <section className="projects" id="projects">
        <div className="projects-container">
        <ul>
            <li>
                <p className="project-title">FeBe (Feel Better)</p>
                <a href="https://github.com/perez-rob/FeBe-Feel-Better">
                    <div className="picture-container two">
                        <img className="imgtype" src={ FeBe } alt="Febe screenshot" />
                    </div>
                </a>
                <p className="project-desc">Full stack application that allows users to receive activities based on their mood, update the database based on feedback, update activities based on user creations, track previous activities received and chat with other logged in users to better their mental health. Utilized Handlebars, MySQL, SocketIO, Express, and a wide range of front end skills.</p>
            </li>

            <li>
                <p className="project-title">Sa1l</p>
                <a href="https://scottydphillips.github.io/sa1l/">
                    <div className="picture-container one">
                        <img className="imgtype" src="https://github.com/scottydphillips/sa1l/blob/main/assets/Screenshot-2021-07-01-210551.png?raw=true" alt="Sa1l Website" />
                    </div>
                </a>
                <p className="project-desc">Songs all in one location- Utilizes multiple APIs to deliver song videos, information and similar songs to a user based on their request. Utilized HTML, CSS, JavaScript, jQuery, YouTube API, Musixmatch API, and AudioDB API.</p>
            </li>
           
        
            <li>
                <p className="project-title">Team Profile Generator</p>
                <a href="https://github.com/roomsiejones/team_profile_generator">
                    <div className="picture-container three">
                        <img className="imgtype" src={ TeamProfile } alt="Team Profile" />
                    </div>
                </a>
                <p className="project-desc">Creates a styled HTML page with cards of team members’ information including 1 manager, any amount of engineers and interns from the Command Line Interface. Utilizes JavaScript, CSS, HTML, Inquirer, Jest, Node.js.

                </p>
            </li>
        </ul>
        </div>
        </section>
        </div>
    )
}