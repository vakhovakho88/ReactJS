// Function to generate a random temperature
const generateRandomTemperature = () => {
  const minTemperature = -20;
  const maxTemperature = 40;
  const randomTemperature = Math.floor(Math.random() * (maxTemperature - minTemperature + 1)) + minTemperature;
  return `${randomTemperature}°C`;
};

// Mock weather data for 10 cities
const weatherDataForCities = {
    "New York": {
      temperature:  generateRandomTemperature,
      condition: "Cloudy",
      humidity: "60%",
      windSpeed: "16 km/h",
    },
    "Los Angeles": {
      temperature: "16°C",
      condition: "Sunny",
      humidity: "65%",
      windSpeed: "6 km/h",
    },
    Chicago: {
      temperature: "5°C",
      condition: "Rainy",
      humidity: "70%",
      windSpeed: "20 km/h",
    },
    Houston: {
      temperature: "22°C",
      condition: "Sunny",
      humidity: "55%",
      windSpeed: "10 km/h",
    },
    Phoenix: {
      temperature: "19°C",
      condition: "Sunny",
      humidity: "25%",
      windSpeed: "8 km/h",
    },
    Philadelphia: {
      temperature: "7°C",
      condition: "Snow",
      humidity: "75%",
      windSpeed: "14 km/h",
    },
    "San Antonio": {
      temperature: "20°C",
      condition: "Cloudy",
      humidity: "80%",
      windSpeed: "12 km/h",
    },
    "San Diego": {
      temperature: "18°C",
      condition: "Sunny",
      humidity: "60%",
      windSpeed: "9 km/h",
    },
    Dallas: {
      temperature: "17°C",
      condition: "Rainy",
      humidity: "85%",
      windSpeed: "15 km/h",
    },
    "San Jose": {
      temperature: "21°C",
      condition: "Sunny",
      humidity: "50%",
      windSpeed: "5 km/h",
    },
  };

  // Function to fetch weather data for a given city
  export const fetchWeatherDataForCity = (cityName) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const weatherData = weatherDataForCities[cityName];
        if (weatherData) {
          resolve(weatherData);
        } else {
          reject(new Error("City not found"));
        }
      }, 1000); // Simulate network request delay
    });
  };

