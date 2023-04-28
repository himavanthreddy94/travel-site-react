import React from 'react'
import './Hero.css'

const Hero = ({imageSrc}) => {
  return (
   <>
    <div className="hero">
        <img src={imageSrc} alt="hero-section-backgroung-image" className='hero-img' />
        <h1 className='hero-title'>Start Backpacking.</h1>
    </div>
   </>
  )
}

export default Hero
