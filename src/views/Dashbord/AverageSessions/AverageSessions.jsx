import React, { useState, useEffect } from 'react'
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { userAverageSessionsInformation } from '../../../services/api'

export default function AverageSessions() {
    const [sessions, setSessions] = useState()

    useEffect(() => {
        userAverageSessionsInformation(setSessions)
    }, [])

    return (
        <div>
            <LineChart style={{background:"red", borderRadius:"7px"}} data={sessions} width={350} height={400} fill="white">
                <XAxis tickLine={false} axisLine={false} datakey="day"/>
                <YAxis hide={true} dataKey="sessionLength"/>
                <Tooltip separator=" " labelStyle={{display:"none"}}  itemStyle={{color:"black"}} />
                <Line dot={false} type="monotone" name=" " dataKey="sessionLength" legendType="none" unit=" min" stroke="white" strokeWidth={3}/>
            </LineChart>
        </div>
    )
}
