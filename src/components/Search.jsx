import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Search() {
  return (
    <div className="flex flex-row justify-center my-5 text-blue-300">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          className="w-full h-10 p-2 border-2 border-blue-300 rounded-lg capitalize placeholder:lowercase"
          type="text"
          placeholder="Search for city..."
        />
        <UilSearch className="w-8 h-8 text-blue-300 cursor-pointer transition ease-out hover:scale-125 " />
        <UilLocationPoint className="w-8 h-8 text-blue-300 cursor-pointer transition ease-out hover:scale-125" />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button className="w-8 h-8 text-blue-300 cursor-pointer transition ease-out hover:scale-125">
          °C
        </button>
        <p>|</p>
        <button className="w-8 h-8 text-blue-300 cursor-pointer transition ease-out hover:scale-125">
          °F
        </button>
      </div>
    </div>
  );
}

export default Search;
