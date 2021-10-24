import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './NavBar.css'

/**
 * render a <NavBar /> component
 * a navbar for link of pages application
 * @component
 */
export default function Navbar() {
    const links = ["Accueil", "Profil", "Réglage", "Communauté"]
    return (
        <header className="header">
            <nav className="nav">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                <ul className="nav-links">
                    {links.map((link, key) =>
                        <li key={key}>
                            <Link to={"/" + link}>
                                {link}
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}
