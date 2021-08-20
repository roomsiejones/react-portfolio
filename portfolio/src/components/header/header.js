import React from 'react'
import { Link } from 'react-router-dom'

import Nav from '../nav/nav'


export default function Header () {
    return (
        <div className="navbar-fixed">
        <div className="nav-container">
            <header>
                   <Link to="/" className="logo">Jonathon Renaud</Link>
        <Nav />    
        </header>
        </div>
    </div>
    )
}