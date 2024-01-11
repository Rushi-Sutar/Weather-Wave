import React from "react";
import SunriseIcon from "./SvgIcons/SunriseIcon";
import SunsetIcon from "./SvgIcons/SunsetIcon";

function SunDetails({ sunrise, sunset }) {
  return (
    <div className="flex  lg:flex-row justify-center lg:gap-4 md:gap-1 md:mt-10 lg:mt-10 mt-8 gap-3">
      <div className="text-center border-2 p-2 rounded-lg lg:mr-2 w-fit">
        <center>
          <SunriseIcon />
        </center>
        <h1 className="text-sm lg:text-sm">
          {new Date(sunrise * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </h1>
        <p className="text-xs lg:text-sm">Sunrise</p>
      </div>
      <div className="text-center border-2 p-2 rounded-lg lg:mt-0 w-fit">
        <center>
          <SunsetIcon />
        </center>
        <h1 className="text-sm lg:text-sm">
          {new Date(sunset * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </h1>
        <p className="text-xs lg:text-sm">Sunset</p>
      </div>
    </div>
  );
}

export default SunDetails;
