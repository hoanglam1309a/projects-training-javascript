const input = document.querySelector(".weather-input");
const content = document.querySelector(".weather-content");
const img = document.querySelector(".weather-img");
const temp = document.querySelector(".weather-temp");
const desc = document.querySelector(".weather-desc");
const city = document.querySelector(".weather-city");
const country = document.querySelector(".weather-country");
const wind = document.querySelector(".weather-wind");
const humidity = document.querySelector(".weather-humidity");
const visibility = document.querySelector(".weather-visibility");
const btnBack = document.querySelector(".weather-back");
const messenger = document.querySelector(".weather-messenger");

input.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    let search = input.value.trim();
    messenger.setAttribute("class", "weather-messenger show pending");
    messenger.textContent = "Getting weather details...";
    fetchData(search);
  }
});

function fetchData(city) {
  const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0518d56e272ba75f83da6a0a0cf2d41d`;
  getData(APIurl, city);
}

async function getData(APIurl, city) {
  try {
    const result = await axios.get(APIurl);
    renderUI(result.data);
  } catch (err) {
    console.log(err);
    messenger.setAttribute("class", "weather-messenger show error");
    messenger.textContent = `${city} is isn't a valid city name !`;
  }
}

function renderUI(data) {
  messenger.classList.remove("show");
  input.classList.remove("show");
  input.classList.add("hidden");
  content.classList.add("show");
  btnBack.classList.remove("hidden");

  temp.textContent = Math.floor(data.main.temp - 273);
  desc.textContent = data.weather[0].main;
  city.textContent = data.name;
  country.textContent = data.sys.country;
  wind.textContent = data.wind.speed + " km/h";
  humidity.textContent = data.main.humidity + " %";
  visibility.textContent = data.visibility + " (m)";
  let id = data.weather[0].id;

  if (id == 800) {
    img.src = "./img/WeatherIcons/clear.svg";
  } else if (id > 800) {
    img.src = "./img/WeatherIcons/cloud.svg";
  } else if (id > 700) {
    img.src = "./img/WeatherIcons/haze.svg";
  } else if (id > 600) {
    img.src = "./img/WeatherIcons/snow.svg";
  } else if (id > 500) {
    img.src = "./img/WeatherIcons/rain.svg";
  } else if (id > 200) {
    img.src = "./img/WeatherIcons/storm.svg";
  }
}

btnBack.addEventListener("click", function () {
  content.classList.toggle("show");
  input.classList.toggle("show");
});
