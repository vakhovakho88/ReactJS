### Weather Dashboard

**Objective:** Create a Weather Dashboard that displays weather information for a hardcoded city. Use a mock function to simulate fetching weather data from an API.

#### Requirements:

1. **Mock Weather API Function:**
   - Create a mock function that simulates fetching weather data from an API. This function should return a Promise that resolves with some mock weather data (e.g., temperature, weather condition, humidity, wind speed) after a short delay.
   - Example of mock data:
     ```javascript
     {
       city: "New York",
       temperature: "20°C",
       condition: "Sunny",
       humidity: "50%",
       windSpeed: "10 km/h"
     }
     ```

2. **Weather Display:**
   - Create a component that displays weather information.
   - The component should display the city name, temperature, weather condition, humidity, and wind speed.
   - Use the mock API function to fetch the weather data when the component mounts, and display the data once it's loaded.

3. **Loading State:**
   - While the weather data is being fetched, display a loading indicator or message to inform the user that data is being loaded.

4. **Error Handling:**
   - Implement basic error handling for the mock API function. If the Promise is rejected, display an error message to the user.

#### Bonus Challenges:

- **Dynamic City Input:** Add an input field where users can type the name of a city, and update the weather display based on the city entered. For simplicity, the mock function can return the same data but update the city name based on the input.
- **Styling:** Add some basic styling to your Weather Dashboard to make it visually appealing.

This exercise will give you hands-on experience with handling asynchronous operations in React, managing component state, and dynamically updating the UI based on user input and external data.



A mock API (Application Programming Interface) is a simulated API that mimics the behavior of a real API in a controlled manner. It's commonly used during development and testing phases of software projects for several purposes:

1. **Development**: When the real API is not yet available or is under development, a mock API allows frontend developers to continue their work by simulating the backend responses. This way, the development of frontend applications can proceed without being blocked by backend readiness.

2. **Testing**: Mock APIs are extensively used in automated testing environments. They help in creating consistent and controlled test scenarios by providing predictable responses to API requests. This is particularly useful for unit testing, integration testing, and end-to-end testing, where you need to isolate the component or system being tested from external dependencies.

3. **Prototyping**: In the early stages of a project, mock APIs can be used to prototype and design applications quickly. They allow developers and stakeholders to explore how the application behaves with different types of data and responses, helping in the decision-making process.

4. **Performance Testing**: Mock APIs can be used to simulate various scenarios, including high load, error conditions, and timeouts, to test how the application behaves under different conditions.

Mock APIs can be implemented in various ways, including:
- **Static files**: Returning fixed JSON/XML files in response to API calls.
- **Mock servers**: Tools like Postman, WireMock, or Mirage JS that let you define routes, request methods, and responses.
- **Code**: Writing custom functions in your application code that return predefined responses, often used during the development of frontend applications.

Using mock APIs helps in speeding up development, improving test reliability, and ensuring that your application can handle various data and error conditions gracefully.






For a Weather Dashboard app, you might consider a component structure that modularizes various aspects of the application for maintainability and scalability. Below is an example of how you could structure your components in a React application:

### Component Structure

```
WeatherDashboardApp/
├── App.js                 # Main app component
├── components/
│   ├── Header.js          # Displays the application header
│   ├── SearchBar.js       # Input field to search for cities
│   ├── WeatherDisplay.js  # Shows the weather details for the selected city
│   │   ├── WeatherCard.js # Card component for displaying a single weather metric
│   │   └── WeatherChart.js# Optional: Chart component for showing weather trends
│   ├── CityList.js        # Displays a list of cities (for quick selection)
│   │   └── CityListItem.js# Individual city item in the CityList
│   └── Footer.js          # Displays the application footer
└── utils/
    ├── mockApi.js         # Mock API utility for fetching weather data
    └── helpers.js         # Helper functions (e.g., for formatting data)
```

### Component Descriptions

- **App.js**: This is the main component that orchestrates the layout of your Weather Dashboard, including rendering the `Header`, `SearchBar`, `WeatherDisplay`, `CityList`, and `Footer`.

- **Header.js**: Renders the header of your application, possibly including the app's name or logo.

- **SearchBar.js**: Contains an input field where users can type the name of a city to search for its weather data. It might also include a submit button to trigger the search.

- **WeatherDisplay.js**: The main component for displaying the weather details of the selected city. It can use sub-components like `WeatherCard` for individual metrics (temperature, humidity, etc.) and `WeatherChart` for visualizing weather trends.

- **WeatherCard.js**: A reusable component for displaying a single weather metric, such as temperature, humidity, or wind speed.

- **WeatherChart.js**: (Optional) If you want to include graphical representations of weather data (like temperature trends over time), this component would handle that.

- **CityList.js**: Displays a list of cities for quick selection. When a city is clicked, the weather details for that city are displayed.

- **CityListItem.js**: Represents an individual city in the `CityList`. It could be a simple button or a list item that, when clicked, updates the `WeatherDisplay` component with the selected city's weather data.

- **Footer.js**: Renders the footer of your application, which might include copyright information or links to the data source.

- **mockApi.js** (in `utils/`): Contains the mock API function(s) for fetching weather data. This is where you would simulate network requests to an external API.

- **helpers.js** (in `utils/`): Includes any helper functions used across your application, such as data formatting functions.

This structure offers a clear separation of concerns, making it easier to manage and extend your application. You can add, remove, or modify components as needed without affecting the entire app significantly.