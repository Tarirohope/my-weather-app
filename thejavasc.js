function displayTemperature(response) {
  let temperatureElement = document.querySelector(".current-degrees");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = `${temperature}`;
}
function whileSearching(event) {
  event.preventDefault();
  let theCity = document.querySelector("#current-city");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${theCity.value}`;
  let city = `${theCity.value}`;

  let apiKey = "438ef4abe978ad5a029db4f3900o6f4t";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(displayTemperature);
}
let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", whileSearching);

function cityDate() {
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let day = days[now.getDay()];
  let mydate = `${day} ${hours}:${minutes}`;
  let currentDay = document.querySelector("#current-date");
  currentDay.innerHTML = `${mydate}`;
}
cityDate();
