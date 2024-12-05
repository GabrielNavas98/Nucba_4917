//https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8e99183ac22ab0aeb4e9bb4e89a4da31

const apiKey = "8e99183ac22ab0aeb4e9bb4e89a4da31";

export const requestCity = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&APPID=${apiKey}`
    );
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
