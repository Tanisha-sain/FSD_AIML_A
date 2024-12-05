import React from 'react'
import quesBank from './QuesBank'
import './index.css'
function App() {
  return (
    <>
      <div id='main'>
        <h1>My Quiz Application</h1>
        <div>
          <h2>Question 1. {quesBank.question}</h2>
          <h3><input type="radio" name='options' /> {quesBank.option1}</h3>
          <h3><input type="radio" name='options' /> {quesBank.option2}</h3>
          <h3><input type="radio" name='options' /> {quesBank.option3}</h3>
          <h3><input type="radio" name='options' /> {quesBank.option4}</h3>
        </div>
        <div>

        </div>
      </div>
    </>
  )
}

export default App