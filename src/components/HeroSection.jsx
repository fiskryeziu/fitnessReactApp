import React from 'react'
import heropng from '../assets/fitness.jpg'

const HeroSection = () => {
  return (
    <div className="heroSection">
      <img src={heropng} alt="heroimage" className="heroimg" />
      <div className="colorDiv"></div>
      <div className="heroText">
        <h1>
          EVERY WORKOUT <br /> COUNTS
        </h1>
        <p>
          Don't wait until you've reached your goal to be proud of yourself. Be
          proud of every step you take toward reaching that goal.
        </p>
      </div>
    </div>
  )
}

export default HeroSection
