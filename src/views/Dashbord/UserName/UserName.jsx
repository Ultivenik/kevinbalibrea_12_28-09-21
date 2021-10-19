import React, {useState, useEffect} from 'react'
import { globalAccesUserInfo } from '../../../services/api'
import './Username.css'

export default function UserName(props) {
    const [name, setName] = useState()

    useEffect(() => {
        globalAccesUserInfo().then(response =>{
            setName(response.firstName)
        })
    }, [])

    return (
        <React.Fragment>
            <h1 className="main-title"> {props.hello} <span className="name"> {name} </span></h1>
            <p> {props.congrats} <span aria-label="emoji applaudissement" role="img"> {props.emoji} </span></p>
        </React.Fragment>
    )
}
