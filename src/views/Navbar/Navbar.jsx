import React from 'react'
// import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import './NavBar.css'

export default function Navbar() {
    const linksOfTheNavBar = ["Accueil", "Profil", "Réglage", "Communauté"]
    return (
        <header className="header">
            <nav className="nav">
                <img src={logo} alt="Logo" />
                <ul className="nav-links">
                    {linksOfTheNavBar.map(link=>
                        <li key={link}>
                            {link}
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}
