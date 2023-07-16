const apiKey = "148aa005610a7074ce167b14af3e3000";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=Manila";

/*const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");*/
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(/*city*/){
    const response = await fetch(apiURL /*+ city*/ + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    
    if (data.weather[0].main == "Clouds"){
        weatherIcon.src="images/icons8-cloud-50 (2).png";
    } 
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src="images/icons8-smiling-sun-50.png";
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src="images/icons8-heavy-rain-50 (2).png";
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src="images/icons8-pressure-gauge-50.png";
    }
    else if (data.weather[0].main == "Snow"){
        weatherIcon.src="images/icons8-snow-50.png";
    }
    
}




/*searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
});*/

checkWeather();

