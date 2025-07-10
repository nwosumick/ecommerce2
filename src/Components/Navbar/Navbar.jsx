import React from 'react'
import { BiCart, BiSearch, BiUser } from 'react-icons/bi'
import { MdCancel } from 'react-icons/md'
import './Navbar.css'

const Navbar = () => {

  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar")
    navbar.classList.toggle("active", window.screenY > 100)
  })

  return (
    <div>
       <div className="navbar">
        <div className="logo">
          <h2>LOGO HERE</h2>
        </div>
        <div className="search">
          <BiSearch className='search_icon'/>
          <input type="text" placeholder='Serach for anything ...' />
          <MdCancel className='cancel'/>
        </div>
        <div className="nav_icon_wrapper">
          <div className="nav_cart">
            <BiCart className='nav_icon' />
             <BiUser className='nav_icon' />
            <p className="nav_cart_amount">0</p>
          </div>
         
        </div>
       </div>
    </div>
  )
}

export default Navbar