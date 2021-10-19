import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import VerticalBar from '../VerticalBar/VerticalBar'
import "./Error.css"

export default function Error() {
    return (
        <React.Fragment>
            <Navbar />
            <VerticalBar />
            <section className="error-wrapper">
                <strong className="code-error">Error 404</strong>
                <p className="error">
                    Erreur la page que vous demandez n'existe pas ou n'a pas été crée
                </p>
                <Link className="home-link" to="/">
                    Retournez à l'Accueil
                </Link>
            </section>
        </React.Fragment>
    )
}
