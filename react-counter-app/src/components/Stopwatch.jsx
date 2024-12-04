import { useState } from "react"

const Stopwatch = () => {
    const [state, setState] = useState("Start")
    const [time, setTime] = useState(0)
    let val = time

    const handleTime = () => {
        if(state == "Stop"){
            setState("Start")
            setTime(0)
        }else{
            setState("Stop")
            setInterval(() => {
            },1000)
        }
    }

    const handleReset = () => {
        setState("Start")
        setTime(0)
    }


    return (
        <div>
            <h1>Stopwatch App</h1>
            <h1>{`${time}`}</h1>
            <button onClick={handleTime}>{state}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Stopwatch