import React from "react";
import HumidityIcon from "./SvgIcons/HumidityIcon";
import WindIcon from "./SvgIcons/WindIcon";

function WeatherDetails({humidity,speed}) {
  return (
    <div className="flex justify-center gap-3 md:gap-5 lg:gap-10">
      <div className="flex justify-center flex-col text-center">
        <center>
          <HumidityIcon />
        </center>
        <p className="mt-2">{humidity}%</p>
      </div>
      <div className="flex justify-center flex-col text-center">
        <center>
          <WindIcon />
        </center>
        <p className="mt-2">{speed} mph</p>
      </div>
    </div>
  );
}

export default WeatherDetails;
