import React, { useContext } from 'react'
import hero_img from '../../assets/hero.jpg'
import './Hero.css'
import { ShopContext } from '../ShopContext/ShopContext'

const Hero = () => {
   const {heroVisible} = useContext(ShopContext);

   if (!heroVisible) return null
  return (
    <div>
      <div className="hero">
        <div className="hero_content">
          <div className="hero_left">
          <h1>Our Elegant Collections Just For You</h1>
          <p>Shop the lastest trends and classic essentials just for you</p>
          </div>
          <div className="hero_right">
            <img src={hero_img} alt="hero-img"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero