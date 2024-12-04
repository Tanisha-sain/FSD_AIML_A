import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    const increaseCount = () => {
        setCount(count+1)
    }
    const decreaseCount = () => {
        setCount(count-1)
    }

    return (
        <div>
            <h1>Counter App</h1>
            <h2>Counter : {count}</h2>
            <button onClick={increaseCount}>Increment</button>
            <button onClick={decreaseCount}>Decrement</button>
        </div>
    )
}

export default Counter