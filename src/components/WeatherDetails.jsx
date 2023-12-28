import React from 'react'

function WeatherDetails({pressure,humidity,windSpeed,windDirection}) {
  return (
    <div className="flex justify-evenly mt-5">
    <div className="text-center">
      <p>{pressure} hPa </p>
      <p>Pressure</p>
    </div>
    <div className="text-center">
      <p>{humidity}% </p>
      <p>Humidity</p>
    </div>
    <div className="text-center">
      <p>{windSpeed} m/s</p>
      <p>Wind Speed</p>
    </div>
    <div className="text-center">
      <p>{windDirection}°</p>
      <p>Wind Direction</p>
    </div>
  </div>
  )
}

export default WeatherDetails
