import React from 'react'
// import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import VerticalBar from './VerticalBar/VerticalBar'
import {userGlobalInformation} from '../services/api.js'
import UserName from './Dashboard/UserName/UserName'
// import axios from 'axios'


export default function App() {

// userGlobalInformation.then(res=>console.log(res))
console.log(userGlobalInformation);
    return (
        <React.Fragment>
            <header>
                <Navbar path=""/>
            </header>
            <main>
                <VerticalBar />
                <UserName />
            </main>
            
        </React.Fragment>
    )
}