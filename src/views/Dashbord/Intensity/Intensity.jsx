import React, { useState, useEffect } from 'react'
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts'
import { userPerformanceInformation } from '../../../services/api'

export default function Intensity() {
    const [performances, setPerformances] = useState()

    useEffect(() => {
        userPerformanceInformation(setPerformances)
    }, [])

    return (
        <ResponsiveContainer  width={"32%"} height={200}>
            <RadarChart outerRadius={"80%"} cx="50%" style={{background:"#282D30", borderRadius:"7px", fontSize:"0.6em" }} data={performances} fill="white">
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" />
                <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    )
}
