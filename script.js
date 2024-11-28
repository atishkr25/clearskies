const inputbox = document.querySelector('.input-box');
const searchbtn = document.getElementById('searchbtn');
const weather_img = document.querySelector('.weather-img');
const temparature = document.querySelector('.temperature');
const discription = document.querySelector('.discription');
const humadity = document.getElementById('humadity');
const wind_speed = document.getElementById('wind-speed');
const wrong_location = document.querySelector('.wrong-location');
const weather_body = document.querySelector('.weather-body');

async function checkweather(city){
  const api_key = "f34317441efc6e9b64492ff33156e16f";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(`${url}`).then(response => response.json());

  console.log(weather_data);

  if(weather_data.cod === '404'){
    wrong_location.style.display = "flex";
    weather_body.style.display = "none";
    console.log("error");
    return;
  }
  wrong_location.style.display = "none";
  weather_body.style.display = "flex";
  temparature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

  discription.innerHTML = `${(weather_data.weather[0].description)}`;
  humadity.innerHTML = `${(weather_data.main.humidity)}%`
  wind_speed.innerHTML =`${weather_data.wind.speed}Km/Hr`;

  switch(weather_data.weather[0].description){
    case 'Clouds':
      weather_img.src = "images/cloud.png";
      break;
    case 'moderate rain':
      weather_img.src = "images/rain.png";
      break;
    case 'light rain':
      weather_img.src = "images/rain.png";
      break;
    case 'mist':
      weather_img.src = "images/mist.png";
      break;
    case 'clear sky':
      weather_img.src = "images/clear.png";
      break;
    case 'smoke':
      weather_img.src = "images/smoke.png";
      break;
    case 'overcast clouds':
      weather_img.src = "images/cloudyy.png";
      break;
    case 'light intensity drizzle':
      weather_img.src = "images/snow.png";
      break;
    case 'few clouds':
      weather_img.src = "images/cloud.png";
      break;         
  }
}

searchbtn.addEventListener ('click', ()=>{
  checkweather(inputbox.value);
})