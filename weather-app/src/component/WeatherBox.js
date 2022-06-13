import React from 'react'

const WeatherBox = ({weather}) => {
  return (
    <div className="weather-box">
      <div>{weather?.name}</div>
      <h2>{weather?.main.temp}C/{Math.round(weather?.main.temp * 18 + 32)}화씨</h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox