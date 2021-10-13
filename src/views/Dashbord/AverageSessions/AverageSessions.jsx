import React, { useState, useEffect } from 'react'
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import { userAverageSessionsInformation } from '../../../services/api'
import './AverageSessions.css'

export default function AverageSessions() {
    const [sessions, setSessions] = useState()

    useEffect(() => {
        userAverageSessionsInformation(setSessions)
    }, [])

    const renderLegend = ()=>{
        return "Durée moyenne des sessions"
    }
    return (
        <ResponsiveContainer width={"32%"} height={200}>
            <LineChart className="line-parent" style={{background:"red", borderRadius:"7px"}} data={sessions} cx="50%" cy="50%" radius={[10,10,0,0]} >
                <XAxis tickLine={false} padding={{ top: 55 }} axisLine={false} dataKey="days" interval={0} />
                <Tooltip separator=" " labelStyle={{display:"none"}}  itemStyle={{color:"black"}} />
                <Line dot={false} type="monotoneX" name=" " dataKey="sessionLength" legendType="none" unit=" min" stroke="white" strokeWidth={2}/>
                <Legend verticalAlign="top" content={renderLegend} wrapperStyle={{color:"rgba(255, 255, 255, 0.419)", fontSize:".8em", width:"120px", top:"15%", left:"10%" }} />
            </LineChart>
        </ResponsiveContainer>
    )
}
