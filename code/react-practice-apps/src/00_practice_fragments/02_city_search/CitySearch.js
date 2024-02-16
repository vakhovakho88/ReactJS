import React, { useState } from "react";
import "./CitySearch.css";

import CityInfo from "./CityInfo";

function CitySearchApp() {
  return (
    <div className="app">
    <div className="search-container">
      <input type="text" className="search-field" placeholder="Enter city name" />
      <button className="search-button">Search</button>
    </div>

    <CityInfo city={"Barcelona"} population={2000000} area={5000}/>
    <CityInfo city={"Barcelona"} population={2000000} area={5000}/>
    <CityInfo city={"Barcelona"} population={2000000} area={5000}/>
    <CityInfo city={"Barcelona"} population={2000000} area={5000}/>
    <CityInfo city={"Barcelona"} population={2000000} area={5000}/>
    <CityInfo city={"Barcelona"} population={2000000} area={5000}/>

  </div>
  );
}

export default CitySearchApp;
