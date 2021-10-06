import axios from 'axios'

export const userGlobalInformation = async () =>{
    const request = await axios.get("http://localhost:3000/user/12")
    return request
}

export const todayScore = async (score) =>{
    const request = await axios.get("http://localhost:3000/user/12")
    return score(request.data.data)
}

export const userActivityInformation = async (activity) => {
    const request = await axios.get("http://localhost:3000/user/12/activity")

    return activity(request.data.data.sessions)
}

export const userAverageSessionsInformation = async (averageSession) => {
    const request = await axios.get("http://localhost:3000/user/12/average-sessions")
    return averageSession(request.data.data.sessions)
}

export const userPerformanceInformation = async (performances) =>{
    const request = await axios.get("http://localhost:3000/user/12/performance")
    return performances(request.data.data.data)
}
export const userKindInformation = async (kind) =>{
    const request = await axios.get("http://localhost:3000/user/12/performance")

    return kind(request.data.data.kind)
}
