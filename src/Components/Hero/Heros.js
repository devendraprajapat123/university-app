import React from 'react'
import './Heros.css'
import dark_arrow from '../../Assets/dark-arrow.png'

const Heros = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We Ensure better education for a batter world</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt='' ></img></button>
        </div>

    </div>
  )
}

export default Heros