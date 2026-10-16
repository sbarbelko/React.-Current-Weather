import React from "react";

function WeatherCard(props) {
  const { weather } = props;

  return (
    <article>
      <section>
        <p>Wind speed unit:</p>
        <p>Temperature unit:</p>
      </section>

      <section>
        <p>Current Weather</p>
        <span>{weather.wind_speed_10m}</span>
        <span>{weather.temperature_2m}</span>
      </section>
    </article>
  );
}

export default WeatherCard;
