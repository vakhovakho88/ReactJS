import React from "react";

const styles = {
  container: {
      marginBottom: '20px',
      padding: '20px',
      borderRadius: '5px',
      backgroundColor: '#f8f9fa',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  city: {
    marginBottom: '10px',
    fontSize: '24px',
    color: '#333',
  },
  population: {
    marginBottom: '10px',
    fontSize: '16px',
    color: '#670',
  },
  area: {
    marginBottom: '10px',
    fontSize: '16px',
    color: '#670',
  },
};






export default function CityInfo({ city, population, area}) {

 

  return (
    <div style={styles.container}>
      <h2 style={styles.city}>{city}</h2>
      <p style={styles.population}>{population}</p>
      <p style={styles.area}>{area}</p>
    </div>
  );
}
