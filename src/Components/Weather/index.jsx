import React, { useEffect, useState } from "react";
import WeatherCard from "../WeatherCard";

function Weather() {
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [windSpeed, windSpeedTemp] = useState("kmh");
  const loadWeather = () => {
    setIsFetching(true);
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=50.4547&longitude=30.5238&current=temperature_2m,wind_speed_10m,wind_direction_10m&timezone=auto&wind_speed_unit=${windSpeed}`,
    )
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((e) => setError(e))
      .finally(() => setIsFetching(false));
  };

  useEffect(() => {
    loadWeather();
  }, [windSpeed]);
  const { current } = weather;
  return (
    <>
      {error && <div>!!!ERROR!!! {JSON.stringify(error)}</div>}
      {isFetching && <div>Loading. Please wait...</div>}
      {!error && !isFetching && (
        <WeatherCard
          weather={current}
          windSpeed={windSpeed}
          windSpeedTemp={windSpeedTemp}
        />
      )}
    </>
  );
}

export default Weather;
