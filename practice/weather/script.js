function fetchWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "7383f1df1a40e18dee9bd84dafb10875"; // Replace with your OpenWeatherMap API key
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Assuming the first result is the desired location
      const location = data[0];
      const lat = location.lat;
      const lon = location.lon;
      getWeather(lat, lon, city);
    })
    .catch((error) => {
      console.error("Error fetching location data:", error);
      const weatherDiv = document.getElementById("weather");
      weatherDiv.innerHTML = "Error fetching location data. Please try again.";
    });
}

function getWeather(lat, lon, city) {
  const apiKey = "7383f1df1a40e18dee9bd84dafb10875"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherDiv = document.getElementById("weather");
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      weatherDiv.innerHTML = `Current temperature in ${city}: ${temperature}°C. ${description}`;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      const weatherDiv = document.getElementById("weather");
      weatherDiv.innerHTML = "Error fetching weather data. Please try again.";
    });
}