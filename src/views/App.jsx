import React from 'react'
// import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import VerticalBar from './VerticalBar/VerticalBar'
import Dashbord from './Dashbord/Dashbord'


export default function App() {
    return (
        <React.Fragment>
            <Navbar path=""/>
            <main>
                <VerticalBar />
                <Dashbord />
            </main>
        </React.Fragment>
    )
}