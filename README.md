# WeatherNow 🌤️

## Overview

WeatherNow is a simple and user-friendly web application that provides real-time weather updates for any city around the world. It also supports fetching weather details based on the user's current location.

---

## Features

* 🔍 **City-Based Search:** Enter any city name to view current weather conditions instantly.
* 📍 **Location Detection:** Automatically retrieves weather data using your device's location.
* 📊 **Detailed Weather Info:** Displays temperature, humidity, wind speed, sunrise, sunset, and weather conditions with icons.
* ⚠️ **Error Handling:** Shows appropriate messages for invalid city names or location access issues.

---

## Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling and layout
* **JavaScript** – Application logic and API handling
* **OpenWeatherMap API** – Source of weather data

---

## Setup Instructions

To run this project, you need an API key from OpenWeatherMap:

1. Sign up at https://openweathermap.org/api
2. Open the `script.js` file
3. Replace the API key:

```javascript
const apikey = "YOUR_API_KEY";
```

---

## How to Use

### 1. Search by City

* Type the city name in the input field
* Click the search button
* Weather details will be displayed

### 2. Use Current Location

* Click the **"Use My Location"** button
* Allow location access when prompted
* Weather data for your location will appear

---

## Weather Icons

Weather icons are dynamically fetched from OpenWeatherMap based on current weather conditions and displayed alongside the data.

---

## Notes

* Ensure you have an active internet connection
* Location access must be enabled for location-based weather

---

## Future Improvements 🚀

* Add 5-day weather forecast
* Improve UI with animations
* Add temperature unit toggle (°C/°F)

---
