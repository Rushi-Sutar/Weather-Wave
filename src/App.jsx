import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Forecast from "./components/Forecast";
import CurrentTime from "./components/CurrentTime";
import LocationDetails from "./components/LocationDetails";
import SunDetails from "./components/SunDetails";
import WeatherDetails from "./components/WeatherDetails";
import Tempreture from "./components/Tempreture";
import Today from "./components/Today";

function App() {
  // States and variables

  let tempcityname = "";
  const [city, setCity] = useState("sangli");
  const [data, setData] = useState(null);
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const date = `${new Date().getDate()}.${
    new Date().getMonth() + 1
  }.${new Date().getFullYear()}`;
  const time = `${new Date().getHours() % 12 || 12}:${new Date()
    .getMinutes()
    .toString()
    .padStart(2, "0")} ${new Date().getHours() >= 12 ? "PM" : "AM"}`;

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
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${
        import.meta.env.VITE_WEATHER_APIKEY
      }&units=metric`
    )
      .then((responce) => responce.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [city]);

  return (
    data && (
      <>
        <div className="h-screen text-[#686868] bg-[#e9e9e9]">
          <Header />
          <Input handlechange={handlechange} handleclick={handleclick} />
          <center>
            <div className="h-screen shadow-lg border-10 rounded-3xl bg-[#e9e9e9]">
              <div className="flex md:w-3/4 flex-col md:flex-row">
                {/* left div  */}
                <div
                  className="lg:w-3/4 bg-[#fafafa] lg:rounded-tl-3xl lg:rounded-bl-3xl md:rounded-tl-3xl md:rounded-bl-3xl
                 py-4"
                >
                  <Today today={today} date={date} />

                  <Tempreture
                    temp={Math.floor(data.main.temp)}
                    feelslike={data.main.feels_like}
                    weather={data.weather[0].main}
                  />

                  <WeatherDetails
                    humidity={data.main.humidity}
                    speed={data.wind.speed}
                  />
                  {/* 5 Days forecast details */}
                  <div className="my-4">
                    <Forecast city={data.name} />
                  </div>
                </div>

                {/* right div */}
                <div className="right bg-[#f6f6f6] md:w-1/3 md:rounded-tr-3xl md:rounded-br-3xl py-4">
                  <CurrentTime time={time} />

                  <LocationDetails
                    city={data.name}
                    country={data.sys.country}
                    lat={data.coord.lat}
                    lon={data.coord.lon}
                  />

                  <SunDetails
                    sunrise={data.sys.sunrise}
                    sunset={data.sys.sunset}
                  />
                </div>
              </div>
            </div>
          </center>
        </div>
      </>
    )
  );
}

export default App;
