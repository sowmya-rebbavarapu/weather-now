# WeatherNow

## Features

- **Search by City:** Enter a city name to get the current weather conditions.
- **Current Location:** Automatically fetch weather data based on the user's current geographical location.
- **Weather Data Display:** Shows temperature, humidity, wind speed, sunrise, sunset, and a weather description with an icon.
- **Error Handling:** Displays error messages for invalid city names or issues with geolocation.

## Technologies Used

- **HTML5** for structure
- **CSS3** for styling
- **JavaScript** for functionality
- **OpenWeatherMap API** for weather data

## Configuration

To use the OpenWeatherMap API, you'll need to replace the placeholder API key in the `script.js` file with your own API key:

1. Sign up for an API key at [OpenWeatherMap](https://openweathermap.org/api).
2. Replace the `apikey` constant in `script.js`:

    ```javascript
    const apikey = "YOUR_API_KEY";
    ```

## Usage

1. **Search by City:**
    - Enter a city name in the search box and click the search button to get weather information.

2. **Get Weather by Current Location:**
    - Click the "Use My Location" button to fetch weather data based on your current location.

## Icons

The weather icons used in this application are provided by the OpenWeatherMap API. The icon images are fetched dynamically based on the current weather conditions and are displayed using URLs from OpenWeatherMap.


