import React from 'react'
import Navbar from './Navbar/Navbar'
import VerticalBar from './VerticalBar/VerticalBar'
import Dashbord from './Dashbord/Dashbord'


export default function App() {
    return (
        <React.Fragment>
            <Navbar links={["Accueil", "Profil", "Réglage", "Communauté"]} />
            <main>
                <VerticalBar copyright="Copyright, SportSee 2020" />
                <Dashbord />
            </main>
        </React.Fragment>
    )
}