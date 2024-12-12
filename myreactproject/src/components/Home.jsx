import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link, Outlet } from 'react-router-dom'
import '../App.css'

function Home() {
  return (
    <div>
        <Header/>
        <nav>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register Here</Link>
                </li>
            </ul>
        </nav>
        {/* Render page on parent */}
        <Outlet/> 
        <Footer/>
    </div>
  )
}

export default Home