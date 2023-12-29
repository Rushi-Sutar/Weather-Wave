import React from 'react'
import logo from '../assets/weathersvg.png'

function StartPage() {
  return (
    <div className="sticky top-0 h-screen flex justify-center items-center flex-col">
        <div className="flex text-center justify-center items-center ">
          <img
            className="w-10 md:w-16 lg:w-20"
            src={logo}
            alt=""
          />
          <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl ">
            Weather Wave
          </h1>
        </div>
        <p className="text-sm md:text-xl font-semibold text-gray-300 absolute bottom-4">
          Scroll to explore
        </p>
      </div>
  )
}

export default StartPage
