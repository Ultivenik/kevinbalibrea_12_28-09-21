import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'
import { Label, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'
import { todayScore } from '../../../services/api'

export default function Score() {
    const [score, setScore] = useState()

    useEffect(() => {
        todayScore(setScore)
    }, [])

    const data = [
        {
            "uv": score,
            "fill": "red",
        },
        // {
        //     "uv": "100",
        //     "fill": "#97979712"
        // }
    ]
 
console.log(score);
    return (
        <ResponsiveContainer width={"32%"} height={200}>
            <RadialBarChart startAngle={-250} endAngle={360} style={{background:"#97979712", borderRadius:"7px"}} cx="50%" cy="50%" innerRadius="70%" barSize={15} data={data} >
                <Label dataKey='uv' position="center" fill="black" />
                <RadialBar
                    // minAngle={15}
                    dataKey="uv"
                    fill="red"
                    stroke="blue"
                    background
                />
            </RadialBarChart>
        </ResponsiveContainer>
    )
}
