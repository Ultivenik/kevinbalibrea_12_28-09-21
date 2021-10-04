import axios from 'axios'

export const userGlobalInformation = axios.get("http://localhost:3000/user/12")
    .then(response => response.data.data)

export const userActivityInformation = axios.get("http://localhost:3000/user/12/activity")
    .then(response => response.data.data)

export const userAverageSessionsInformation = axios.get("http://localhost:3000/user/12/average-sessions")
    .then(response => response.data.data)


export const userPerformanceInformation = axios.get("http://localhost:3000/user/12/performance")
    .then(response => response.data.data)
