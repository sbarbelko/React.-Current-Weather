import React, { useEffect, useState } from "react";

function WeatherCard() {
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const loadWeather = () => {
    setIsFetching(true);
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,wind_speed_10m",
    )
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((e) => setError(e))
      .finally(() => setIsFetching(false));
  };

  useEffect(() => {
    loadWeather();
  }, []);

  console.log("weather", weather);

  return (
    <>
      {error && <div>!!!ERROR!!! {JSON.stringify(error)}</div>}
      {isFetching && <div>Loading. Please wait...</div>}
      {!error && !isFetching && <>Fine</>}
    </>
  );
}

export default WeatherCard;
