import LocationComponent from "./components/LocationComponent";
import ButtonsComponent from "./components/ButtonsComponent";
import DetailsComponent from "./components/DetailsComponent";
import ForecastComponent from "./components/ForecastComponent";

import { useEffect, useState } from "react";
import {
  formattedWeatherInfo,
  displayIcon,
  formatTimestamp,
} from "./services/webServices";

function App() {
  const [weather, setWeather] = useState(null);
  const [query, setQuery] = useState({ q: "london" });
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    formattedWeatherInfo(query).then((data) => {
      setWeather(data);
      setIsPending(false);
    });
  }, [query]);

  return (
    <div className="App w-1/2 mx-auto my-5 p-5 bg-gradient-to-br from-[#12cff3] to-[#5ab2f7] text-gray-100">
      {/* Location Component */}
      <LocationComponent setQuery={setQuery} />
      {/* Buttons Component */}
      <ButtonsComponent setQuery={setQuery} />
      {!isPending && (
        <div>
          {/* Weather Details Component */}{" "}
          <DetailsComponent
            weather={weather}
            formatTimestamp={formatTimestamp}
            displayIcon={displayIcon}
          />
          {/* Forecast Daily Component */}
          <ForecastComponent
            title={"Daily Forecast"}
            weather={weather}
            displayIcon={displayIcon}
          />
        </div>
      )}
    </div>
  );
}

export default App;
