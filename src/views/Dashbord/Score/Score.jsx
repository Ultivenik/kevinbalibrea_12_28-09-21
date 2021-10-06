import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'
import { Legend, RadialBar, RadialBarChart } from 'recharts'
import { todayScore } from '../../../services/api'

export default function Score() {
    const [score, setScore] = useState()

    useEffect(() => {
        todayScore(setScore)
    }, [])

    return (
        <div>
            {/* <RadialBarChart width={350} height={400} cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" data={score} startAngle={360}
            endAngle={0}>
                <RadialBar minAngle={15} label={{ fill: '#666', position:"center"}} background legendType="circle" dataKey="todayScore" />
            </RadialBarChart> */}
        <RadialBarChart 
            width={730} 
            height={250} 
            innerRadius="10%" 
            outerRadius="80%" 
            data={score} 
            startAngle={360} 
            endAngle={0}
            fill="black"
            >
            <RadialBar minAngle={15} label={{ fill: '#666', position: 'center' }} background clockWise={true} dataKey='todayScore' />
            <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
        </RadialBarChart>
        </div>
    )
}
