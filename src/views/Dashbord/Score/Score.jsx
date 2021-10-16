import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'
import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'
import { todayScore } from '../../../services/api'
import CustomLabel from '../CustomLabel/CustomLabel'
import './Score.css'

export default function Score() {
    const [score, setScore] = useState()

    useEffect(() => {
        todayScore(setScore)
    }, [])

    const data = [{
        "score": score,
        "percent": 100
    }]

    return (
        <React.Fragment>
            <span className="radial-title">Score</span>
            <CustomLabel data={score} />
            <ResponsiveContainer width={"32%"} height={200}>
                <RadialBarChart startAngle={-210} endAngle={360} style={{background:"#FBFBFB"}} cx="50%" cy="50%" innerRadius="70%" barSize={30} data={data} >
                    <RadialBar
                        minAngle={0}
                        clockWise
                        cornerRadius={12}
                        dataKey="score"
                        fill="red"
                        background/>
                    <PolarAngleAxis type="number" domain={[0, 100]}  tick={false} />
                </RadialBarChart>
            </ResponsiveContainer>
        </React.Fragment>
    )
}
