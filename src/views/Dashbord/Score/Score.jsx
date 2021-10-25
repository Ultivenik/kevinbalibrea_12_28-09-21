import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'
import { Customized, PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'
import { globalAccesUserInfo } from '../../../services/api'
import CustomLabel from '../CustomLabel/CustomLabel'
import './Score.css'

/**
 * radial bar score component
 * render a <Score /> component
 * a radial bar chart for total score of progression
 * @component
 */
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
        <div className="radial-container">
            <h2 className="radial-title">Score</h2>
            <CustomLabel
                data={score +"%"}
                classWrapper="radial-wrapper"
                classValue="radial-results"
                classSpanValue="radial-text"
                spanValue={"de votre objectif"}
            />
            <ResponsiveContainer width={"100%"} height={200}>
                <RadialBarChart
                    startAngle={-210}
                    endAngle={360}
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
                    />
                    <PolarAngleAxis type="number" domain={[0, 100]}  tick={false} />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
}