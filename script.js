const apiKey = `0b2d090c358dc47eddb5a0fef7cdcdeb`;
const date = document.querySelector(".date");
const body = document.querySelector(".Error");

const currentDate = new Date();
date.textContent = currentDate.toDateString();

async function fetchWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    if (!response.ok) {
      const text = (body.textContent =
        " Sorry, Unable to find Your city name Please try again ...");
    }

    const data = await response.json();
    updateWeather(data);
  } catch (error) {
    console.log(error);
  }
}
let cityName = document.querySelector(".city");
let descriptionText = document.querySelector(".description-text");
let temprature = document.querySelector(".temp");
let windSpeed = document.querySelector(".wind-speed");
let humidity = document.querySelector(".humidity");
let visibilityBro = document.querySelector(".visibility-distance");

function updateWeather(data) {
  cityName.textContent = data.name;
  temprature.textContent = `${Math.round(data.main.temp)}` + "°";
  windSpeed.textContent = data.wind.speed + " km/h";
  humidity.textContent = data.main.humidity + "%";
  visibilityBro.textContent = `${data.visibility / 1000}` + " km";
  descriptionText.textContent = data.weather[0].description;
}

let SearchForm = document.querySelector(".search-form");
let cityInput = document.querySelector(".city-input");

SearchForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const city = cityInput.value;
  if (city !== "") {
    fetchWeatherData(city);
  }
});
