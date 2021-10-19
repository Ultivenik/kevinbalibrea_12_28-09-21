import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'
import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'
import { globalAccesUserInfo } from '../../../services/api'
import CustomLabel from '../CustomLabel/CustomLabel'
import './Score.css'

export default function Score() {
    const [score, setScore] = useState()

    useEffect(() => {
        globalAccesUserInfo().then(response=>{
            setScore(response.score)
        })
    }, [])

    const data = [{
        "score": score,
    }]

    return (
        <React.Fragment>
            <h2 className="radial-title">Score</h2>
            <CustomLabel
                data={score +"%"}
                classWrapper="radial-wrapper"
                classValue="radial-results"
                classSpanValue="radial-text"
                spanValue={"de votre objectif"}
            />
            <ResponsiveContainer width={"32%"} height={200}>
                <RadialBarChart
                    startAngle={-210}
                    endAngle={360}
                    style={{background:"#FBFBFB"}}
                    cx="50%"
                    cy="50%"
                    innerRadius="70%"
                    barSize={30}
                    data={data}
                >
                    <RadialBar
                        minAngle={0}
                        clockWise
                        cornerRadius={12}
                        dataKey="score"
                        fill="red"
                        background
                    />
                    <PolarAngleAxis type="number" domain={[0, 100]}  tick={false} />
                </RadialBarChart>
            </ResponsiveContainer>
        </React.Fragment>
    )
}