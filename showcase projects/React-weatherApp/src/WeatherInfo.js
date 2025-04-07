import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="top-container">
      <hr />
      <div className="row WeatherInfo overview">
        <div className=" col-6 overview-info ">
          {" "}
          <h1 className="place text-left">{props.data.city}</h1>
          <div className="date">
            <FormattedDate date={props.data.date} />
            <p className="capitalize-first-letter">
              <strong>
                {" "}
                <em>{props.data.description}</em>{" "}
              </strong>
              <br />
              Humidity: {props.data.humidity}%, wind: {props.data.wind}km/h
            </p>
          </div>
        </div>
        <div className="col-6 temperature-section">
          <div className="d-flex">
            <div className="icon">
              <WeatherIcon code={props.data.icon} size={80} />
            </div>
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
