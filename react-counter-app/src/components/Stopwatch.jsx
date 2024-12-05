import { useEffect, useState } from "react"

const Stopwatch = () => {
    const [state, setState] = useState("Start")
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [hour, setHours] = useState(0);
    const [isvalid, setIsvalid] = useState(null);

    useEffect(() => {
        if(state == "Stop"){
            const id = setInterval(() => {
                setSec((sec) => {
                    if(sec == 60){
                        setSec(0)
                        setMin((min) => {
                            if(min == 59){
                                setMin(0);
                                setHours((hour) => hour+1);
                            }else{
                                return min + 1;
                            }
                        })
                    }else{
                        return sec + 1
                    }
                })
            },1000)
            setIsvalid(id)
        }
        return () => clearInterval(isvalid)
    }, [state])

    const handleTime = () => {
        if(state == "Stop"){
            setState("Start")
        }else{
            setState("Stop")
        }
        clearInterval(isvalid);
    }

    const handleReset = () => {
        setState("Start")
        setMin(0)
        setSec(0)
        setHours(0)
    }


    return (
        <div>
            <h1>Stopwatch App</h1>
            <h1>{`${hour < 10 ? "0" + hour : hour}:${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`}</h1>
            <button onClick={handleTime}>{state}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Stopwatch