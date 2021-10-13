import React, { useEffect, useState } from 'react'
import UserName from './UserName/UserName'
import './Dashbord.css'
import Activity from './Activity/Activity'
import InfoCard from './InfoCard/InfoCard'
import { userGlobalInformation } from '../../services/api'
import Intensity from './Intensity/Intensity'
import Score from './Score/Score'
import AverageSessions from './AverageSessions/AverageSessions'

export default function Dashboard() {
    const [calorieCount, setcalorieCount] = useState()
    const [proteinCount, setproteinCount] = useState()
    const [carbohydrateCount, setcarbohydrateCount] = useState()
    const [lipidCount, setlipidCount] = useState()

    useEffect(()=>{
        userGlobalInformation(setcalorieCount).then(response=>{
            setcalorieCount(response.data.data.keyData.calorieCount)
        })
    }, [])

    useEffect(()=>{
        userGlobalInformation(setproteinCount).then(response=>{
            setproteinCount(response.data.data.keyData.proteinCount)
        })
    }, [])

    useEffect(()=>{
        userGlobalInformation(setcarbohydrateCount).then(response=>{
            setcarbohydrateCount(response.data.data.keyData.carbohydrateCount)
        })
    }, [])

    useEffect(()=>{
        userGlobalInformation(setlipidCount).then(response=>{
            setlipidCount(response.data.data.keyData.lipidCount)
        })
    }, [])

    return (
        <section className="dashbord">
            <UserName />
            <div className="sessions">
                <div className="stats">
                    <Activity />
                    <div className="intensity-average-score-chart">
                        <AverageSessions />
                        <Intensity />
                        <Score />
                    </div>
                </div>
                <div className= "info-cards">
                    <InfoCard info = "Calories" weight={calorieCount + "kCal"}/>
                    <InfoCard info = "Proteines" weight={proteinCount + "g"}/>
                    <InfoCard info = "Glucides" weight={carbohydrateCount + "g"}/>
                    <InfoCard info = "Lipides" weight={lipidCount + "g"}/>
                </div>

            </div>
        </section>
    )
}
