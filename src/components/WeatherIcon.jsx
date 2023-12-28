import React from 'react'

function WeatherIcon({icon,desc}) {
  return (
    <div className="flex justify-center items-center">
                <img
                  className="w-20"
                  src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt="weather image"
                />
                <h2 className="text-2xl font-semibold text-center">
                  {desc}
                </h2>
              </div>
  )
}

export default WeatherIcon
