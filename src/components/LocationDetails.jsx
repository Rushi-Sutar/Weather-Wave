import React from 'react'

function LocationDetails({city,country,lat,lon}) {
  return (
    <div className="md:mt-2">
    <p className="text-xl lg:text-2xl font-semibold lg:py-4 md:py-2">
      {city}({country})
    </p>
    <p className="py-1 lg:font-semibold md:text-sm md:mt-2 mt-3">
      Latitude: {lat}
    </p>
    <p className="lg:font-semibold md:text-sm">
      Longitude: {lon}
    </p>
  </div>
  )
}

export default LocationDetails
