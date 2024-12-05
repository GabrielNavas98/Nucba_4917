export const isEmptyInput = (cityInput) => {
  return cityInput.value.trim() === "";
};

export const isInvalidCity = (city) => {
  return !city.id;
};

export const getCityData = (cityData) => {
  return {
    cityName: cityData.name,
    imageName: cityData.weather[0].icon,
    cityWeatherInfo: cityData.weather[0].description,
    cityTemp: roundNumber(cityData.main.temp),
    cityST: roundNumber(cityData.main.feels_like),
    cityMaxTemp: roundNumber(cityData.main.temp_max),
    cityMinTemp: roundNumber(cityData.main.temp_min),
    cityHumidity: cityData.main.humidity,
  };
};

const roundNumber = (number) => {
  return Math.round(number);
};
