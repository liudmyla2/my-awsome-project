let weather = {
    "Kyiv": {
      temp: 18.5,
      humidity: 70
    },
    "Paris": {
      temp: 19.3,
      humidity: 80
    },
    "Berlin": {
      temp: 23.2,
      humidity: 40
    },
    "Sydney": {
      temp: 21.9,
      humidity: 18
    },
    "Ottava": {
      temp: -2,
      humidity: 60
    }
  };
  
  
  /*let askCity = prompt("Enter a city?");
  askCity = askCity.toLowerCase
  if (weather[askCity] !== undefined) {
    let tempCelsius = Math.round(weather[askCity].temp);
    let tempFahrenheit = Math.round(tempCelsius * 1.8 + 32);
    let humidity = weather[askCity].humidity;
    alert(
      "It is currently " + tempCelsius + "°C " + "(" + tempFahrenheit + " °F) in " + askCity + " with a humidity of " + humidity +  "%");
  } else {
    let url = "https://www.google.com/search?q=weather+" + askCity
    alert(
      "Sorry, we don't know the weather for this city, try going to " + url
    );
  }
*/
  //Change time

  let now = new Date();
  let currentTime = document.querySelector(".current-time");
 
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[now.getDay()];
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    
    currentTime.innerHTML = day + ", " + hours + ":" + minutes;

    //Change city

    /*function changeCity(event) {
      event.preventDefault();
      let searchInput = document.querySelector("#text-input");

      let h1 = document.querySelector("h1");
      if(searchInput.value) {
        h1.innerHTML = "Weather in " + searchInput.value;
      } else {
        h1.innerHTML = "Weather in";
        alert ("Please type a city name");
      }
      
    }

    let form = document.querySelector("form");
    form.addEventListener("submit", changeCity);
*/
    //Change temperature units
    let temperature = document.querySelector(".temperature");
    let tempCel = document.querySelector(".tempCel");
    temperature.innerHTML = 18;
    let tempFar = document.querySelector(".tempFar");

    function tempMetricCel(event) {
      event.preventDefault();
      temperature.innerHTML = 18;
    }

    function tempMetricFar(event) {
      event.preventDefault();
      temperature.innerHTML = Math.round(18 * 1.8 + 32);
    }

    tempCel.addEventListener("click", tempMetricCel);
    tempFar.addEventListener("click", tempMetricFar);

    //Update temperature, precipitaion and wind speed

    function updatePrecipitation(response) {
      let updatePrecip = Math.round(response.data.clouds.all);
      let precipitationElement = document.querySelector(".precipitation");
      precipitationElement.innerHTML = `Precipitation: ${updatePrecip} %`;
    }
    
    function updateHumidity(response) {
      let updateHumid = Math.round(response.data.main.humidity);
      let humidityElement = document.querySelector(".humidity");
      humidityElement.innerHTML = `Humidity: ${updateHumid} %`;
    }
    
    function updateWindSpeed(response) {
      let updateWind = Math.round(response.data.wind.speed);
      let windyElement = document.querySelector(".wind");
      windyElement.innerHTML = `Wind: ${updateWind} km/h`;
    }
    
    function showWeather(response) {
      let city = document.querySelector("h1");
      city.innerHTML = `Weather in ${response.data.name}`;

      document.querySelector(".temperature").innerHTML = Math.round(response.data.main.temp);
      document.querySelector(".description").innerHTML = response.data.weather[0].description;
    
      updatePrecipitation(response);
      updateHumidity(response);
      updateWindSpeed(response);
    }
    
    function searchCity(city) {
      let apiKey = "1ee4264117b73d2263eecd562f31ef5c";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(showWeather);
    }
    
    function search(event) {
      event.preventDefault();
      let city = document.querySelector("#text-input").value;
      searchCity(city);
    }
    
    function showPosition(position) {
      let apiKey = "1ee4264117b73d2263eecd562f31ef5c";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    
      axios.get(apiUrl).then(showWeather);
    }
    
    function getCurrentLocation(event) {
      event.preventDefault();
      navigator.geolocation.getCurrentPosition(showPosition);
    }
    
    let searchForm = document.querySelector("#search-form");
    searchForm.addEventListener("submit", search);
    
    let currentButton = document.querySelector(".current-location-button");
    currentButton.addEventListener("click", getCurrentLocation);
    
    searchCity("Mukachevo");



  