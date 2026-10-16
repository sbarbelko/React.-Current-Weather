import React from "react";
import styles from "./WeatherCard.module.sass";

function WeatherCard(props) {
  const { weather } = props;

  return (
    <article className={styles.weatherCard}>
      <section>
        <p>Wind speed unit:</p>
        <p>Temperature unit:</p>
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
