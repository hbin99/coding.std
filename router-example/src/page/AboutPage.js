import React from 'react'
import {useNavigate} from "react-router-dom"
const AboutPage = () => {
  const navigate =useNavigate()

  const goToHomePage =()=>{
    navigate("/");
  }
  return (
    <div>
      <h1>about</h1>
      <button onClick={goToHomePage}> Go to Home</button>
    </div>
  )
}

export default AboutPage
