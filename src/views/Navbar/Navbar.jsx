import React from 'react'
import logo from '../../assets/logo.png'
import './NavBar.css'

export default function Navbar(props) {
    return (
        <header className="header">
            <nav className="nav">
                <img src={logo} alt="Logo" />
                <ul className="nav-links">
                    {props.links.map((link, key) =>
                        <li key={key}>
                            {link}
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}
