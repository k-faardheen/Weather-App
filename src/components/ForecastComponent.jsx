const DailyForecastComponent = ({
  title,
  weather: { forecast },
  displayIcon,
}) => {
  console.log(forecast);
  return (
    <div className="forecast__container px-20 my-10">
      <div className="forecast__title text-xl my-5 border-b-2 black">
        <h2>{title}</h2>
      </div>
      <div className="forecast flex items-center justify-between">
        {forecast.map((day) => (
          <div
            className="forecast__detail flex flex-col items-center"
            key={day.date}
          >
            <div className="forecast__detail__time">{day.date}</div>
            <div className="forecast__detail__icon">
              <img src={displayIcon(day.icon)} alt="" />
            </div>
            <div className="forecast__detail__temp">
              {`${Math.round(day.avgtemp_c)}°`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecastComponent;
