import React from "react";

function Tempreture({ temp, feelslike, weather }) {
  return (
    <div>
      <p className="text-7xl lg:text-9xl font-semibold text-center leading-tight tracking-wider">
        {Math.floor(temp)}
        <span className="lg:text-8xl absolute ">&deg;</span>
      </p>

      <p className="text-center font-semibold leading-tight">
        Feels like {feelslike}&deg;
      </p>
      <h2 className="text-xl lg:text-2xl font-semibold text-center leading-loose">
        {weather}
      </h2>
    </div>
  );
}

export default Tempreture;
