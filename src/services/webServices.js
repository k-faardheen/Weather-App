import { DateTime } from "luxon";

const BASE_URL = "https://api.weatherapi.com/v1";
const API_KEY = "YOUR API_KEY";

// FETCH WEATHER DATA
const getWeatherInfo = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ key: API_KEY, ...searchParams });

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
};

// MAKE API CALLS
const formattedWeatherInfo = async (searchParams) => {
  // {No 1: REALTIME WEATHER}
  const realTimeWeatherData = await getWeatherInfo(
    "current.json",
    searchParams
  ).then((data) => formatRealTimeWeatherData(data));

  // {No 2: FORECAST WEATHER}
  const forecastWeatherData = await getWeatherInfo("forecast.json", {
    ...searchParams,
    days: 4,
  }).then((data) => formatForecastWeatherData(data));

  const { sunrise, sunset, maxtemp_c, mintemp_c } = forecastWeatherData[0];
  console.log(sunrise, sunset);

  return {
    ...realTimeWeatherData,
    sunrise,
    sunset,
    maxtemp_c,
    mintemp_c,
    forecast: [...forecastWeatherData],
  };
};

//FORMAT JSON RESPONSE
const formatRealTimeWeatherData = (data) => {
  const {
    current: {
      feelslike_c,
      feelslike_f,
      humidity,
      temp_c,
      temp_f,
      wind_kph,
      condition: { icon, text },
    },
    location: { country, name, localtime, localtime_epoch },
  } = data;

  return {
    feelslike_c,
    feelslike_f,
    humidity,
    temp_c,
    temp_f,
    wind_kph,
    icon,
    text,
    country,
    name,
    localtime,
    localtime_epoch,
  };
};

const formatForecastWeatherData = (data) => {
  let {
    forecast: { forecastday },
  } = data;

  return forecastday.map((day) => {
    let {
      astro: { sunrise, sunset },
      date,
      day: {
        maxtemp_c,
        mintemp_c,
        avgtemp_c,
        condition: { icon },
      },
      hour,
    } = day;

    return {
      sunrise,
      sunset,
      date,
      avgtemp_c,
      maxtemp_c,
      mintemp_c,
      icon,
      hour,
    };
  });
};

const displayIcon = (url) => {
  return "https:" + url;
};

const formatTimestamp = (timestamp, formatter) => {
  console.log(timestamp);

  const dateTime = DateTime.fromFormat(timestamp, "yyyy-MM-dd H:mm")
    .toISO()
    .toLocaleString(formatter);
  console.log(dateTime);
  return DateTime.fromISO(dateTime).toLocaleString(formatter);
};

export { formattedWeatherInfo, displayIcon, formatTimestamp };
