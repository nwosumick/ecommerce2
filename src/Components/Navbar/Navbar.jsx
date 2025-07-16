import React, { useContext } from 'react'
import { BiCart, BiSearch, BiUser } from 'react-icons/bi'
import { MdCancel } from 'react-icons/md'
import './Navbar.css'
import { ShopContext } from '../ShopContext/ShopContext'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar")
    navbar.classList.toggle("active", window.scrollY > 100)
  });

  const { searchProducts, setHeroVisible, itemAmount } = useContext(ShopContext);
  const [query, setQuery] = useState('');

  // fxn to be triggered whenever the user types anything
  const handleSearch = (e) => {
    setQuery(e.target.value);
    searchProducts(e.target.value)
  };

  // fxn that will make our hero dissappear when the search input is clicked 
  const handleClick = ()=> {
    setHeroVisible(false)
  }

  // fxn to make hero section reappear when user cancel search operation 
  const handleCancelClick = () => {
    setHeroVisible(true);
  }

  return (
    <div>
       <div className="navbar">
        <div className="logo">
          <h2>LOGO HERE</h2>
        </div>
        <div className="search">
          <BiSearch className='search_icon'/>
          <input type="text" 
          value={query} 
          onChange={handleSearch}
          onClick={handleClick} 
          placeholder='Serach for anything ...' />
          <MdCancel onClick={handleCancelClick} className='cancel'/>
        </div>
        <div className="nav_icon_wrapper">
         <Link to='/cart'>
          <div className="nav_cart">
            <BiCart className='nav_icon' />
             <BiUser className='nav_icon' />
            <p className="nav_cart_amount"> { itemAmount } </p>
          </div>
         </Link>
         
        </div>
       </div>
    </div>
  )
}

export default Navbar