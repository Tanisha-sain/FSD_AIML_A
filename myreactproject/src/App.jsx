import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'

function App() {
  const [regData, setRegData] = useState();
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/login' element={<Login regData={regData}/>}></Route>
          <Route path='/register' element={<Register regData={setRegData}/>}></Route>
        </Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/logout' element={<h1>Logout Page</h1>}></Route>
        <Route path='/*' element={<h1>No Page</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App