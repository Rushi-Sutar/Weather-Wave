import React from 'react'

function CurrentTime({time}) {
  return (
    <div>
    <h2 className="text-center font-semibold text-lg lg:text-xl py-2">
      {new Date().getHours() < 12
        ? "Good Morning"
        : new Date().getHours() < 18
        ? "Good Afternoon"
        : "Good Evening"}
    </h2>
    <h2 className="lg:py-4 text-center text-2xl lg:text-4xl font-semibold py-3">
      {time}
    </h2>
  </div>
  )
}

export default CurrentTime
