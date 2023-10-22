import cities from "../cities";
const LocationComponent = ({ setQuery }) => {
  return (
    <div className="location">
      <ul className="flex justify-center">
        {cities.map((city) => (
          <li className="mx-3" key={city.id}>
            <button
              onClick={() => {
                setQuery({ q: city.title });
              }}
            >
              {city.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationComponent;
