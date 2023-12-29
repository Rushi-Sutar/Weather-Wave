import React from 'react'
import logo from '../assets/weathersvg.png'

function Header() {
  return (
    <div className=" p-3 w-auto h-10 flex items-center">
    <img className="w-10" src={logo} alt="logo" />
    <p className="font-semibold">Weather Wave</p>
  </div>
  )
}

export default Header
