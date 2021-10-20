import React, { useEffect, useState } from 'react'
import UserName from './UserName/UserName'
import './Dashbord.css'
import Activity from './Activity/Activity'
import InfoCard from './InfoCard/InfoCard'
import { globalAccesUserInfo } from '../../services/api'
import Intensity from './Intensity/Intensity'
import Score from './Score/Score'
import AverageSessions from './AverageSessions/AverageSessions'

/**
 *  dashboard page component
 * @component
 */
export default function Dashboard() {
    const [foodInfo, setFoodInfo] = useState([])

    useEffect(() => {
        globalAccesUserInfo().then(response=>{
            setFoodInfo(response.nutrient)
        })
    }, [])
    return (
        <section className="dashbord">
            <UserName hello="Bonjour" congrats="Félicitation ! Vous avez explosé vos objectifs hier" emoji="👏"/>
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
                    {
                        foodInfo.map((item, key)=>{
                            return <InfoCard
                                id={key}
                                key={key}
                                weight={item}
                                info={key === 0 ? "Calories" : key === 1 ? "Proteines" : key === 2 ? "Glucides" : "Lipides"}
                            />
                        })
                    }
                </div>
            </div>
        </section>
    )
}
