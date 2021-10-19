import axios from 'axios'

export const globalAccesUserInfo = async () => {
    const request = await axios.get("http://localhost:3000/user/12")
    return {
        "score": request.data.data.todayScore * 100,
        "firstName": request.data.data.userInfos.firstName,
        "nutrient":[
            request.data.data.keyData.calorieCount,
            request.data.data.keyData.carbohydrateCount,
            request.data.data.keyData.lipidCount,
            request.data.data.keyData.proteinCount
        ]
    }
}

export const userActivityInformation = async () => {
    const request = await axios.get("http://localhost:3000/user/12/activity")
    const data = request.data.data.sessions
    return data
}

export const userAverageSessionsInformation = async () => {
    const request = await axios.get("http://localhost:3000/user/12/average-sessions")
    const data = request.data.data.sessions
    const days = ["", "L", "M", "M", "J", "V", "S", "D"]
    return data.map(item => {
        return {...item, days: days[item.day]}
    })
}

export const userPerformanceInformation = async () =>{
    const request = await axios.get("http://localhost:3000/user/12/performance")
    const data = request.data.data.data
    const kind = request.data.data.kind
    return data.map(item=>{
        return {...item, kind: kind[item.kind]}
    })
}
