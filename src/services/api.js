import axios from 'axios'
// import { useCallback } from 'react'
// import React from 'react'
// import Loader from './Loader.js'

export const userGlobalInformation = async (globalInfo) =>{
    const request = await axios.get("http://localhost:3000/user/12")
    const nutrient = request.data.data.keyData
    return globalInfo([
        nutrient.calorieCount,
        nutrient.carbohydrateCount,
        nutrient.lipidCount,
        nutrient.proteinCount,
    ])
}

export const userNameInformation = async (name) =>{
    const request = await axios.get("http://localhost:3000/user/12")
    const firstName = request.data.data.userInfos.firstName
    return name(firstName)
}

export const todayScore = async (score) =>{
    const request = await axios.get("http://localhost:3000/user/12")
    const data = request.data.data

    return score(data.todayScore * 100)
}

export const userActivityInformation = async (activity) => {
    const request = await axios.get("http://localhost:3000/user/12/activity")

    return activity(request.data.data.sessions)
}

export const userAverageSessionsInformation = async (averageSession) => {
    const request = await axios.get("http://localhost:3000/user/12/average-sessions")
    const data = request.data.data.sessions
    const days = ["", "L", "M", "M", "J", "V", "S", "D"]
    return averageSession(data.map(item => {
        return {...item, days: days[item.day]}
    }))
}

export const userPerformanceInformation = async (performances) =>{
    const request = await axios.get("http://localhost:3000/user/12/performance")
    const data = request.data.data.data
    const kind = request.data.data.kind
    return performances(data.map(item=> {return {...item, kind: kind[item.kind]}} ))
}


