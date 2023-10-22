import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const ButtonsComponent = ({ setQuery }) => {
  const [location, setLocation] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery({ q: location });
    setLocation("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="inputs__container my-7 flex justify-center items-center">
        <input
          type="text"
          placeholder={"Enter a location..."}
          className="input__field outline-none p-2 w-1/2 mx-2 bg-gray-100 rounded-md text-gray-900"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <div className="btn__icons ml-1 flex items-center">
          <button className="magnifying__btn">
            <MagnifyingGlassIcon className="w-5" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ButtonsComponent;
