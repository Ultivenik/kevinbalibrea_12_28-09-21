import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'
import { Label, Legend, PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'
import { todayScore } from '../../../services/api'

export default function Score() {
    const [score, setScore] = useState()

    useEffect(() => {
        todayScore(setScore)
    }, [])

    const data = [{
        "score": score,
        "percent": 100
    }]
    const renderLegend = ()=>{
        return "Score"
    }
console.log(data);
    return (
        <ResponsiveContainer width={"32%"} height={200}>
            <RadialBarChart startAngle={-210} endAngle={360}  style={{background:"#97979712", borderRadius:"7px"}} cx="50%" cy="50%" innerRadius="70%" barSize={15} data={data} >
                <Label dataKey='score' position="center" fill="black" />
                <Legend verticalAlign="top" content={renderLegend} wrapperStyle={{color:"#20253A",fontWeight:"500", fontSize:".8em", width:"100px", top:"10%", left:"10%" }} />
                <RadialBar
                    minAngle={0}
                    dataKey="score"
                    fill="red"
                    background={true}
                    radius={[10,10,0,0]}
                    label={{ fill: '#000', position: 'center' }}
                />
                <PolarAngleAxis type="number" domain={[0, 100]} dataKey={'percent'} tick={false} />
            </RadialBarChart>
        </ResponsiveContainer>
    )
}
