import React, { useEffect, useState } from "react";

function Forecast({city}) {
  const [forecastData, setForecastData] = useState([]);
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_WEATHER_APIKEY}&units=metric`)
          .then(response => response.json())
          .then(data => setForecastData(data.list))
          .catch(error => console.error('Error fetching data:', error));
      }, [city]);
    
      const filterDataByTime = data => {
        return data.filter(forecast => forecast.dt_txt.includes('12:00:00'));
  };
  
  function getDayName(dayIndex) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeek[dayIndex];
}
    
  return (

    <ul className="flex flex-wrap justify-center text-center gap-2 md:gap-3 md:mx-2 lg:gap-5">
    {filterDataByTime(forecastData).map((forecast, index) => (
      <li key={index} className="border-2 p-2 rounded-lg my-2">
        <p className="text-sm lg:text-base">{getDayName(new Date(forecast.dt_txt).getDay())}</p>
        <p className="text-sm lg:text-lg">{Math.floor(forecast.main.temp)}&deg;</p>
        <p className="opacity-50 text-sm">{forecast.weather[0].main}</p>
      </li>
    ))}
  </ul>
  
  );
}

export default Forecast;
