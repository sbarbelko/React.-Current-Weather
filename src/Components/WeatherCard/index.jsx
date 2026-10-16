import React from "react";
import styles from "./WeatherCard.module.sass";

function WeatherCard(props) {
  const { weather, windSpeed, setWindSpeed, temp, setTemp } = props;
  console.log("weather", weather);

  return (
    <article className={styles.weatherCard}>
      <section>
        <p>Wind speed unit:</p>
        <label>
          <select
            value={windSpeed}
            onChange={(e) => setWindSpeed(e.target.value)}
          >
            <option value="kmh">km/h</option>
            <option value="ms">m/s</option>
            <option value="mph">mph</option>
          </select>
        </label>
        <p>Temperature unit:</p>
        <label>
          <select value={temp} onChange={(e) => setTemp(e.target.value)}>
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
          </select>
        </label>
      </section>

      <section>
        <p className={styles.currWeather}>Current Weather</p>
        <span>{weather.wind_speed_10m}</span>
        <span>{weather.temperature_2m}</span>
      </section>
    </article>
  );
}

export default WeatherCard;
