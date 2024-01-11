import React from 'react'

function Today({ today,date}) {
  return (
    <div className="flex justify-between px-4 lg:px-20 md:px-10 py-2">
                    <h2 className="text-center font-semibold">{today}</h2>
                    <h2 className="text-center font-semibold">{date}</h2>
                  </div>
  )
}

export default Today
