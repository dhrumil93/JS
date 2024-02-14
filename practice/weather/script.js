function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "0f75e918918cf40a1dba6ce0c1fd84a2"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

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
