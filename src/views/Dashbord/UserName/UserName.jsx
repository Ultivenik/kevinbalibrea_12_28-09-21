import React, {useState, useEffect} from 'react'
import { userGlobalInformation } from '../../../services/api'
import './Username.css'

export default function UserName() {
    const [name, setName] = useState([])

    useEffect(() => {
        userGlobalInformation(setName)
        .then(response=> setName(response.data.data.userInfos.firstName))
    }, [])
    return (
        <React.Fragment>
            <h1 className="main-title">Bonjour <span className="name"> {name} </span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier <span aria-label="emoji applaudissement" role="img">👏</span></p>
        </React.Fragment>
    )
}
