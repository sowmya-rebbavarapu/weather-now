const apikey = "YOUR_API_KEY";
const apiurl = "API_URL";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector("#searchBtn");
const locationBtn = document.querySelector("#locationBtn");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiurl}q=${city}&appid=${apikey}&units=metric`);
        const data = await response.json();

        if (data.cod !== 200) {
            throw new Error(data.message);
        }

        updateWeatherData(data);
    } catch (error) {
        showError(error.message);
    }
}

async function getWeatherByLocation(lat, lon) {
    try {
        const response = await fetch(`${apiurl}lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`);
        const data = await response.json();

        if (data.cod !== 200) {
            throw new Error(data.message);
        }

        updateWeatherData(data);
    } catch (error) {
        showError(error.message);
    }
}

function updateWeatherData(data) {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    const sunrise = new Date(data.sys.sunrise * 1000);
    const sunset = new Date(data.sys.sunset * 1000);
    document.querySelector(".sunrise").innerHTML = "Sunrise: " + sunrise.toLocaleTimeString();
    document.querySelector(".sunset").innerHTML = "Sunset: " + sunset.toLocaleTimeString();
    document.querySelector(".description").innerHTML = data.weather[0].description;
    document.querySelector(".feels-like").innerHTML = "Feels like: " + Math.round(data.main.feels_like) + "°C";

    // Get the weather icon code from the API data
    const iconCode = data.weather[0].icon;
    // Set the weather icon URL
    weatherIcon.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

function showError(message) {
    document.querySelector(".city").innerHTML = "Error";
    document.querySelector(".temp").innerHTML = message;
    document.querySelector(".humidity").innerHTML = "";
    document.querySelector(".wind").innerHTML = "";
    document.querySelector(".sunrise").innerHTML = "";
    document.querySelector(".sunset").innerHTML = "";
    document.querySelector(".description").innerHTML = "";
    document.querySelector(".feels-like").innerHTML = "";
    weatherIcon.src = "";
}

function getLocationAndWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeatherByLocation(position.coords.latitude, position.coords.longitude);
        }, () => {
            showError("Geolocation not supported or permission denied.");
        });
    } else {
        showError("Geolocation not supported by this browser.");
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

locationBtn.addEventListener("click", () => {
    getLocationAndWeather();
});


window.addEventListener("load", () => {
    getLocationAndWeather();
});
