import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx"

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signup" element={<h1>Signup Page</h1>}></Route>
            <Route path="/login" element={<h1>Login Page</h1>}></Route>
            <Route path="/viewproduct" element={<h1>View Products</h1>}></Route>
            <Route path="/addproduct" element={<h1>Add Product</h1>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App