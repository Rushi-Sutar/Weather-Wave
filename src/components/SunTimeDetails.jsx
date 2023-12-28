import React from 'react'

function SunTimeDetails({sunrisetime,sunsettime}) {
  return (
    <div className="flex justify-around mt-5">
          <div className="text-center">
              <center>
                  <img className="w-12" src="src/assets/sunrise.png" alt="" />
                  </center>
                  <h1>
                    {new Date(sunrisetime * 1000).toLocaleTimeString()}
                  </h1>
                  <p>Sunrise</p>
                </div>
          <div className="text-center">
              <center>
                  <img className="w-12" src="src/assets/sunset.png" alt="" />
                  </center>
                  <h1>
                    {new Date(sunsettime * 1000).toLocaleTimeString()}
                  </h1>

                  <p> Sunset</p>
                </div>
              </div>
  )
}

export default SunTimeDetails
