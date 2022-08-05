import React from "react";

function TopCities() {
  const cities = [
    {
      id: 1,
      name: "London",
    },
    {
      id: 2,
      name: "Rome",
    },
    {
      id: 3,
      name: "Paris",
    },
    {
      id: 4,
      name: "New York",
    },
    {
      id: 5,
      name: "Tokyo",
    },
    {
      id: 6,
      name: "Toronto",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6 text-center text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
      {cities.map((city) => (
        <button key={city.id} className="text-lg font-medium cursor-pointer">
          {city.name}
        </button>
      ))}
    </div>
  );
}

export default TopCities;
