import React, { useEffect, useState } from "react";
import WeatherCard from "../WeatherCard";

function Weather() {
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [windSpeed, setWindSpeed] = useState("kmh");
  const [temp, setTemp] = useState("celsius");
  const loadWeather = () => {
    setIsFetching(true);
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=50.4547&longitude=30.5238&current=temperature_2m,wind_speed_10m,wind_direction_10m&timezone=auto&wind_speed_unit=${windSpeed}&temperature_unit=${temp}`,
    )
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((e) => setError(e))
      .finally(() => setIsFetching(false));
  };

  useEffect(() => {
    loadWeather();

    const reloadWeather = setInterval(loadWeather, 60000);
    return () => {
      clearInterval(reloadWeather);
    };
  }, [windSpeed, temp]);
  const { current } = weather;
  return (
    <>
      {error && <div>!!!ERROR!!! {error}</div>}
      {isFetching && <div>Loading. Please wait...</div>}
      {!error && !isFetching && (
        <WeatherCard
          weather={current}
          windSpeed={windSpeed}
          setWindSpeed={setWindSpeed}
          temp={temp}
          setTemp={setTemp}
        />
      )}
    </>
  );
}

export default Weather;
