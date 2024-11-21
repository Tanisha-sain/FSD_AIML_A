import React, {useState} from 'react'

function Counter() {
  // const Array = useState(0);
  // const count = Array[0];
  // const setCount = Array[1];
  const [count, setCount] = useState(0);

  const incCountFun = () => {
    setCount(count+1);
  }
  const decCountFun = () => {
    setCount(count-1);
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={incCountFun}>Increase</button>
      <button onClick={decCountFun}>Decrease</button>
    </div>
  )
}

export default Counter