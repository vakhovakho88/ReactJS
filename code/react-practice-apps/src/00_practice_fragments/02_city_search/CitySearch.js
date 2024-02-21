import React, { useState } from "react";
import "./CitySearch.css";
import CityInfo from "./CityInfo";

// It's good practice to keep your static data outside of your component if it doesn't need to be inside.
// This way, it's only defined once and not redefined on each render.

/*
To summarize, for the use case of filtering data based on user input, 
you typically don't need to store the filtered data in a separate piece of state. 

The reactivity provided by updating searchQuery state is sufficient to trigger UI updates 
for displaying filtered results. This approach is cleaner and leverages React's strengths in managing 
reactivity and UI updates based on changing state.
*/
const dummyData = [
  { city: "New York", population: 8398748, area: 783.8 },
  { city: "Los Angeles", population: 3990456, area: 1302 },
  { city: "Chicago", population: 2705994, area: 606.1 },
  { city: "Houston", population: 2325502, area: 1703.8 },
  { city: "Phoenix", population: 1660272, area: 1340 },
  { city: "Philadelphia", population: 1584138, area: 369.6 },
  { city: "San Antonio", population: 1532233, area: 1194 },
  { city: "San Diego", population: 1425976, area: 964.5 },
  { city: "Dallas", population: 1345047, area: 999.3 },
  { city: "San Jose", population: 1030119, area: 466.1 },
  { city: "Austin", population: 964254, area: 835.2 },
  { city: "Jacksonville", population: 903889, area: 1968.1 },
  { city: "Fort Worth", population: 895008, area: 911.1 },
  { city: "Columbus", population: 892533, area: 571.8 },
  { city: "San Francisco", population: 883305, area: 600.6 },
  { city: "Charlotte", population: 872498, area: 771 },
  { city: "Indianapolis", population: 867125, area: 953.2 },
  { city: "Seattle", population: 744955, area: 217.2 },
  { city: "Denver", population: 716492, area: 397.2 },
  { city: "Washington", population: 702455, area: 177 },
];

function CitySearchApp() {
  // Using a separate piece of state for the search query allows us to filter the data
  // without mutating the original data array.
  
  // Whenever the searchQuery state changes, the component will be re-rendered, 
  //and the filteredData array will be updated accordingly. 
  //This allows the UI to reflect the filtered results based on the user's input.
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter the data only when rendering. This avoids unnecessary state updates
  // and keeps the original data intact.
  const filteredData = searchQuery
    ? dummyData.filter(city =>
        city.city.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : dummyData;

  const handleInputChange = (event) => {
    // Update the search query state based on the input change.
    setSearchQuery(event.target.value);
  }

  return (
    <div className="app">
      <div className="search-container">
        <input
          type="text"
          onChange={handleInputChange}
          className="search-field"
          placeholder="Enter city name"
        />
      </div>
      {filteredData.map((cityData, index) => (
        // It's best to use a unique identifier for the key when mapping over an array to create elements.
        // Using the index as a key is generally discouraged unless you have no stable IDs.
        // Here, assuming city names are unique, we'll use the city name as the key.
        <CityInfo key={cityData.city} city={cityData.city} population={cityData.population} area={cityData.area} />
      ))}
    </div>
  );
}

export default CitySearchApp;
