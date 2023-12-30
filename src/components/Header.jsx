import React from 'react'
import logo from '../assets/weathersvg.png'

function Header() {
  return (
    <div className="flex items-center p-3 lg:w-auto h-10">
    <img className="w-7 lg:w-10" src={logo} alt="logo" />
    <p className="font-semibold">Weather Wave</p>
  </div>
  )
}

export default Header
