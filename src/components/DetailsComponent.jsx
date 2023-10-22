import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureHalf,
  faDroplet,
  faWind,
  faSun as faSunSet,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import { faSun } from "@fortawesome/free-regular-svg-icons";
const DetailsComponent = ({
  weather,
  weather: {
    feelslike_c,
    feelslike_f,
    humidity,
    icon,
    localtime,
    localtime_epoch,
    sunrise,
    sunset,
    mintemp_c,
    maxtemp_c,
    country,
    name,
    temp_c,
    temp_f,
    text,
    wind_kph,
  },
  formatTimestamp,
  displayIcon,
}) => {
  console.log(weather);
  return (
    <div className="detail__wrapper">
      <div className="detail__date-time flex justify-center">
        <div className="detail__date mx-2">
          <span>
            {formatTimestamp(localtime, {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="block text-center">
            {formatTimestamp(localtime, {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </span>
        </div>
      </div>
      <div className="detail__main my-5 flex flex-col items-center">
        <div className="detail__main__loc text-2xl">
          <h1>{`${name}, ${country}`}</h1>
        </div>
        <div className="detail__main__weather-status my-4 text-lg">
          <span>{text}</span>
        </div>
        <div className="detail__main__weather-information grid grid-cols-3 gap-20 items-center">
          <div className="weather__icon">
            <img className="w-20 h-20" src={displayIcon(icon)} alt="" />
          </div>
          <div className="weather__temp text-center text-6xl">
            <span>{`${temp_c}°`}</span>
          </div>
          <div className="weather">
            <div className="weather__temperature">
              <FontAwesomeIcon icon={faTemperatureHalf} />
              <span>{`Real Feel: ${feelslike_c}°`}</span>
            </div>
            <div className="weather__humidity">
              <FontAwesomeIcon icon={faDroplet} />
              <span>{`Humidity: ${humidity}%`}</span>
            </div>
            <div className="weather__wind">
              <FontAwesomeIcon icon={faWind} />
              <span>{`${wind_kph} km/h`}</span>
            </div>
          </div>
        </div>
        <div className="detail__main__additional-info my-6 flex justify-around">
          <div className="sun-rise">
            <FontAwesomeIcon icon={faSun} />
            <span>{`Rise: ${sunrise}`}</span>
          </div>
          {"|"}
          <div className="sun-set">
            <FontAwesomeIcon icon={faSunSet} />
            <span>{`Set: ${sunset}`}</span>
          </div>
          {"|"}
          <div className="up">
            <FontAwesomeIcon icon={faArrowUp} />
            <span>{`${maxtemp_c}°`}</span>
          </div>
          {"|"}
          <div className="down">
            <FontAwesomeIcon icon={faArrowDown} />
            <span>{`${mintemp_c}°`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsComponent;
