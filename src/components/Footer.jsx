import React from 'react'
import './Footer.css'

const Footer = () => {

    const date = new Date();
    let year = date.getFullYear();

  return (
    <div className='footer'>
      <p>©️{year} Himavanth Reddy | all rights reserved</p>
    </div>
  )
}

export default Footer
