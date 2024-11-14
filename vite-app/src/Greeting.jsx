import React from 'react'

function Greeting({ name="xyz", age=20 }) {
  return (
    <div>
        {name}'s age is {age}
    </div>
  )
}

export default Greeting