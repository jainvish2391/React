import React, { useState } from 'react'


const App = () => {

    let newTime = new Date().toLocaleTimeString()
    const [curTime , setTime] = useState(newTime)

    const UpdateTime = () => {
        newTime = new Date().toLocaleTimeString()  
        setTime(newTime)
    
    }

    return (
        <>
        <h1>{curTime}</h1>
        <button onClick={UpdateTime}>Get Time</button>
        </>

    )
}

export default App