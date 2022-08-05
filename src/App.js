import "./App.css";
import Search from "./components/Search";
import TemperatureDetails from "./components/TemperatureDetails";
import TimeAndCity from "./components/TimeAndCity";
import TopCities from "./components/TopCities";

function App() {
  return (
    <div className=" mx-auto max-w-screen-lg mt-4 py-4 px-32 text-white h-fit shadow-xl shadow-gray-400">
      <h1 className="text-center text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Weather Forecast
      </h1>
      <TopCities />
      <Search />
      <TimeAndCity />
      <TemperatureDetails />

    </div>
  );
}

export default App;
