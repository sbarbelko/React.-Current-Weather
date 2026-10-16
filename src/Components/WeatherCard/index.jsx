import React from "react";
import styles from "./WeatherCard.module.sass";
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from "react-icons/fa6";

function WeatherCard(props) {
  const { weather, windSpeed, setWindSpeed, temp, setTemp } = props;
  console.log("weather", weather);

  return (
    <article className={styles.weatherCard}>
      <section>
        <label>
          <p>Wind speed unit:</p>
          <select
            value={windSpeed}
            onChange={(e) => setWindSpeed(e.target.value)}
          >
            <option value="kmh">km/h</option>
            <option value="ms">m/s</option>
          </select>
        </label>

        <label>
          <p>Temperature unit:</p>
          <select value={temp} onChange={(e) => setTemp(e.target.value)}>
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
          </select>
        </label>
      </section>

      <section>
        <p className={styles.currWeather}>Current Weather</p>
        <span>
          {weather.wind_speed_10m} {windSpeed === "kmh" ? "Km/h" : "M/s"}
        </span>
        <span>
          {weather.temperature_2m > 0 ? (
            <FaTemperatureArrowUp />
          ) : (
            <FaTemperatureArrowDown />
          )}
          {weather.temperature_2m} {temp === "celsius" ? "°C" : "°F"}
        </span>
      </section>
    </article>
  );
}

export default WeatherCard;
