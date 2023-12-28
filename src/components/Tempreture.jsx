import React from 'react'

function Tempreture({cityname,today,tempreture}) {
  return (
    <>
       <h2 className="text-3xl font-bold text-center leading-loose">
                {cityname}
              </h2>
              <h2 className="text-xl font-bold text-center ">{today}</h2>
              <p className="text-7xl font-bold text-center leading-tight">
                {tempreture}°C
              </p>
    </>
  )
}

export default Tempreture
