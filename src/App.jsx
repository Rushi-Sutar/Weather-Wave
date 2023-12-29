import { useState, useEffect } from "react";
import "./App.css";
import bgimage from './assets/bgImage.jfif'
import StartPage from "./components/StartPage";
import Header from "./components/Header";
import Input from "./components/Input";
import WeatherDetails from "./components/WeatherDetails";
import SunTimeDetails from "./components/SunTimeDetails";
import WeatherIcon from "./components/WeatherIcon";
import Tempreture from "./components/Tempreture";

function App() {

  // States and variables

  let tempcityname = "";
  const [city, setCity] = useState("sangli");
  const [data, setData] = useState(null);
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  // functions

  function handlechange(e) {
    tempcityname = e.target.value;
  }
  function handleclick() {
    if (tempcityname == "") {
      alert("Enter city name..!");
    } else {
      setCity(tempcityname);
    }
  }

  // fetch data from API

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${import.meta.env.VITE_WEATHER_APIKEY}&units=metric`
    )
      .then((responce) => responce.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [city]);

  return (
    data && (
      <>
        <StartPage />
        <div
          className="sticky top-0 h-auto text-white"
          style={{
            backgroundImage: `url(${bgimage})`,
            backgroundSize: "cover",
          }}
        >
          <Header />

          <Input handlechange={handlechange} handleclick={handleclick} />

          <div className="flex justify-center items-center h-screen mt-3 px-2 bg-black bg-opacity-10 shadow-lg backdrop-blur-sm border-10 rounded-lg">
            <div className="absolute top-0 bg-black bg-opacity-10 shadow-lg backdrop-blur-sm border-10 rounded-lg px-16 py-10 w-1/2 mt-10">

              <Tempreture
                cityname={data.name}
                today={today}
                tempreture={data.main.temp}
              />

              <WeatherIcon
                icon={data.weather[0].icon}
                desc={data.weather[0].main}
              />

              <WeatherDetails
                pressure={data.main.pressure}
                humidity={data.main.humidity}
                windSpeed={data.wind.speed}
                windDirection={data.wind.deg}
              />

              <SunTimeDetails
                sunrisetime={data.sys.sunrise}
                sunsettime={data.sys.sunset}
              />
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default App;
