import React, { useState, useEffect } from 'react'
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts'
import { userPerformanceInformation } from '../../../services/api'

export default function Intensity() {
    const [performances, setPerformances] = useState()

    useEffect(() => {
        userPerformanceInformation(setPerformances)
    }, [])

    // 1: "cardio"
// ​​
// 2: "energy"
// ​​
// 3: "endurance"
// ​​
// 4: "strength"
// ​​
// 5: "speed"
// ​​
// 6: "intensity"
    return (
        <div>
            <RadarChart style={{background:"#282D30", borderRadius:"7px"}} width={350} height={400} data={performances} fill="white">
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" />
                <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
            </RadarChart>
        </div>
    )
}
