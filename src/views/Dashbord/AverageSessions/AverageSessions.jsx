import React, { useState, useEffect } from 'react'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import { userAverageSessionsInformation } from '../../../services/api'
import './AverageSessions.css'

/**
 * aaverage session graph component
 * @component
 */
export default function AverageSessions() {
    const [sessions, setSessions] = useState()

    useEffect(() => {
        userAverageSessionsInformation().then(response =>{
            setSessions(response)
        })
    }, [])

    return (
        <React.Fragment>
            <h2 className="average-sessions" >Durée moyenne des sessions</h2>
            <ResponsiveContainer width={"32%"} height={200}>
                <LineChart
                    className="line-parent"
                    style={{background:"red", borderRadius:"5px"}}
                    data={sessions}
                    cx="50%"
                    cy="50%"
                >
                    <XAxis
                        tickLine={false}
                        padding={{ top: 55 }}
                        axisLine={false}
                        dataKey="days"
                        interval={0}
                    />
                    <Tooltip
                        separator=" "
                        labelStyle={{display:"none"}}
                        itemStyle={{color:"black"}}
                    />
                    <Line
                        dot={false}
                        type="monotoneX"
                        name=" "
                        dataKey="sessionLength"
                        legendType="none"
                        unit=" min"
                        stroke="white"
                        strokeWidth={2}
                    />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    )
}
