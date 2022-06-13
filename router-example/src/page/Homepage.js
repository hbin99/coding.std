import React from 'react'
import {Link} from "react-router-dom"
const Homepage = () => {
  return (
    <div>
      <h1>home</h1>
      <Link to="/about"> Go to about </Link>
    </div>
  )
}

export default Homepage
