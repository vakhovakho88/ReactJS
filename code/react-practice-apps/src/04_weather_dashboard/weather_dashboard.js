import React from "react";

//import city dashboard
import CityDashboard from "./components/CityDashboard/CityDashboard";


//import mock api
import { fetchWeatherDataForCity } from "./utils/mockApi";

const WeatherDashboard = () => {
  

  // Example usage
  fetchWeatherDataForCity("New York")
    .then((data) => console.log(data))
    .catch((error) => console.error(error.message));

  return <div>{/* Your component JSX goes here */}</div>;
};

export default WeatherDashboard;
