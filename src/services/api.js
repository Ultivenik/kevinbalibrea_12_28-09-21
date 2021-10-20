import axios from 'axios'

/**
 * Call API function for general datas (id, user informations, today score, keydata for nutrient datas)
 * @type {Function}
 * @returns {{score: number, firstName: string, nutrient: array<number>}}
 */
export const globalAccesUserInfo = async () => {
    const request = await axios.get("http://localhost:3000/user/12")
    console.log(request.data.data);
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
/**
 * Call API function for activity datas
 * @type {Function}
 * @returns {Array<object>}
 */
export const userActivityInformation = async () => {
    const request = await axios.get("http://localhost:3000/user/12/activity")
    const data = request.data.data.sessions
    return data
}

/**
 *  Call API function  for average sessions datas
 * @type {Function}
 * @returns {Array<object>}
 */
export const userAverageSessionsInformation = async () => {
    const request = await axios.get("http://localhost:3000/user/12/average-sessions")
    const data = request.data.data.sessions
    const days = ["", "L", "M", "M", "J", "V", "S", "D"]
    return data.map(item => {
        return {...item, days: days[item.day]}
    })
}

/**
 * Call API function for performances datas
 * @type {Function}
 * @returns {Array<object>}
 */
export const userPerformanceInformation = async () =>{
    const request = await axios.get("http://localhost:3000/user/12/performance")
    const data = request.data.data.data
    const kind = request.data.data.kind
    return data.map(item=>{
        return {...item, kind: kind[item.kind]}
    })
}
