import React from 'react'

function Dashboard() {
  return (
    <div><Header/>
    <nav>
        <ul>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/logout">Logout</Link>
            </li>
        </ul>
    </nav>
    {/* Render page on parent */}
    <Outlet/> 
    <Footer/></div>
  )
}

export default Dashboard