import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'
import { Label, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'
import { todayScore } from '../../../services/api'

export default function Score() {
    const [score, setScore] = useState()

    useEffect(() => {
        todayScore(setScore)
    }, [])

    const data = [score]
 
console.log(score);
    return (
        <ResponsiveContainer width={"32%"} height={200}>
            <RadialBarChart startAngle={0} endAngle={360}  style={{background:"#97979712", borderRadius:"7px"}} cx="50%" cy="50%" innerRadius="70%" barSize={15} data={data} >
                <Label dataKey='score' position="center" fill="black" />
                <RadialBar
                    // minAngle={180}
                    dataKey="todayScoreformatted"
                    fill="red"
                    background={true}
                />
            </RadialBarChart>
        </ResponsiveContainer>
    )
}
