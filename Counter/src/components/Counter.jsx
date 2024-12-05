import React, {useEffect, useState} from 'react'

function Counter() {
  // const Array = useState(0);
  // const count = Array[0];
  // const setCount = Array[1];
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const incCountFun = () => {
    setCount(count+1);
  }
  const decCountFun = () => {
    setCount(count-1);
  }

  useEffect(() => {
    alert("Hello");
    // setCount1(count*5);
  })

  return (
    <div>
      <h1>Counter: {count} and {count1}</h1>
      <button onClick={incCountFun}>Increase</button>
      <button onClick={decCountFun}>Decrease</button>
    </div>
  )
}

export default Counter