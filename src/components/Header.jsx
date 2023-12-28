import React from 'react'

function Header() {
  return (
    <div className=" p-3 w-auto h-10 flex items-center">
    <img className="w-10" src="src/assets/weathersvg.png" alt="logo" />
    <p className="font-semibold">Weather Wave</p>
  </div>
  )
}

export default Header
