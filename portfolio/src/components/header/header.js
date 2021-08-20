import React from 'react'
import Nav from '../nav/nav'
import "./header.css"


export default function Header () {
    return (
        <div className="navbar-fixed">
        <div className="nav-container">
            <header>
                   <a href="/" className="logo">Jonathon Renaud</a>
        <Nav />    
        </header>
        </div>
    </div>
    )
}