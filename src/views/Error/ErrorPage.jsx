import React from 'react'
import Navbar from '../Navbar/Navbar'
import VerticalBar from '../VerticalBar/VerticalBar'

export default function ErrorPage() {
    return (
        <React.Fragment>
            <Navbar/>
            <main>
                <VerticalBar/>
                <h1>ERREUR 404</h1>
                <p>Il semblerait que la page que vous souhaitez n'existe pas.</p>
            </main>
        </React.Fragment>
    )
}
