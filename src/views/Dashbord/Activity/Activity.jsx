import React, { useState, useEffect} from 'react'
import {BarChart, Bar, YAxis, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'
import { userActivityInformation } from '../../../services/api'

export default function Activity() {
    const [activity, setActivity] = useState()

    useEffect(() => {
        userActivityInformation(setActivity)
    }, [])

    return (
        <div>
            <ResponsiveContainer width={"60%"} height= {350}>
                <BarChart barSize={8} data={activity}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3"/>
                    <XAxis tickLine={false} />
                    <YAxis dataKey="calories" tickCount={3} axisLine={false} tickLine={false} orientation="right"/>
                    <Tooltip separator=" " labelStyle={{display:"none"}} itemStyle={{background:"red", color:"white", padding:"1.5em 1em", fontSize:".8em"}} contentStyle={{background:"red", border:0}} />
                    <Bar name=" " legendType="none" unit="kg" dataKey="kilogram" fill="#282D30"  />
                    <Bar name=" " legendType="none" unit="Kcal" dataKey="calories" fill="#E60000"/>
                    <Legend verticalAlign="top" align="right" height={36} />
                    <Bar legendType="circle" dataKey="Calories brûlées (kCal)" fill="#E60000"/>
                    <Bar legendType="circle" dataKey="Poids (kg)" fill="#282D30"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
