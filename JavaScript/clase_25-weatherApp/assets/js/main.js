import { requestCity } from "./request.js";
import { getCityData, isEmptyInput, isInvalidCity } from "./utils.js";

//Capturamos elementos
const form = document.getElementById("form");
const cityInput = document.querySelector(".search-input");
const cardContainer = document.querySelector(".card-container");
const searchMsg = document.querySelector(".search-msg");

const createCityTemplate = (cityData) => {
  const {
    cityName,
    imageName,
    cityWeatherInfo,
    cityTemp,
    cityST,
    cityMaxTemp,
    cityMinTemp,
    cityHumidity,
  } = cityData;
  return `
    <div class="weather-card animate">
            <div class="weather-info-container">
              <h2 class="weather-title">${cityName}</h2>
              <p class="weather-description">${cityWeatherInfo}</p>
              <div class="weather-temp-container">
                <span class="weather-temp">${cityTemp} °</span>
                <span class="weather-st">${cityST}° ST</span>
              </div>
            </div>
            <div class="weather-img-container">
              <img src="./assets/img/${imageName}.png" alt="weather image" />
            </div>
            <div class="weather-extra-container">
              <div class="weather-minmax-container">
                <span class="weather-span"
                  ><i class="fa-solid fa-arrow-up-long"></i>Max: ${cityMaxTemp}º</span
                >
                <span class="weather-span"
                  ><i class="fa-solid fa-arrow-down-long"></i>Min: ${cityMinTemp}º</span
                >
              </div>
              <span class="weather-humidity">${cityHumidity}% Humedad</span>
            </div>
          </div>
    `;
};

const renderCity = (cityData) => {
  cardContainer.innerHTML = createCityTemplate(cityData);
};

const changeMsg = (cityData) => {
  const cityName = cityData.name;
  searchMsg.innerHTML = `Así está el clima en ${cityName}, ¿Querés ver el clima de otra ciudad?`;
};

const searchCity = async (e) => {
  e.preventDefault();

  if (isEmptyInput(cityInput)) {
    alert("Por favor ingresa una ciudad");
    return;
  }

  const fetchedCity = await requestCity(cityInput.value.trim());

  if (isInvalidCity(fetchedCity)) {
    alert("La ciudad no existe");
    form.reset();
    return;
  }
  //   console.log(getCityData(fetchedCity));
  //   console.log(fetchedCity);

  renderCity(getCityData(fetchedCity));
  changeMsg(fetchedCity);
};

const init = () => {
  form.addEventListener("submit", searchCity);
};

init();
