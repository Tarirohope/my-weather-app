function whileSearching(event) {
  event.preventDefault();
  let theCity = document.querySelector(".search-input");

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${theCity.value}`;
}
let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", whileSearching);
function cityDate() {
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
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let day = days[now.getDay()];
  let mydate = `${day} ${hour}:${minutes}`;
  let currentDay = document.querySelector("#current-date");
  currentDay.innerHTML = `${mydate}`;
}
cityDate();
let cityElememnt = form;
let apiKey = "438ef4abe978ad5a029db4f3900o6f4t";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

function displayTemperature(response) {
  city = response.data.city;
  let temperature = Math.round(response.data.temperature.current);
  let country = response.data.country;
  let description = response.data.condition.description;

  let temperatureElement = document.querySelector("#now-temp");
  temperatureElement.innerHTML = `${temperature}`;
}
axios.get(apiUrl).then(displayTemperature);
