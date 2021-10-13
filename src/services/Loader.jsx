import React, {useState, useEffect, useCallback } from 'react'


export default function Loader({load, children}) {
    const [data, setData] = useState(null)
    const execLoadDataFunction = useCallback(async () =>{
        const result = await load()
        setData(result)
        useEffect(()=>{
            if (!data) {
                execLoadDataFunction()
            }
        }, [data, execLoadDataFunction])
        return data && children(data)
    })
}
