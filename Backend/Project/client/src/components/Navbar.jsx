import React from 'react'
import "../style/navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
        <ul>
            <li>HOME</li>
            <li>View Products</li>
            <li>Add Product</li>
            <li>Logout</li>
        </ul>
    </div>
  )
}

export default Navbar