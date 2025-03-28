import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [weather, setWeather] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/36.5922%2C-87.3753?unitGroup=us&key=YUSFLDSX7DUCG9MPF3MEFNKHL&contentType=json"
      );
      setWeather(response.data);
    } catch (error) {
      console.log("ERROR ", error);
    }
  };

  // only update when weather updates
  useEffect(() => {
    fetchData();
  }, []);

  if (weather !== null) {
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    return (
      <div>
        <h1>Weather App</h1>
        <p>
          <span>Current Time:</span> {`${hours}:${minutes}:${seconds}`}
        </p>
        <p>
          <span>Coordinates:</span> {weather.address}
        </p>
        <p>
          <span>Time Zone:</span> {weather.timezone}
        </p>
        <p>
          <span>Description:</span> {weather.description}
        </p>
        <p>
          <span>Temperature:</span> {weather.currentConditions.temp}
        </p>
        <p>
          <span>Sunrise:</span> {weather.currentConditions.sunrise}
        </p>
        <p>
          <span>Sunset:</span> {weather.currentConditions.sunset}
        </p>
      </div>
    );
  } else {
    return <div>not loaded</div>;
  }
}

export default App;
