const app = {

  init: () => {
    document
      .querySelector('#get-weather')
      .addEventListener('click', app.getWeather);

    document
      .querySelector('#get-location')
      .addEventListener('click', app.getLocation);
  },


  getWeather: () => {
    

    let latitude = document.querySelector('#latitude').value;
    let longitude = document.querySelector('#longitude').value;
    let key = '762fa4a9b403c8a3c74281817629f55d';
    let unit = 'metric';
    let baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    let url = `${baseUrl}?lat=${latitude}&lon=${longitude}&appid=${key}&units=${unit}`;


    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((json) => app.displayData(json))
      .catch((error) => console.error(error));
  },


  displayData: (json) => {
    const $display = document.querySelector('#weather-display');

    let $location = document.createElement('h2');
    $location.textContent = json.name;

    let $temp = document.createElement('p');
    $temp.textContent = "Temp:\n " + json.main["temp"] + " " + "\xB0" + "C";

    let $temp_min = document.createElement('p');
    $temp_min.textContent = "Min temp:\n " + json.main["temp_min"] + " " + "\xB0" + "C";

    let $temp_max = document.createElement('p');
    $temp_max.textContent = "Max temp:\n " + json.main["temp_max"] + " " + "\xB0" + "C";

    let $feels_like = document.createElement('p');
    $feels_like.textContent = "Feels like:\n " + json.main["feels_like"] + " " + "\xB0" + "C";

    let $humidity = document.createElement('p');
    $humidity.textContent = "Humidity:\n " + json.main["humidity"] + " " + "\u0025";


    while ($display.firstChild) {
      $display.removeChild($display.firstChild);
    }

    $display.append($location, $temp, $temp_min, $temp_max, $feels_like, $humidity);

  },

  getLocation: () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 1000 * 60 * 5
    }

    if (!navigator.geolocation) {
      console.error(`Your browser doesn't support Geolocation`);
    }

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      document.querySelector('#latitude').value = latitude;
      document.querySelector('#longitude').value = longitude;
    }

    function error() {
      console.error("Geolocation failed.");
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
    
  }

};

app.init();
