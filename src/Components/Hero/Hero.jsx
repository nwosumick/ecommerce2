import React from 'react'
import hero_img from '../../assets/hero.jpg'
import './Hero.css'

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero_content">
          <div className="hero_left">
          <h1>Our Elegant Collections Just For You</h1>
          <p>Shop the latets trends and classic essentials just for you</p>
          </div>
          <div className="hero_right">
            <img src={hero_img} alt="hero-img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero